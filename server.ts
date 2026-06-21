import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Initialize the Gemini client securely on the server
// Telemetry require User-Agent 'aistudio-build'
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function startServer() {
  app.use(express.json());

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Endpoint: Generate interactive CEFR lessons
  app.post("/api/lesson", async (req, res): Promise<any> => {
    const { level, page, topic, targetLang } = req.body;
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "GEMINI_API_KEY environment variable is required" });
    }

    const prompt = `You are an expert Spanish language professor specialized in teaching foreign students speaking ${targetLang}.
Prepare a highly exhaustive, comprehensive masterclass textbook-style lesson.
Level: ${level} (CEFR)
Topic: "${topic}"
Page: ${page} of 300

Create the lesson. The output MUST be a JSON object containing:
1. "title": A suitable short title for this lesson (in Spanish and/or ${targetLang}).
2. "explanation": A very thorough, deeply detailed, step-by-step complete academic explanation detailing all aspects of "${topic}". DO NOT give brief summaries. It should be at least 800-1200 words long to simulate a complete classroom lesson.
   You must explain in extensive detail:
   - The core concept, purpose, and grammatical rules (e.g., when to use it, why it matters).
   - All regular conjugation endings or construction patterns with copious examples.
   - Irregular forms, spelling shifts, stem changes (e.g., e->ie, o->ue), or common exceptions. If the topic has any irregular verbs, you MUST list them and their full conjugations in standard markdown tables.
   - Practical example sentences with deep contextual explanations and direct translated meanings in ${targetLang}.
   - Clear comparison or nuances with related structures (e.g., preterite vs imperfect, or ser vs estar).
   - Common pitfalls, mistakes, and exact guidelines on how foreign speakers can avoid them.
   Use rich Markdown formatting including clear headers (###, ####), bullet points (*), lists, bolding (**key concepts**), blockquotes (> for special notes), and markdown tables for conjugation matrices to make it visually professional and easy to study.
3. "vocabulary": A list of 6-8 key vocabulary terms/phrases related to this lesson. Each vocabulary item should have:
   - "spanish": the Spanish word or phrase
   - "dynamicLang": its translation in ${targetLang}
   - "explanation": a short usage note or details in ${targetLang}
4. "practice": A list of 6-8 interactive and highly-developed exercises to test comprehension, closely adapted to the CEFR level ${level}. Include a mix of these types:
   - "multiple-choice" (requires "options" string array and "correctIndex" number)
   - "fill-blank" (requires "blankWord" to fill, e.g. "soy")
   - "translation" (requires "correctTranslation", e.g. "Yo hablo español")
   - "conjugation" (requires "verb" and "correctAnswer")
   - "writing" (an open-ended prompt)

Ensure your output is strictly valid JSON conforming exactly to the following responseSchema.`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            required: ["title", "explanation", "vocabulary", "practice"],
            properties: {
              title: { type: Type.STRING },
              explanation: { type: Type.STRING },
              vocabulary: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  required: ["spanish", "dynamicLang", "explanation"],
                  properties: {
                    spanish: { type: Type.STRING },
                    dynamicLang: { type: Type.STRING },
                    explanation: { type: Type.STRING }
                  }
                }
              },
              practice: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  required: ["type", "question"],
                  properties: {
                    type: { type: Type.STRING, description: "One of: multiple-choice, fill-blank, translation, conjugation, writing" },
                    question: { type: Type.STRING },
                    options: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING }
                    },
                    correctIndex: { type: Type.INTEGER },
                    blankWord: { type: Type.STRING },
                    correctTranslation: { type: Type.STRING },
                    verb: { type: Type.STRING },
                    correctAnswer: { type: Type.STRING }
                  }
                }
              }
            }
          }
        }
      });

      const text = response.text;
      res.json(JSON.parse(text || "{}"));
    } catch (error: any) {
      console.error("Error generating lesson:", error);
      res.status(500).json({ error: error?.message || "Failed to generate lesson" });
    }
  });

  // Endpoint: Generate Level Advancement Examination
  app.post("/api/exam", async (req, res): Promise<any> => {
    const { level, examId, targetLang } = req.body;
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "GEMINI_API_KEY environment variable is required" });
    }

    const examNumber = examId || 1;
    const prompt = `Create a highly thorough, professional, and comprehensive official SIELE-inspired Spanish language examination for student level ${level}.
This is EXAM VERSION/NUMBER ${examNumber} out of 30 distinct exams.
The target student's interface language is ${targetLang}.

CRITICAL TOPIC RESTRICTION (STRICT MANDATE) FOR EXAM VERSION ${examNumber}:
- You MUST NOT include any questions, texts, or mentions related to administration, official bureaucracy, legal paperwork, visas, TIE, NIE, "empadronamiento", university enrollment, academic subjects (like mathematics, history, physics), certificate validations, or official offices.
- Every single question must focus EXCLUSIVELY on the SPANISH LANGUAGE: grammar rules, verb conjugations, correct preposition pairings, syntax structures, spelling rules, vocabulary lists, and natural/fictional everyday life dialogues or reading comprehension passages (such as ordering coffee, greeting friends, talking about the weather, expressing thoughts, or simple fictional scenarios).
- Make sure this exam version ${examNumber} is completely unique, with different sentence examples, vocabulary, and reading comprehension texts compared to other versions of this level's exam.

PROGRESSIVE DIFFICULTY STRUCTURE (SIELE PATTERN):
The exam must contain exactly 40 questions divided into 5 "Tareas" (Tasks), with 8 questions per Tarea. The level of difficulty must scale progressively:
- Tarea 1 (Q1 - Q8) [CEFR A1]: Simple comprehension of short messages/notices, basic vocabulary (greetings, food, items).
- Tarea 2 (Q9 - Q16) [CEFR A2]: Short descriptive dialogues, daily routines, basic past tenses (Imperfecto vs Indefinido).
- Tarea 3 (Q17 - Q24) [CEFR B1]: Detailed paragraphs on hobbies, travel, or cultural customs. Usage of Ser/Estar, future tense, and basic subjuntivo.
- Tarea 4 (Q25 - Q32) [CEFR B2]: Expressing opinions, agreement/disagreement, and doubts. Advanced usage of Subjuntivo, Por/Para, and prepositions.
- Tarea 5 (Q33 - Q40) [CEFR C1]: Advanced reading comprehension of an essay/opinion fragment, requiring sophisticated stylistic, syntactic, idiom, and register analysis.

REQUIREMENTS:
1. Return exactly 40 high-quality, diverse, and deeply developed multiple-choice ("tipo test") questions.
2. Every question must have exactly 4 clear, realistic options and exactly 1 correct index (0 to 3).
3. Include an elegant, concise explanation ("tip") in ${targetLang} explaining the underlying linguistic rule, grammar points, or syntactic structure behind the correct option to help the student learn.
4. For each question, specify the corresponding "tarea" identifier integer (1 to 5).

Ensure your output is strictly valid JSON conforming exactly to the following responseSchema.`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            required: ["examTitle", "questions"],
            properties: {
              examTitle: { type: Type.STRING },
              questions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  required: ["question", "options", "correctIndex", "tip", "tarea"],
                  properties: {
                    question: { type: Type.STRING },
                    options: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING }
                    },
                    correctIndex: { type: Type.INTEGER },
                    tip: { type: Type.STRING },
                    tarea: { type: Type.INTEGER }
                  }
                }
              }
            }
          }
        }
      });

      const text = response.text;
      res.json(JSON.parse(text || "{}"));
    } catch (error: any) {
      console.error("Error generating exam:", error);
      res.status(500).json({ error: error?.message || "Failed to generate exam" });
    }
  });

  // Endpoint: Format and boost student CV to Spanish Standards
  app.post("/api/cv", async (req, res): Promise<any> => {
    const { name, email, role, city, edu, skills, exp } = req.body;
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "GEMINI_API_KEY environment variable is required" });
    }

    const prompt = `You are a professional Spanish career advisor and CV formatter.
Generate a highly polished, clean European-standard CV in Spanish for the following individual.
The output MUST be a JSON object containing:
1. "cvHtml": Robust, beautiful HTML content (without outer <html>/<body>/<head> tags, wrapped inside a clean <div> with inline styled classes for excellent contrast and styling, using neutral grey, charcoal, and elegant accents) featuring:
   - Datos personales
   - Perfil / Objetivo profesional
   - Formación académica
   - Experiencia profesional (expanded and improved with professional Spanish verbs)
   - Competencias y habilidades
   - Idiomas (languages)

Information provided:
Full Name: ${name}
Email/Contact: ${email}
Target Role: ${role}
City/Location in Spain: ${city}
Education: ${edu}
Skills: ${skills}
Experience: ${exp}

Translate and elevate all points to reach premium business Spanish level. Make sure the typography is solid and margins feel professional.
Conform exactly to the following responseSchema.`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            required: ["cvHtml"],
            properties: {
              cvHtml: { type: Type.STRING }
            }
          }
        }
      });

      const text = response.text;
      res.json(JSON.parse(text || '{"cvHtml": ""}'));
    } catch (error: any) {
      console.error("Error generating CV:", error);
      res.status(500).json({ error: error?.message || "Failed to generate CV" });
    }
  });

  // Endpoint: Automated Spanish Grammar Checking on Community chatroom
  app.post("/api/chat-correct", async (req, res): Promise<any> => {
    const { message } = req.body;
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "GEMINI_API_KEY environment variable is required" });
    }

    const prompt = `An Arab student has written a message in a Spanish community chatroom:
"${message}"

Analyze if this message is trying to use Spanish and has grammar or spelling errors.
If there are errors, provide a helpful and encouraging 1-2 sentence correction tip (in French, Arabic, or English, matching the most likely user profile).
If the message is not in Spanish, or has zero mistakes, return null.

Provide the response in JSON matching the following responseSchema.`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            required: ["tip"],
            properties: {
              tip: { type: Type.STRING }
            }
          }
        }
      });

      const text = response.text;
      res.json(JSON.parse(text || '{"tip": null}'));
    } catch (error: any) {
      console.error("Error checking chat:", error);
      res.json({ tip: null });
    }
  });

  // Vite or static serving middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
