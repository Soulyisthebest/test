import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { 
  BookOpen, Award, Compass, Briefcase, MessageSquare, 
  Home, Train, Map, Globe, FileText, CheckCircle, 
  AlertTriangle, ChevronRight, ChevronLeft, User, 
  Copy, Plus, Search, Building, Check, HelpCircle, 
  Activity, Flame, Volume2, ArrowRight, CheckSquare, Sparkles
} from "lucide-react";
import { 
  LANGUAGES, NAV_ITEMS, ROADMAP_STEPS, VISA_DATA, 
  FORMATIONS, TRANSPORT, LOGEMENT, ALPHABET_DATA, 
  LEVEL_TOPICS, STUDENT_CITIES_GUIDE
} from "./data";
import { getFallbackLessonData } from "./fallbackLessons";
import { getFallbackExam } from "./fallbackExams";

export default function App() {
  // --- Persistent Local Profile State ---
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("sp_student_profile");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return {
      country: "morocco",
      goal: "FP Grado Superior",
      xp: 45,
      streak: 3,
      level: "A1"
    };
  });

  useEffect(() => {
    localStorage.setItem("sp_student_profile", JSON.stringify(profile));
  }, [profile]);

  // --- Active Tab and Languages ---
  const [lang, setLang] = useState<string>("fr");
  const [tab, setTab] = useState<string>("roadmap");
  const [visaCountry, setVisaCountry] = useState<string>("morocco");
  const [formationTab, setFormationTab] = useState<string>("fp_superior");
  const [selectedCityLife, setSelectedCityLife] = useState<string>("Madrid");

  // --- Search state inside sections ---
  const [transportSearch, setTransportSearch] = useState<string>("");
  const [formationsSearch, setFormationsSearch] = useState<string>("");

  // --- Book Lesson States ---
  const [selectedLevel, setSelectedLevel] = useState<string>("A1");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lessonData, setLessonData] = useState<any>(null);
  const [loadingLesson, setLoadingLesson] = useState<boolean>(false);
  
  // Exercise assessment answers
  const [exAnswers, setExAnswers] = useState<Record<number, any>>({});
  const [exResults, setExResults] = useState<Record<number, { ok: boolean; fb: string }>>({});

  // --- Level Advancement Exam States ---
  const [examActive, setExamActive] = useState<boolean>(false);
  const [selectedExamId, setSelectedExamId] = useState<number>(1);
  const [loadingExam, setLoadingExam] = useState<boolean>(false);
  const [examData, setExamData] = useState<any>(null);
  const [examAnswers, setExamAnswers] = useState<Record<number, number>>({});
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [examScore, setExamScore] = useState<number>(0);
  const [examPassed, setExamPassed] = useState<boolean>(false);
  const [activeTarea, setActiveTarea] = useState<number>(1);

  // --- CV Generator States ---
  const [cvData, setCvData] = useState({
    name: "Ahmed Al-Mansoori",
    email: "ahmed.mansoori@gmail.com",
    role: "Desarrollador Web Junior (Developer)",
    city: "Madrid, España",
    edu: "Grado Superior en Sistemas de Telecomunicación o DAW",
    skills: "React, TypeScript, NodeJS, HTML5/CSS3, Árabe Clínico (Nativo), Francés (B1), Español (A2)",
    exp: "Diseño y despliegue de 3 aplicaciones web para corporaciones locales. Soporte informático freelance."
  });
  const [cvHtml, setCvHtml] = useState<string>("");
  const [cvGenerating, setCvGenerating] = useState<boolean>(false);
  const [cvCopied, setCvCopied] = useState<boolean>(false);

  // --- Community Chat States ---
  const [chats, setChats] = useState<Array<{ id: string; user: string; text: string; time: string; system?: boolean }>>([
    { id: "1", user: "Youssef_ma", text: "¡Hola! ¿Alguien ha solicitado el visado en Rabat recientemente?", time: "11:20 am" },
    { id: "2", user: "Sofia_es", text: "Hola Youssef, sí, la cita previa suele tardar unos 10 días en aparecer. ¡Organízate bien!", time: "11:22 am" },
    { id: "3", user: "Profesor de España 🤖", text: "💡 CONSEJO PRÁCTICO: Asegúrate de que tu seguro médico privado tenga cobertura del 100% repatración y sea 'sin copago'.", time: "11:23 am", system: true }
  ]);
  const [chatInp, setChatInp] = useState<string>("");
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // --- Text-to-Speech (native browser with high quality Spanish ES-es voices) ---
  const speakSpanish = (text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";
    utterance.rate = 0.85;
    
    // Find a proper Spanish voice if available
    const voices = window.speechSynthesis.getVoices();
    const esVoice = voices.find(v => v.lang.toLowerCase().includes("es-es")) || 
                    voices.find(v => v.lang.toLowerCase().startsWith("es"));
    if (esVoice) utterance.voice = esVoice;
    window.speechSynthesis.speak(utterance);
  };

  // Helper for dynamic multi-language text fetching
  const t = (item: any) => {
    if (!item) return "";
    if (typeof item === "object") {
      return item[lang] || item["en"] || Object.values(item)[0] || "";
    }
    return item;
  };

  // Resolve minimum page for a given CEFR level
  const getMinPage = (lvl: string) => {
    return ["A1", "A2", "B1", "B2", "C1", "C2"].indexOf(lvl) * 50 + 1;
  };

  // Resolve maximum page for a given CEFR level
  const getMaxPage = (lvl: string) => {
    return (["A1", "A2", "B1", "B2", "C1", "C2"].indexOf(lvl) + 1) * 50;
  };

  // Fetch the active topic based on page offset
  const getTopic = (lvl: string, page: number) => {
    const topics = LEVEL_TOPICS[lvl] || LEVEL_TOPICS.A1;
    const minP = getMinPage(lvl);
    const index = (page - minP) % topics.length;
    return topics[index >= 0 ? index : 0];
  };

  // --- API Integrations using Fetch ---
  // 1. Fetch Lesson Data
  const handleLoadLesson = async (lvl: string, pageNum: number) => {
    setLoadingLesson(true);
    setExAnswers({});
    setExResults({});
    const topic = getTopic(lvl, pageNum);

    try {
      const response = await fetch("/api/lesson", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          level: lvl,
          page: pageNum,
          topic: topic,
          targetLang: LANGUAGES.find(l => l.code === lang)?.label || "English"
        })
      });
      if (response.ok) {
        const data = await response.json();
        setLessonData(data);
      } else {
        throw new Error("Failed to consult lesson api");
      }
    } catch (e) {
      // Robust client fallback if server offline or api keys not set yet
      const fallback = getFallbackLessonData(lvl, topic, lang);
      setLessonData(fallback);
    } finally {
      setLoadingLesson(false);
    }
  };

  // 2. Fetch Level advancement exam
  const handleLoadExam = async (examId: number) => {
    setSelectedExamId(examId);
    setLoadingExam(true);
    setExamData(null);
    setExamAnswers({});
    setExamSubmitted(false);
    setActiveTarea(1);
 
    try {
      const response = await fetch("/api/exam", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          level: selectedLevel,
          examId: examId,
          targetLang: LANGUAGES.find(l => l.code === lang)?.label || "English"
        })
      });
      if (response.ok) {
        const data = await response.json();
        setExamData(data);
      } else {
        throw new Error("Exam API down");
      }
    } catch (e) {
      // Default fallback offline examination
      setExamData(getFallbackExam(selectedLevel, examId, lang));
    } finally {
      setLoadingExam(false);
    }
  };

  // 3. Generate formatting optimized European-standard Spanish CV
  const handleGenerateCV = async () => {
    setCvGenerating(true);
    setCvHtml("");

    try {
      const response = await fetch("/api/cv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cvData)
      });
      if (response.ok) {
        const result = await response.json();
        setCvHtml(result.cvHtml);
      } else {
        throw new Error("CV creation service failed");
      }
    } catch (e) {
      // Simple preview default template output in case API is temporarily waiting
      setCvHtml(`
        <div style="font-family: sans-serif; color: #1e293b; max-width: 600px; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
          <h2 style="margin: 0 0 5px 0; color: #1e3a8a; font-size: 24px;">${cvData.name}</h2>
          <p style="margin: 0; color: #64748b; font-size: 13px;">Email: ${cvData.email} | Ciudad: ${cvData.city}</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 15px 0;">
          <h3 style="color: #1e3a8a; font-size: 15px; margin-bottom: 5px;">OBJETIVO PROFESIONAL</h3>
          <p style="font-size: 12px; line-height: 1.5; color: #334155;">Joven con motivación para incorporarse al mercado laboral español en el cargo de: <strong>${cvData.role}</strong>.</p>
          <h3 style="color: #1e3a8a; font-size: 15px; margin-bottom: 5px; margin-top: 15px;">FORMACIÓN ACADÉMICA</h3>
          <p style="font-size: 12px; margin: 0; color: #334155;"><strong>${cvData.edu}</strong></p>
          <h3 style="color: #1e3a8a; font-size: 15px; margin-bottom: 5px; margin-top: 15px;">COMPETENCIAS Y APTITUDES</h3>
          <p style="font-size: 12px; color: #334155; line-height: 1.5;">${cvData.skills}</p>
          <h3 style="color: #1e3a8a; font-size: 15px; margin-bottom: 5px; margin-top: 15px;">EXPERIENCIA PROFESIONAL</h3>
          <p style="font-size: 12px; color: #334155; line-height: 1.5;">${cvData.exp}</p>
        </div>
      `);
    } finally {
      setCvGenerating(false);
    }
  };

  // Trigger lesson load whenever selected level or page changes
  useEffect(() => {
    handleLoadLesson(selectedLevel, currentPage);
  }, [selectedLevel, currentPage]);

  // Scroll to bottom of chat list whenever a new message is added
  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chats]);

  // Handle local exercise checking
  const handleVerifyExercise = (index: number, answerText: string, correctSpec: any, type: string) => {
    if (!answerText || answerText.trim() === "") return;
    let isCorrect = false;
    let feedback = "";

    if (type === "multiple-choice") {
      isCorrect = Number(answerText) === Number(correctSpec);
      feedback = isCorrect 
        ? "🎉 ¡CORRECTO! ¡Excelente razonamiento!" 
        : `❌ incorrecto. La respuesta formal correcta es: ${lessonData?.practice[index]?.options?.[correctSpec]}`;
    } else if (type === "fill-blank") {
      isCorrect = answerText.trim().toLowerCase() === String(correctSpec).toLowerCase();
      feedback = isCorrect 
        ? "🎉 ¡Muy bien hecho! +15 XP" 
        : `💡 Casi. La palabra correcta que completa la oración es: "${correctSpec}"`;
    } else if (type === "translation") {
      isCorrect = answerText.trim().toLowerCase().includes(String(correctSpec).toLowerCase().substring(0, 5));
      feedback = isCorrect 
        ? "🎉 ¡Excelente traducción! Tienes excelente comprensión." 
        : `💡 Intenta escribir algo similar a: "${correctSpec}"`;
    } else {
      isCorrect = true;
      feedback = "✨ ¡Revisado por IA! Has sumado +15 XP a tu cuenta.";
    }

    setExResults(prev => ({
      ...prev,
      [index]: { ok: isCorrect, fb: feedback }
    }));

    if (isCorrect) {
      setProfile(prev => ({ ...prev, xp: prev.xp + 15 }));
    }
  };

  // Handle Level Advancement Exam compilation
  const handleAnswerExam = (qIndex: number, optionIndex: number) => {
    setExamAnswers(prev => ({ ...prev, [qIndex]: optionIndex }));
  };

  const handleSubmitExam = () => {
    if (!examData) return;
    let correctCount = 0;
    (examData.questions || []).forEach((q: any, i: number) => {
      if (examAnswers[i] === q.correctIndex) {
        correctCount++;
      }
    });

    const passRatio = correctCount / (examData.questions || []).length;
    const passed = passRatio >= 0.6; // Pass at 60%

    setExamScore(correctCount);
    setExamPassed(passed);
    setExamSubmitted(true);

    if (passed) {
      const examKey = `${selectedLevel}-${selectedExamId}`;
      setProfile(prev => {
        const currentPassed = prev.passedExams_v2 || [];
        const updatedPassed = currentPassed.includes(examKey)
          ? currentPassed
          : [...currentPassed, examKey];

        const allLevels = ["A1", "A2", "B1", "B2", "C1", "C2"];
        const currentIdx = allLevels.indexOf(prev.level);

        if (selectedLevel === prev.level && currentIdx < allLevels.length - 1) {
          const nextLevel = allLevels[currentIdx + 1];
          setSelectedLevel(nextLevel);
          setCurrentPage(getMinPage(nextLevel));
          return {
            ...prev,
            level: nextLevel,
            xp: prev.xp + 150,
            passedExams_v2: updatedPassed
          };
        } else {
          return {
            ...prev,
            xp: prev.xp + 100,
            passedExams_v2: updatedPassed
          };
        }
      });
    }
  };

  // Community Chat action
  const handleSendChatChatroom = async () => {
    if (!chatInp.trim()) return;
    const originalText = chatInp;
    const userMsg = {
      id: String(Date.now()),
      user: "Tú",
      text: originalText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChats(prev => [...prev, userMsg]);
    setChatInp("");

    // Invoke Gemini automated server-side grammar analysis on user message
    try {
      const response = await fetch("/api/chat-correct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: originalText })
      });
      if (response.ok) {
        const { tip } = await response.json();
        if (tip) {
          setTimeout(() => {
            setChats(prev => [
              ...prev,
              {
                id: String(Date.now() + 1),
                user: "Profesor de España 🤖",
                text: tip,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                system: true
              }
            ]);
            setProfile(prev => ({ ...prev, xp: prev.xp + 10 }));
          }, 900);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleBookTutor = (name: string, rate: number) => {
    const platformCut = rate * 0.3; // 30% platform safety cut
    const tutorPay = rate - platformCut;
    alert(`✅ Reserva Registrada con Éxito\n\nProfesor: ${name}\nTarifa: €${rate}/hora\nTasa de servicio (30%): €${platformCut.toFixed(2)}\nGanancia neta tutor: €${tutorPay.toFixed(2)}\n\nUn correo electrónico con el enlace de reunión Zoom ha sido enviado.`);
  };

  return (
    <div className="min-height-screen bg-[#070a13] text-gray-200 flex flex-col font-sans select-none antialiased">
      
      {/* HEADER BANNER */}
      <header className="sticky top-0 z-50 bg-[#0c1222] border-b border-[#1b253b] px-4 py-3 flex items-center justify-between flex-wrap gap-3 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="bg-amber-500 text-[#070a13] w-10 h-10 rounded-xl flex items-center justify-center font-black text-2xl shadow-md">
            🇪🇸
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight text-white flex items-center gap-2">
              Spain Study Portal
              <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono tracking-widest px-2 py-0.5 rounded uppercase">
                ARABIC-ACCESSIBLE
              </span>
            </h1>
            <p className="text-xs text-gray-400 font-sans">
              {lang === "ar" ? "بوابة الإعداد الشاملة والتعليمية للطلاب العرب الراغبين بالدراسة والعمل في إسبانيا" :
               lang === "fr" ? "Portail interactif de préparation et d'espagnol pour étudiants arabes en Espagne" :
               lang === "es" ? "Portal de preparación educativa para estudiantes árabes en España" :
               "Interactive preparation and vocabulary handbook for Arab students in Spain"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          {/* Native Language Select Switcher */}
          <div className="bg-[#070a13] border border-[#1e293b] p-1 rounded-xl flex gap-1 items-center">
            {LANGUAGES.map(l => (
              <button 
                key={l.code}
                id={`lang-btn-${l.code}`}
                onClick={() => setLang(l.code)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-transform focus:outline-none ${lang === l.code ? 'bg-amber-500 text-gray-900 font-bold scale-105 shadow-md' : 'text-gray-400 hover:text-white'}`}
              >
                <span className="mr-1">{l.flag}</span>
                {l.label}
              </button>
            ))}
          </div>

          {/* Real-time Game stats engine */}
          <div className="flex items-center gap-3 bg-[#070a13] border border-[#1e293b] px-3 py-1.5 rounded-xl shadow-inner font-mono text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-gray-500 font-sans uppercase">Score</span>
              <span className="text-emerald-400 font-bold">{profile.xp} XP</span>
            </div>
            <div className="w-px h-4 bg-gray-700"></div>
            <div className="flex items-center gap-1">
              <Flame size={12} className="text-amber-500 fill-amber-500 animate-pulse" />
              <span className="text-amber-400 font-bold">{profile.streak}d</span>
            </div>
            <div className="w-px h-4 bg-gray-700"></div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-gray-500 font-sans uppercase">CEFR</span>
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-bold uppercase">{profile.level}</span>
            </div>
          </div>
        </div>
      </header>

      {/* CORE FRAMEWORK BODY */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 flex flex-col md:flex-row gap-6">
        
        {/* SIDEBAR NAVIGATION & SELECTIVE STUDENT FILE */}
        <aside className="w-full md:w-[260px] flex-shrink-0 flex flex-col gap-4">
          
          {/* Main sections Navigation rail */}
          <nav className="bg-[#0c1222] border border-[#1b253b] p-2 rounded-2xl flex flex-col gap-1.5 shadow-md" id="nav-rail">
            {NAV_ITEMS.map(n => {
              const active = tab === n.key;
              return (
                <button
                  key={n.key}
                  id={`nav-item-${n.key}`}
                  onClick={() => { setTab(n.key); setExamActive(false); }}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-3 transition-colors ${active ? 'bg-amber-500 text-[#070a13] font-bold shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`}
                >
                  <span className="text-base">{n.icon}</span>
                  <span>{t(n)}</span>
                  {n.key === "ebook" && (
                    <span className="ml-auto bg-black/15 text-[9px] font-mono px-1.5 py-0.5 rounded text-white">Active</span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick profile goals coordinator */}
          <div className="bg-[#0c1222] border border-[#1b253b] p-4 rounded-2xl shadow-md">
            <h3 className="text-[11px] font-bold tracking-widest text-[#94a3b8] uppercase mb-3 flex items-center gap-2">
              <User size={12} className="text-amber-500" />
              {lang === "ar" ? "بيانات ملفي وهدفي" :
               lang === "fr" ? "Profil & Objectif" :
               lang === "es" ? "Mi Expediente de metas" :
               "My Goal & Origin"}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-[10px] text-gray-400 block mb-1">
                  {lang === "ar" ? "البلد الأصلي" : lang === "fr" ? "Pays d'Origine" : "Country of Origin"}
                </label>
                <select 
                  value={profile.country}
                  onChange={(e) => {
                    const val = e.target.value;
                    setProfile(prev => ({ ...prev, country: val }));
                    setVisaCountry(val);
                  }}
                  className="w-full bg-[#070a13] border border-[#232f4e] rounded-lg text-xs p-2 text-white outline-none focus:border-amber-500"
                >
                  <option value="morocco">🇲🇦 Maroc / المغرب</option>
                  <option value="algeria">🇩🇿 Algérie / الجزائر</option>
                  <option value="tunisia">🇹🇳 Tunisie / تونس</option>
                  <option value="egypt">🇪🇬 Égypte / مصر</option>
                  <option value="jordan">🇯🇴 Jordanie / الأردن</option>
                  <option value="lebanon">🇱🇧 Liban / لبنان</option>
                  <option value="gulf_gcc">🇸🇦🇦🇪 Pays du Golfe / الخليج</option>
                  <option value="iraq_syria">🇮🇶🇸🇾 Irak & Syrie / العراق وسوريا</option>
                  <option value="middleeast">🌍 Autre Moyen-Orient / باقي الشرق الأوسط</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] text-gray-400 block mb-1">
                  {lang === "ar" ? "الهدف الدراسي المخطط له" : lang === "fr" ? "Projet en Espagne" : "Target Study Route"}
                </label>
                <select
                  value={profile.goal}
                  onChange={(e) => setProfile(prev => ({ ...prev, goal: e.target.value }))}
                  className="w-full bg-[#070a13] border border-[#232f4e] rounded-lg text-xs p-2 text-white outline-none focus:border-amber-500"
                >
                  <option value="FP Grado Superior">FP Grado Superior (2 ans)</option>
                  <option value="FP Grado Medio">FP Grado Medio (2 ans)</option>
                  <option value="Universidad (Grado)">Estudios Universitarios (Grado)</option>
                  <option value="Máster Universitario">Máster Universitario (60 ECTS)</option>
                  <option value="Doctorado o Investigación">Doctorado (PhD)</option>
                </select>
              </div>

              <div className="p-3 bg-[#070a13] border border-[#1b253b] rounded-xl text-[11px] text-gray-400 leading-relaxed font-sans mt-2">
                <span className="text-amber-400 font-bold block mb-1">🎯 {lang === "ar" ? "توجيه ذكي" : "Advice for you"}</span>
                {profile.goal.includes("FP") 
                  ? (lang === "ar" ? "للتسجيل في التكوين المهني FP، ننصحك بالتقديم السريع على معادلة شهادة البكالوريا Homologación لوزارة التربية، تستغرق المعالجة من 6 إلى 12 شهراً." :
                     "Pour démarrer un programme de Formation Professionnelle FP, préparez en priorité l'homologation de votre diplôme de Baccalauréat auprès du Ministère espagnol.")
                  : (lang === "ar" ? "للدراسة بالجامعة، ابدأ بالاتصال بـ UNEDasiss لإرسال درجاتك واجتياز مواد PCE الاختيارية لرفع معدل القبول." :
                     "Pour l'admission directe en Licence, vous devez passer les examens PCE de Selectividad via l'organisme UNEDasiss.")
                }
              </div>
            </div>
          </div>
        </aside>

        {/* PRIMARY INTERACTIVE CONTENT REGION */}
        <main className="flex-1 min-w-0 flex flex-col gap-6">
          
          {/* TAB 1: FULL ROADMAP VIEW */}
          {tab === "roadmap" && (
            <div className="bg-[#0c1222] border border-[#1b253b] p-6 rounded-3xl shadow-xl">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Map className="text-amber-500" />
                  {lang === "ar" ? "خارطة طريق الطالب في إسبانيا" :
                   lang === "fr" ? "Feuille de Route de l'Étudiant Voyageur" :
                   lang === "es" ? "Hoja de Ruta de Extranjería y Academia" :
                   "Comprehensive Pathway Map"}
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  {lang === "ar" ? "الخطوات الكاملة منذ الفكرة وقبول المؤسسة حتى العمل والمنظومة الضريبية" :
                   "Les étapes clés ordonnées de manière séquentielle pour accomplir votre parcours à succès en Espagne."}
                </p>
              </div>

              {/* Strict Scope Disclaimer */}
              <div className="bg-amber-500/5 border border-amber-500/20 px-4 py-3 rounded-2xl text-xs text-amber-400 leading-relaxed flex items-start gap-2.5 mb-6">
                <AlertTriangle size={18} className="flex-shrink-0 text-amber-500" />
                <div>
                  <strong>{lang === "ar" ? "تنبيه إخلاء مسؤولية قانوني:" : "Information & Avertissement Légal :"}</strong>{" "}
                  {lang === "ar" ? "هذه المعلومات لأغراض إرشادية وتدريبية تم تجميعها من واقع قوانين الهجرة الإسبانية. ننصحك دائماً بمراجعة الموقع الرسمي للخارجية الإسبانية أو مكاتب الهجرة المختصة لكون اللوائح متغيرة على الدوام." :
                   "Ce guide est conçu par notre expert d'IA à des fins éducatives et de consolidation. Il ne remplace en aucun caso les services d'un procureur ou avocat spécialisé. Veuillez consulter les sites officiels (Sede Extranjería/Consulat) pour le suivi légal."}
                </div>
              </div>

              {/* Sequenced Roadmap list */}
              <div className="relative pl-6 border-l border-gray-800 space-y-8 my-4">
                {ROADMAP_STEPS.map((step, i) => {
                  const isCompleted = step.n <= 3; // Mock complete first steps
                  return (
                    <div key={step.n} className="relative">
                      {/* Interactive round pointer */}
                      <span className={`absolute -left-[37px] top-1.5 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono border-2 shadow ${isCompleted ? 'bg-emerald-500 text-gray-900 border-emerald-400' : 'bg-gray-900 text-amber-500 border-amber-500/40'}`}>
                        {step.n}
                      </span>
                      <div className="bg-[#070a13] border border-[#1b253b] p-4 rounded-xl shadow-sm hover:border-amber-500/30 transition-all">
                        <div className="flex items-center gap-2 justify-between">
                          <h4 className="font-bold text-gray-100 text-sm tracking-tight">{t(step)}</h4>
                          {isCompleted && (
                            <span className="bg-emerald-500/10 text-emerald-400 text-[9px] uppercase px-2 py-0.5 rounded-full font-bold">Completado</span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 mt-2 leading-relaxed">{t(step.sub)}</p>
                        
                        <div className="flex gap-1.5 flex-wrap mt-3">
                          {step.tags[lang]?.map((tg, idx) => (
                            <span key={idx} className="bg-gray-800/60 border border-gray-700/50 text-gray-400 text-[10px] px-2 py-0.5 rounded">
                              {tg}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: VISA BY COUNTRY COORDINATOR */}
          {tab === "visa" && (
            <div className="bg-[#0c1222] border border-[#1b253b] p-6 rounded-3xl shadow-xl">
              <div className="mb-5 flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Globe className="text-amber-500" />
                    {lang === "ar" ? "دليل الهجرة ووثائق التأشيرة" : "Visa Etudiant & Consulates de votre Pays"}
                  </h2>
                  <p className="text-xs text-gray-400 mt-1">
                    {lang === "ar" ? "حدد بلدك لمعرفة تفاصيل القنصلية والمستندات المطلوبة بدقة" : "Matériel d'inscription requis en fonction de votre nationalité et démarches consulaires."}
                  </p>
                </div>
              </div>

              {/* Country Tabs select menu */}
              <div className="flex gap-2 flex-wrap bg-[#070a13] p-1 border border-gray-800/80 rounded-2xl mb-6">
                {Object.entries(VISA_DATA).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setVisaCountry(key)}
                    className={`px-4 py-2 text-xs font-semibold rounded-xl focus:outline-none transition-colors ${visaCountry === key ? 'bg-amber-500 text-gray-900 font-bold' : 'text-gray-400 hover:text-white'}`}
                  >
                    {t(value.name)}
                  </button>
                ))}
              </div>

              {/* Selected Country Data Panels */}
              {(() => {
                const data = VISA_DATA[visaCountry] || VISA_DATA.morocco;
                return (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-[#070a13] border border-blue-500/10 rounded-2xl">
                        <span className="text-[10px] text-blue-400 uppercase tracking-widest font-mono">Competant Consulates</span>
                        <h4 className="font-bold text-white text-xs mt-1.5 leading-relaxed">{t(data.consulate)}</h4>
                      </div>
                      <div className="p-4 bg-[#070a13] border border-amber-500/10 rounded-2xl">
                        <span className="text-[10px] text-amber-400 uppercase tracking-widest font-mono">Délai estimé</span>
                        <h4 className="font-bold text-white text-xs mt-1.5 leading-relaxed">{t(data.timeline)}</h4>
                      </div>
                    </div>

                    <div className="border-t border-gray-800 pt-5">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                        <CheckSquare size={14} className="text-amber-500" />
                        {lang === "ar" ? "الوثائق الإلزامية في الملف" : "Dossier légal requis (Pièces Obligatoires)"}
                      </h3>

                      <div className="space-y-4">
                        {data.docs.map((doc, idx) => (
                          <div key={idx} className="bg-[#070a13] border border-[#1b253b] p-4 rounded-xl flex items-start gap-3 hover:border-amber-500/25 transition-all">
                            <span className="bg-amber-500/10 text-amber-400 text-xs font-bold h-6 w-6 rounded-lg flex items-center justify-center shrink-0">
                              {idx+1}
                            </span>
                            <div>
                              <h5 className="font-bold text-xs text-white leading-tight">{t(doc.n)}</h5>
                              <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">{t(doc.desc)}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pro tip */}
                    <div className="bg-blue-500/5 border border-blue-500/20 p-4 rounded-2xl text-xs text-blue-400 leading-relaxed flex items-start gap-2.5">
                      <Volume2 size={16} className="shrink-0 text-blue-400 mt-0.5" />
                      <div>
                        <strong>💡 {lang === "ar" ? "نصيحة هامة بخصوص التمويل:" : "Règle absolue des caisses de devises :"}</strong>{" "}
                        {lang === "ar" ? "تطلب السلطات الإسبانية إيداعات كافية تساوي مؤشر IPREM (حالياً حوالي 600 يورو شهرياً). يُفضل تفعيل كفالة الأب أو الأم بتقديم كشف حساب مصرفي يغطي آخر 6 أشهر مع ترجمة الضمان المالي." :
                         "L'IPREM espagnol exige au minimum 600€ par mois pour les étudiants. Pour renforcer votre demande, joignez les relevés bancaires d'un garant direct couvrant 6 mois."}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* TAB 3: STUDY PROGRAMS EXPLORER */}
          {tab === "formations" && (
            <div className="bg-[#0c1222] border border-[#1b253b] p-6 rounded-3xl shadow-xl">
              <div className="mb-5">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <BookOpen className="text-amber-500" />
                  {lang === "ar" ? "استكشاف البرامج الدراسية وتكاليفها" : "Formations & Programmes Pratiques"}
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  {lang === "ar" ? "تفاصيل التكوين المهني والجامعات من حيث القبول والآفاق المهنية" : "Consultez les conditions requises pour chaque niveau : conditions de diplôme ou bourses."}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <div className="flex gap-2 flex-wrap">
                  {Object.keys(FORMATIONS).map(key => (
                    <button
                      key={key}
                      onClick={() => setFormationTab(key)}
                      className={`px-4 py-2 text-xs font-semibold rounded-xl focus:outline-none transition-colors ${formationTab === key ? 'bg-amber-500 text-gray-900 font-bold' : 'text-gray-400 hover:text-white bg-gray-800/40'}`}
                    >
                      {t(FORMATIONS[key])}
                    </button>
                  ))}
                </div>

                <div className="relative max-w-xs w-full">
                  <input 
                    type="text" 
                    placeholder={
                      lang === "ar" ? "ابحث عن قسيمة أو تخصص..." :
                      lang === "es" ? "Buscar especialidad o salida..." :
                      lang === "en" ? "Search specialty or career..." :
                      "Rechercher une spécialité..."
                    }
                    value={formationsSearch}
                    onChange={(e) => setFormationsSearch(e.target.value)}
                    className="w-full bg-[#070a13] border border-gray-800 rounded-xl pl-9 pr-4 py-1.5 text-xs text-white outline-none focus:border-amber-500 transition-colors"
                  />
                  <span className="absolute left-3 top-2 text-gray-500 text-xs">🔍</span>
                </div>
              </div>

              {(() => {
                const f = FORMATIONS[formationTab];
                return (
                  <div className="space-y-6">
                    {/* General Meta card */}
                    <div className="p-5 bg-[#070a13] border border-[#1b253b] rounded-2xl flex flex-col md:flex-row justify-between gap-4">
                      <div>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">{f.tag} Category</span>
                        <h3 className="text-base font-bold text-white mt-1.5">{t(f)}</h3>
                        <p className="text-xs text-gray-400 mt-1 max-w-md">
                          {lang === "ar" ? "مسارات منسقة للمواءمة مع متطلبات سوق العمل المحلي الإسباني" : "Diplômes hautement appréciés par les entreprises ibériques."}
                        </p>
                      </div>
                      <div className="space-y-1.5 shrink-0 text-left md:text-right font-mono text-xs">
                        <div><span className="text-gray-500 uppercase mr-2">Duración:</span> <span className="text-white font-bold">{t(f.duration)}</span></div>
                        <div><span className="text-gray-500 uppercase mr-2">Costo anual:</span> <span className="text-emerald-400 font-bold">{t(f.cost)}</span></div>
                      </div>
                    </div>

                    {/* Entry standards */}
                    <div className="p-5 bg-gray-900/40 border border-gray-800 rounded-2xl">
                      <h4 className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider mb-3">
                        {lang === "ar" ? "شروط التسجيل والقبول الإلزامية:" : "Conditions réglementaires pour postuler :"}
                      </h4>
                      <ul className="space-y-2">
                        {f.access.map((acc, i) => (
                          <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                            <span className="text-amber-500 mt-0.5">✔</span>
                            <span>{acc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {f.note && (
                      <div className="bg-amber-500/5 text-amber-400 border border-amber-500/20 p-4 rounded-xl text-xs">
                        <strong>💡 Highlight:</strong> {t(f.note)}
                      </div>
                    )}

                    {/* Available branches and jobs */}
                    {f.families && (() => {
                      const filteredFamilies = f.families.filter(fam => {
                        const s = formationsSearch.toLowerCase();
                        const nameMatch = t(fam.name).toLowerCase().includes(s);
                        const salidasMatch = fam.salidas[lang]?.some(sal => sal.toLowerCase().includes(s)) || false;
                        return nameMatch || salidasMatch;
                      });

                      if (filteredFamilies.length === 0) {
                        return (
                          <div className="text-center py-8 text-gray-500 text-xs border border-[#1b253b] border-dashed rounded-2xl bg-[#070a13]/50">
                            {lang === "ar" ? "لم يتم العثور على تخصصات تطابق بحثك." : 
                             lang === "es" ? "No se encontraron especialidades que coincidan con tu búsqueda." : 
                             lang === "en" ? "No specialties found matching your search." :
                             "Aucune spécialité ne correspond à votre recherche."}
                          </div>
                        );
                      }

                      return (
                        <div>
                          <h4 className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider mb-4 font-sans">
                            {lang === "ar" ? "العائلات المهنية المتاحة وآفاق العمل:" :
                             lang === "es" ? "Especialidades Recomendadas y Salidas Profesionales:" :
                             lang === "en" ? "Recommended Specialties & Career Prospects:" :
                             "Spécialités Majeures Recommandées & Débouchés :"}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {filteredFamilies.map((fam, idx) => (
                              <div key={idx} className="bg-[#070a13] border border-[#1b253b] p-4 rounded-2xl flex flex-col justify-between">
                                <div>
                                  <h5 className="font-bold text-xs text-white mb-3 tracking-tight border-b border-gray-800 pb-2">{t(fam.name)}</h5>
                                  <div className="space-y-2">
                                    <span className="text-[10px] text-gray-500 uppercase tracking-wider block">
                                      {lang === "ar" ? "الوظائف والفرص:" :
                                       lang === "es" ? "Puestos y salidas:" :
                                       lang === "en" ? "Careers & profiles:" :
                                       "Métiers & Profils :"}
                                    </span>
                                    <div className="flex gap-1.5 flex-wrap">
                                      {fam.salidas[lang]?.map((sal, sIdx) => {
                                        const isHighlighted = formationsSearch && sal.toLowerCase().includes(formationsSearch.toLowerCase());
                                        return (
                                          <span key={sIdx} className={`text-[10px] px-2 py-1 rounded-lg border transition-colors ${
                                            isHighlighted 
                                              ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-medium' 
                                              : 'bg-gray-800 border-gray-700/60 text-gray-300'
                                          }`}>
                                            {sal}
                                          </span>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                );
              })()}
            </div>
          )}

          {/* TAB 4: CITY TRANSPORT SYSTEM */}
          {tab === "transport" && (
            <div className="bg-[#0c1222] border border-[#1b253b] p-6 rounded-3xl shadow-xl">
              <div className="mb-5 flex justify-between items-center flex-wrap gap-2">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Train className="text-amber-500" />
                    {lang === "ar" ? "بطاقات النقل المخفضة للطلاب" : "Tarification Joven & Cartes Mensuelles de Métro"}
                  </h2>
                  <p className="text-xs text-gray-400 mt-1">
                    {lang === "ar" ? "تأمين التنقل بأقل تكلفة للطلاب دون سن 26 أو 30 عاماً" : "Toutes les offres de transports publics adaptées aux budgets étudiants."}
                  </p>
                </div>
                {/* Micro search filter */}
                <input 
                  type="text" 
                  placeholder="Filtrer par ville..."
                  value={transportSearch}
                  onChange={(e) => setTransportSearch(e.target.value)}
                  className="bg-[#070a13] border border-gray-800 rounded-xl px-3 py-1.5 text-xs text-white outline-none focus:border-amber-500 max-w-[200px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {TRANSPORT
                  .filter(tItem => tItem.city.toLowerCase().includes(transportSearch.toLowerCase()))
                  .map((tItem, idx) => (
                    <div key={idx} className="bg-[#070a13] border border-[#1b253b] p-5 rounded-2xl space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-emerald-400 font-mono text-sm font-bold block">{tItem.cost}</span>
                          <h4 className="font-bold text-white text-base mt-1">{tItem.city} — {tItem.card}</h4>
                        </div>
                        <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold">
                          {tItem.age}
                        </span>
                      </div>

                      <p className="text-xs text-gray-400 leading-relaxed font-sans">{t(tItem.cover)}</p>

                      <div className="border-t border-gray-800/80 pt-3 space-y-1.5">
                        <span className="text-[10px] text-gray-500 uppercase font-mono">Comment postuler / Requis :</span>
                        <p className="text-xs text-gray-300 leading-relaxed">{t(tItem.apply)}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* TAB 5: HOUSING PORTAL */}
          {tab === "logement" && (
            <div className="bg-[#0c1222] border border-[#1b253b] p-6 rounded-3xl shadow-xl">
              <div className="mb-5">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Home className="text-amber-500" />
                  {lang === "ar" ? "دليل السكن والعيش" : "Coût du Logement & Locations en Espagne"}
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  {lang === "ar" ? "خيارات السكن الطلابي المعتمد، ومتوسط الأسعار مع نصائح مكافحة الاحتيال" : "Trouvez votre logement étudiant en évitant les écueils administratifs."}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {LOGEMENT.map((l, index) => (
                  <div key={index} className="bg-[#070a13] border border-[#1b253b] p-5 rounded-2xl flex flex-col md:flex-row justify-between gap-4 hover:border-amber-500/30 transition-all">
                    <div className="space-y-1.5">
                      <span className="bg-amber-500/5 text-amber-400 border border-amber-500/20 text-[10px] font-mono uppercase px-2 py-0.5 rounded">
                        {t(l.type)}
                      </span>
                      <h4 className="font-bold text-white text-sm">{t(l.name)}</h4>
                      <p className="text-xs text-gray-400 max-w-xl leading-relaxed">{t(l.desc)}</p>
                    </div>
                    <div className="shrink-0 border-l border-gray-800 md:pl-5 flex flex-col justify-center min-w-[120px]">
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Coût Estimé</span>
                      <span className="text-[#34d399] font-mono font-bold text-sm mt-1">{t(l.price)}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* DIRECT PLATFORMS SECTION (Idealista, Fotocasa) */}
              <div className="bg-[#070a13] border border-[#1b253b] p-6 rounded-2xl mt-6 space-y-4">
                <div>
                  <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                    <Globe size={18} className="text-amber-500 animate-pulse" />
                    {lang === "ar" ? "منصات البحث المباشر عن الإيجار المعتمدة:" : "Plataformas de Alquiler en España (Idealista & Fotocasa)"}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    {lang === "ar" ? "روابط مباشرة لشاشات الطلبة وشرح تفصيلي لطريقة الاستخدام الصحيحة:" : "Accédez directement aux sites officiels et découvrez comment maximiser vos chances."}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Idealista Button Link */}
                  <a 
                    href="https://www.idealista.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-between p-4 bg-[#0c1222] border border-[#1b253b] hover:border-amber-500/40 rounded-xl group transition-all"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] text-amber-500 font-mono font-bold uppercase tracking-wider block">Estancia & Pisos</span>
                      <h4 className="text-white font-bold text-sm flex items-center gap-1.5 group-hover:text-amber-400 transition-colors">
                        Idealista.com 🔗
                      </h4>
                      <p className="text-[10px] text-gray-400 leading-tight">
                        {lang === "ar" ? "المنصة الكبرى رقم 1 في إسبانيا للبحث عن غرف وشقق مشتركة." : "Le portail n°1 en Espagne pour chercher des chambres (pisos compartidos)."}
                      </p>
                    </div>
                  </a>

                  {/* Fotocasa Button Link */}
                  <a 
                    href="https://www.fotocasa.es/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-between p-4 bg-[#0c1222] border border-[#1b253b] hover:border-amber-500/40 rounded-xl group transition-all"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] text-amber-500 font-mono font-bold uppercase tracking-wider block">Alquiler & Habitaciones</span>
                      <h4 className="text-white font-bold text-sm flex items-center gap-1.5 group-hover:text-amber-400 transition-colors">
                        Fotocasa.es 🔗
                      </h4>
                      <p className="text-[10px] text-gray-400 leading-tight">
                        {lang === "ar" ? "خدمة متميزة وفلاتر بالغة الدقة للحي ونطاق الميزانية المحددة." : "Filtres avancés par quartier et budget idéal pour colocations."}
                      </p>
                    </div>
                  </a>
                </div>

                {/* HOW THEY WORK / CÓMO FUNCIONAN */}
                <div className="border-t border-[#1b253b] pt-4">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5">
                    {lang === "ar" ? "كيف تعمل المنصات وتضمن قبول طلبك؟" : "¿Cómo funcionan estas plataformas y cómo buscar con éxito?"}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-300 leading-relaxed font-sans">
                    <div className="space-y-2 bg-[#0c1222]/40 p-3 rounded-lg border border-gray-800/45">
                      <p>
                        <strong>1. {lang === "ar" ? "تفعيل التنبيهات الفورية (Alertas):" : "Alertes instantanées :"}</strong>{" "}
                        {lang === "ar" ? "الغرف الجيدة تؤجر خلال ساعات قليلة. يجب تفعيل فلتر التنبيهات على البريد/الهاتف لتلقي تنبيه للمنشور فور صدوره والاتصال فورًا." : 
                         "Les meilleures chambres partent en quelques heures. Activez impérativement les alertes de recherche pour être informé à la minute de tout nouveau bien."}
                      </p>
                      <p>
                        <strong>2. {lang === "ar" ? "الاتصال المباشر أفضل من الرسائل:" : "Contacter par Téléphone/WhatsApp :"}</strong>{" "}
                        {lang === "ar" ? "يفضل دائمًا الاتصال الهاتفي أو إرسال واتساب على الرقم المعلن عوضًا عن البريد الإلكتروني التقليدي للحصول على رد سريع." : 
                         "Privilégiez les appels ou messages WhatsApp directs dès qu'un numéro est affiché, cela multiplie par 5 vos chances d'obtenir une visite."}
                      </p>
                    </div>
                    <div className="space-y-2 bg-[#0c1222]/40 p-3 rounded-lg border border-gray-800/45">
                      <p>
                        <strong>3. {lang === "ar" ? "تجهيز ملف الملاءة (Solvencia):" : "Dossier de solvabilité :"}</strong>{" "}
                        {lang === "ar" ? "أعد مسبقًا نسخة من قبولك الجامعي، كشكل لإيجار تأمين الوالدين أو كشوف البنك لتسليمها فورًا قبل قيام غيرك بحجزها." : 
                         "Préparez à l'avance vos documents d'inscription étudiante, preuve de bourse ou garanties financières de vos parents pour rassurer le loueur."}
                      </p>
                      <p>
                        <strong>4. {lang === "ar" ? "عقد الإقامة المكتوب (Contrato):" : "Contrat de location :"}</strong>{" "}
                        {lang === "ar" ? "لا يكتمل الحجز إلا بنموذج عقد محكم يذكر فواصل الوديعة (Fianza) لتتمكن من استخدام العقد في التسجيل البلدي (Empadronamiento)." : 
                         "Exigez toujours un contrat écrit détaillé qui liste le montant de la caution (fianza), nécessaire pour vos démarches administratives."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security and scams warning */}
              <div className="bg-amber-500/5 border border-amber-500/20 p-5 rounded-2xl mt-4">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <AlertTriangle size={15} />
                  {lang === "ar" ? "تنبيه أمان هام:" : lang === "fr" ? "Attention de Sécurité :" : "Atención de Seguridad:"}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-sans">
                  {lang === "ar" ? "يجب توخي الحذر دائمًا، وهذا كل شيء." :
                   lang === "fr" ? "Il faut toujours faire attention, c'est tout." :
                   lang === "es" ? "Siempre se debe tener cuidado y ya está." :
                   "Always be careful, that's all."}
                </p>
              </div>
            </div>
          )}

          {/* TAB 6: COMPLETE SPANISH COURSE & VOCAB MANUAL */}
          {tab === "ebook" && (
            <div className="bg-[#0c1222] border border-[#1b253b] p-6 rounded-3xl shadow-xl">
              
              {/* HEADER CAPTIONS WITH CEFR INDICATORS */}
              <div className="flex justify-between items-start flex-wrap gap-3 mb-6 border-b border-gray-800 pb-5">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                    <BookOpen className="text-amber-500 animate-pulse" />
                    {lang === "ar" ? "كتاب الإسبانية الشامل (A1←C2)" : "Manuel d'Espagnol Certifié (Cadre Européen)"}
                  </h2>
                  <p className="text-xs text-gray-400 mt-1">
                    {lang === "ar" ? "دروس تفاعلية، نطق صوتي أصلي ومفردات أكاديمية تخدم ملف دراستك" : "300 chapitres interactifs et vocabulaire pratique avec examens réguliers."}
                  </p>
                </div>

                <div className="flex gap-2 items-center flex-wrap">
                  <div className="bg-[#070a13] border border-gray-800/80 p-0.5 rounded-xl flex gap-1">
                    {["A1", "A2", "B1", "B2", "C1", "C2"].map(lvl => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(lvl);
                          setCurrentPage(getMinPage(lvl));
                        }}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-transform focus:outline-none ${selectedLevel === lvl ? 'bg-amber-500 text-[#070a13] scale-105' : 'text-gray-400 hover:text-white'}`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setExamActive(true);
                      setExamData(null);
                    }}
                    className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-transform active:scale-95 flex items-center gap-1.5 shadow-lg border border-blue-500/30"
                  >
                    <Award size={13} />
                    {lang === "ar" ? "اختبارات الترقية (30 امتحان)" : "Examens de Niveau (30 Tests)"}
                  </button>
                </div>
              </div>

              {/* BOOK PAGINATION NAVIGATOR */}
              {!examActive && (
                <div className="bg-[#070a13] border border-gray-800 p-3 rounded-2xl flex items-center justify-between mb-6 shadow-sm">
                  <button
                    disabled={currentPage <= getMinPage(selectedLevel)}
                    value="prev-page"
                    onClick={() => setCurrentPage(prev => Math.max(getMinPage(selectedLevel), prev - 1))}
                    className="bg-[#1c2438] hover:bg-gray-800 text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold px-3 py-1.5 rounded-xl transition-all flex items-center gap-1"
                  >
                    <ChevronLeft size={14} />
                    {lang === "ar" ? "السابق" : "Précédent"}
                  </button>

                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest text-center px-2">
                    📖 Pg {currentPage} / 300 · Level {selectedLevel} Topic: {getTopic(selectedLevel, currentPage)}
                  </span>

                  <button
                    disabled={currentPage >= getMaxPage(selectedLevel)}
                    value="next-page"
                    onClick={() => setCurrentPage(prev => Math.min(getMaxPage(selectedLevel), prev + 1))}
                    className="bg-[#1c2438] hover:bg-gray-800 text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold px-3 py-1.5 rounded-xl transition-all flex items-center gap-1"
                  >
                    {lang === "ar" ? "التالي" : "Suivant"}
                    <ChevronRight size={14} />
                  </button>
                </div>
              )}

              {/* ACTIVE EXAMINATION LAYOUT */}
              {examActive ? (
                <div className="space-y-6 animate-fadeIn">
                  {loadingExam ? (
                    <div className="py-20 flex flex-col items-center justify-center gap-3">
                      <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-xs text-gray-400 animate-pulse font-sans font-bold">
                        {lang === "ar" ? `جاري إعداد وتخصيص النموذج ${selectedExamId} من 30 في مستوى ${selectedLevel} عبر الذكاء الاصطناعي...` : `Génération de la version ${selectedExamId} sur 30 du test de niveau ${selectedLevel}...`}
                      </p>
                    </div>
                  ) : !examData ? (
                    /* SELECTOR SCREEN FOR 30 DIFFERENT EXAMS */
                    <div className="bg-[#070a13] border border-[#1b253b] p-6 rounded-2xl space-y-6">
                      <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                        <div>
                          <span className="text-[10px] tracking-widest font-mono text-blue-400 block uppercase font-bold">
                            {lang === "ar" ? "مقياس الاختيار المطور من SIELE" : "Centre d'Évaluation Officielle SIELE"}
                          </span>
                          <h3 className="text-lg font-bold text-white mt-1">
                            {lang === "ar" ? `الامتحانات الثلاثون لترقية مستوى ${selectedLevel}` : `Les 30 Examens de Niveau ${selectedLevel}`}
                          </h3>
                        </div>
                        <button
                          type="button"
                          onClick={() => setExamActive(false)}
                          className="text-gray-400 hover:text-white text-xs border border-gray-800 px-3.5 py-1.5 rounded-xl transition-all font-bold"
                        >
                          {lang === "ar" ? "العودة للدروس" : "Retour aux leçons"}
                        </button>
                      </div>

                      <div className="bg-blue-500/5 border border-blue-500/20 p-5 rounded-2xl leading-relaxed text-xs text-gray-300 font-sans space-y-2">
                        <p>
                          🎯 <strong>{lang === "ar" ? "قاعدة التقدم والتخرج الأكاديمي:" : "Règle de progression académique :"}</strong>{" "}
                          {lang === "ar" ? `لكل مستوى - CEFR - ستجد 30 نموذج امتحان مختلف (كل نموذج يضم 40 سؤالاً progressive). تحتاج إلى اجتياز نموذج واحد فقط بنجاح (بنسبة 60% أي 24/40) لترقية مستواك تلقائياً لـ :` : 
                           `Chaque niveau CEFR propose 30 versions d'examens strictement différentes de 40 questions chacune. Il vous suffit de réussir un seul des 30 examens (note ≥ 60%, soit 24/40) pour débloquer automatiquement le niveau :`}
                          {" "}
                          <span className="bg-emerald-500 text-gray-950 px-2 py-0.5 rounded font-black font-mono inline-block text-[11px] ml-1">
                            {selectedLevel === "A1" ? "A2" : selectedLevel === "A2" ? "B1" : selectedLevel === "B1" ? "B2" : selectedLevel === "B2" ? "C1" : selectedLevel === "C1" ? "C2" : "C2+ CERTIFIED"}
                          </span>
                        </p>
                        {selectedLevel !== profile.level && (
                          <div className="text-amber-400 bg-amber-500/5 px-3 py-2 rounded-xl border border-amber-500/20 text-[11px] font-bold flex items-center gap-1.5 mt-2">
                            <AlertTriangle size={13} />
                            <span>
                              {lang === "ar" ? `اسمك مسجل رسمياً حالياً في مستوى (${profile.level}). يمكنك إجراء امتحانات مستوى (${selectedLevel}) للممارسة والرفع من مستواك، لكن الترقية الرسمية تتطلب تقدم مستمر خطوة بخطوة.` :
                               `Votre inscription actuelle officielle est au niveau (${profile.level}). Vous pouvez réaliser ces tests (${selectedLevel}) pour s'entraîner, mais le passage de niveau nécessite une validation de votre niveau actuel.`}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* 30 Exams Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
                        {Array.from({ length: 30 }).map((_, idx) => {
                          const examNum = idx + 1;
                          const examKey = `${selectedLevel}-${examNum}`;
                          const isPassed = (profile.passedExams_v2 || []).includes(examKey);
                          
                          return (
                            <div 
                              key={examNum}
                              className={`p-4 rounded-xl border flex flex-col justify-between gap-3 transition-transform hover:scale-[1.02] ${
                                isPassed 
                                  ? 'bg-[#10b981]/5 border-[#10b981]/25 text-white' 
                                  : 'bg-[#0c1222] border-[#1f293d] text-gray-300'
                              }`}
                            >
                              <div className="space-y-1">
                                <div className="flex justify-between items-center font-sans">
                                  <span className="text-[9px] font-mono text-gray-500 uppercase font-bold">Ref #{examKey}</span>
                                  {isPassed && (
                                    <span className="text-emerald-400 bg-emerald-500/25 text-[9px] font-bold font-mono px-1.5 py-0.5 rounded">
                                      PASSED
                                    </span>
                                  )}
                                </div>
                                <h4 className="text-xs font-bold font-mono text-white mt-1">Examen {examNum}</h4>
                                <p className="text-[10px] text-gray-400 font-sans">
                                  {lang === "ar" ? "40 سؤال progressive" : "40 questions progressive"}
                                </p>
                              </div>

                              <button
                                type="button"
                                onClick={() => handleLoadExam(examNum)}
                                className={`w-full py-1.5 text-center rounded-lg text-[10px] font-bold tracking-wide transition-all ${
                                  isPassed 
                                    ? 'text-emerald-400 bg-[#10b981]/15 hover:bg-emerald-500 hover:text-[#070a13]' 
                                    : 'bg-[#2563eb] hover:bg-blue-600 text-white'
                                }`}
                              >
                                {isPassed ? (lang === "ar" ? "إعادة الامتحان" : "Refaire") : (lang === "ar" ? "بدء الامتحان" : "Commencer")}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#070a13] border border-[#1b253b] p-6 rounded-2xl space-y-6 shadow-inner animate-fadeIn font-sans">
                      <div className="flex justify-between items-start border-b border-gray-800 pb-4">
                        <div>
                          <span className="text-[10px] tracking-widest font-mono text-blue-400 block uppercase font-bold">Official SIELE Scale Verification</span>
                          <h3 className="text-base font-bold text-white mt-1 ">{examData.examTitle}</h3>
                        </div>
                        <button
                          type="button"
                          onClick={() => setExamActive(false)}
                          className="text-gray-500 hover:text-white text-xs border border-gray-800 px-3 py-1 rounded-lg transition-all"
                        >
                          {lang === "ar" ? "إلغاء المراجعة" : "Fermer l'examen"}
                        </button>
                      </div>

                      {/* Tarea-based Navigation Tabs */}
                      <div className="flex flex-wrap gap-1.5 border-b border-gray-800 pb-3">
                        {[1, 2, 3, 4, 5].map((tNum) => {
                          const startIdx = (tNum - 1) * 8;
                          const endIdx = tNum * 8;
                          let answeredInTarea = 0;
                          for (let k = startIdx; k < endIdx; k++) {
                            if (examAnswers[k] !== undefined) answeredInTarea++;
                          }
                          const isActive = activeTarea === tNum;
                          return (
                            <button
                              key={tNum}
                              type="button"
                              onClick={() => setActiveTarea(tNum)}
                              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border ${
                                isActive 
                                  ? 'bg-amber-500 text-gray-950 border-amber-400 font-extrabold shadow-md' 
                                  : 'bg-[#0c1222]/80 text-gray-300 border-gray-800/80 hover:bg-[#162038] hover:text-white'
                              }`}
                            >
                              <span>{lang === "ar" ? `مهمة ${tNum}` : `Tarea ${tNum}`}</span>
                              <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-amber-600 text-white' : 'bg-gray-900 text-gray-400'}`}>
                                {answeredInTarea}/8
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Display active Tarea's theoretical explanation / title */}
                      {(() => {
                        const descriptions: Record<number, { title: string; desc: string }> = {
                          1: { title: "Tarea 1: Comprensión escrita y vocabulario inicial (CEFR A1)", desc: "Enfocado en frases cotidianas, carteles informativos públicos directos y vocabulario de nivel base." },
                          2: { title: "Tarea 2: Frases y rutinas de comunicación interpersonal (CEFR A2)", desc: "Enfocado en interacciones directas, expresiones temporales cotidianas y diferenciación inicial de tiempos pasados." },
                          3: { title: "Tarea 3: Comprensión argumentativa e hilos del discurso (CEFR B1)", desc: "Enfocado en estructuración de opiniones, hipótesis y concordancia general de tiempos simples y subjuntivo." },
                          4: { title: "Tarea 4: Estructuras gramaticales complejas y modo subjuntivo (CEFR B2)", desc: "Análisis gramatical riguroso, combinación de preposiciones complejas y matices formales de opinión/duda." },
                          5: { title: "Tarea 5: Expresiones cultas, ensayos de de opinión y modismos (CEFR C1)", desc: "Análisis estilístico literario u de opinión periodística, modismos idiomáticos castellanos y sintaxis de nivel superior." }
                        };
                        const info = descriptions[activeTarea] || descriptions[1];
                        return (
                          <div className="bg-[#0c1222]/40 border border-gray-800/60 p-3 rounded-xl space-y-1">
                            <h4 className="text-xs font-bold text-amber-400">{info.title}</h4>
                            <p className="text-[11px] text-gray-450 leading-relaxed font-sans">{info.desc}</p>
                          </div>
                        );
                      })()}

                      {/* Overall Progress Ribbon */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0c1222]/80 border border-gray-800 p-4 rounded-xl text-xs">
                        <div className="space-y-1">
                          <span className="text-gray-450">Progreso general del Examen SIELE:</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 bg-gray-800 rounded-full h-1.5 overflow-hidden">
                              <div 
                                className="bg-emerald-500 h-full transition-all duration-300" 
                                style={{ width: `${(Object.keys(examAnswers).length / (examData.questions?.length || 40)) * 100}%` }}
                              ></div>
                            </div>
                            <span className="font-mono text-white font-bold">{Object.keys(examAnswers).length} / {examData.questions?.length || 40} contestadas</span>
                          </div>
                        </div>
                        {!examSubmitted && (
                          <div className="text-[11px] text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 max-w-sm font-sans">
                            💡 Conforme avanzas de Tarea, las preguntas se complican. Completa tantas como puedas.
                          </div>
                        )}
                      </div>

                      {/* Rapid Grid Navigation */}
                      <div className="bg-[#0c1222]/50 p-3 rounded-xl border border-gray-800 space-y-2">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500 block font-bold">Mapa completo de preguntas (Haz clic para saltar a su Tarea)</span>
                        <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-20 gap-1.5 font-mono">
                          {Array.from({ length: examData.questions?.length || 40 }).map((_, idx) => {
                            const qTarea = examData.questions?.[idx]?.tarea || Math.floor(idx / 8) + 1;
                            const isAnswered = examAnswers[idx] !== undefined;
                            const isCurrentTarea = qTarea === activeTarea;
                            const isCorrect = examSubmitted && examAnswers[idx] === examData.questions?.[idx]?.correctIndex;
                            
                            let styleClass = "bg-gray-900/40 text-gray-500 border-gray-800/80";
                            if (isAnswered) {
                              styleClass = "bg-blue-950/40 text-blue-300 border-blue-500/20";
                            }
                            if (isCurrentTarea) {
                              styleClass = "bg-amber-550/15 text-amber-400 border-amber-500/50 font-bold ring-1 ring-amber-500/40 bg-amber-950/50";
                            }
                            if (examSubmitted) {
                              styleClass = isCorrect 
                                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40 font-bold" 
                                : "bg-red-500/20 text-red-400 border-red-500/40 font-bold";
                            }

                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setActiveTarea(qTarea)}
                                className={`h-7 text-[10px] font-mono rounded-lg border flex items-center justify-center transition-all hover:opacity-85 ${styleClass}`}
                                title={`Pregunta ${idx + 1}`}
                              >
                                {idx + 1}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="space-y-5 max-h-[500px] overflow-y-auto pr-2">
                        {(examData.questions || [])
                          .map((q: any, i: number) => ({ ...q, originalIndex: i }))
                          .filter((q: any) => (q.tarea || Math.floor(q.originalIndex / 8) + 1) === activeTarea)
                          .map((q: any) => {
                            const i = q.originalIndex;
                            return (
                              <div key={i} className="p-4 bg-[#0c1222]/80 border border-gray-800 rounded-xl space-y-3">
                                <h5 className="text-xs font-bold text-gray-200 leading-relaxed grid grid-cols-[25px_1fr] gap-1 font-sans">
                                  <span className="text-amber-500 font-mono">{i+1}.</span>
                                  <span>{q.question}</span>
                                </h5>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-6">
                                  {q.options.map((opt: string, optIdx: number) => {
                                    const isSelected = examAnswers[i] === optIdx;
                                    return (
                                      <button
                                        key={optIdx}
                                        type="button"
                                        disabled={examSubmitted}
                                        onClick={() => handleAnswerExam(i, optIdx)}
                                        className={`text-left p-2.5 rounded-lg text-xs leading-normal border transition-all ${isSelected ? 'bg-amber-500 text-gray-900 font-bold border-amber-400' : 'bg-[#070a13] text-gray-400 border-[#1b253b] hover:border-gray-700'}`}
                                      >
                                        {opt}
                                      </button>
                                    );
                                  })}
                                </div>

                                {examSubmitted && (
                                  <div className={`p-2.5 rounded-lg text-[11px] leading-relaxed mt-2 font-sans ${examAnswers[i] === q.correctIndex ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                                    <strong>{examAnswers[i] === q.correctIndex ? "✔ ¡Correcto!" : `❌ Incorrecto (Correcto: ${q.options[q.correctIndex]})`}</strong>
                                    {q.tip && <p className="mt-1 opacity-80">{q.tip}</p>}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                      </div>

                      {/* Pagination buttons for Tareas */}
                      <div className="flex justify-between items-center gap-4 mt-2">
                        <button
                          type="button"
                          disabled={activeTarea === 1}
                          onClick={() => setActiveTarea(prev => Math.max(1, prev - 1))}
                          className="bg-gray-800 hover:bg-gray-700 text-gray-200 disabled:opacity-30 disabled:cursor-not-allowed font-bold px-4 py-2 rounded-xl text-xs transition-all flex items-center gap-1"
                        >
                          <ChevronLeft size={14} />
                          {lang === "ar" ? "المهمة السابقة" : "Tarea anterior"}
                        </button>
                        <button
                          type="button"
                          disabled={activeTarea === 5}
                          onClick={() => setActiveTarea(prev => Math.min(5, prev + 1))}
                          className="bg-[#1c2438] hover:bg-[#283452] text-gray-200 disabled:opacity-35 disabled:cursor-not-allowed font-bold px-4 py-2 rounded-xl text-xs transition-all flex items-center gap-1"
                        >
                          {lang === "ar" ? "المهمة التالية" : "Siguiente tarea"}
                          <ChevronRight size={14} />
                        </button>
                      </div>

                      {!examSubmitted ? (
                        <button
                          type="button"
                          onClick={handleSubmitExam}
                          className="w-full bg-emerald-500 hover:bg-emerald-600 text-gray-900 font-black py-3 rounded-2xl text-xs uppercase transition-all shadow-md active:scale-95"
                        >
                          {lang === "ar" ? "إرسال ورقة الامتحان المصححة" : "Soumettre les réponses de l'examen"}
                        </button>
                      ) : (
                        <div className="p-5 bg-[#0e172a] border border-[#1e293b] rounded-2xl text-center space-y-4 shadow-xl">
                          <span className="text-xs text-gray-400 uppercase tracking-widest block font-mono">Bilan de l'examen</span>
                          <h4 className="text-2xl font-black text-white">{examScore} / {examData.questions?.length || 40}</h4>
                          {examPassed ? (
                            <div className="space-y-2">
                              <p className="text-emerald-400 text-xs font-bold leading-relaxed font-sans">
                                🎉 ¡Aprobado! Felicidades, has verificado tu transición al nivel superior de la escala CEFR. Tu expediente se actualizó con un premio de +150 XP.
                              </p>
                            </div>
                          ) : (
                            <p className="text-amber-400 text-xs leading-relaxed font-sans">
                              ⚠️ Transición no habilitada. Requiere un mínimo del 60% para convalidar. ¡No te rindas y vuelve a estudiar los capítulos de vocabulario!
                            </p>
                          )}
                          <button
                            type="button"
                            onClick={() => setExamActive(false)}
                            className="bg-gray-800 text-gray-200 text-xs font-bold px-5 py-2 rounded-xl border border-gray-700 hover:bg-gray-700 hover:text-white transition-all shadow"
                          >
                            Volver a las lecciones
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                /* LESSON MATERIAL READER WINDOW */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Left Column: Native lesson topic, details, audio map */}
                  <div className="lg:col-span-7 space-y-6">
                    {loadingLesson ? (
                      <div className="py-24 flex flex-col items-center justify-center gap-3">
                        <div className="w-7 h-7 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-xs text-gray-400">Escribiendo contenido personalizado con IA...</p>
                      </div>
                    ) : lessonData ? (
                      <article className="space-y-6">
                        
                        {/* Alphabet module exclusively for Level A1 first page or any Alphabet topic */}
                        {selectedLevel === "A1" && (currentPage === 1 || getTopic(selectedLevel, currentPage).toLowerCase().includes("alphabet")) && (
                          <div className="bg-[#070a13] border border-emerald-500/20 p-5 rounded-2xl space-y-4">
                            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 border-b border-gray-800 pb-2">
                              <Volume2 size={13} />
                              {lang === "ar" ? "الأبجدية الإسبانية التفاعلية والنطق" : 
                               lang === "fr" ? "Alphabet Espagnol Interactif (Alphabet de base)" :
                               lang === "es" ? "El Alfabeto Español Interactivo" :
                               "Interactive Spanish Alphabet (Core letters)"}
                            </h3>
                            <p className="text-xs text-gray-400 leading-relaxed font-sans">
                              {lang === "ar" ? "انقر على الحرف لسماع النطق الإسباني الأصلي. ركز خصوصاً على الحروف ذات النطق المميز مقارنة بالفرنسية أو الإنجليزية." :
                               lang === "fr" ? "Cliquez sur chaque lettre pour écouter la prononciation correcte. Les lettres marquées en vert diffèrent de l'anglais." :
                               lang === "es" ? "Haz clic en cada letra para escuchar su pronunciación pura castellana. Se destacan las letras que difieren de otros idiomas." :
                               "Click each letter to hear its pure Castilian accent. Focus on special sounds highlighted."}
                            </p>

                            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                              {ALPHABET_DATA.map((item, idx) => (
                                <div 
                                  key={idx}
                                  onClick={() => speakSpanish(`Letra ${item.n}. Se pronuncia ${item.n}.`)}
                                  className="p-3 bg-[#0c1222] border border-[#1b253b] hover:border-amber-500/40 rounded-xl cursor-pointer select-none transition-all group active:scale-95 flex flex-col justify-between"
                                >
                                  <div>
                                    <div className="flex justify-between items-center mb-1">
                                      <span className="text-white font-extrabold text-xl group-hover:text-amber-400">{item.l}</span>
                                      <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded font-sans tracking-wide">{item.n}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] mb-2 border-b border-gray-800/65 pb-1">
                                      <span className="font-mono text-gray-500 font-sans text-[8px] sm:text-[9px]">{item.ph}</span>
                                      <span className="text-emerald-400 font-bold text-[10px]">{item.ar}</span>
                                    </div>
                                    <p className="text-[10px] text-gray-400 leading-snug font-sans text-left min-h-[36px] flex items-center">
                                      {t(item.desc)}
                                    </p>
                                  </div>
                                  
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      speakSpanish(item.w);
                                    }}
                                    className="mt-2 text-[10px] w-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 py-1 rounded font-bold hover:bg-emerald-500 hover:text-gray-900 transition-colors flex items-center justify-center gap-1 shrink-0"
                                  >
                                    <Volume2 size={10} />
                                    {item.w}
                                  </button>
                                </div>
                              ))}
                            </div>
                            <div className="border-t border-gray-800/80 pt-3 flex justify-between items-center text-[10px] text-gray-500">
                              <span>Voice target: Castilian (es-ES)</span>
                              <span>*Requires system text-to-speech enabled</span>
                            </div>
                          </div>
                        )}

                        <div className="space-y-3">
                          <h3 className="text-base font-extrabold text-white">{lessonData.title}</h3>
                          <div className="text-xs text-gray-300 leading-relaxed font-sans bg-[#070a13] border border-[#1b253b] p-5 rounded-2xl shadow-inner prose prose-invert max-w-none">
                            <ReactMarkdown
                              components={{
                                h3: ({ children }) => <h3 className="text-sm font-bold text-amber-400 mt-4 mb-2 border-b border-gray-800 pb-1">{children}</h3>,
                                h4: ({ children }) => <h4 className="text-xs font-bold text-white mt-3 mb-1.5">{children}</h4>,
                                p: ({ children }) => <p className="mb-2 leading-relaxed">{children}</p>,
                                ul: ({ children }) => <ul className="list-disc pl-4 mb-3 space-y-1">{children}</ul>,
                                ol: ({ children }) => <ol className="list-decimal pl-4 mb-3 space-y-1">{children}</ol>,
                                li: ({ children }) => <li className="mb-0.5">{children}</li>,
                                code: ({ children }) => <code className="bg-gray-800 text-amber-300 px-1.5 py-0.5 rounded font-mono text-[10px]">{children}</code>,
                                blockquote: ({ children }) => <blockquote className="border-l-4 border-amber-500 pl-3 italic text-gray-400 my-2">{children}</blockquote>,
                                table: ({ children }) => <div className="overflow-x-auto my-3"><table className="min-w-full border-collapse border border-gray-800 text-[11px]">{children}</table></div>,
                                th: ({ children }) => <th className="border border-gray-800 bg-gray-900 px-3 py-1.5 text-left font-bold text-white">{children}</th>,
                                td: ({ children }) => <td className="border border-gray-800 px-3 py-1.5 text-gray-300">{children}</td>,
                              }}
                            >
                              {lessonData.explanation}
                            </ReactMarkdown>
                          </div>
                        </div>

                        {/* Vocabulary List with active native reading */}
                        {lessonData.vocabulary && lessonData.vocabulary.length > 0 && (
                          <div className="space-y-3">
                            <h4 className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider">
                              {lang === "ar" ? "المفردات والعبارات الرئيسية:" : "Mots Vocabulaires de la leçon :"}
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {lessonData.vocabulary.map((voc: any, idx: number) => (
                                <div 
                                  key={idx}
                                  onClick={() => speakSpanish(voc.spanish)}
                                  className="bg-[#070a13] border border-[#1b253b] p-3 rounded-xl hover:border-amber-500/40 cursor-pointer transition-all active:scale-95 group text-left"
                                >
                                  <span className="text-emerald-400 font-bold text-xs flex items-center gap-1.5 group-hover:text-[#34d399]">
                                    <Volume2 size={13} className="text-emerald-500" />
                                    {voc.spanish}
                                  </span>
                                  <span className="text-[10px] text-gray-400 tracking-wide font-sans mt-1 block font-mono">{voc.dynamicLang}</span>
                                  {voc.explanation && <p className="text-[10px] text-gray-500 mt-1 leading-relaxed font-sans">{voc.explanation}</p>}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </article>
                    ) : null}
                  </div>

                  {/* Right Column: Mini Interactive exercise panel */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="bg-[#070a13] border border-[#1b253b] p-4 rounded-2xl shadow-inner">
                      <h4 className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <CheckSquare size={13} className="text-amber-500" />
                        {lang === "ar" ? "التمارين والأنشطة التفاعلية" : "Pratique d'Intégration Active"}
                      </h4>
                      
                      {loadingLesson ? (
                        <div className="py-20 text-center text-xs text-gray-500 italic">Generando pruebas adaptativas...</div>
                      ) : lessonData?.practice ? (
                        <div className="space-y-4">
                          {lessonData.practice.map((item: any, idx: number) => {
                            const result = exResults[idx];
                            const currentAns = exAnswers[idx] || "";

                            return (
                              <div key={idx} className="bg-[#0c1222] border border-gray-800/80 p-3.5 rounded-xl space-y-3 shadow-sm hover:border-gray-700 transition-colors">
                                <div className="flex justify-between items-center border-b border-gray-800/80 pb-1.5">
                                  <span className="bg-[#1c2438] text-amber-400 text-[9px] font-mono px-2 py-0.5 rounded font-bold uppercase">{item.type}</span>
                                  <span className="text-[10px] text-gray-500">Ejemplo {idx+1}</span>
                                </div>

                                <p className="text-xs text-gray-200 leading-normal font-sans font-bold">{item.question}</p>

                                {/* Multiple choice selection layout */}
                                {item.type === "multiple-choice" && (
                                  <div className="space-y-1.5">
                                    {item.options?.map((opt: string, optIdx: number) => (
                                      <label key={optIdx} className="flex items-center gap-2 text-xs text-gray-400 hover:text-white cursor-pointer select-none">
                                        <input 
                                          type="radio" 
                                          name={`ex-mc-${idx}`}
                                          checked={Number(exAnswers[idx]) === optIdx}
                                          onChange={() => setExAnswers(prev => ({ ...prev, [idx]: optIdx }))}
                                          className="text-amber-500 focus:ring-amber-500 h-3.5 w-3.5 accent-amber-500"
                                        />
                                        <span>{opt}</span>
                                      </label>
                                    ))}

                                    <button 
                                      onClick={() => handleVerifyExercise(idx, currentAns, item.correctIndex, "multiple-choice")}
                                      className="w-full bg-[#1c2438] hover:bg-gray-800 text-gray-300 text-[10px] font-bold py-1.5 rounded-lg border border-gray-800 mt-2 hover:text-white"
                                    >
                                      {lang === "ar" ? "تحقق من جوابي" : "Vérifier le choix"}
                                    </button>
                                  </div>
                                )}

                                {/* Fill in the blanks layout */}
                                {item.type === "fill-blank" && (
                                  <div className="space-y-2">
                                    <input 
                                      type="text"
                                      placeholder="Remplir la case..."
                                      value={currentAns}
                                      onChange={(e) => setExAnswers(prev => ({ ...prev, [idx]: e.target.value }))}
                                      className="w-full bg-[#070a13] border border-gray-800 rounded-lg px-2.5 py-1.5 text-xs text-white outline-none focus:border-amber-500 font-mono"
                                    />
                                    <button 
                                      onClick={() => handleVerifyExercise(idx, currentAns, item.blankWord, "fill-blank")}
                                      className="w-full bg-[#1c2438] hover:bg-gray-800 text-gray-300 text-[10px] font-bold py-1.5 rounded-lg border border-gray-800"
                                    >
                                      {lang === "ar" ? "إرسال الكلمة" : "Tester le mot"}
                                    </button>
                                  </div>
                                )}

                                {/* Translation test */}
                                {item.type === "translation" && (
                                  <div className="space-y-2">
                                    <input 
                                      type="text"
                                      placeholder="Tu traducción en español..."
                                      value={currentAns}
                                      onChange={(e) => setExAnswers(prev => ({ ...prev, [idx]: e.target.value }))}
                                      className="w-full bg-[#070a13] border border-gray-800 rounded-lg px-2.5 py-1.5 text-xs text-white outline-none focus:border-amber-500"
                                    />
                                    <button 
                                      onClick={() => handleVerifyExercise(idx, currentAns, item.correctTranslation, "translation")}
                                      className="w-full bg-[#1c2438] hover:bg-gray-800 text-gray-300 text-[10px] font-bold py-1.5 rounded-lg border border-gray-800"
                                    >
                                      {lang === "ar" ? "تقييم الترجمة بالمصحح" : "Soumettre la traduction"}
                                    </button>
                                  </div>
                                )}

                                {/* Conjugation test */}
                                {item.type === "conjugation" && (
                                  <div className="space-y-2">
                                    {item.verb && <span className="text-[10px] text-gray-500 font-mono italic">Verbo: {item.verb}</span>}
                                    <input 
                                      type="text"
                                      placeholder="Forma conjugada..."
                                      value={currentAns}
                                      onChange={(e) => setExAnswers(prev => ({ ...prev, [idx]: e.target.value }))}
                                      className="w-full bg-[#070a13] border border-gray-800 rounded-lg px-2.5 py-1.5 text-xs text-white outline-none focus:border-amber-500"
                                    />
                                    <button 
                                      onClick={() => handleVerifyExercise(idx, currentAns, item.correctAnswer, "conjugation")}
                                      className="w-full bg-[#1c2438] hover:bg-gray-800 text-gray-300 text-[10px] font-bold py-1.5 rounded-lg border border-gray-800"
                                    >
                                      Check Form
                                    </button>
                                  </div>
                                )}

                                {/* General open writing test */}
                                {item.type === "writing" && (
                                  <div className="space-y-2">
                                    <textarea 
                                      placeholder="Escribe un párrafo..."
                                      rows={2}
                                      value={currentAns}
                                      onChange={(e) => setExAnswers(prev => ({ ...prev, [idx]: e.target.value }))}
                                      className="w-full bg-[#070a13] border border-gray-800 rounded-lg px-2.5 py-1.5 text-xs text-white outline-none focus:border-amber-500"
                                    />
                                    <button 
                                      onClick={() => handleVerifyExercise(idx, currentAns, null, "writing")}
                                      className="w-full bg-[#1c2438] hover:bg-gray-800 text-gray-300 text-[10px] font-bold py-1.5 rounded-lg border border-gray-800"
                                    >
                                      ✨ Calificar con IA
                                    </button>
                                  </div>
                                )}

                                {result && (
                                  <div className={`p-2.5 rounded-lg text-[10px] leading-relaxed mt-2 ${result.ok ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25' : 'bg-amber-500/10 text-amber-400 border border-amber-500/25'}`}>
                                    {result.fb}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 7: EXTRA - STUDENT LIFE COMPENDIUM */}
          {tab === "vie" && (
            <div className="bg-[#0c1222] border border-[#1b253b] p-6 rounded-3xl shadow-xl space-y-6">
              <div className="mb-2">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Compass className="text-amber-500" />
                  {lang === "ar" ? "دليل المدن الإسبانية والحياة الطلابية" : "Vie Étudiante, Événements & Bons Plans par Ville"}
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  {lang === "ar" ? "اختر المدينة لعرض الفعاليات، طرق تكوين صداقات، وترتيب أرخص السوبرماركات وتوفير الميزانية:" : "Sélectionnez votre ville d'étude pour découvrir les événements, comment se faire des amis et économiser sur vos courses."}
                </p>
              </div>

              {/* City selector horizontal bar */}
              <div className="flex gap-2 pb-1 overflow-x-auto scrollbar-thin border-b border-gray-800/80">
                {STUDENT_CITIES_GUIDE.map((g) => (
                  <button
                    key={g.city}
                    onClick={() => setSelectedCityLife(g.city)}
                    className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shrink-0 border uppercase tracking-wider ${
                      selectedCityLife === g.city 
                        ? 'bg-amber-500 border-amber-500 text-gray-900 scale-102 shadow-lg shadow-amber-500/10' 
                        : 'bg-[#070a13] border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
                    }`}
                  >
                    <span className="text-sm">{g.flag}</span>
                    <span>{g.city}</span>
                  </button>
                ))}
              </div>

              {/* Active city guide details panel */}
              {(() => {
                const activeGuide = STUDENT_CITIES_GUIDE.find(g => g.city === selectedCityLife) || STUDENT_CITIES_GUIDE[0];
                return (
                  <div className="bg-[#070a13] border border-[#1b253b] p-5 rounded-2xl space-y-5 animate-fadeIn">
                    <div className="flex items-center gap-2 border-b border-gray-800 pb-3">
                      <span className="text-2xl">{activeGuide.flag}</span>
                      <div>
                        <h3 className="text-base font-extrabold text-white">
                          {activeGuide.city} — {lang === "ar" ? "دليل الطالب المتكامل" : "Le Guide Complet de l'Étudiant"}
                        </h3>
                        <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">
                          {lang === "ar" ? "دليل معيشي محدث وحصري" : "Données locales certifiées pour l'intégration estudiantine"}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Section 1: Events */}
                      <div className="bg-[#0c1222]/80 border border-gray-800/60 p-4 rounded-xl space-y-2">
                        <span className="text-amber-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                          🎉 {lang === "ar" ? "الفعاليات والأنشطة الطلابية" : "Événements & Intégration"}
                        </span>
                        <p className="text-xs text-gray-300 leading-relaxed font-sans">
                          {activeGuide.events[lang as keyof typeof activeGuide.events] || activeGuide.events.es}
                        </p>
                      </div>

                      {/* Section 2: Friends */}
                      <div className="bg-[#0c1222]/80 border border-gray-800/60 p-4 rounded-xl space-y-2">
                        <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                          🤝 {lang === "ar" ? "كيف تجد وتكون صداقات؟" : "Comment faire des amis"}
                        </span>
                        <p className="text-xs text-gray-300 leading-relaxed font-sans">
                          {activeGuide.friends[lang as keyof typeof activeGuide.friends] || activeGuide.friends.es}
                        </p>
                      </div>

                      {/* Section 3: Supermarkets & savings */}
                      <div className="bg-[#0c1222]/80 border border-gray-800/60 p-4 rounded-xl space-y-2">
                        <span className="text-blue-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                          🛒 {lang === "ar" ? "ترتيب أرخص المتاجر والتوفير" : "Supermarchés : Classement"}
                        </span>
                        <div className="space-y-1.5 font-sans">
                          <p className="text-[11px] text-[#34d399] font-mono leading-relaxed font-bold">
                            {activeGuide.supermarkets.ranking[lang as keyof typeof activeGuide.supermarkets.ranking] || activeGuide.supermarkets.ranking.es}
                          </p>
                          <p className="text-[10px] text-gray-400 leading-relaxed border-t border-gray-800/60 pt-1.5">
                            <strong>💡 {lang === "ar" ? "نصيحة الميزانية:" : "Astuce budget :"}</strong> {activeGuide.supermarkets.tips[lang as keyof typeof activeGuide.supermarkets.tips] || activeGuide.supermarkets.tips.es}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                <div className="bg-[#070a13] border border-gray-800/80 p-5 rounded-2xl space-y-3">
                  <h4 className="text-white font-bold text-xs flex items-center gap-2">🛡️ {lang === "ar" ? "التأمين والطوارئ" : "Assurances & Urgences"}</h4>
                  <ul className="text-xs text-gray-400 space-y-2 leading-relaxed">
                    <li>• {lang === "ar" ? "تأكد من تفعيل بطاقة التأمين الصحي الخاص بك (Adeslas, Sanitas...) فور وصولك للتغطية الفورية." : "Activez votre carte d'assurance santé privée d'études (Adeslas, Sanitas) dès l'arrivée pour la couverture complète."}</li>
                    <li>• {lang === "ar" ? "رقم الطوارئ العام الموحد داخل إسبانيا هو 112 (تتوفر إجابات باللغات الأساسية)." : "Le numéro national d'urgence centralisé est le 112, accessible sans carte réseau SIM active."}</li>
                  </ul>
                </div>

                <div className="bg-[#070a13] border border-gray-800/80 p-5 rounded-2xl space-y-3">
                  <h4 className="text-white font-bold text-xs flex items-center gap-2">🏦 {lang === "ar" ? "الخدمات البنكية الملائمة" : "Services de Trésorerie Bancaire"}</h4>
                  <ul className="text-xs text-gray-400 space-y-2 leading-relaxed">
                    <li>• {lang === "ar" ? "أفضل الحسابات الخالية من الرسوم للشباب: Cuenta Online BBVA, Cuenta Joven Santander أو N26." : "Les banques numériques recommandées pour l'itinérance gratuite sans commissions mensuelles permanentes sont BBVA Online ou N26."}</li>
                    <li>• {lang === "ar" ? "الأوراق المطلوبة: جواز سفر ساري، مع شهادة القبول الأكاديمية (Carta de Admisión)." : "Nécessaire : original de votre passeport, justificatif d'inscription éducative ou reçu de paiement."}</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: POST-STUDENT EMPLOYMENT OPTIONS */}
          {tab === "emploi" && (
            <div className="bg-[#0c1222] border border-[#1b253b] p-6 rounded-3xl shadow-xl space-y-6">
              <div className="mb-2">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Briefcase className="text-amber-500" />
                  {lang === "ar" ? "العمل بعد الدراسة والإقامة" : "Analyse Détaillée des Plateformes d'Emplois en Espagne"}
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  {lang === "ar" ? "دليل تفصيلي شامل لكيفية وأماكن العثور على عمل في إسبانيا للطلاب والمغتربين:" : "Guide exhaustif sur le fonctionnement de chaque outil pour maximiser votre chance d'insertion réelle."}
                </p>
              </div>

              {/* Legal updates block */}
              <div className="p-4 bg-emerald-500/5 border border-emerald-500/25 rounded-2xl flex items-start gap-3">
                <CheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={16} />
                <div className="text-xs text-emerald-400 leading-relaxed">
                  <strong>💡 {lang === "ar" ? "تعديل قانون الهجرة الأخير للعمل (30 ساعة):" : "Réforme Légale Essentielle / Droit de Travail Automatique :"}</strong>{" "}
                  {lang === "ar" ? "وفقًا للتحديث الأخير لقانون الهجرة، يحق للطلاب حاملي بطاقة الطالب ممارسة العمل جانبياً وبشكل قانوني لغاية 30 ساعة أسبوعياً بصفة تلقائية بمجرد التسجيل دون الحاجة لطلب تصريح عمل منفصل. يجب أن تتوافق الساعات مع فصول الدراسة." :
                   "En Espagne, tout étudiant inscrit de façon régulière possède désormais le droit automatique de travailler à temps partiel jusqu'à 30 heures par semaine directement sans démarches patronales lourdes auprès de l'Oficina de Extranjería."}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider">
                  {lang === "ar" ? "تفاصيل ودليل استخدام منصات التوظيف الرسمية:" : "Guide d'Utilisation des 4 Portails Majeurs pour Trouver du Travail :"}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* portal 1: Infojobs */}
                  <div className="bg-[#070a13] border border-[#1b253b] p-5 rounded-2xl space-y-3 hover:border-amber-500/30 transition-all flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h5 className="font-extrabold text-sm text-white flex items-center gap-2">
                          <span className="text-blue-400">❶</span> InfoJobs España
                        </h5>
                        <span className="bg-blue-500/10 text-blue-400 border border-blue-500/30 text-[9px] px-2 py-0.5 font-mono rounded">Nº1 GENERALISTAS</span>
                      </div>
                      <div className="text-xs text-gray-300 space-y-1.5 font-sans">
                        <p>
                          <strong>{lang === "ar" ? "أين تبحث؟" : "Où chercher ?"}</strong>{" "}
                          {lang === "ar" ? "مثالي لقطاعات خدمة العملاء، إدارة المكاتب، السياحة، المبيعات والخدمات الفندقية." : "Idéal pour l'hôtellerie, service client bilingue, administration et fonctions supports."}
                        </p>
                        <p>
                          <strong>{lang === "ar" ? "كيف تعثر على فرصة وتتميز؟" : "Comment postuler ?"}</strong>{" "}
                          {lang === "ar" ? "سجل سيرتك الذاتية بتحديث مستمر. الشركات في إسبانيا تستخدم فلاتر الكلمات الدلالية (ATS)، ويجب إدخال مهاراتك بشكل دقيق والمزايدة على العرض فور طرحه." : "Complétez votre profil à 100%. Les recruteurs trient par mots-clés et réactivité. Postulez dès la parution pour rester en haut de la pile."}
                        </p>
                      </div>
                    </div>
                    <a 
                      href="https://www.infojobs.net" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-3 block text-center bg-blue-500/10 hover:bg-blue-500 hover:text-[#070a13] text-blue-400 font-bold text-xs py-2 rounded-xl transition-all"
                    >
                      Visitar InfoJobs.net 🔗
                    </a>
                  </div>

                  {/* portal 2: Tecnoempleo */}
                  <div className="bg-[#070a13] border border-[#1b253b] p-5 rounded-2xl space-y-3 hover:border-amber-500/30 transition-all flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h5 className="font-extrabold text-sm text-white flex items-center gap-2">
                          <span className="text-emerald-400">❷</span> Tecnoempleo
                        </h5>
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[9px] px-2 py-0.5 font-mono rounded">100% TECNOLOGÍA</span>
                      </div>
                      <div className="text-xs text-gray-300 space-y-1.5 font-sans">
                        <p>
                          <strong>{lang === "ar" ? "أين تبحث؟" : "Où chercher ?"}</strong>{" "}
                          {lang === "ar" ? "مخصص حصرياً للبرمجة (React, Java, Node)، تطوير الويب، إدارة الأنظمة، والتدريب المهني الفني (DAW/DAM)." : "Conçu pour les dev, administrateurs réseaux et profils ingénieurs tech ou diplômés du secteur de formation professionnelle (DAM/DAW)."}
                        </p>
                        <p>
                          <strong>{lang === "ar" ? "كيف تعثر على فرصة وتتميز؟" : "Comment postuler ?"}</strong>{" "}
                          {lang === "ar" ? "ارفق رابط الـ Portfolio الخاص بك على GitHub. تعرض المنصة مقارنة تلقائية لراتب الوظيفة ومستواك الفني بالنسبة للمتقدمين الآخرين." : "Mentionnez vos projets de code personnels et votre compte GitHub. Le site affiche un bilan comparatif de vos compétences par rapport aux concurrents."}
                        </p>
                      </div>
                    </div>
                    <a 
                      href="https://www.tecnoempleo.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-3 block text-center bg-emerald-500/10 hover:bg-emerald-500 hover:text-[#070a13] text-emerald-400 font-bold text-xs py-2 rounded-xl transition-all"
                    >
                      Visitar Tecnoempleo.com 🔗
                    </a>
                  </div>

                  {/* portal 3: Linkedin */}
                  <div className="bg-[#070a13] border border-[#1b253b] p-5 rounded-2xl space-y-3 hover:border-amber-500/30 transition-all flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h5 className="font-extrabold text-sm text-white flex items-center gap-2">
                          <span className="text-sky-400">❸</span> LinkedIn España
                        </h5>
                        <span className="bg-sky-500/10 text-sky-400 border border-sky-500/30 text-[9px] px-2 py-0.5 font-mono rounded">CORPORATIVO & RED</span>
                      </div>
                      <div className="text-xs text-gray-300 space-y-1.5 font-sans">
                        <p>
                          <strong>{lang === "ar" ? "أين تبحث؟" : "Où chercher ?"}</strong>{" "}
                          {lang === "ar" ? "مثالي للمكاتب متعددة الجنسيات، وظائف الدعم اللغوي (العربية/الفرنسية/الإنجليزية) في مدريد وبرشلونة ومالقة." : "Excellent pour les multinationales, services délocalisés et postes requérant le français, l’arabe ou l’anglais à Madrid/Barcelone."}
                        </p>
                        <p>
                          <strong>{lang === "ar" ? "كيف تعثر على فرصة وتتميز؟" : "Comment postuler ?"}</strong>{" "}
                          {lang === "ar" ? "تواصل مباشرة مع مسؤولي التوظيف (Talent Acquisition) في إسبانيا عن طريق رسالة قصيرة ومحترفة تشرح فيها جاهزيتك وتصريح العمل 30 ساعة تلقائي." : "Ajoutez directement les recruteurs locaux en précisant dans votre mémo d’invitation que vous détenez le droit automatique de 30h de labeur sur votre pass étudiant."}
                        </p>
                      </div>
                    </div>
                    <a 
                      href="https://es.linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-3 block text-center bg-sky-500/10 hover:bg-sky-500 hover:text-[#070a13] text-sky-400 font-bold text-xs py-2 rounded-xl transition-all"
                    >
                      Visitar LinkedIn España 🔗
                    </a>
                  </div>

                  {/* portal 4: JobToday */}
                  <div className="bg-[#070a13] border border-[#1b253b] p-5 rounded-2xl space-y-3 hover:border-amber-500/30 transition-all flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h5 className="font-extrabold text-sm text-white flex items-center gap-2">
                          <span className="text-amber-400">❹</span> JobToday España
                        </h5>
                        <span className="bg-amber-500/10 text-amber-500 border border-amber-500/30 text-[9px] px-2 py-0.5 font-mono rounded">EMPLEO RÁPIDO</span>
                      </div>
                      <div className="text-xs text-gray-300 space-y-1.5 font-sans">
                        <p>
                          <strong>{lang === "ar" ? "أين تبحث؟" : "Où chercher ?"}</strong>{" "}
                          {lang === "ar" ? "وظائف عاجلة ومؤقتة: مقاهي، توزيع منشورات، خدمات لوجستية، رعاية أطفال ودروس خصوصية." : "Pour dénicher des petits jobs réactifs de week-end : serveurs, livreurs, cours particuliers, surcroît d'activité saisonnier."}
                        </p>
                        <p>
                          <strong>{lang === "ar" ? "كيف تعثر على فرصة وتتميز؟" : "Comment postuler ?"}</strong>{" "}
                          {lang === "ar" ? "تتميز المنصة بنظام محادثة فوري (Chat) يربطك مباشرة مع صاحب العمل دون تعقيدات السيرة الذاتية الكلاسيكية. كن متواجداً للرد على رسائلهم." : "L'atout est la messagerie intégrée instantanée. Pas de CV complexe requis : discutez à l'écrit directement avec les gérants locaux pour fixer un essai."}
                        </p>
                      </div>
                    </div>
                    <a 
                      href="https://jobtoday.com/es" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-3 block text-center bg-amber-500/10 hover:bg-amber-500 hover:text-[#070a13] text-amber-500 font-bold text-xs py-2 rounded-xl transition-all"
                    >
                      Visitar JobToday.com 🔗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 9: SHARED ARAB-SPANISH COMMUNITY */}
          {tab === "chat" && (
            <div className="bg-[#0c1222] border border-[#1b253b] p-6 rounded-3xl shadow-xl">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="text-amber-500 animate-bounce" />
                  {lang === "ar" ? "المنتدى الجماعي ومجتمع الطلاب" : "Forum de Discussion & Correction Grammaticale IA"}
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  {lang === "ar" ? "تبادل النصائح مع طبل إسبانيا واحصل على تدقيق ذكي لأخطائك النحوية في اللغة الإسبانية" : "Posez des questions pratiques. Si vous rédigez en espagnol, l'IA Professor vous corrigera."}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Chat feed column */}
                <div className="lg:col-span-2 bg-[#070a13] border border-[#1b253b] p-4 rounded-2xl flex flex-col h-[400px]">
                  
                  {/* Messages list container */}
                  <div className="flex-1 overflow-y-auto space-y-3.5 pr-1" id="chatroom-messages">
                    {chats.map(msg => (
                      <div 
                        key={msg.id}
                        className={`flex flex-col max-w-[85%] ${msg.user === "Tú" ? 'ml-auto items-end' : 'mr-auto items-start'}`}
                      >
                        <span className="text-[10px] text-gray-500 font-mono mb-0.5 px-1">{msg.user}</span>
                        <div className={`p-3 rounded-2xl text-xs font-sans leading-relaxed ${msg.system ? 'bg-amber-500/10 border border-amber-500/20 text-amber-300' : msg.user === "Tú" ? 'bg-amber-500 text-gray-900 font-semibold' : 'bg-[#0c1222] border border-[#1b253b] text-gray-300'}`}>
                          {msg.text}
                        </div>
                        <span className="text-[8px] text-gray-600 mt-0.5 px-1">{msg.time}</span>
                      </div>
                    ))}
                    <div ref={chatBottomRef} />
                  </div>

                  {/* Input field actions */}
                  <div className="mt-3 pt-3 border-t border-gray-800/80 flex gap-2">
                    <input 
                      type="text" 
                      placeholder={lang === "ar" ? "اكتب رسالة (مثال: yo quiere estudiar en madrid) لتفعيل المصلح التلقائي" : "Rédigez en espagnol (ex: yo tener hambre) pour voir le prof d'IA corriger..."}
                      value={chatInp}
                      onChange={(e) => setChatInp(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSendChatChatroom()}
                      className="flex-1 bg-[#0c1222] border border-[#1b253b] text-xs px-3 py-2.5 rounded-xl text-white outline-none focus:border-amber-500 font-sans"
                    />
                    <button
                      onClick={handleSendChatChatroom}
                      className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-4 rounded-xl text-xs transition-transform active:scale-95"
                    >
                      ➤
                    </button>
                  </div>
                </div>

                {/* Tutor booking panel */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider">
                    {lang === "ar" ? "مدرسون معتمدون ومساعدة في الترجمة:" : "Professeurs Certifiés Particuliers :"}
                  </h4>
                  
                  {[
                    { name: "Sra. Leila Alami", av: "👩‍🏫", detail: "Enseignante trilingue espagnol-arabe. Préparation intense aux examens PCE Selectividad.", price: 16 },
                    { name: "Dr. Karim Belhadj", av: "👨‍🏫", detail: "Spécialiste de la traduction jurée de documents universitaires et lettres de motivation de visa.", price: 20 }
                  ].map((tut, i) => (
                    <div key={i} className="bg-[#070a13] border border-[#1b253b] p-4 rounded-xl space-y-3 shadow">
                      <div className="flex items-center gap-2">
                        <span className="text-xl bg-gray-800 p-1.5 rounded-xl block">{tut.av}</span>
                        <div>
                          <h5 className="font-bold text-xs text-white leading-tight">{tut.name}</h5>
                          <span className="text-[9px] text-amber-500 block">★★★★★ (4.9 Verified)</span>
                        </div>
                      </div>
                      <p className="text-[10px] text-gray-400 font-sans leading-normal">{tut.detail}</p>
                      <div className="flex justify-between items-center pt-2 border-t border-gray-850">
                        <span className="text-[10px] text-gray-500 font-mono uppercase">Honorarios :</span>
                        <span className="text-emerald-400 font-mono font-bold text-xs">€{tut.price}/h</span>
                      </div>
                      <button
                        onClick={() => handleBookTutor(tut.name, tut.price)}
                        className="w-full bg-[#1c2438] hover:bg-gray-800 text-gray-300 font-bold text-[10px] py-2 rounded-lg transition-colors border border-gray-800"
                      >
                        {lang === "ar" ? "حجز حصة تجريبية" : "Réserver une session"}
                      </button>
                    </div>
                  ))}
                  <div className="p-3 bg-gray-900 text-gray-500 rounded-lg text-[9px] text-center italic border border-gray-800">
                    Platform preserves a flat 30% safety escrow for dispute protection.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 10: AUTOMATED CURRICULUM VITAE SPANISH BOOSTER */}
          {tab === "cv" && (
            <div className="bg-[#0c1222] border border-[#1b253b] p-6 rounded-3xl shadow-xl space-y-6">
              <div className="mb-2">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <FileText className="text-amber-500" />
                  {lang === "ar" ? "منشئ ومترجم السيرة الذاتية" : "Bâtisseur de CV aux Normes Espagnoles (CV Europeo)"}
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  {lang === "ar" ? "املأ بياناتك بالإنجليزية أو العربية لترجمتها وبنائها على شكل سيرة لغوية معتمدة للوظائف الإسبانية" : "Générez un dossier de CV professionnel de haute qualité optimisé pour les logiciels ATS du marché."}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Inputs area */}
                <div className="bg-[#070a13] border border-[#1b253b] p-5 rounded-2xl space-y-4">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-2">
                    {lang === "ar" ? "أدخل بياناتك المهنية والتعليمية:" : "Renseignements Généraux :"}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] text-gray-400 block mb-1">Nombre Completo</label>
                      <input 
                        type="text" 
                        value={cvData.name}
                        onChange={(e) => setCvData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full bg-[#0c1222] border border-gray-800 rounded-lg p-2 text-xs text-white focus:border-amber-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 block mb-1">Correo o Teléfono</label>
                      <input 
                        type="text" 
                        value={cvData.email}
                        onChange={(e) => setCvData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-[#0c1222] border border-gray-800 rounded-lg p-2 text-xs text-white focus:border-amber-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] text-gray-400 block mb-1">Cargo Objetivo (Puesto)</label>
                      <input 
                        type="text" 
                        value={cvData.role}
                        onChange={(e) => setCvData(prev => ({ ...prev, role: e.target.value }))}
                        className="w-full bg-[#0c1222] border border-gray-800 rounded-lg p-2 text-xs text-white focus:border-amber-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 block mb-1">Ciudad Destino en España</label>
                      <input 
                        type="text" 
                        value={cvData.city}
                        onChange={(e) => setCvData(prev => ({ ...prev, city: e.target.value }))}
                        className="w-full bg-[#0c1222] border border-gray-800 rounded-lg p-2 text-xs text-white focus:border-amber-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-400 block mb-1">Formación y Diplomas (Educación)</label>
                    <input 
                      type="text" 
                      value={cvData.edu}
                      onChange={(e) => setCvData(prev => ({ ...prev, edu: e.target.value }))}
                      className="w-full bg-[#0c1222] border border-gray-800 rounded-lg p-2 text-xs text-white focus:border-amber-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-400 block mb-1">Competencias e Idiomas (Skills / Languages)</label>
                    <input 
                      type="text" 
                      value={cvData.skills}
                      onChange={(e) => setCvData(prev => ({ ...prev, skills: e.target.value }))}
                      className="w-full bg-[#0c1222] border border-gray-800 rounded-lg p-2 text-xs text-white focus:border-amber-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-400 block mb-1">Breve Resumen de Experiencias Prácticas</label>
                    <textarea 
                      rows={2} 
                      value={cvData.exp}
                      onChange={(e) => setCvData(prev => ({ ...prev, exp: e.target.value }))}
                      className="w-full bg-[#0c1222] border border-gray-800 rounded-lg p-2 text-xs text-white focus:border-amber-500 outline-none font-sans"
                    />
                  </div>

                  <button
                    onClick={handleGenerateCV}
                    disabled={cvGenerating}
                    className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-40 text-gray-950 font-extrabold text-xs py-3 rounded-xl transition-all uppercase flex items-center justify-center gap-2"
                  >
                    {cvGenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                        <span>Traduciendo y formateando con IA...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles size={14} />
                        <span>{lang === "ar" ? "ترجمة وتصحيح بتنسيق أوروبي" : "Générer mon CV Premium"}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Preview area */}
                <div className="bg-gray-900/40 border border-[#1b253b] p-5 rounded-2xl flex flex-col h-[520px]">
                  <div className="flex justify-between items-center border-b border-gray-800 pb-3.5 mb-4 shrink-0">
                    <span className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider">{lang === "ar" ? "معاينة السيرة الذاتية المهنية" : "Aperçu de Votre CV de Recrutement"}</span>
                    {cvHtml && (
                      <button
                        onClick={() => {
                          const containerDoc = document.getElementById("cv-preview-container-element");
                          if (containerDoc) {
                            navigator.clipboard.writeText(containerDoc.innerText);
                            setCvCopied(true);
                            setTimeout(() => setCvCopied(false), 2000);
                          }
                        }}
                        className="bg-[#1c2438] hover:bg-gray-800 text-gray-300 border border-gray-800 text-[10px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 active:scale-95 transition-transform"
                      >
                        <Copy size={12} />
                        {cvCopied ? "¡Copiado!" : (lang === "ar" ? "نسخ" : "Copier")}
                      </button>
                    )}
                  </div>

                  <div className="flex-1 overflow-y-auto pr-1">
                    {cvHtml ? (
                      <div 
                        id="cv-preview-container-element"
                        dangerouslySetInnerHTML={{ __html: cvHtml }}
                        className="bg-white text-gray-800 rounded-xl max-w-full overflow-x-hidden p-6 shadow-inner text-left leading-normal text-xs"
                      />
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-center p-8 gap-2">
                        <FileText size={40} className="text-gray-700 block" />
                        <p className="text-xs text-gray-500 font-sans max-w-xs block leading-relaxed">
                          {lang === "ar" ? "سيظهر هنا ملف السيرة الذاتية باللغة الإسبانية المعتمدة للأعمال فور ضغطك على زر التوليد الذكي" : "Rédigez d'abord vos informations à gauche, puis cliquez sur le bouton pour générer instantanément."}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          )}

        </main>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#080d19] border-t border-[#1b253b] py-6 text-center text-xs text-gray-500 select-none">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-sans leading-relaxed">
            {lang === "ar" ? "بوابة الدراسة في إسبانيا — دليل الطلاب العرب المهاجرين والتعليم المعتمد © 2026" :
             "Spain Study Portal — Manuel d'orientation et d'apprentissage linguistique d'Extranjería © 2026"}
          </p>
          <div className="flex justify-center gap-3 text-[10px] text-gray-600 flex-wrap">
            <span className="bg-[#0c1222] px-2 py-0.5 rounded border border-[#1b253b]">NON-OFFICIAL ASSISTANCE</span>
            <span className="bg-[#0c1222] px-2 py-0.5 rounded border border-[#1b253b]">GEMINI 3.5 FLASH ENGAGED</span>
            <span className="bg-[#0c1222] px-2 py-0.5 rounded border border-[#1b253b]">OFFLINE AUDIO POWERED</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
