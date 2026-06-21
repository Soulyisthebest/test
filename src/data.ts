export interface Language {
  code: string;
  label: string;
  flag: string;
}

export const LANGUAGES: Language[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ar', label: 'العربية', flag: '🇪🇬' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' }
];

export interface NavItem {
  key: string;
  icon: string;
  en: string;
  ar: string;
  fr: string;
  es: string;
}

export const NAV_ITEMS: NavItem[] = [
  { key: 'roadmap', icon: '🗺️', en: 'Full Roadmap', ar: 'خارطة الطريق الكاملة', fr: 'Feuille de Route', es: 'Hoja de Ruta' },
  { key: 'visa', icon: '🎫', en: 'Visa by Country', ar: 'التأشيرة حسب البلد', fr: 'Visa par Pays', es: 'Visado por País' },
  { key: 'formations', icon: '🎓', en: 'Study Programs', ar: 'برامج الدراسة', fr: 'Formations', es: 'Formaciones' },
  { key: 'transport', icon: '🚇', en: 'Transport Cards', ar: 'بطاقات النقل', fr: 'Cartes Transport', es: 'Tarjetas Transporte' },
  { key: 'logement', icon: '🏠', en: 'Housing', ar: 'السكن الطلابي', fr: 'Logement', es: 'Alojamiento' },
  { key: 'ebook', icon: '📚', en: 'Spanish Course A1→C2', ar: 'دورة الإسبانية A1→C2', fr: 'Cours Espagnol A1→C2', es: 'Curso Español A1→C2' },
  { key: 'vie', icon: '🏪', en: 'Student Life', ar: 'الحياة الطلابية', fr: 'Vie Étudiante', es: 'Vida Estudiantil' },
  { key: 'emploi', icon: '💼', en: 'Employment', ar: 'العمل بعد الدراسة', fr: 'Emploi', es: 'Empleo' },
  { key: 'chat', icon: '💬', en: 'Community', ar: 'المجتمع', fr: 'Communauté', es: 'Comunidad' },
  { key: 'cv', icon: '📄', en: 'CV Builder', ar: 'منشئ السيرة', fr: 'CV Espagnol', es: 'Generador de CV' }
];

export interface RoadmapStep {
  n: number;
  en: string;
  ar: string;
  fr: string;
  es: string;
  sub: { en: string; ar: string; fr: string; es: string };
  tags: { en: string[]; ar: string[]; fr: string[]; es: string[] };
}

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    n: 1,
    en: 'Choose your program in Spain',
    ar: 'اختيار البرنامج الدراسي في إسبانيا',
    fr: 'Choisir votre formation en Espagne',
    es: 'Elegir tu formación en España',
    sub: {
      en: 'Research FP Grado Superior, University, Master or Doctorate. Consider city, budget, language level and career goals.',
      ar: 'ابحث عن FP Grado Superior أو الجامعة أو الماجستير أو الدكتوراه. ضع في الاعتبار المدينة والميزانية ومستوى اللغة والأهداف المهنية.',
      fr: 'Recherchez FP Grado Superior, université, master ou doctorat. Considérez la ville, le budget, le niveau de langue et les objectifs professionnels.',
      es: 'Investiga FP Grado Superior, universidad, máster o doctorado. Considera ciudad, presupuesto, nivel de idioma y objetivos profesionales.'
    },
    tags: {
      en: ['Research', 'Compare', 'Decide'],
      ar: ['بحث', 'مقارنة', 'قرار'],
      fr: ['Recherche', 'Comparer', 'Décision'],
      es: ['Investigación', 'Comparar', 'Decisión']
    }
  },
  {
    n: 2,
    en: 'Get your diploma recognized (Homologación)',
    ar: 'معادلة الشهادة (Homologación)',
    fr: 'Faire reconnaître votre diplôme (Homologación)',
    es: 'Homologación del título',
    sub: {
      en: 'Submit your diploma for official recognition by the Spanish Ministry of Education. Required for FP and University access. Processing time: 6-18 months. Apply EARLY.',
      ar: 'قدم شهادتك للاعتراف الرسمي من وزارة التعليم الإسبانية. مطلوبة للوصول إلى FP والجامعة. وقت المعالجة: 6-18 شهراً. تقدم مبكراً.',
      fr: "Soumettez votre diplôme à la reconnaissance officielle du Ministère de l'Éducation espagnol. Délai: 6-18 mois. Postulez TÔT.",
      es: 'Presenta tu título al Ministerio de Educación para reconocimiento oficial. Tiempo: 6-18 meses. Solicítalo PRONTO.'
    },
    tags: {
      en: ['Ministry of Education', '6-18 months', 'Key step'],
      ar: ['وزارة التعليم', '6-18 شهراً', 'خطوة أساسية'],
      fr: ['Ministère', '6-18 mois', 'Étape clé'],
      es: ['MEFD', '6-18 meses', 'Paso clave']
    }
  },
  {
    n: 3,
    en: 'Get admission from the institution',
    ar: 'الحصول على القبول من المؤسسة',
    fr: "Obtenir l'admission de l'établissement",
    es: 'Obtener la admisión del centro',
    sub: {
      en: 'Contact the school, FP center or university directly. Get the official Carta de Admisión. Minimum 20 hours/week. This document is essential for the visa.',
      ar: 'تواصل مع المدرسة أو مركز FP أو الجامعة مباشرة. احصل على رسالة القبول الرسمية. 20 ساعة أسبوعياً على الأقل. هذه الوثيقة ضرورية للتأشيرة.',
      fr: "Contactez directement l'école ou l'université. Obtenez la Carta de Admisión officielle. Min. 20h/semaine. Document essentiel pour le visa.",
      es: 'Contacta directamente con el centro. Obtén la Carta de Admisión oficial. Mínimo 20h/semana. Documento esencial para el visado.'
    },
    tags: {
      en: ['Carta de Admisión', '20h/week', 'Required for visa'],
      ar: ['رسالة القبول', '20 ساعة/أسبوع', 'مطلوبة للتأشيرة'],
      fr: ['Carta de Admisión', '20h/semaine', 'Obligatoire visa'],
      es: ['Carta de Admisión', '20h/semana', 'Obligatorio visado']
    }
  },
  {
    n: 4,
    en: 'Prepare and submit visa application',
    ar: 'تحضير وتقديم طلب التأشيرة',
    fr: 'Préparer et soumettre la demande de visa',
    es: 'Preparar y presentar solicitud de visado',
    sub: {
      en: 'Submit to Spanish consulate in your country. Requirements vary by nationality (see Visa section). Average processing: 1-3 months.',
      ar: 'قدم إلى القنصلية الإسبانية في بلدك. المتطلبات تختلف حسب الجنسية (انظر قسم التأشيرة). المعالجة: 1-3 أشهر.',
      fr: 'Soumettez au consulat espagnol dans votre pays. Exigences selon nationalité (voir section Visa). Traitement: 1-3 mois.',
      es: 'Presenta en el consulado español en tu país. Requisitos según nacionalidad (ver sección Visado). Tramitación: 1-3 meses.'
    },
    tags: {
      en: ['Consulate', '1-3 months', 'Varies by country'],
      ar: ['القنصلية', '1-3 أشهر', 'يختلف حسب البلد'],
      fr: ['Consulat', '1-3 mois', 'Variable'],
      es: ['Consulado', '1-3 meses', 'Variable']
    }
  },
  {
    n: 5,
    en: 'Arrange health insurance & finances',
    ar: 'ترتيب التأمين الصحي والتمويل',
    fr: 'Arranger assurance santé & finances',
    es: 'Tramitar seguro médico y finanzas',
    sub: {
      en: 'Private health insurance (sin copago) is mandatory. Also open a student bank account if possible. Ensure €600/month minimum funds.',
      ar: 'التأمين الصحي الخاص (sin copago) إلزامي. افتح حساباً بنكياً إن أمكن. تأكد من توفر 600 يورو شهرياً على الأقل.',
      fr: 'Assurance santé privée (sin copago) obligatoire. Ouvrez un compte bancaire étudiant. Assurez 600€/mois minimum.',
      es: 'Seguro médico privado (sin copago) obligatorio. Abre cuenta bancaria estudiante. Asegura 600€/mes mínimo.'
    },
    tags: {
      en: ['Sanitas/Adeslas', '€300-500/year', 'Mandatory'],
      ar: ['Sanitas/Adeslas', '300-500 يورو/سنة', 'إلزامي'],
      fr: ['Sanitas/Adeslas', '300-500€/an', 'Obligatoire'],
      es: ['Sanitas/Adeslas', '300-500€/año', 'Obligatorio']
    }
  },
  {
    n: 6,
    en: 'Arrive in Spain & register at institution',
    ar: 'الوصول إلى إسبانيا والتسجيل',
    fr: "Arriver en Espagne & s'inscrire",
    es: 'Llegar a España e inscribirse',
    sub: {
      en: 'Present your visa at the border. Register at your school within the first days. Keep all documents accessible.',
      ar: 'قدم تأشيرتك عند الحدود. سجل في مدرستك خلال الأيام الأولى. احتفظ بجميع الوثائق في متناول يدك.',
      fr: "Présentez votre visa à la frontière. Inscrivez-vous à votre école dans les premiers jours. Gardez tous les documents accessibles.",
      es: 'Presenta tu visado en la frontera. Regístrate en tu centro en los primeros días. Ten todos los documentos a mano.'
    },
    tags: {
      en: ['First days', 'Register', 'Documents ready'],
      ar: ['الأيام الأولى', 'تسجيل', 'الوثائق جاهزة'],
      fr: ['Premiers jours', 'Inscription', 'Documents prêts'],
      es: ['Primeros días', 'Inscripción', 'Documentos listos']
    }
  },
  {
    n: 7,
    en: 'Empadronamiento (Town Hall Registration)',
    ar: 'التسجيل في بلدية المدينة (Empadronamiento)',
    fr: 'Empadronamiento (Inscription mairie)',
    es: 'Empadronamiento municipal',
    sub: {
      en: 'Register your address at the Ayuntamiento within 30 days. Required for most administrative procedures. Book "Cita Previa" online.',
      ar: 'سجل عنوانك في البلدية خلال 30 يوماً. مطلوب لمعظم الإجراءات الإدارية. احجز "Cita Previa" عبر الإنترنت.',
      fr: 'Enregistrez votre adresse à la mairie dans les 30 jours. Requis pour la plupart des démarches. Réservez "Cita Previa" en ligne.',
      es: 'Registra tu dirección en el Ayuntamiento en los primeros 30 días. Necesario para casi todos los trámites. Reserva "Cita Previa" online.'
    },
    tags: {
      en: ['30 days', 'Ayuntamiento', 'Cita Previa'],
      ar: ['30 يوماً', 'البلدية', 'Cita Previa'],
      fr: ['30 jours', 'Mairie', 'Cita Previa'],
      es: ['30 días', 'Ayuntamiento', 'Cita Previa']
    }
  },
  {
    n: 8,
    en: 'Apply for TIE (Residency Card) if >180 days',
    ar: 'التقدم بطلب TIE (بطاقة الإقامة) إذا >180 يوماً',
    fr: 'Demander la TIE (carte de résident) si >180 jours',
    es: 'Solicitar TIE si estancia >180 días',
    sub: {
      en: 'If your program exceeds 180 days, you MUST apply for the TIE card at Extranjería within 30 days of arrival. Appointment online via Sede Electrónica.',
      ar: 'إذا تجاوز برنامجك 180 يوماً، يجب عليك التقدم لبطاقة TIE في مكتب الأجانب خلال 30 يوماً من الوصول. الحجز عبر الإنترنت.',
      fr: 'Si votre programme dépasse 180 jours, vous DEVEZ demander la TIE à Extranjería dans les 30 jours. RDV en ligne sur Sede Electrónica.',
      es: 'Si tu programa supera los 180 días, DEBES solicitar la TIE en Extranjería dentro de los 30 días de tu llegada.'
    },
    tags: {
      en: ['Extranjería', '30 days max', 'MANDATORY'],
      ar: ['مكتب الأجانب', '30 يوم أقصى', 'إلزامي'],
      fr: ['Extranjería', '30 jours max', 'OBLIGATOIRE'],
      es: ['Extranjería', '30 días máx', 'OBLIGATORIO']
    }
  },
  {
    n: 9,
    en: 'Study, integrate & build your network',
    ar: 'الدراسة والاندماج وبناء شبكة العلاقات',
    fr: "Étudier, s'intégrer & construire son réseau",
    es: 'Estudiar, integrarse y construir tu red',
    sub: {
      en: 'Focus on studies. Join student associations. Improve your Spanish level. Do internships. Start building professional connections from year 1.',
      ar: 'ركز على الدراسة. انضم إلى الجمعيات الطلابية. حسّن مستواك في الإسبانية. قم بالتدريبات المهنية. ابدأ في بناء الشبكة المهنية من السنة الأولى.',
      fr: 'Concentrez-vous sur les études. Rejoignez des associations. Améliorez votre espagnol. Faites des stages. Construisez votre réseau professionnel dès l\'année 1.',
      es: 'Céntrate en los estudios. Únete a asociaciones. Mejora tu español. Haz prácticas. Construye tu red profesional desde el año 1.'
    },
    tags: {
      en: ['Studies', 'Network', 'Internships'],
      ar: ['الدراسة', 'الشبكة', 'التدريبات'],
      fr: ['Études', 'Réseau', 'Stages'],
      es: ['Estudios', 'Red', 'Prácticas']
    }
  },
  {
    n: 10,
    en: 'Job search & work authorization',
    ar: 'البحث عن عمل والتصريح بالعمل',
    fr: "Recherche d'emploi & autorisation de travail",
    es: 'Búsqueda de empleo y autorización de trabajo',
    sub: {
      en: 'Students can work up to 30h/week automatically. After studies: apply for work permit renewal. Platforms: InfoJobs, LinkedIn, Indeed España.',
      ar: 'يمكن للطلاب العمل 30 ساعة أسبوعياً تلقائياً. بعد الدراسة: التقدم لتجديد تصريح العمل. المنصات: InfoJobs, LinkedIn, Indeed España.',
      fr: "Étudiants: jusqu'à 30h/sem automatiquement. Après études: renouvellement permis travail. Plateformes: InfoJobs, LinkedIn, Indeed España.",
      es: 'Estudiantes: hasta 30h/sem automáticamente. Tras los estudios: renovación del permiso. Plataformas: InfoJobs, LinkedIn, Indeed España.'
    },
    tags: {
      en: ['30h/week', 'Work permit', 'InfoJobs'],
      ar: ['30 ساعة/أسبوع', 'تصريح عمل', 'InfoJobs'],
      fr: ['30h/semaine', 'Permis travail', 'InfoJobs'],
      es: ['30h/semana', 'Permiso trabajo', 'InfoJobs']
    }
  },
  {
    n: 11,
    en: 'Long-term residency & arraigo',
    ar: 'الإقامة الدائمة وحق الإقامة',
    fr: 'Résidence long terme & arraigo',
    es: 'Residencia larga duración & arraigo',
    sub: {
      en: 'After 5 years of legal residence: apply for long-term residency (residencia de larga duración). Arraigo social/laboral options available from year 3.',
      ar: 'بعد 5 سنوات من الإقامة القانونية: التقدم للإقامة طويلة الأمد. خيارات arraigo social/laboral متاحة من السنة 3.',
      fr: "Après 5 ans de résidence légale: résidence longue durée. Options arraigo social/laboral disponibles dès l'année 3.",
      es: 'Tras 5 años de residencia legal: solicitar residencia de larga duración. Opciones arraigo social/laboral disponibles desde el año 3.'
    },
    tags: {
      en: ['5 years', 'Long-term', 'Arraigo'],
      ar: ['5 سنوات', 'إقامة دائمة', 'Arraigo'],
      fr: ['5 ans', 'Long terme', 'Arraigo'],
      es: ['5 años', 'Larga duración', 'Arraigo']
    }
  }
];

export interface VisaDoc {
  n: { en: string; ar: string; fr: string; es: string };
  desc: { en: string; ar: string; fr: string; es: string };
}

export interface NationalVisaData {
  name: { en: string; ar: string; fr: string; es: string };
  consulate: { en: string; ar: string; fr: string; es: string };
  timeline: { en: string; ar: string; fr: string; es: string };
  docs: VisaDoc[];
}

export const VISA_DATA: Record<string, NationalVisaData> = {
  morocco: {
    name: { en: 'Morocco 🇲🇦', ar: 'المغرب 🇲🇦', fr: 'Maroc 🇲🇦', es: 'Marruecos 🇲🇦' },
    consulate: { en: 'Spanish consulates in Casablanca, Rabat, Tetouan, Agadir, Nador, Laayoune', ar: 'القنصليات الإسبانية في الدار البيضاء، الرباط، تطوان، أكادير، الناظور، العيون', fr: 'Consulats espagnols à Casablanca, Rabat, Tétouan, Agadir, Nador, Laâyoune', es: 'Consulados españoles en Casablanca, Rabat, Tetuán, Agadir, Nador, El Aaiún' },
    timeline: { en: 'Average processing: 4-8 weeks', ar: 'وقت المعالجة المتوسط: 4-8 أسابيع', fr: 'Traitement moyen: 4-8 semaines', es: 'Tramitación media: 4-8 semanas' },
    docs: [
      {
        n: { en: 'National Visa Application Form (EX-01)', ar: 'نموذج طلب التأشيرة EX-01', fr: 'Formulaire EX-01', es: 'Formularia EX-01' },
        desc: { en: 'Download from Spanish embassy website. Fill in Spanish or French. Sign manually.', ar: 'حمّل من الموقع الرسمي للسفارة. املأ بالإسبانية أو الفرنسية. وقّع يدوياً.', fr: "Télécharger du site de l'ambassade. Remplir en espagnol ou français. Signer manuellement.", es: 'Descargar de la web de la embajada. Rellenar en español o francés. Firmar manualmente.' }
      },
      {
        n: { en: 'Valid passport (+6 months validity, 2 blank pages)', ar: 'جواز سفر ساري (6 أشهر صلاحية على الأقل، صفحتان فارغتان)', fr: 'Passeport valide (+6 mois validité, 2 pages vierges)', es: 'Pasaporte válido (+6 meses, 2 páginas en blanco)' },
        desc: { en: 'Original + 2 photocopies of all pages. Moroccan passport: CNIE also required.', ar: 'الأصل + نسختان من جميع الصفحات. جواز مغربي: بطاقة CNIE مطلوبة أيضاً.', fr: 'Original + 2 photocopies de toutes les pages. Passeport marocain: CNIE également requise.', es: 'Original + 2 fotocopias de todas las páginas. Pasaporte marroquí: CNIE también requerida.' }
      },
      {
        n: { en: 'Official Admission Letter (Carta de Admisión)', ar: 'رسالة القبول الرسمية', fr: "Lettre d'Admission Officielle", es: 'Carta de Admisión del centro' },
        desc: { en: 'From accredited Spanish institution. Must show minimum 20h/week and full year program.', ar: 'من مؤسسة إسبانية معتمدة. يجب أن تُظهر 20 ساعة أسبوعياً على الأقل وبرنامج سنة كاملة.', fr: "D'un établissement espagnol accrédité. Min 20h/semaine, programme annuel.", es: 'De centro acreditado. Mínimo 20h/semana, programa anual completo.' }
      },
      {
        n: { en: 'Proof of funds (IPREM: min €600/month)', ar: 'إثبات الملاءة المالية (IPREM: 600 يورو شهرياً على الأقل)', fr: 'Preuve de fonds (IPREM: min 600€/mois)', es: 'Medios económicos (IPREM: mín 600€/mes)' },
        desc: { en: 'Bank statements last 6 months + parental sponsorship letter notarized + parental bank statements.', ar: 'كشوف حساب آخر 6 أشهر + رسالة كفالة الوالدين موثقة + كشوف حساب الوالدين.', fr: 'Relevés bancaires 6 derniers mois + lettre de parrainage parental notariée + relevés bancaires des parents.', es: 'Extractos bancarios últimos 6 meses + carta de patrocinio parental notariada + extractos bancarios padres.' }
      },
      {
        n: { en: 'Private health insurance without co-payment', ar: 'تأمين صحي خاص بدون مساهمة في الدفع', fr: 'Assurance santé privée sans copaiement', es: 'Seguro médico privado sin copago' },
        desc: { en: 'Full coverage in Spain. Recommended providers: Sanitas Estudiante, Adeslas, Asisa. Cost: approx €300-500/year.', ar: 'تغطية كاملة في إسبانيا. مزودون موصى بهم: Sanitas, Adeslas, Asisa. التكلفة: حوالي 300-500 يورو/سنة.', fr: 'Couverture complète en Espagne. Sanitas, Adeslas, Asisa recommandés. Coût: ~300-500€/an.', es: 'Cobertura completa en España. Sanitas, Adeslas, Asisa recomendados. Coste: ~300-500€/año.' }
      },
      {
        n: { en: 'Criminal record certificate + Apostille + sworn translation', ar: 'شهادة السوابق الجنائية + أبوستيل + ترجمة معتمدة', fr: 'Casier judiciaire + Apostille + traduction assermentée', es: 'Certificado de antecedentes penales + Apostilla + traducción jurada' },
        desc: { en: 'Moroccan "Bulletin n°3" from local court. Apostille from Ministry of Justice. Spanish sworn translation.', ar: '"النشرة رقم 3" المغربية من المحكمة المحلية. أبوستيل من وزارة العدل. ترجمة إسبانية معتمدة.', fr: '"Bulletin n°3" marocain du tribunal local. Apostille du Ministère de la Justice. Traduction assermentée espagnole.', es: '"Boletín nº3" marroquí del tribunal local. Apostilla del Ministerio de Justicia. Traducción jurada española.' }
      },
      {
        n: { en: 'Photos: 2 recent passport-size color photos', ar: 'صورتان: حديثتان بمقاس جواز السفر ملونتان', fr: 'Photos: 2 photos récentes format passeport couleur', es: 'Fotos: 2 fotos recientes tamaño pasaporte color' },
        desc: { en: 'White background, taken within last 6 months.', ar: 'خلفية بيضاء، التقطت خلال آخر 6 أشهر.', fr: 'Fond blanc, prises dans les 6 derniers mois.', es: 'Fondo blanco, tomadas en los últimos 6 meses.' }
      }
    ]
  },
  algeria: {
    name: { en: 'Algeria 🇩🇿', ar: 'الجزائر 🇩🇿', fr: 'Algérie 🇩🇿', es: 'Argelia 🇩🇿' },
    consulate: { en: 'Spanish Embassy in Algiers / Consulate General in Oran + VFS Global Centers', ar: 'السفارة الإسبانية بالجزائر العاصمة / القنصلية العامة بوهران + VFS Global', fr: "Ambassade d'Espagne à Alger / Consulat Général à Oran + Centres VFS Global", es: 'Embajada de España en Argel / Consulado General en Orán + Centros VFS Global' },
    timeline: { en: 'Average processing: 6-10 weeks', ar: 'وقت المعالجة المتوسط: 6-10 أسابيع', fr: 'Traitement moyen: 6-10 semaines', es: 'Tramitación media: 6-10 semanas' },
    docs: [
      {
        n: { en: 'National Visa Application Form (EX-01) & Photos', ar: 'استمارة طلب تأشيرة الوطنية EX-01 وصور ملونة', fr: 'Formulaire de demande de visa national (EX-01) & Photos', es: 'Formulario de solicitud de visado nacional (EX-01) y fotos' },
        desc: { en: 'Complete in Spanish or French, print and sign. Include two recent passport photos (white background, 3.5 x 4.5 cm).', ar: 'يجب تعبئتها بالإسبانية أو الفرنسية والطباعة والتوقيع يدوياً. أرفق صورتين شمسيتين حديثتين بخلفية بيضاء (3.5 × 4.5 سم).', fr: 'À remplir en espagnol ou français, imprimer et signer. Joindre deux photos passeport récentes sur fond blanc (3,5 x 4,5 cm).', es: 'Cumplimentar en español o francés, imprimir y firmar. Adjuntar dos fotos recientes tamaño pasaporte (fondo blanco, 3,5 x 4,5 cm).' }
      },
      {
        n: { en: 'Valid Passport & National Identity Card (CNI)', ar: 'جواز سفر ساري المفعول وبطاقة التعريف الوطنية', fr: "Passeport en cours de validité & Carte d'identité nationale", es: 'Pasaporte en vigor y Documento Nacional de Identidad (CNIE)' },
        desc: { en: 'Passport must be valid for at least 6 months beyond intended stay with two blank pages. Provide photocopies of all pages.', ar: 'يجب أن يكون جواز السفر صالحاً لمدة 6 أشهر على الأقل بعد الإقامة المخطط لها مع صفحتين فارغتين. قدم نسخاً لجميع الصفحات.', fr: 'Le passeport doit être valide au moins 6 mois après le séjour prévu, avec deux pages vierges, plus les photocopies de toutes les pages.', es: 'El pasaporte debe ser válido durante al menos 6 meses tras la estancia prevista, con dos páginas en blanco, y copias de todas las páginas.' }
      },
      {
        n: { en: 'Official Admission Letter (Carta de Admisión)', ar: 'رسالة القبول الرسمية من المؤسسة التعليمية', fr: "Lettre d'admission officielle (Carta de Admisión)", es: 'Carta de Admisión oficial del centro docente' },
        desc: { en: 'Issued by an accredited educational institution in Spain, showing full-time training (min 20 hours/week) and full payment receipt.', ar: 'صادرة عن مؤسسة تعليمية معتمدة في إسبانيا، توضح تدريباً بدوام كامل (20 ساعة أسبوعياً كحد أدنى) مع إيصال دفع الرسوم الكامل.', fr: "Délivrée par un établissement d'enseignement agréé en Espagne, prouvant une formation à temps plein (min 20h/semaine) et preuve de paiement.", es: 'Expedida por un centro educativo autorizado en España, que acredite formación a tiempo completo (mín 20h/semana) y justificante de pago.' }
      },
      {
        n: { en: 'Proof of Financial Sufficiency (€600/month minimum)', ar: 'إثبات الموارد المالية الكافية (600 يورو شهرياً كحد أدنى)', fr: 'Justificatif de ressources financières suffisantes (min 600€/mois)', es: 'Acreditación de medios económicos suficientes (mín 600€/mes)' },
        desc: { en: 'Bank statements last 6 months, certified parental sponsorship (Prise en Charge) notarized, and parental employment/salary certificates.', ar: 'كشوف الحساب البنكي لآخر 6 أشهر، شهادة كفالة الوالدين مصدقة (Prise en Charge)، مرفقة بشهادات عمل الوالدين وكشوف الأجور.', fr: 'Relevés bancaires des 6 derniers mois, parrainage parental certifié (Prise en Charge) notarié, et fiches de paie/attestations de travail des parents.', es: 'Extractos bancarios de los últimos 6 meses, acta notarial de patrocinio familiar con fiches de paie y vida laboral de los patrocinadores.' }
      },
      {
        n: { en: 'Schengen Compliant Medical Health Insurance', ar: 'تأمين صحي خاص معتمد وخالٍ من المساهمة المالية', fr: 'Assurance médicale conforme aux exigences de l’Espagne', es: 'Seguro médico de asistencia conforme a los requisitos' },
        desc: { en: 'Must be with an approved Spanish company (e.g., Sanitas, Adeslas, Asisa), offering zero copays, repatriation included, up to €30,000.', ar: 'يجب التعاقد مع شركة إسبانية معتمدة (مثل Sanitas أو Adeslas) يقدم تغطية كاملة (بدون copago) تشمل الترحيل الطبي ومبلغ تغطية 30 ألف يورو.', fr: "Doit être contracté auprès d'une compagnie espagnole agréée, formulé sans copay (sin copago), incluant le rapatriement médical, min 30 000€.", es: 'Debe contratarse con compañía aseguradora autorizada en España, sin copagos (sin copago), que cubra repatriación y un mínimo de 30.000€.' }
      },
      {
        n: { en: 'Legalized Criminal Record (Casier Judiciaire N°3)', ar: 'شهادة السوابق القضائية الموثقة والمترجمة', fr: 'Extrait de casier judiciaire légalisé & traduit', es: 'Certificado de antecedentes penales legalizado y traducido' },
        desc: { en: 'Algerian Casier Judiciaire N°3 (under 3 months old), legalized by Ministry of Foreign Affairs (MAE) with Apostille, plus Spanish sworn translation.', ar: 'صحيفة السوابق قضائية رقم 3 (أقل من 3 أشهر)، مصدقة من وزارة الشؤون الخارجية ثم Apostille، ومترجمة للإسبانية بترجمة محلفة.', fr: 'Casier judiciaire N°3 algérien (moins de 3 mois), légalisé par le Ministère des Affaires Étrangères (MAE) et apostillé, traduit par un traducteur assermenté.', es: 'Certificado de penales de menos de 3 meses, legalizado por el Ministerio de Asuntos Exteriores argelino, apostillado y traducido por traductor jurado.' }
      },
      {
        n: { en: 'Official Medical Certificate of Good Health', ar: 'الشهادة الطبية الرسمية من الفحص الطبي', fr: 'Certificat médical officiel d’aptitude physique', es: 'Certificado médico oficial de buena salud' },
        desc: { en: 'Stating you are free from quarantine diseases as specified in the International Health Regulations of 2005.', ar: 'تثبت خلوك من أي أمراض وبائية أو معدية قد تضر بالصحة العامة وفقاً للوائح الصحية الدولية لعام 2005.', fr: 'Attestant l’absence de maladies graves à potentiel épidémique selon le Règlement Sanitaire International de 2005.', es: 'Acreditando que no padece enfermedades que puedan tener repercusiones graves según el Reglamento Sanitario Internacional de 2005.' }
      }
    ]
  },
  tunisia: {
    name: { en: 'Tunisia 🇹🇳', ar: 'تونس 🇹🇳', fr: 'Tunisie 🇹🇳', es: 'Túnez 🇹🇳' },
    consulate: { en: 'Embassy of Spain in Tunis', ar: 'سفارة إسبانيا في تونس العاصمة', fr: "Ambassade d'Espagne à Tunis", es: 'Embajada de España en Túnez' },
    timeline: { en: 'Average processing: 4-8 weeks', ar: 'وقت المعالجة المتوسط: 4-8 أسابيع', fr: 'Traitement moyen: 4-8 semaines', es: 'Tramitación media: 4-8 semanas' },
    docs: [
      {
        n: { en: 'Schengen National Visa Form (EX-01) & Photos', ar: 'استمارة طلب تأشيرة EX-01 وصورتين بيومتريتين', fr: 'Formulaire de visa national (EX-01) & deux photos', es: 'Formulario de visado nacional (EX-01) y dos fotos' },
        desc: { en: 'Fill out in Spanish via computer, print out and sign. Two neat passport photos with white background.', ar: 'تعبأ باللغة الإسبانية الكترونياً، وتطبع وتوقع. صورتان شخصيتان بخلفية بيضاء نظيفة.', fr: 'À remplir sur ordinateur en espagnol, imprimer et signer. Deux photos d’identité récentes fond blanc.', es: 'Rellenar por ordenador en español, imprimir y firmar. Dos fotografías recientes con fondo blanco.' }
      },
      {
        n: { en: 'Tunisian Passport & National ID Card (CIN)', ar: 'جواز السفر التونسي الأصلي وبطاقة التعريف الوطنية', fr: 'Passeport tunisien & Carte d’identité nationale (CIN)', es: 'Pasaporte tunecino y Documento Nacional de Identidad (CIN)' },
        desc: { en: 'Passport with at least 6 months remaining validity plus photocopies of the first page and all stamps/visas.', ar: 'جواز سفر صالح لمدة 6 أشهر على الأقل مع نسخ واضحة للصفحة الأولى وجميع التأشيرات والأختام القديمة.', fr: 'Passeport valide au moins 6 mois avec photocopies de la première page et de tous les tampons et visas antérieurs.', es: 'Pasaporte original válido durante un mínimo de 6 meses con copias de la página principal y visados anteriores.' }
      },
      {
        n: { en: 'Certificate of Final Admission & Payment Receipt', ar: 'شهادة التسجيل النهائي وإثبات سداد الرسوم الدراسية', fr: 'Attestation d’admission définitive & Reçu de paiement', es: 'Certificado de Admisión definitivo y tasa de matrícula pagada' },
        desc: { en: 'Official document indicating program duration, schedules, and continuous full study load (20h/week min).', ar: 'وثيقة رسمية توضح مدة البرنامج الدراسي، الساعات الأسبوعية (أقل شيء 20 ساعة) مع إيصال مالي يثبت دفع تكاليف التسجيل.', fr: 'Document officiel stipulant la durée, les horaires d’études et une charge de cours continue d’au moins 20h/semaine avec reçu.', es: 'Acreditativo de matrícula que señale duración, horario y asistencia lectiva presencial (mín 20h/semana) junto a recibo del pago.' }
      },
      {
        n: { en: 'Sponsorship Committment & 6 Months Bank History', ar: 'التعهد المالي بالبلدية وكشف الحساب البنكي 6 أشهر', fr: 'Prise en charge légalisée & Relevés bancaires (6 mois)', es: 'Acta de compromiso de manutención y extractos bancarios' },
        desc: { en: 'Notarized Tunisian family pledge (Prise en charge legalisée) plus stamp-authorized bank statements for the last 6 months.', ar: 'التعهد العائلي المالي المصادق عليه في البلدية التونسية مع كشوف حساب بنكية موقعة ومختومة لآخر 6 أشهر.', fr: 'Engagement de prise en charge légalisé à la municipalité tunisienne, plus relevés bancaires originaux estampillés sur 6 mois.', es: 'Compromiso de sostenimiento económico formalizado ante autoridad tunecina, y extractos originales de cuenta de los últimos 6 meses.' }
      },
      {
        n: { en: 'Zero Copay Medical Insurance for Spain', ar: 'تأمين طبي خاص معتمد وصالح بدون أي اقتطاع', fr: 'Assurance santé privée sans copaiement', es: 'Seguro médico de asistencia completo sin copagos' },
        desc: { en: 'Policy through a highly recognized insurer in Spain providing total cover and full repatriation of remains.', ar: 'بوليصة تأمين موقعة مع شركة إسبانية معترف بها تضمن الرعاية الشاملة والإعادة اللائقة للجثمان بدون مبالغ اقتطاع.', fr: 'Contrat d’assurance maladie souscrit en Espagne garantissant l’absence de franchises et l’assistance rapatriement totale.', es: 'Póliza con cobertura de hospitalización y traslado sanitario sin copagos y contratada con aseguradora oficial.' }
      },
      {
        n: { en: 'Apostilled Criminal Record (Bulletin N°3)', ar: 'بطاقة السوابق العدلية (بطاقة عدد 3) مصدقة ومترجمة', fr: 'Bulletin N°3 apostillé & Traduction espagnole jurée', es: 'Antecedentes penales (Boletín Nº3) apostillado y traducido' },
        desc: { en: 'Bulletin N°3 translated by a certified court translator, legalized by the Ministry of Foreign Affairs, and Apostilled.', ar: 'بطاقة عدد 3 مترجمة من مترجم محلف معتمد، ومصادق عليها من وزارة الشؤون الخارجية التونسية مع ختم الأبوستيل.', fr: 'Bulletin N°3 de moins de 3 mois traduit, légalisé par le Ministère des Affaires Étrangères tunisien et apostillé.', es: 'Boletín nº 3 traducido por traductor jurado, legalizado en el Ministerio de Exteriores de Túnez y dotado de Apostilla.' }
      },
      {
        n: { en: 'Authorized Medical Fitness Certificate', ar: 'الشهادة الطبية الصحية الخالية من الأوبئة', fr: 'Certificat médical de non-contagion international', es: 'Certificado médico oficial de aptitud sanitaria' },
        desc: { en: 'Issued by a registered Tunisian practitioner, declaring no epidemiological threats matching sanitary guidelines.', ar: 'صادرة عن طبيب مسجل في الهيئة تذكر خلو الطالب من الأمراض السارية طبقاً لشروط الصحة الدولية الصارمة لعام 2005.', fr: 'Délivré par un docteur inscrit à l’Ordre, pour faire valoir qu’il n’est atteint d’aucun trouble épidémiologique.', es: 'Certificado firmado por facultativo que declare que no sufre afecciones de impacto sanitario conforme al reglamento de 2005.' }
      }
    ]
  },
  egypt: {
    name: { en: 'Egypt 🇪🇬', ar: 'مصر 🇪🇬', fr: 'Égypte 🇪🇬', es: 'Egipto 🇪🇬' },
    consulate: { en: 'Embassy of Spain in Cairo / BLS Spain Visa Application Centres Cairo & Alexandria', ar: 'سفارة إسبانيا في القاهرة / مراكز BLS للطلب بالقاهرة والإسكندرية', fr: "Ambassade d'Espagne au Caire / Centres BLS Espagne Le Caire & Alexandrie", es: 'Embajada de España en El Cairo / Centros BLS de Visados El Cairo y Alejandría' },
    timeline: { en: 'Average processing: 4-8 weeks', ar: 'وقت المعالجة المتوسط: 4-8 أسابيع', fr: 'Traitement moyen: 4-8 semaines', es: 'Tramitación media: 4-8 semanas' },
    docs: [
      {
        n: { en: 'Visa Application & Biometric Photos', ar: 'استمارة طلب التأشيرة والصور البيومترية المعبرة', fr: 'Formulaire de visa national & Photos biométriques', es: 'Formulario de visado nacional y fotos biométricas' },
        desc: { en: 'Original National Visa Form filled in Spanish, signed, with two passport color photos (white background, 3.5 x 4.5 cm).', ar: 'استمارة طلب التأشيرة الوطنية مملوءة باللغة الإسبانية مع التوقيع وصورتين شمسيتين ملونتين بخلفية بيضاء.', fr: 'Formulaire original de visa rempli en langue espagnole, signé, contenant deux photos passeport de fond blanc.', es: 'Formulario de visado nacional original completado en español, firmado, con dos fotos de carné con fondo blanco.' }
      },
      {
        n: { en: 'Egyptian Passport & National ID Card', ar: 'جواز السفر المصري وبطاقة الرقم القومي', fr: 'Passeport égyptien & Carte d’identité nationale', es: 'Pasaporte egipcio y Documento Nacional de Identidad' },
        desc: { en: 'Passport with minimum 6 months validity plus copies of all pages. Show the original and a copy of your Egyptian ID card.', ar: 'جواز سفر صالح لستة أشهر على الأقل ونسخ لجميع الصفحات. تقديم البطاقة القومية ومطابقتها بالأصل.', fr: 'Passeport valide au moins 6 mois avec copie complète de toutes les pages, ainsi que la carte ID nationale égyptienne.', es: 'Pasaporte en vigor por 6 meses mínimo con copia de todas sus hojas, más el documento de identidad egipcio.' }
      },
      {
        n: { en: 'Acceptance Document & Payment Receipts', ar: 'خطاب القبول الرسمي وإثبات المصاريف المدفوعة', fr: 'Lettre d’acceptation & Reçus financiers de versement', es: 'Colegio de aceptación y justificante de abono de matrícula' },
        desc: { en: 'Accredited center acceptance letter confirming intensive registration (min. 20h/week) with formal tuition receipts.', ar: 'رسالة قبول معتمدة تؤكد التسجيل للدراسة المكثفة بمعدل 20 ساعة في الأسبوع كحد أدنى مع إيصال السداد المالي.', fr: 'Lettre de l’institut stipulant un calendrier d’études de 20 heures/semaine au moins et reçu d’acompte d’inscription.', es: 'Carta oficial del centro docente acreditando estudios a tiempo completo (mín 20h) y los resguardos del pago.' }
      },
      {
        n: { en: 'Financial Stability Evidence (€600/month)', ar: 'كشف مالي لإثبات القدرة الاستيعابية (600 يورو شهرياً)', fr: 'Garanties de solvabilité financière (600€/mois d’autonomie)', es: 'Medios económicos y solvencia familiar (mín 600€/mes)' },
        desc: { en: '6 months of detailed personal or sponsor bank accounts (fresh euros or equivalent EGP), accompanied by a translated and notarized parents sponsorship letter.', ar: 'كشف حساب معاملات 6 أشهر للمتكفل (باليورو أو ما يعادل الجنيه المصري)، مع ترجمة وتوثيق إقرار التكفل العائلي مالي كفالة.', fr: 'Relevés bancaires (6 mois récents, euros ou équivalents EGP) et attestation de soutien familial notariée et traduite.', es: 'Extracto de movimientos bancarios del garante de 6 meses, y compromiso de sostenimiento legalizado notarialmente y traducido.' }
      },
      {
        n: { en: 'Private Medical Insurance (Zero Copayment)', ar: 'التأمين الطبي المانع للاقتطاع الذاتي في إسبانيا', fr: 'Assurance de soins complète (Sin Copacio/Sans Copay)', es: 'Seguro médico de salud completo sin copago' },
        desc: { en: 'Authorized Spanish health coverage (Adeslas / Sanitas) extending €30,000 protection with total repatriations.', ar: 'تأمين مقدم من شركات رائدة بإسبانيا يمنح قيمة استشفائية 30 ألف يورو ويضمن الإخلاء التام عند الأخطار.', fr: 'Pólice avec prestations hospitalières en Espagne sans charges complémentaires ni franchises, incluant le rapatriement.', es: 'Seguro con cobertura de hospitalización y traslado contratado con aseguradora autorizada en España.' }
      },
      {
        n: { en: 'Clean Criminal Record legalized by MOFA', ar: 'صحيفة الحالة الجنائية (الفيش والتشبيه) المصدقة', fr: 'Casier Judiciaire légalisé par le Ministère des Affaires Étrangères', es: 'Certificado de antecedentes penales legalizado por el MAE' },
        desc: { en: 'Official police clearance (last 3 months) legalized by the Egyptian Ministry of Foreign Affairs (MOFA) + Spanish sworn translation.', ar: 'صحيفة الحالة الجنائية الرسمية (الفيش والتشبيه) موثقة من وزارة الخارجية المصرية ومترجمة عبر مكتب ترجمة معتمد.', fr: "Casier extrait récent (moins de 3 mois), homologué par le Ministère des Affaires Étrangères égyptien, traduit officiellement.", es: 'Antecedentes penales legalizados por el Ministerio de Asuntos Exteriores de Egipto y traducidos por traductor jurado.' }
      },
      {
        n: { en: 'Medical Certificate from an Official Practitioner', ar: 'الشهادة والتقرير الصحي من نقابة الأطباء', fr: 'Attestation médicale d’aptitude à l’ordre', es: 'Certificado médico regulado de sanidad española' },
        desc: { en: 'Document stating no epidemic illnesses under the 2005 guidelines, legalized and translated.', ar: 'تقرير طبي يفيد بخلو المرشح من الأمراض المعدية أو الأوبئة ذات أثر صحي شامل حسب قواعد منظمة الصحة (2005).', fr: 'Formulaire daté rédigé par un praticien agrée stipulant l’exemption d’infections d’intérêt sanitaire mondial.', es: 'Certificado emitido por médico colegiado reconociendo que no padece enfermedades graves de salud pública.' }
      }
    ]
  },
  jordan: {
    name: { en: 'Jordan 🇯🇴', ar: 'الأردن 🇯🇴', fr: 'Jordanie 🇯🇴', es: 'Jordania 🇯🇴' },
    consulate: { en: 'Embassy of Spain in Amman', ar: 'سفارة إسبانيا في عمان', fr: "Ambassade d'Espagne à Amman", es: 'Embajada de España en Amán' },
    timeline: { en: 'Average processing: 4-8 weeks', ar: 'وقت المعالجة المتوسط: 4-8 أسابيع', fr: 'Traitement moyen: 4-8 semaines', es: 'Tramitación media: 4-8 semanas' },
    docs: [
      {
        n: { en: 'Visa Application Duly Signed & Photos', ar: 'طلب التأشيرة الوطنية ومطابقتها بالصور', fr: 'Formulaire de demande de visa signée & Portraits', es: 'Formulario de solicitud firmado y retratos' },
        desc: { en: 'EX-01 form completed in Spanish. Bring two recent 3x4 cm passport-size color photos on a clear white background.', ar: 'استمارة EX-01 معبأة ومعتمدة باللغة الإسبانية، مرفقة بصورتين شمسيتين مقاس 3*4 سم بخلفية بيضاء.', fr: 'Formulaire EX-01 completé, signé, accompagné de deux photos fond blanc immaculé de format 3x4cm.', es: 'Formulario EX-01 relleno en castellano y firmado. Incluye dos fotos recientes fondo blanco tamaño 3x4cm.' }
      },
      {
        n: { en: 'Original Jordan Passport & ID Info', ar: 'جواز السفر الأردني وبطاقة الأحوال المدنية', fr: 'Passeport jordanien & Pièce d’identité nationale', es: 'Pasaporte jordano original y documento oficial de identidad' },
        desc: { en: 'Original passport validity must stretch 6 months beyond the visa. Copy of Jordian National ID card.', ar: 'جواز السفر الأصلي بمدى صلاحية أكثر من 6 أشهر وتصوير لجميع صفحات الجواز بالإضافة لبطاقة الأحوال المدنية.', fr: 'Passeport original jordanien prolongé de 6 mois, plus la photocopie de la carte d’identité nationale d’Amman.', es: 'Pasaporte con validez para todo el periodo e identificación nacional jordana fotocopiada.' }
      },
      {
        n: { en: 'Accredited Institution Letter (Carta de Admisión)', ar: 'خطاب قبول الجامعة أو المعهد الإسباني الرسمي', fr: 'Lettre de registration d’académie agréée', es: 'Declaración académica de aceptación y matrícula' },
        desc: { en: 'Direct admission indicating syllabus duration, academic calendar, and a full-time regime (min 20h/week).', ar: 'شهادة تسجيل مؤصلة تشير للبرنامج الكامل، الخطة وأيام الدراسة بدوام لا يقل عن 20 ساعة أسبوعياً.', fr: 'Lettre d’inscription formelle détaillant le programme condensé d’un volume minimal hebdomadaire de 20 heures.', es: 'Certificado oficial que acredite la admisión intensiva de un mínimo de 20 horas de asistencia a clase.' }
      },
      {
        n: { en: 'Guaranteed Financial Assets Ledger (€600/month)', ar: 'الضمانات المادية الكافية والمصدقة في الأردن', fr: 'Garanties financières & Relevés bancaires certifiés', es: 'Libreto de fondos familiares del patrocinador jordano' },
        desc: { en: 'Jordanian bank records last 6 months, certified parent commitment translated into Spanish with employment checks.', ar: 'كشوف الحساب البنكي الأردنية لستة أشهر، يرافقها تعهد ضمان مالي موقع ومترجم للإسبانية مع تقرير الراتب والعمل.', fr: 'Documents bancaires certifiés (6 mois), engagement financier signé et rédigé, bulletins de paie à l’appui.', es: 'Extractos detallados bancarios de seis meses, aval y patrocinio de descendencia legalizado e ingresos.' }
      },
      {
        n: { en: 'No-Copay Healthcare Insurance', ar: 'عقد التأمين الصحي الإسباني الخالي من الاقتطاعات والمشروط', fr: 'Assurance santé spécifique d’Espagne sin copago', es: 'Póliza de salud contratada sin copagos española' },
        desc: { en: 'Private insurance with an approved provider in Spain (repatriation included, minimum capital protection €30,000).', ar: 'تأمين طبي خاص مع شبكة معتمدة بإسبانيا يغطي سقف استشفاء قيمته 30 ألف يورو مع الترحيل الطبي الشامل.', fr: 'Assurance espagnole privée d’un montant de 30 000 euros minimum avec clause de rapatriement.', es: 'Seguro médico sin copagos contratado con compañía registrada en España para gastos de al menos 30.000€.' }
      },
      {
        n: { en: 'Certificate of Non-Conviction (Legalized)', ar: 'شهادة عدم المحكومية الأردنية المصدقة والمترجمة', fr: 'Certificat de Non-Conviction jordanien légalisé (MOFA)', es: 'Certificado de no condena de Jordania legalizado' },
        desc: { en: 'Jordanian Non-Conviction certificate under 3 months, legalized by Ministry of Foreign Affairs, then translated to Spanish.', ar: 'شهادة عدم المحكومية الرسمية سارية ومستخرجة حديثاً (مصادقة وزارة الخارجية الأردنية) ومترجمة بصفة رسمية للإسبانية.', fr: 'Fichier de non-condamnation jordanien récent visé par le Ministère des Affaires Étrangères à Amman et traduit.', es: 'Certificado de no condena expedido por el Ministerio de Justicia de Jordania, con sello de Exteriores y traducción.' }
      },
      {
        n: { en: 'Medical Certificate from Certified Practitioner', ar: 'التقرير الطبي الصحي للمحافظة على الصحة العامة', fr: 'Certificat sanitaire international réglementaire', es: 'Certificado médico oficial regulado 2005' },
        desc: { en: 'Must confirm absence of diseases in compliance with the International Health Regulations guidelines of 2005.', ar: 'إفادة طبية صريحة بخلو الطالب من الأوبئة المعدية وفق التوصيات المذكورة باللائحة العالمية لمنظمة الصحة.', fr: 'Déclaration stipulant l’absence d’agents pathogènes dangereux en accord avec les statuts de Genève (2005).', es: 'Informe de sanidad que verifique la inexistencia de patologías graves de cuarentena internacional.' }
      }
    ]
  },
  lebanon: {
    name: { en: 'Lebanon 🇱🇧', ar: 'لبنان 🇱🇧', fr: 'Liban 🇱🇧', es: 'Líbano 🇱🇧' },
    consulate: { en: 'Embassy of Spain in Beirut', ar: 'سفارة إسبانيا في بيروت', fr: "Ambassade d'Espagne à Beyrouth", es: 'Embajada de España en Beirut' },
    timeline: { en: 'Average processing: 6-10 weeks', ar: 'وقت المعالجة المتوسط: 6-10 أسابيع', fr: 'Traitement moyen: 6-10 semaines', es: 'Tramitación media: 6-10 semanas' },
    docs: [
      {
        n: { en: 'Spanish National Visa Application & Photos', ar: 'طلب تأشيرة إسبانيا الوطنية والصور المطلوبة في لبنان', fr: 'Formulaire de visa national espagnol & Photos', es: 'Solicitud de visado nacional y fotos biométricas' },
        desc: { en: 'Completed on computer in Spanish, printed and manually signed. 2 biometric photos width 35mm height 45mm.', ar: 'تعبأ رقمياً باللغة الإسبانية، تطبع وتوقع بخط اليد. صورتان بملامح واضحة حجم 35 × 45 مم خلفية بيضاء.', fr: 'Formulaire EX-01 dactylographié en espagnol, signé. Deux photos conformes (35mm x 45mm, fond blanc).', es: 'Modelo EX-01 impreso tras rellenar telemáticamente con dos fotos fondo blanco de tamaño legal.' }
      },
      {
        n: { en: 'Lebanese Passport & Civil Registration (Ikhraj Kaid)', ar: 'جواز السفر اللبناني وإخراج القيد الفردي والعائلي', fr: 'Passeport libanais & Extrait de registre civil (Ikhraj Kaid)', es: 'Pasaporte libanés e Ikhraj Kaid (Registro Civil)' },
        desc: { en: 'Valid original passport (+6 months). Individual and Family Civil Records (Ikhraj Kaid) translated and certified.', ar: 'جواز سفر لبناني أصلي ساري. مستخرجات إخراج القيد العائلي والفردي مصادق عليها ومترجمة مع الأصل.', fr: 'Passeport valide, documents d’Ikhraj Kaid (individuel et familial) dactylographiés, traduits et visés.', es: 'Pasaporte en regla, más las certificaciones del Registro Civil (Ikhraj Kaid) traducidas y legalizadas.' }
      },
      {
        n: { en: 'Acceptance Certificate & Paid Tuition Receipt', ar: 'إشعار القبول الرسمي وإيصال خلاص ومصاريف التسجيل', fr: 'Attestation définitive de l’établissement & Reçu de paiement', es: 'Certificado de aceptación oficial y justificante bancario de pago' },
        desc: { en: 'Proof of intense continuous learning in Spain (minimum 20 hours/week) showing complete course tuition payment.', ar: 'خطاب القبول النهائي لإجراء الدراسات المكثفة (20 ساعة بالأسبوع) مع وثيقة مصرفية تبرز خلاص معاليم الدروس.', fr: 'Inscription certifiée dans un cursus à plein temps (min 20h/semaine) avec quittance d’acompte d’études.', es: 'Certificado oficial acreditativo de matrícula y justificante que demuestre que el importe ha sido abonado.' }
      },
      {
        n: { en: 'Fresh Funds Financial Proof & Legalized Support Deed', ar: 'إثبات القدرة المالية بالدولار الفريش وإفادة الكفالة', fr: 'Fonds frais bancaires libanais & Engagement de garant', es: 'Cuenta de fondos "fresh" bancarios y declaración jurada' },
        desc: { en: '6 months of fresh currency accounts or overseas statements, and parental notarized financial pledge translated.', ar: 'كشف حساب معاملات 6 أشهر للأموال بالدولار الصافي (فريش) أو من مصرف أجنبي، بالإضافة إلى وثيقة كفالة عائلية موثقة ومترجمة.', fr: 'Comptes de capitaux nets en devises (Fresh USD/EUR) sur 6 mois, plus l’acte d’engagement de maintien financier.', es: 'Estado de movimientos bancarios de fondos reales extranjeros durante 6 meses y acta de sostenimiento familiar.' }
      },
      {
        n: { en: 'International Health Insurance (No Copayment)', ar: 'التغطية الصحية الإسبانية ذات التعاقد الكامل والمجاني', fr: 'Assurance médicale complète espagnole (sans copago)', es: 'Seguro médico preventivo concertado sin copago español' },
        desc: { en: 'Cover through a Spanish licensed operator (e.g. Sanitas) for urgent accidents, repatriation and medical fees.', ar: 'عقد تأمين طبي خاص معتمد مع شركة إسبانية يضمن كافة المصاريف والتغطية للمخاطر وتكلفة النقل دون copago.', fr: 'Pólice médicale en Espagne avec rapatriement intégral assuré, ne comportant aucune forme de franchise.', es: 'Seguro concertado con compañía en España para hospitalizaciones, accidentes y repatriaciones sin copagos.' }
      },
      {
        n: { en: 'Clean Lebanese Sijil Adli Legalized and Translated', ar: 'شهادة السجل العدلي اللبنانية المصدقة بالخارجية والمترجمة', fr: 'Casier Judiciaire Libanais (Sijil Adli) légalisé', es: 'Antecedentes penales de Líbano legalizados' },
        desc: { en: 'Sijil Adli (under 3 months old) certified by Ministry of Justice, Ministry of Foreign Affairs, translated into Spanish.', ar: 'سجل عدلي (أقل من 3 أشهر) مصادق عليه من وزارتي العدل والخارجية اللبنانية، ومترجم للإسبانية ترجمة محلفة.', fr: 'Fiche d’antécédents Sijil Adli traduite et visée par le Ministère de la Justice, puis par le MAE libanais.', es: 'Certificado de penales de Líbano de vigencia trimestral, visado por el Ministerio de Justicia y Exteriores.' }
      },
      {
        n: { en: 'Legalized Medical Assessment', ar: 'التقرير الطبي العام المصدق حسب المعايير الصحية', fr: 'Certificat de bonne santé validé par l’Ordre (Liban)', es: 'Certificado médico regulado oficial' },
        desc: { en: 'Signed by a registered Lebanese physician and certified by the Lebanese Ministry of Foreign Affairs.', ar: 'تقرير طبي من طبيب مرخص مسجل يحمل تصديق وزارة الخارجية يفيد بالصلاحية الصحية الشاملة.', fr: 'Certificat ordonné d’absence de maladie grave visé par l’autorité publique ordinale et le MAE.', es: 'Certificado médico oficial que demuestre que se halla sano y exento de patologías contagiosas peligrosas.' }
      }
    ]
  },
  gulf_gcc: {
    name: { en: 'Gulf Countries (KSA, UAE, Qatar...) 🇸🇦🇦🇪', ar: 'دول الخليج (السعودية، الإمارات، قطر...) 🇸🇦🇦🇪', fr: 'Pays du Golfe (Arabie S., Émirats, Qatar...) 🇸🇦🇦🇪', es: 'Países del Golfo (Arabia S., EAU, Qatar...) 🇸🇦🇦🇪' },
    consulate: { en: 'Spanish Embassies / BLS Visa Hubs in Riyadh, Jeddah, Khobar (KSA) & Dubai, Abu Dhabi (UAE)', ar: 'سفارات إسبانيا / مراكز BLS للطلب بالرياض، جدة، الخبر، دبي، وأبو ظبي', fr: 'Ambassades d’Espagne & Centres BLS à Riyad, Djeddah, Khobar, Dubaï et Abou Dabi', es: 'Embajadas de España y Centros BLS en Riad, Yeda, Al Jobar, Dubái y Abu Dabi' },
    timeline: { en: 'Average processing: 3-6 weeks', ar: 'وقت المعالجة المتوسط: 3-6 أسابيع', fr: 'Traitement moyen: 3-6 semaines', es: 'Tramitación media: 3-6 semanas' },
    docs: [
      {
        n: { en: 'Visa Application Form (EX-01) & Color Photos', ar: 'استمارة طلب التأشيرة التامة EX-01 والصور الملونة', fr: 'Formulaire espagnol EX-01 complété & Photos d’identité', es: 'Formularios oficiales de visado y fotografías' },
        desc: { en: 'Duly filled in Spanish/English, with two biomectric color passport photos on background white.', ar: 'تعبأ الاستمارة وتوقع بالإسبانية أو الإنجليزية، برفقة صورتين شمسيتين ملونتين بخلفية بيضاء نقية.', fr: 'Le formulaire d’ambassade dûment signé, accompagné de photos d’identité réglementaires sur fond uni blanc.', es: 'Formularios nacionales firmados con fotografías de fondo blanco para visado oficial.' }
      },
      {
        n: { en: 'Gulf Passport & Residence Iqama check', ar: 'جواز السفر الخليجي وإقامة الوافد المقيم (Iqama)', fr: 'Passeport valide & attestation de résidence (Iqama)', es: 'Pasaporte nacional y acreditación de residencia (Iqama)' },
        desc: { en: 'Original passport (+6 months). Non-citizens must provide valid residency permits (Iqama) with copy and translation.', ar: 'جواز سفر أصلي (صلاحية +6 أشهر). للوافد المقيم يتعين تقديم بطاقة الإقامة (الإقامة) مع ترجمتها ونسخة عنها.', fr: 'Passeport valable et carte de résidence locale (Iqama) certifiée pour les candidats non nationaux.', es: 'Pasaporte nacional, y para extranjeros residentes, visado y tarjeta de residencia local (Iqama).' }
      },
      {
        n: { en: 'Admission Contract of Spanish Institution', ar: 'شهادة التسجيل النهائي في المعهد الإسباني الرسمي', fr: 'Lettre de d’immatriculation exhaustive espagnole', es: 'Carta de registro definitivo d’institución' },
        desc: { en: 'Certified acceptance explaining course length, dates and complete workload details (minimum 20 hours/week) with payment proof.', ar: 'إشعار تسجيل رسمي معتمد يحمل تفاصيل الخطة الزمنية بمعدل 20 ساعة أسبوعياً مبرزاً أداء الرسوم.', fr: 'Justificatif certifié de l’établissement comprenant les dates, parcours et minimum légal d’heures obligatoires.', es: 'Documentación de la matrícula, temario y un mínimo de 20 horas de clase semanales.' }
      },
      {
        n: { en: 'Robust Bank Balance Sheet statements', ar: 'كشف الحساب البنكي القوي للمتكفل أو الممول', fr: 'Solvabilité financière & Historiques bancaires (6 mois)', es: 'Solvabilidad de fondos bancarios (Extractos 6 meses)' },
        desc: { en: '6 months of detailed personal or parent/corporate bank books showing robust balances and regular high incomes.', ar: 'كشف حساب معاملات 6 أشهر للمتكفل (الشخصي أو العائلي أو ممول الشركة) يوضح كفاية مالية وسيولة ممتازة.', fr: 'Relevés visés de banques du garant sur 6 mois, prouvant des soldes robustes et flux réguliers d’entrées.', es: 'Cuentas detalladas del banco de 6 meses con capacidad financiera probada para mantener al alumno.' }
      },
      {
        n: { en: 'Private Medical Insurance Policy (Unlimited/No Copay)', ar: 'عقد التأمين الطبي الإسباني المتكامل والخالي من الاقتطاع', fr: 'Contrat de couverture médicale d’Espagne (Sans Copay)', es: 'Póliza de seguro médico completo sin copagos' },
        desc: { en: 'Spanish private coverage (zero copayment) from high level provider, including full sanitary repatriation.', ar: 'تأمين مقدم من هيئات رائدة بإسبانيا (بدون copago) يمنح رعاية كاملة شاملة حالات الإسعاف الطبي الطارئ والوفاة.', fr: 'Police d’assurance médicale agréée d’une valeur minimale de 30 000€, souscrite sans aucune franchise.', es: 'Seguro médico de entidad oficial con servicios integrales de sanidad y traslado sin copagos.' }
      },
      {
        n: { en: 'No Criminal Records with State legalizations', ar: 'شهادة حسن السيرة والسلوك الشرطية المصدقة والمترجمة', fr: 'Extrait de casier d’Arabie/EAU légalisé et traduit', es: 'Certificado de antecedentes penales oficial legalizado' },
        desc: { en: 'Under 3 months police clearance, legalized by Ministry of Interior and Foreign Affairs, translated into Spanish.', ar: 'شهادة خلو السوابق (حسن السيرة والسلوك) صادرة حديثاً، موثقة بالخارجية والداخلية، ومترجمة بنطاق رسمي إسباني.', fr: 'Attestation de moralité ou non-condamnation légalisée par le Ministère de l’Intérieur, traduit.', es: 'Antecedentes penales del país del Golfo legalizado por Gobernación, Exteriores y traducido.' }
      },
      {
        n: { en: 'Standardized Medical Fitness Certificate', ar: 'الشهادة والتقرير الصحي الرسمي الموثق', fr: 'Certificat d’évaluation médicale réglementaire', es: 'Certificado de aptitud médica regulado de salud' },
        desc: { en: 'Certifying no major health risks matching global pandemic sanitation categories of 2005.', ar: 'يفيد بسلامة الطالب والتحقق من عدم حمله لأمراض سارية تضر الصحة العامة تبعاً للوائح الدولية.', fr: 'Formulaire médical dénotant d’une santé de base exempte de virus graves ou à quarantaine mondiale.', es: 'Constancia oficial médica de no padecer enfermedades con riesgo para el bienestar comunitario.' }
      }
    ]
  },
  iraq_syria: {
    name: { en: 'Iraq & Syria 🇮🇶🇸🇾', ar: 'العراق وسوريا 🇮🇶🇸🇾', fr: 'Irak & Syrie 🇮🇶🇸🇾', es: 'Irak y Siria 🇮🇶🇸🇾' },
    consulate: { en: 'Embassy of Spain in Beirut / Damascus / Baghdad (liaison)', ar: 'سفارة إسبانيا في بيروت / دمشق / بغداد', fr: 'Ambassade de l’Espagne (Alger/Beyrouth/Amman)', es: 'Embajada de España' },
    timeline: { en: 'Average processing: 6-12 weeks', ar: 'وقت المعالجة المتوسط: 6-12 أسابيع', fr: 'Traitement moyen: 6-12 semaines', es: 'Tramitación media: 6-12 semanas' },
    docs: [
      {
        n: { en: 'National Visa Application & Biometric Photos', ar: 'استمارة طلب التأشيرة الوطنية والصور البيومترية', fr: 'Formulaire de visa national espagnol & Photos', es: 'Formulario oficial de visado nacional de España' },
        desc: { en: 'Two copies of national visa form, completely filled and signed, with 2 recent passport photos.', ar: 'نسختين من طلب الفيزا الوطنية، معبأة وموقعة حسب الأصول، مع صورتين حديثتين بخلفية بيضاء.', fr: 'Deux formulaires nationaux complétés en espagnol ou anglais, signés, avec photos couleurs réglementaires.', es: 'Formularios oficiales de visado nacional impresos de la web consular, con fotos de fondo blanco.' }
      },
      {
        n: { en: 'Valid Passport & Certified Translations', ar: 'جواز السفر ساري المفعول مع الترجمات المعتمدة', fr: 'Passeport valide & Traductions officielles', es: 'Pasaporte oficial en vigor y traducciones juradas' },
        desc: { en: 'Original passport (valid +6 months beyond intended stay) and copies of all pages. Translated to Spanish.', ar: 'جواز السفر الأصلي (صالح لأكثر من 6 أشهر عن مدة الإقامة المقررة) مع ترجمة محلفة للإسبانية.', fr: 'Passeport d’une validité supérieure à six mois et traductions jurées de toutes les pages d’identité.', es: 'Pasaporte nacional original con vigencia superior y fotocopias de todas las hojas legalizadas.' }
      },
      {
        n: { en: 'Admission Letter of Spanish Education Center', ar: 'خطاب القبول الرسمي من معهد أو مدرسة إسبانية', fr: 'Lettre d’admission officielle de l’institut', es: 'Carta de admisión o matrícula oficial de España' },
        desc: { en: 'Official letter showing complete program outline, duration, and intensive course plan (min 20h/week).', ar: 'شهادة تسجيل أصلية مبرزاً خطة البرنامج المكثف (20 ساعة أسبوعياً كحد أدنى) وإيصال سداد الرسوم.', fr: 'Acceptation légale dans un centre espagnol accrédité pour suivre un enseignement intensif d’au moins 20 heures.', es: 'Carta oficial de la escuela que precise el plan de estudios, las fechas y un mínimo de 20 horas lectivas.' }
      },
      {
        n: { en: 'Proof of Financial Solvency (IPREM 100%)', ar: 'إثبات الملاءة المالية للمتكفل (100% IPREM)', fr: 'Garantie financière & Justificatifs de solvabilité', es: 'Justificación de medios económicos suficientes' },
        desc: { en: 'Sufficient funds evidence (minimum €600/month or equivalent in foreign accounts) or legalized parental affidavit.', ar: 'كشف حساب معاملات 6 أشهر للمتكفل، متضمناً شهادة الراتب وعقد العمل وتعهد ضمان مالي مترجم ومصدق.', fr: 'Preuve de revenus constants du parrain de famille visés par la banque et le gouvernement, d’au moins 600€ mensuels.', es: 'Certificación de los ingresos mensuales con balances de los últimos meses que superen el IPREM.' }
      },
      {
        n: { en: 'Full Repatriation Medical Insurance', ar: 'تأمين طبي خاص يغطي كامل التكاليف ونقل المريض', fr: 'Assurance médicale complète avec rapatriement', es: 'Seguro médico concertado con cobertura de repatriación' },
        desc: { en: 'Coverage with a company accredited in Spain (such as Sanitas, Adeslas) without deductibles or copays.', ar: 'تأمين طبي شامل (بدون اقتطاعات أو كبونات) من لدن وكالة مرخصة بإسبانيا يتضمن ترحيل الجثمان.', fr: 'Assurance d’une couverture de dépenses sanitaires et de décès à concurrence de 30 000€ minimum (sin copago).', es: 'Póliza con compañía española para hospitalizaciones urgentes y repatriaciones médicas completas sin franquicias.' }
      },
      {
        n: { en: 'Criminal Record Certificate (Legalized)', ar: 'شهادة السجل العدلي أو حسن السيرة والسلوك الموثقة', fr: 'Extrait de casier judiciaire légalisé', es: 'Certificado de antecedentes penales legalizado' },
        desc: { en: 'Under 3 months police clearance legalized by state Ministries and translated by a certified court translator.', ar: 'شهادة السجل العدلي وخلو السوابق مصدقة من الخارجية ومترجمة ترجمة رسمية إسبانية.', fr: 'Document récent visé par le Ministère de l’Intérieur et des AE, traduit en espagnol d’une manière jurée.', es: 'Antecedentes penales del país expedidos recientemente, legalizados por Vía Diplomática y Traducidos.' }
      },
      {
        n: { en: 'Official Medical Health Certificate', ar: 'تقرير طبي رسمي ومصدق يثبت الأهلية الصحية', fr: 'Certificat médical officiel de santé publique', es: 'Certificado médico oficial homologado' },
        desc: { en: 'Stating the student has no grave illnesses matching quarantine classes under the International Health Regulations.', ar: 'تقرير يوضح خلو الطالب من الأمراض في توافق تام مع الأنظمة واللوائح الصحية الدولية لسنة 2005.', fr: 'Certificat du médecin de santé publique confirmant le respect des normes internationales de non-risk.', es: 'Documento médico oficial que declare no padecer ninguna afección médica grave bajo el reglamento 2005.' }
      }
    ]
  }
};

export interface Formulation {
  tag: string;
  en: string;
  ar: string;
  fr: string;
  es: string;
  duration: { en: string; ar: string; fr: string; es: string };
  access: string[];
  cost: { en: string; ar: string; fr: string; es: string };
  note?: { en: string; ar: string; fr: string; es: string };
  families?: Array<{
    name: { en: string; ar: string; fr: string; es: string };
    salidas: {
      en: string[];
      ar: string[];
      fr: string[];
      es: string[];
    };
  }>;
}

export const FORMATIONS: Record<string, Formulation> = {
  fp_medio: {
    tag: 'fp',
    en: 'Grado Medio (FP)',
    ar: 'التكوين المهني المتوسط (Grado Medio)',
    fr: 'Formation Professionnelle Moyenne',
    es: 'Formación Profesional de Grado Medio',
    duration: { en: '2 years', ar: 'سنتان', fr: '2 ans', es: '2 años' },
    access: ['ESO diploma or equivalent (homologated)', 'Minimum age 16+', 'OR entrance exam if no diploma'],
    cost: { en: 'Public: €100-400/yr | Private: €1,500-4,000/yr', ar: 'عام: 100-400 يورو/سنة | خاص: 1500-4000 يورو/سنة', fr: 'Public: 100-400€/an | Privé: 1500-4000€/an', es: 'Público: 100-400€/año | Privado: 1.500-4.000€/año' },
    families: [
      {
        name: { en: 'Administrative Management (GAD)', ar: 'التدبير الإداري والقانوني', fr: 'Gestion Administrative', es: 'Gestión Administrativa' },
        salidas: {
          en: ['Office clerk', 'Administrative assistant', 'Data entry operator', 'Receptionist'],
          ar: ['كاتب مكتب', 'مساعد إداري', 'مشغل إدخال البيانات', 'موظف استقبال'],
          fr: ['Employé de bureau', 'Assistant administratif', 'Opérateur de saisie', 'Réceptionniste'],
          es: ['Auxiliar administrativo', 'Asistente de oficina', 'Operador de datos', 'Recepcionista']
        }
      },
      {
        name: { en: 'Microcomputer Systems & Networks (SMR)', ar: 'أنظمة الحاسوب والشبكات الصغيرة', fr: 'Systèmes Informatiques et Réseaux', es: 'Sistemas Microinformáticos y Redes (SMR)' },
        salidas: {
          en: ['PC technician', 'Help desk support', 'Network installer', 'Hardware technician'],
          ar: ['تقني حاسوب', 'دعم تقني', 'منصّب شبكات', 'تقني أجهزة'],
          fr: ['Technicien PC', 'Support help desk', 'Installateur réseau', 'Technicien matériel'],
          es: ['Técnico en PC', 'Soporte help desk', 'Instalador de redes', 'Técnico hardware']
        }
      },
      {
        name: { en: 'Nursing Auxiliary Care (TCAE)', ar: 'الرعاية التمريضية المساعدة', fr: 'Soins Auxiliaires de Santé', es: 'Cuidados Auxiliaires de Enfermería' },
        salidas: {
          en: ['Clinical auxiliary', 'Primary healthcare assistant', 'Home care assistant', 'Dental assistant'],
          ar: ['مساعد سريري', 'مساعد رعاية صحية أولية', 'مساعد رعاية منزلية', 'مساعد طبيب أسنان'],
          fr: ['Auxiliaire clinique', 'Assistant de soins primaires', 'Aide à domicile', 'Assistant dentaire'],
          es: ['Auxiliar de enfermería', 'Asistente de atención primaria', 'Asistente domiciliario', 'Auxiliar dental']
        }
      },
      {
        name: { en: 'Electrical and Automatic Installations', ar: 'التجهيزات الكهربائية والآلية', fr: 'Installations Électriques et Automatiques', es: 'Instalaciones Eléctricas y Automáticas' },
        salidas: {
          en: ['Electrician', 'Building electrical maintainer', 'Telecommunications installer', 'Industrial assembler'],
          ar: ['فني كهرباء', 'صيانة كهرباء المباني', 'منصب وسائل الاتصالات', 'جامع صناعي'],
          fr: ['Électricien', 'Mainteneur électrique bâtiment', 'Installateur télécom', 'Monteur industriel'],
          es: ['Electricista de edificios', 'Mantenedor eléctrico', 'Instalador de telecomunicaciones', 'Montador industrial']
        }
      },
      {
        name: { en: 'Commercial Activities', ar: 'الأنشطة التجارية والمبيعات', fr: 'Activités Commerciales', es: 'Actividades Comerciales' },
        salidas: {
          en: ['Sales representative', 'Store manager assistant', 'Cashier', 'Stock controller'],
          ar: ['ممثل مبيعات', 'مساعد مدير متجر', 'أمين صندوق', 'مراقب مخزون'],
          fr: ['Commercial', 'Assistant manager de magasin', 'Caissier', 'Gestionnaire de stock'],
          es: ['Vendedor', 'Asistente de tienda', 'Cajero', 'Controlador de stock']
        }
      },
      {
        name: { en: 'Gastronomy and Culinary Services', ar: 'فن الطبخ وخدمات الإطعام', fr: 'Gastronomie et Services de Restauration', es: 'Cocina y Gastronomía' },
        salidas: {
          en: ['Kitchen assistant', 'Commis chef', 'Waiter', 'Culinary assistant'],
          ar: ['مساعد مطبخ', 'مساعد طاهي', 'نادل', 'مساعد طهي'],
          fr: ['Commis de cuisine', 'Aide-cuisinier', 'Serveur', 'Assistant culinaire'],
          es: ['Ayudante de cocina', 'Cocinero dependiente', 'Camarero', 'Auxiliar de preparación']
        }
      },
      {
        name: { en: 'Care for Dependent People', ar: 'رعاية الأشخاص ذوي الاحتياجات الخاصة', fr: 'Aide aux Personnes Dépendantes', es: 'Atención a Personas en Situación de Dependencia' },
        salidas: {
          en: ['Home care worker', 'Geriatric assistant', 'Personal autonomy support'],
          ar: ['مساعد رعاية منزلية', 'مساعد رعاية المسنين', 'داعم الاستقلالية الشخصية'],
          fr: ['Auxiliaire de vie social', 'Assistant gériatrique', 'Soutien de l’autonomie'],
          es: ['Cuidador domiciliario', 'Gerocultor', 'Auxiliar en centros de día']
        }
      },
      {
        name: { en: 'Automotive Electromechanics', ar: 'الميكانيك الكهربي للمركبات', fr: 'Électromécanique des Véhicules', es: 'Electromecánica de Vehículos Automóviles' },
        salidas: {
          en: ['Auto mechanic', 'Car electrician', 'Diagnostics assistant', 'Spare parts seller'],
          ar: ['ميكانيكي سيارات', 'كهربائي سيارات', 'مساعد تشخيص', 'مشتري قطع الغيار'],
          fr: ['Mécanicien automobile', 'Électricien auto', 'Assistant de diagnostic', 'Vendeur de pièces'],
          es: ['Mecánico de coches', 'Electricista de automóviles', 'Ayudante de diagnosis', 'Recambista']
        }
      },
      {
        name: { en: 'Pharmacy and Parapharmacy', ar: 'مساعد الصيدلة والمنتجات الموازية', fr: 'Pharmacie et Parapharmacie', es: 'Farmacia y Parafarmacia' },
        salidas: {
          en: ['Pharmacy technician', 'Parapharmacy assistant', 'Drug warehouse assistant', 'Hospital pharmacy aide'],
          ar: ['تقني صيدلي', 'مساعد في شبه الصيدلة', 'مساعد مخازن أدوية', 'مساعد صيدلة المستشفيات'],
          fr: ['Préparateur en pharmacie', 'Assistant parapharmacie', 'Gestionnaire de stock pharma', 'Aide pharmacie hospitalière'],
          es: ['Técnico en farmacia', 'Auxiliar de parafarmacia', 'Almacenero de medicamentos', 'Auxiliar de farmacia hospitalaria']
        }
      },
      {
        name: { en: 'Bodywork and Car Paint', ar: 'هياكل السيارات والطلاء', fr: 'Carrosserie et Peinture Automobile', es: 'Carrocería' },
        salidas: {
          en: ['Bodywork metal sheet installer', 'Auto spray painter', 'Glass replacement technician'],
          ar: ['مصلح هياكل السيارات', 'صباغ سيارات', 'فني استبدال زجاج السيارات'],
          fr: ['Tôlier carrossier', 'Peintre en carrosserie', 'Technicien vitrage'],
          es: ['Chapista de vehículos', 'Pintor de coches', 'Instalador de lunas']
        }
      },
      {
        name: { en: 'Natural Environment and Leisure Guide', ar: 'مرشد بيئي والأنشطة الترفيهية', fr: 'Guide Milieu Naturel et Loisirs', es: 'Guía en el Medio Natural y de Tiempo Libre' },
        salidas: {
          en: ['Trekking guide', 'Eco-tourism guide', 'Outdoor activities monitor'],
          ar: ['مرشد تجوال جبلي', 'مرشد سياحة بيئية', 'منشط أنشطة خارجية'],
          fr: ['Guide de randonnée', 'Guide éco-tourisme', 'Animateur nature et plein air'],
          es: ['Guía de senderismo', 'Guía de turismo activo', 'Monitor de tiempo libre']
        }
      },
      {
        name: { en: 'Aesthetics and Beauty', ar: 'علم الجمال ومستحضرات التجميل', fr: 'Esthétique et Cosmétique', es: 'Estética y Belleza' },
        salidas: {
          en: ['Beautician', 'Nail technician', 'Makeup assistant', 'Cosmetics product seller'],
          ar: ['أخصائي تجميل', 'أخصائي العناية بالأظافر', 'مساعد ماكياج', 'بائع منتجات التجميل'],
          fr: ['Esthéticienne', 'Auxiliaire onglerie', 'Maquilleuse', 'Vendeuse cosmétique'],
          es: ['Esteticista', 'Manicurista', 'Maquillador auxiliar', 'Asesor de ventas de cosmética']
        }
      },
      {
        name: { en: 'Hairdressing and Hair Cosmetics', ar: 'الحلاقة ومستحضرات تجميل الشعر', fr: 'Coiffure et Cosmétique Capillaire', es: 'Peluquería y Cosmética Capilar' },
        salidas: {
          en: ['Hairdresser', 'Hair colorist', 'Salon manager assistant', 'Hair care consultant'],
          ar: ['حلاق', 'ملون شعر', 'مساعد مدير صالون حلاقة', 'مستشار العناية بالشعر'],
          fr: ['Coiffeur', 'Visagiste coloriste', 'Assistant manager de salon', 'Conseiller capillaire'],
          es: ['Peluquero', 'Colorista capilar', 'Asesor de imagen capilar', 'Técnico de tratamientos capilares']
        }
      },
      {
        name: { en: 'Emergency Healthcare Services', ar: 'الطوارئ والخدمات الصحية العاجلة', fr: 'Urgences Sanitaires', es: 'Emergencias Sanitarias' },
        salidas: {
          en: ['Ambulance driver', 'Emergency room auxiliary', 'Civil protection aid', 'Tele-assistance operator'],
          ar: ['سائق سيارة إسعاف', 'مساعد في غرف الطوارئ', 'مساعد الحماية المدنية', 'مشغل المساعدة الهاتفية الطبية'],
          fr: ['Conducteur d’ambulance', 'Auxiliaire d’urgences', 'Secouriste protection civile', 'Opérateur de télé-assistance'],
          es: ['Conductor de ambulancia', 'Camillero de urgencias', 'Técnico de protección civil', 'Teleoperador de emergencias sanitarias']
        }
      },
      {
        name: { en: 'Welding and Boilermaking', ar: 'اللحام وتصنيع الغلايات والمقاطع المعدنية', fr: 'Soudage et Chaudronnerie', es: 'Soldadura y Calderería' },
        salidas: {
          en: ['Industrial welder', 'Metal structures assembler', 'Boilermaker helper', 'Pipe welder'],
          ar: ['لحام صناعي', 'جامع هياكل معدنية', 'مساعد صانع الغلايات', 'لحام أنابيب'],
          fr: ['Soudeur industriel', 'Monteur de structures métalliques', 'Chaudronnier', 'Tuyauteur industrial'],
          es: ['Soldador industrial', 'Montador de estructuras de metal', 'Calderero industrial', 'Tubero instalador']
        }
      },
      {
        name: { en: 'Gardening and Floristry', ar: 'تنسيق الحدائق وبستنة المساحات الخضراء والزهور', fr: 'Jardinage et Fleuristerie', es: 'Jardinería y Floristería' },
        salidas: {
          en: ['Gardener maintainer', 'Florist designer', 'Garden center assistant', 'Greenhouse worker'],
          ar: ['عامل صيانة حدائق', 'مصمم باقات زهور', 'مساعد في مشتل الحدائق', 'عامل في البيوت البلاستيكية'],
          fr: ['Jardinier paysagiste', 'Concepteur fleuriste', 'Assistant jardinerie', 'Ouvrier de serre'],
          es: ['Jardinero mantenedor', 'Diseñador floralistas', 'Dependiente de floristería', 'Trabajador de viveros agrícolas']
        }
      },
      {
        name: { en: 'Bakery, Pastry and Confectionery', ar: 'المخبوزات والحلويات والسكاكر', fr: 'Boulangerie, Pâtisserie et Confiserie', es: 'Panadería, Repostería y Confitería' },
        salidas: {
          en: ['Baker apprentice', 'Pastry assistant chef', 'Confectionery artisan', 'Store bakery assistant'],
          ar: ['مساعد خباز', 'مساعد رئيس حلويات', 'حرفي صناعة السكاكر', 'مساعد متجر مخبوزات'],
          fr: ['Boulanger artisan', 'Assistant pâtissier', 'Confiseur chocolatier', 'Vendeur de boulangerie'],
          es: ['Oficial de panadería', 'Ayudante de repostería', 'Artesano de confitería', 'Vendedor de despacho de pan']
        }
      }
    ]
  },
  fp_superior: {
    tag: 'fp',
    en: 'Grado Superior (FP)',
    ar: 'التكوين المهني العالي (Grado Superior)',
    fr: 'Formation Professionnelle Supérieure',
    es: 'Formación Profesional de Grado Superior',
    duration: { en: '2 years (incl. 400-700h internship)', ar: 'سنتان (بما فيها 400-700 ساعة تدريب)', fr: '2 ans (dont 400-700h de stage)', es: '2 años (con 400-700h de FCT)' },
    access: ['Baccalaureate or equivalent (homologated)', 'OR entrance exam', 'Spanish B1/B2 recommended'],
    cost: { en: 'Public: €200-400/yr | Private: €2,000-6,000/yr', ar: 'عام: 200-400 يورو/سنة | خاص: 2000-6000 يورو/سنة', fr: 'Public: 200-400€/an | Privé: 2000-6000€/an', es: 'Público: 200-400€/año | Privado: 2.000-6.000€/año' },
    families: [
      {
        name: { en: 'Multiplatform App Development (DAM)', ar: 'تطوير التطبيقات متعددة المنصات (DAM)', fr: "Développement d'Applications Multiplateformes (DAM)", es: 'Desarrollo de Aplicaciones Multiplataforma (DAM)' },
        salidas: {
          en: ['Android/iOS developer', 'Backend developer (Java, Kotlin)', 'Desktop app developer'],
          ar: ['مطور Android/iOS', 'مطور خلفي (Java, Kotlin)', 'مطور تطبيقات سطح المكتب'],
          fr: ['Développeur Android/iOS', 'Développeur backend (Java, Kotlin)', 'Développeur applis bureau'],
          es: ['Desarrollador Android/iOS', 'Desarrollador backend', 'Programador de escritorio']
        }
      },
      {
        name: { en: 'Web App Development (DAW)', ar: 'تطوير تطبيقات الويب (DAW)', fr: "Développement d'Applications Web (DAW)", es: 'Desarrollo de Aplicaciones Web (DAW)' },
        salidas: {
          en: ['Frontend developer (React, Vue)', 'Backend developer (Node)', 'Full-stack developer'],
          ar: ['مطور واجهة أمامية (React, Vue)', 'مطور خلفي (PHP, Node)', 'مطور شامل (Full-stack)'],
          fr: ['Développeur frontend (React, Vue)', 'Développeur backend (PHP, Node)', 'Développeur full-stack'],
          es: ['Desarrollador frontend', 'Desarrollador backend', 'Full-stack developer']
        }
      },
      {
        name: { en: 'Network Systems Administration (ASIR)', ar: 'إدارة أنظمة الشبكات (ASIR)', fr: 'Administration de Systèmes Réseaux (ASIR)', es: 'Administración de Sistemas Informáticos en Red (ASIR)' },
        salidas: {
          en: ['Systems administrator', 'Network engineer', 'Cloud technician'],
          ar: ['مدير أنظمة', 'مهندس شبكات', 'تقني سحابة (AWS, Azure)'],
          fr: ['Administrateur systèmes', 'Ingénieur réseau', 'Technicien cloud (AWS, Azure)'],
          es: ['Administrador de sistemas', 'Ingeniero de redes', 'Técnico cloud']
        }
      },
      {
        name: { en: 'Administration and Finance (AyF)', ar: 'الإدارة والمالية (AyF)', fr: 'Administration et Finance', es: 'Administración y Finanzas' },
        salidas: {
          en: ['Administrative manager', 'Accountant assistant', 'HR assistant', 'Financial controller'],
          ar: ['مدير إداري', 'مساعد محاسب', 'مساعد موارد بشرية', 'مراقب مالي'],
          fr: ['Responsable administratif', 'Assistant comptable', 'Assistant RH', 'Contrôleur financier'],
          es: ['Responsable de administración', 'Asistente contable', 'Técnico en RRHH', 'Controlador financiero']
        }
      },
      {
        name: { en: 'International Trade (TECO)', ar: 'التجارة الدولية (TECO)', fr: 'Commerce International (TECO)', es: 'Comercio Internacional (TECO)' },
        salidas: {
          en: ['Import/export manager', 'Customs agent', 'Logistics coordinator'],
          ar: ['مدير استيراد/تصدير', 'وكيل جمارك', 'منسق لوجستي'],
          fr: ['Responsable import/export', 'Agent en douane', 'Coordinateur logistique'],
          es: ['Gestor import/export', 'Agente de aduanas', 'Coordinador logístico']
        }
      },
      {
        name: { en: 'Marketing and Advertising', ar: 'التسويق والإشهار والاتصال', fr: 'Marketing and Publicité', es: 'Marketing y Publicidad' },
        salidas: {
          en: ['Product manager assistant', 'Media planner', 'Digital marketer', 'Event coordinator'],
          ar: ['مساعد مدير المنتج', 'مخطط الوسائط', 'أخصائي تسويق رقمي', 'منسق فعاليات'],
          fr: ['Chef de produit adjoint', 'Planificateur média', 'Marketeur digital', 'Coordinateur événement'],
          es: ['Asistente de producto', 'Planificador de medios', 'Gestor de marketing digital', 'Organizador de eventos']
        }
      },
      {
        name: { en: 'Early Childhood Education', ar: 'التربية والتعليم المخصص للأطفال', fr: 'Éducation de la Petite Enfance', es: 'Educación Infantil' },
        salidas: {
          en: ['Preschool tutor', 'Educator in ludotecas', 'Childcare specialist', 'Recreation coordinator'],
          ar: ['مربي حضانة', 'منشط فضاءات الأطفال', 'أخصائي رعاية أطفال', 'منسق ترفيهي'],
          fr: ['Tuteur préscolaire', 'Éducateur de ludothèque', 'Spécialiste de la petite enfance', 'Éducateur spécialisé'],
          es: ['Educador infantil', 'Educador en ludotecas', 'Especialista en cuidado infantil', 'Monitor de tiempo libre']
        }
      },
      {
        name: { en: 'Social Integration', ar: 'الإدماج والعمل الاجتماعي والصحي', fr: 'Intégration Sociale', es: 'Integración Social' },
        salidas: {
          en: ['Social integration specialist', 'Youth support worker', 'Family tutor helper', 'Social services assistant'],
          ar: ['أخصائي دمج اجتماعي', 'عامل دعم تنشيط الشباب', 'مساعد توجيه أسرى', 'مساعد خدمات اجتماعية'],
          fr: ['Éducateur spécialisé d’insertion', 'Médiateur familial', 'Assistant de services sociaux'],
          es: ['Técnico de integración social', 'Mediador comunitario', 'Educador de menores', 'Asistente de servicios sociales']
        }
      },
      {
        name: { en: 'Clinical and Biomedical Laboratory', ar: 'المختبر السريري والحيوي الطبي', fr: 'Laboratoire Clinique et Biomédical', es: 'Laboratorio Clínico y Biomédico' },
        salidas: {
          en: ['Lab technician', 'Diagnostic test analyst', 'Pharma research technician', 'Toxicology laboratory assistant'],
          ar: ['تقني مختبر طبي', 'محلل اختبارات تشخيصية', 'تقني أبحاث دوائية', 'مساعد مختبر السموم'],
          fr: ['Technicien de laboratoire', 'Analyste de diagnostic', 'Technicien recherche pharma', 'Assistant labo de toxicologie'],
          es: ['Técnico de laboratorio clínico', 'Analista de diagnóstico', 'Técnico de investigación farmacéutica', 'Auxiliar de laboratorio de toxicología']
        }
      },
      {
        name: { en: 'Kitchen Management', ar: 'إدارة وتسيير المطابخ الفندقية', fr: 'Direction de Cuisine', es: 'Dirección de Cocina' },
        salidas: {
          en: ['Head chef (Chef de Cuisine)', 'Kitchen planner', 'Caterer manager', 'Food safety inspector'],
          ar: ['رئيس طهاة أول', 'مخطط مطابخ ومأكولات', 'مدير شركة إطعام', 'مراقب سلامة الأغذية'],
          fr: ['Chef de cuisine', 'Planificateur cuisine', 'Responsable traiteur', 'Inspecteur sécurité alimentaire'],
          es: ['Jefe de cocina', 'Planificador gastronómico', 'Responsable de catering', 'Inspector de seguridad alimentaria']
        }
      },
      {
        name: { en: '3D Animations, Games and Interactives', ar: 'الرسوم المتحركة ثلاثية الأبعاد والألعاب والبيئات التفاعلية', fr: 'Animations 3D, Jeux et Environnements Interactifs', es: 'Animaciones 3D, Juegos y Entornos Interactivos' },
        salidas: {
          en: ['3D Animator', 'Video game technical artist', 'VFX designer', 'Virtual reality modeler'],
          ar: ['رائد رسوم ثلاثي الأبعاد', 'فنان تقني لألعاب الفيديو', 'مصمم المؤثرات البصرية VFX', 'نمذجة الواقع الافتراضي'],
          fr: ['Animateur 3D', 'Artiste technique de jeu vidéo', 'Concepteur d’effets visuels', 'Modélisateur de réalité virtuelle'],
          es: ['Animador 3D', 'Artista técnico de videojuegos', 'Diseñador de efectos visuales (VFX)', 'Modelador de realidad virtual']
        }
      },
      {
        name: { en: 'Electrotechnical and Automated Systems', ar: 'الأنظمة الكهرومائية والمؤتمتة', fr: 'Systèmes Électrotechniques et Automatisés', es: 'Sistemas Electrotécnicos y Automatizados' },
        salidas: {
          en: ['Industrial automat supervisor', 'Telecommunications draftsperson', 'Electrical facilities designer'],
          ar: ['مشرف الأتمتة الصناعية', 'رسام تخطيط الاتصالات', 'مصمم منشآت كهربائية'],
          fr: ['Superviseur automatisme industriel', 'Dessinateur télécom', 'Concepteur d’installations électriques'],
          es: ['Supervisor de automatización industrial', 'Proyectista de telecomunicaciones', 'Diseñador de instalaciones eléctricas']
        }
      },
      {
        name: { en: 'Travel Agencies and Event Management', ar: 'وكالات الأسفار وإدارة الفعاليات والمؤتمرات', fr: 'Agences de Voyages et Gestion d’Événements', es: 'Agencias de Viajes y Gestión de Eventos' },
        salidas: {
          en: ['Travel consultant agency', 'Event production planner', 'Congress organizer', 'Tourist product salesperson'],
          ar: ['مستشار وكالة أسفار', 'مخطط إنتاج الفعاليات', 'منظم مؤتمرات', 'بائع منتجات سياحية'],
          fr: ['Conseiller voyage', 'Planificateur d’événements', 'Organisateur de congrès', 'Producteur touristique'],
          es: ['Agente de viajes', 'Organizador de eventos corporativos', 'Organizador de congresos', 'Promotor turístico']
        }
      },
      {
        name: { en: 'Dental Prosthesis', ar: 'صناعة بدائل وأطقم الأسنان', fr: 'Prothèse Dentaire', es: 'Prótesis Dentales' },
        salidas: {
          en: ['Dental prosthodontist', 'Lab manufacturing manager', 'Technical sales rep for dental systems', 'Quality controller'],
          ar: ['صانع أجهزة تقويم بدائل الأسنان', 'مدير تصنيع مخبري', 'مبيعات الأنظمة والمعدات الطبية السنية', 'مراقب جودة الأجهزة السنية'],
          fr: ['Prothésiste dentaire', 'Responsable de laboratoire dentaire', 'Délégué commercial dentaire', 'Contrôleur qualité prothétique'],
          es: ['Protesista dental', 'Diseñador de prótesis CAD-CAM', 'Responsable técnico de laboratorio dental', 'Asesor comercial del sector dental']
        }
      },
      {
        name: { en: 'Medical Imaging Diagnostics & Nuclear Medicine', ar: 'التصوير الطبي التشخيصي والطب النووي', fr: 'Imagerie Médicale et Médecine Nucléaire', es: 'Imagen para el Diagnóstico y Medicina Nuclear' },
        salidas: {
          en: ['MRI/CT Scan radiographer', 'Nuclear medicine technician', 'Radiation protection advisor', 'Healthcare equipment specialist'],
          ar: ['فني تصوير رنين وبصري CT', 'تقني الطب النووي الإشعاعي', 'مستشار وقاية إشعاعية', 'أخصائي معدات الأشعة الطبية'],
          fr: ['Manipulateur radio scanner/IRM', 'Technicien de médecine nucléaire', 'Conseiller en radioprotection', 'Spécialiste applications médicales'],
          es: ['Técnico especialista en radiodiagnóstico', 'Técnico de medicina nuclear', 'Técnico en radioprotección', 'Delegado comercial de equipos médicos']
        }
      },
      {
        name: { en: 'Industrial Mechatronics', ar: 'الميكاترونكس والصيانة الصناعية المتكاملة', fr: 'Mécatronique Industrielle', es: 'Mecatrónica Industrial' },
        salidas: {
          en: ['Mechatronics maintenance supervisor', 'Industrial robotics setup lead', 'Automated lines system assembler'],
          ar: ['مشرف صيانة ميكاترونكس', 'رئيس إعداد الروبوتات الصناعية', 'منشئ خطوط التجميع الآلي'],
          fr: ['Responsable de maintenance mécatronique', 'Monteur de robots industriels', 'Technicien de lignes automatisées'],
          es: ['Supervisor de mantenimiento industrial', 'Técnico en mecatrónica', 'Jefe de equipo de montaje de sistemas automatizados', 'Técnico de puesta en marcha']
        }
      },
      {
        name: { en: 'Renewable Energies Management', ar: 'إدارة وتسيير مشاريع الطاقات المتجددة', fr: 'Gestion des Énergies Renouvelables', es: 'Energías Renovables' },
        salidas: {
          en: ['Solar field manager', 'Wind energy systems builder', 'Energy efficiency manager', 'Environmental advisor'],
          ar: ['مدير مشاريع الطاقة الشمسية', 'منشئ توربينات طاقة الرياح', 'مدير نجاعة وبطاقات الطاقة', 'مستشار بيئي'],
          fr: ['Chef de projet solaire', 'Constructeur d’éoliennes', 'Gestionnaire d’efficacité énergétique', 'Conseiller vert'],
          es: ['Gestor de proyectos solares y eólicos', 'Montador de parques eólicos', 'Técnico de eficiencia energética', 'Auditor de consumo']
        }
      },
      {
        name: { en: 'Transport and Logistics Management', ar: 'إدارة وترتيب النقل والأعمال اللوجستية', fr: 'Gestion des Transports et de la Logistique', es: 'Transporte y Logística' },
        salidas: {
          en: ['Logistics hub operations manager', 'Supply chain planner', 'Fleet supervisor', 'Import/Export distribution lead'],
          ar: ['مدير عمليات المراكز اللوجستية', 'مخطط سلاسل الإمداد', 'مشرف أساطيل النقل', 'رئيس التوزيع الدولي والاستيراد'],
          fr: ['Superviseur de plateforme logistique', 'Planificateur supply chain', 'Gestionnaire de flotte de transport', 'Responsable distribution'],
          es: ['Gestor de almacén logístico', 'Planificador de la cadena de suministro', 'Jefe de tráfico de flota', 'Coordinador de envíos internacionales']
        }
      },
      {
        name: { en: 'Dietetics and Nutrition', ar: 'علم الحمية والتربية الغذائية السليمة', fr: 'Diététique et Nutrition', es: 'Dietética' },
        salidas: {
          en: ['Dietitian planner', 'Food safety controller', 'Catering nutritional advisor', 'Sports nutrition expert'],
          ar: ['أخصائي تخطيط الحمية الغذائية', 'مراقب جودة التغذية والسلامة', 'مستشار الوجبات الفندقية', 'خبير الغذاء الرياضي'],
          fr: ['Diététicien conseil', 'Contrôleur hygiène et nutrition', 'Conseiller en restauration collective', 'Nutritionniste sportif'],
          es: ['Dietista clínico', 'Responsable de alimentación en hostelería', 'Consultor de nutrición deportiva', 'Asesor de seguridad alimentaria']
        }
      },
      {
        name: { en: 'Prevention of Professional Risks', ar: 'الوقاية من المخاطر والأخطار المهنية في العمل', fr: 'Prévention des Risques Professionnels', es: 'Prevención de Riesgos Profesionales' },
        salidas: {
          en: ['Occupational safety supervisor', 'HSE risk inspector', 'Company health coordinator', 'Industrial hygiene advisor'],
          ar: ['مشرف السلامة والوقاية المهنية', 'مفتش قياس المخاطر HSE', 'منسق صحة في بيئات العمل', 'مستشار النظافة الصناعية'],
          fr: ['Animateur sécurité au travail (HSE)', 'Responsable prévention risques', 'Coordinateur santé environnementale', 'Auditeur de risques'],
          es: ['Técnico superior en prevención de riesgos (PRL)', 'Coordinador de seguridad y salud', 'Auditor de riesgos laborales', 'Asesor de higiene industrial']
        }
      },
      {
        name: { en: 'Oral Hygiene', ar: 'نظافة وصحة الفم والأسنان', fr: 'Hygiène Buccodentaire', es: 'Higiene Bucodental' },
        salidas: {
          en: ['Dental hygienist', 'Oral health public educator', 'Dental clinic assistant supervisor', 'Epidemiological advisor'],
          ar: ['أخصائي صحة الفم والأسنان', 'مربي رعاية صحة الفم العامة', 'مساعد طبيب أسنان رئيسي', 'مستشار وقاية فمية'],
          fr: ['Hygiéniste dentaire', 'Éducateur de prévention buccodentaire', 'Assistant dentaire principal', 'Conseiller en santé publique'],
          es: ['Higienista dental', 'Educador de salud bucodental', 'Técnico preventivo', 'Asistente de clínica odontológica']
        }
      }
    ]
  },
  universidad: {
    tag: 'uni',
    en: 'Grado Universitario',
    ar: 'درجة البكالوريوس الجامعي',
    fr: 'Licence Universitaire (Grado)',
    es: 'Grado Universitario',
    duration: { en: '4 years (240 ECTS)', ar: '4 سنوات (240 ECTS)', fr: '4 ans (240 ECTS)', es: '4 años (240 ECTS)' },
    access: ['Baccalaureate + homologation credential', 'PCE Selectividad exams via UNEDasiss (required)', 'Spanish B2 level certificate'],
    cost: { en: 'Public: €800-2,500/yr | Private: €6,000-18,000/yr', ar: 'عام: 800-2500 يورو/سنة | خاص: 6000-18000 يورو/سنة', fr: 'Public: 800-2500€/an | Privé: 6000-18000€/an', es: 'Público: 800-2.500€/año | Privado: 6.000-18.000€/año' },
    note: {
      en: 'Tip: FP Grado Superior → University pathway gives credit exemptions. Save 1-2 years!',
      ar: 'نصيحة: مسار FP Grado Superior ← الجامعة يمنح إعفاءات من المواد. وفّر 1-2 سنة!',
      fr: 'Conseil: Parcours FP Grado Superior → Université donne des exemptions de crédits. Économisez 1-2 ans!',
      es: 'Consejo: La vía FP Grado Superior → Universidad da convalidaciones de créditos. ¡Ahorra 1-2 años!'
    },
    families: [
      {
        name: { en: 'Computer Science Engineering', ar: 'هندسة الكمبيوتر والمعلوماتية', fr: 'Ingénierie Informatique', es: 'Grado en Ingeniería Informática' },
        salidas: {
          en: ['Software architect', 'Systems engineer', 'Data engineer', 'IT consultant'],
          ar: ['مهندس برمجيات', 'مهندس أنظمة', 'مهندس بيانات', 'مستشار تقني'],
          fr: ['Architecte logiciel', 'Ingénieur systèmes', 'Ingénieur de données', 'Consultant informatique'],
          es: ['Arquitecto de software', 'Ingeniero de sistemas', 'Ingeniero de datos', 'Consultor tecnológico']
        }
      },
      {
        name: { en: 'Medicine & Health Studies', ar: 'الطب البشري والدراسات الصحية', fr: 'Médecine & Études de Santé', es: 'Grado en Medicina / Enfermería' },
        salidas: {
          en: ['General practitioner', 'Specialist physician (MIR)', 'Clinical researcher', 'Healthcare manager'],
          ar: ['طبيب عام', 'طبيب متخصص (MIR)', 'باحث عيادي', 'مدير رعاية صحية'],
          fr: ['Médecin généraliste', 'Spécialiste (MIR)', 'Chercheur clinique', 'Gestionnaire hospitalier'],
          es: ['Médico general', 'Médico especialista (MIR)', 'Investigador clínico', 'Gestor sanitario']
        }
      },
      {
        name: { en: 'Business Administration (ADE)', ar: 'إدارة وتوجيه المقاولات (ADE)', fr: 'Administration et Direction d’Entreprises (ADE)', es: 'Grado en Administración y Dirección de Empresas (ADE)' },
        salidas: {
          en: ['Financial analyst', 'Business consultant', 'Operations manager', 'Entrepreneur'],
          ar: ['محلل مالي', 'مستشار أعمال', 'مدير عمليات', 'رائد أعمال'],
          fr: ['Analyste financier', 'Consultant d’entreprise', 'Directeur des opérations', 'Entrepreneur'],
          es: ['Analista financiero', 'Consultor estratégico', 'Gerente de operaciones', 'Emprendedor']
        }
      },
      {
        name: { en: 'Law & International Relations', ar: 'القانون والعلاقات الدولية', fr: 'Droit & Relations Internationales', es: 'Grado en Derecho o Relaciones Internacionales' },
        salidas: {
          en: ['Corporate lawyer', 'Diplomat officer', 'Legal counselor', 'NGO administrator'],
          ar: ['محامي شركات', 'دبلوماسي', 'مستشار قانوني', 'مدير في منظمة غير حكومية'],
          fr: ['Avocat d’affaires', 'Diplomate', 'Conseiller juridique', 'Coordinateur d’ONG'],
          es: ['Abogado de empresa', 'Diplomático', 'Asesor jurídico', 'Director de ONG']
        }
      },
      {
        name: { en: 'Biotechnology & Chemistry', ar: 'البيوتكنولوجيا والكيمياء الحيوية', fr: 'Biotechnologie & Chimie', es: 'Grado en Biotecnología / Química' },
        salidas: {
          en: ['Bio-laboratory scientist', 'Pharma quality control', 'Clinical trials monitor', 'Chemical analyst'],
          ar: ['باحث مختبرات حيوية', 'مراقب جودة في الصيدلة', 'مراقب تجارب سريرية', 'محلل كيميائي'],
          fr: ['Chercheur en laboratoire', 'Contrôleur qualité pharma', 'Moniteur d’essais cliniques', 'Analyste chimique'],
          es: ['Investigador de laboratorio', 'Control de calidad farmacéutico', 'Monitor de ensayos', 'Analista químico']
        }
      },
      {
        name: { en: 'Psychology', ar: 'علم النفس وعلم السلوك البشري', fr: 'Psychologie', es: 'Grado en Psicología' },
        salidas: {
          en: ['Clinical psychologist', 'HR recruitment manager', 'Educational psychologist', 'Neuropsychologist assistant'],
          ar: ['أخصائي نفس سريري', 'مسؤول توظيف في الموارد البشرية', 'أخصائي نفس تربوي', 'مساعد أخصائي علم النفس العصبي'],
          fr: ['Psychologue clinicien', 'Responsable recrutement RH', 'Psychologue scolaire', 'Assistant neuropsychologue'],
          es: ['Psicólogo clínico (PIR)', 'Responsable de selección RRHH', 'Orientador educativo', 'Psicólogo de la salud']
        }
      },
      {
        name: { en: 'Architecture and Building Projects', ar: 'الهندسة المعمارية وبناء المشاريع', fr: 'Architecture et Projets d’Édification', es: 'Grado en Arquitectura' },
        salidas: {
          en: ['Architect designer', 'Urban planning coordinator', 'Interior structure consultant', 'Building construction manager'],
          ar: ['مهندس معماري مصمم', 'منسق التخطيط العمراني', 'مستشار الهياكل الداخلية', 'مدير ورش البناء'],
          fr: ['Architecte concepteur', 'Urbaniste', 'Architecte d’intérieur', 'Conducteur de travaux'],
          es: ['Arquitecto', 'Planificador urbanístico', 'Director de obras', 'Diseñador de interiores']
        }
      },
      {
        name: { en: 'Journalism and Audiovisual Communication', ar: 'الصحافة والإعلام والاتصال السمعي البصري', fr: 'Journalisme et Communication Audiovisuelle', es: 'Grado en Periodismo o Comunicación Audiovisuelle' },
        salidas: {
          en: ['Multimedia journalist', 'TV/Radio presenter editor', 'PR press officer', 'Social media editor'],
          ar: ['صحفي لعدة وسائط', 'مذيع تلفزيون أو راديو', 'مسؤول العلاقات العامة', 'محرر وسائط اجتماعية'],
          fr: ['Journaliste multimédia', 'Présentateur TV/Radio', 'Attaché de presse', 'Rédacteur web'],
          es: ['Periodista', 'Redactor de radio y televisión', 'Director de comunicación', 'Creador de contenidos multimedia']
        }
      }
    ]
  },
  master: {
    tag: 'master',
    en: 'Máster Universitario',
    ar: 'درجة الماجستير',
    fr: 'Master Universitaire',
    es: 'Máster Universitario',
    duration: { en: '1-2 years (60-120 ECTS)', ar: 'سنة إلى سنتين (60-120 ECTS)', fr: '1-2 ans (60-120 ECTS)', es: '1-2 años (60-120 ECTS)' },
    access: ["Bachelor's degree completed", 'Official transcripts + sworn translations', 'Language cert: Spanish B2/C1 or English IELTS/TOEFL'],
    cost: { en: 'Public: €1,200-4,500/yr | Private/MBA: €8,000-25,000/yr', ar: 'عام: 1200-4500 يورو/سنة | خاص/MBA: 8000-25000 يورو/سنة', fr: 'Public: 1200-4500€/an | Privé/MBA: 8000-25000€/an', es: 'Público: 1.200-4.500€/año | Privado/MBA: 8.000-25.000€/año' },
    families: [
      {
        name: { en: 'Business Administration (MBA)', ar: 'ماجستير إدارة الأعمال (MBA)', fr: 'Master of Business Administration (MBA)', es: 'Máster Universitario en Dirección de Empresas (MBA)' },
        salidas: {
          en: ['Executive director', 'Management consultant', 'Strategy lead', 'Operations director'],
          ar: ['مدير تنفيذي', 'مستشار إداري', 'رئيس الاستراتيجية', 'مدير عمليات'],
          fr: ['Directeur exécutif', 'Consultant stratégie', 'Responsable de stratégie', 'Directeur des opérations'],
          es: ['Director ejecutivo', 'Consultor estratégico', 'Líder de desarrollo de negocio', 'Director de operaciones']
        }
      },
      {
        name: { en: 'Artificial Intelligence & Data Science', ar: 'ماجستير الذكاء الاصطناعي وعلم البيانات', fr: 'Master Intelligence Artificielle & Data Science', es: 'Máster en Inteligencia Artificial y Ciencia de Datos' },
        salidas: {
          en: ['AI research engineer', 'Machine Learning expert', 'Data scientist', 'Big Data architect'],
          ar: ['مهندس أبحاث ذكاء اصطناعي', 'خبير تعلم الآلة', 'عالم بيانات', 'مهندس بيانات ضخمة'],
          fr: ['Ingénieur IA', 'Expert Machine Learning', 'Data Scientist', 'Architecte Big Data'],
          es: ['Ingeniero en IA', 'Especialista en Machine Learning', 'Científico de datos', 'Arquitecto Big Data']
        }
      },
      {
        name: { en: 'Renewable Energies & Sustainability', ar: 'الطاقات المتجددة والتنمية المستدامة', fr: 'Master Énergies Renouvelables & Durabilité', es: 'Máster en Energías Renovables y Sostenibilidad' },
        salidas: {
          en: ['Solar/Wind farm manager', 'Sustainability analyst', 'Environmental consultant', 'Energy grid auditor'],
          ar: ['مدير حقول الطاقة الشمسية/الرياح', 'محلل استدامة بيئية', 'مستشار بيئي', 'تدقيق شبكات الطاقة'],
          fr: ['Directeur parc éolien/solaire', 'Analyste environnement', 'Consultant durable', 'Auditeur énergétique'],
          es: ['Director de planta solar/eólica', 'Consultor ambiental', 'Analista de sostenibilidad', 'Auditor energético']
        }
      },
      {
        name: { en: 'Teacher Training in Secondary & Vocational Education', ar: 'ماجستير تأهيل الأساتذة للتعليم الثانوي والمهني', fr: 'Master Formation Enseignement Secondaire & FP', es: 'Máster en Formación del Profesorado (Secundaria y FP)' },
        salidas: {
          en: ['High school teacher', 'FP vocational teacher', 'Academic coordinator', 'Educational content creator'],
          ar: ['أستاذ تعليم ثانوي', 'مدرس في التكوين المهني', 'منسق دراسي', 'مصمم محتوى تعليمي'],
          fr: ['Professeur de lycée', 'Enseignant FP', 'Coordinateur académique', 'Créateur de contenu éducatif'],
          es: ['Profesor de secundaria', 'Profesor de FP', 'Orientador educativo', 'Creador de contenido docente']
        }
      },
      {
        name: { en: 'Bar Practice (Acceso a la Abogacía)', ar: 'ماجستير ممارسة مهنة المحاماة', fr: 'Master Accès à la Profession d’Avocat', es: 'Máster de Acceso a la Abogacía y Procura' },
        salidas: {
          en: ['Sworn attorney-at-law', 'Legal litigator', 'Corporate legal prosecutor', 'Arbitration mediator'],
          ar: ['محامي معتمد', 'متخصص في التقاضي', 'نائب قانوني للشركات', 'وسيط تحكيم'],
          fr: ['Avocat assermenté', 'Spécialiste litiges', 'Conseiller juridique corporatif', 'Médiateur'],
          es: ['Abogado ejerciente', 'Litigador procesal', 'Procurador', 'Mediador de arbitraje']
        }
      },
      {
        name: { en: 'Digital Marketing & E-Commerce', ar: 'ماجستير التسويق الرقمي والتجارة الإلكترونية', fr: 'Master Marketing Digital & E-Commerce', es: 'Máster en Marketing Digital y E-Commerce' },
        salidas: {
          en: ['SEO manager', 'E-commerce supervisor', 'Growth marketing lead', 'Social media strategist'],
          ar: ['مدير تحسين محركات البحث SEO', 'مشرف التجارة الإلكترونية', 'مدير نمو التسويق', 'استراتيجي وسائط اجتماعية'],
          fr: ['Responsable SEO', 'Superviseur e-commerce', 'Growth marketer', 'Social media manager'],
          es: ['Responsable de SEO', 'Coordinador de e-commerce', 'Director de marketing digital', 'Social media manager']
        }
      },
      {
        name: { en: 'Cybersecurity', ar: 'ماجستير الأمن السيبراني وحماية البيانات', fr: 'Master en Cybersécurité', es: 'Máster en Ciberseguridad' },
        salidas: {
          en: ['Security analyst', 'Threat intelligence hunter', 'Penetration tester', 'Incident responder coordinator'],
          ar: ['محلل أمن معلوماتي', 'متتبع التهديدات السيبرانية', 'مختبر اختراق', 'منسق استجابة للحوادث'],
          fr: ['Analyste cybersécurité', 'Hacker éthique', 'Auditeur de sécurité IT', 'Gestionnaire d’incidents'],
          es: ['Analista de seguridad informática', 'Hacker ético', 'Consultor en ciberseguridad', 'Responsable de incidentes de seguridad']
        }
      },
      {
        name: { en: 'Bioinformatics and Biostatistics', ar: 'ماجستير المعلوماتية الحيوية والإحصاء الحيوي', fr: 'Master en Bioinformatique et Biostatistique', es: 'Máster en Bioinformática y Bioestadística' },
        salidas: {
          en: ['Clinical data modeler', 'Genomics sequence analyst', 'Healthcare researcher developer'],
          ar: ['مطور نماذج البيانات السريرية', 'محلل تسلسلات الجينوم', 'مطور أبحاث الرعاية الصحية'],
          fr: ['Modélisateur de données cliniques', 'Analyste génomique', 'Chercheur en santé publique'],
          es: ['Bioinformático', 'Analista de datos genómicos', 'Investigador en bioestadística clínica']
        }
      }
    ]
  },
  doctorado: {
    tag: 'doc',
    en: 'Doctorado (PhD)',
    ar: 'الدكتوراه (PhD)',
    fr: 'Doctorat (PhD)',
    es: 'Doctorado (PhD)',
    duration: { en: '3-5 years', ar: '3-5 سنوات', fr: '3-5 ans', es: '3-5 años' },
    access: ["Master's degree completed (or 300+ ECTS)", 'Research proposal accepted by a doctoral school', 'Supervisor approval', 'Spanish or English proficiency'],
    cost: { en: 'Often funded via research scholarship. Otherwise €1,000-3,000/yr.', ar: 'غالباً ممول عبر منحة بحثية. وإلا 1000-3000 يورو/سنة.', fr: 'Souvent financé via bourse de recherche. Sinon 1000-3000€/an.', es: 'Frecuentemente financiado por beca investigación. Si no, 1.000-3.000€/año.' },
    families: [
      {
        name: { en: 'Advanced ICT & Cybernetic Systems', ar: 'دكتوراه نظم المعلوماتية المتقدمة والسيبرانية', fr: 'PhD Systèmes Informatiques Avancés & IA', es: 'Doctorado en Tecnologías de la Información y Computación' },
        salidas: {
          en: ['AI university professor', 'Scientific R&D leader', 'Corporate lab scientist', 'Research analyst'],
          ar: ['أستاذ جامعة في علوم الذكاء الاصطناعي', 'قائد البحث والتطوير R&D', 'باحث في مختبرات الشركات العالمية', 'محلل أبحاث'],
          fr: ['Professeur universitaire en IA', 'Directeur R&D', 'Chercheur en laboratoire privé', 'Analyste de recherche'],
          es: ['Profesor de universidad', 'Director de I+D', 'Investigador en laboratorios tecnológicos', 'Consultor científico']
        }
      },
      {
        name: { en: 'Biomedicine and Translational Oncology', ar: 'دكتوراه الطب الحيوي والأورام الجزيئية', fr: 'PhD Biomédecine & Oncologie Moléculaire', es: 'Doctorado en Biomedicina y Oncología Traslacional' },
        salidas: {
          en: ['Medical laboratory director', 'Pharma lead investigator', 'Clinical trial designer', 'Postdoc fellow'],
          ar: ['مدير مختبر طبي', 'الباحث الرئيسي في شركات الأدوية', 'مصمم تجارب سريرية', 'باحث ما بعد الدكتوراه'],
          fr: ['Directeur de recherche médicale', "Chercheur principal d'industrie pharma", 'Concepteur d’essais cliniques', 'Chercheur Postdoc'],
          es: ['Director de laboratorio médico', 'Investigador principal farmacéutico', 'Planificador de ensayos clínicos', 'Investigador postdoctoral']
        }
      },
      {
        name: { en: 'Fisica Cuantica & Particle Astrophysics', ar: 'دكتوراه الفيزياء الكمية والكونية', fr: 'PhD Physique Quantique & Astrophysique', es: 'Doctorado en Física Teórica y Astrofísica de Partículas' },
        salidas: {
          en: ['CERN observatory research scientist', 'Technical advisor', 'Data modeling expert', 'Postdoc scholar'],
          ar: ['باحث في مرصد CERN أو الفلك', 'مستشار فيزياء تقني', 'خبير نمذجة البيانات المعقدة', 'باحث أكاديمي'],
          fr: ['Chercheur au CERN', 'Conseiller scientifique', 'Expert modélisation hautes technologies', 'Boursier Postdoctoral'],
          es: ['Investigador de observatorio (p.e. CERN, IAC)', 'Asesor científico', 'Modelizador de sistemas complejos', 'Académico postdoctoral']
        }
      }
    ]
  }
};

export interface TransportCard {
  city: string;
  card: string;
  cost: string;
  age: string;
  cover: { en: string; ar: string; fr: string; es: string };
  apply: { en: string; ar: string; fr: string; es: string };
}

export const TRANSPORT: TransportCard[] = [
  {
    city: 'Madrid',
    card: 'Abono Joven Transporte',
    cost: '€20/mes',
    age: '<26 años',
    cover: {
      en: 'Unlimited Metro, EMT buses, Cercanías trains, interurban buses. All zones A to E2.',
      ar: 'مترو غير محدود، حافلات EMT، قطارات Cercanías، حافلات ما بين المدن. جميع المناطق A إلى E2.',
      fr: 'Métro illimité, bus EMT, trains Cercanías, bus interurbains. Toutes zones A à E2.',
      es: 'Metro, EMT, Cercanías y autobuses interurbanos ilimitados. Zonas A a E2.'
    },
    apply: {
      en: 'Apply online or at metro offices (Moncloa, Sol, Avenida de América). Need: passport + photo + €4 fee.',
      ar: 'تقدم عبر الإنترنت أو شخصياً في مكاتب المترو (Moncloa, Sol). مطلوب: جواز سفر + صورة + رسوم 4 يورو.',
      fr: "En ligne ou en personne aux bureaux du métro (Moncloa, Sol). Nécessaire: passeport + photo + 4€.",
      es: 'Online o presencial en oficinas de metro (Moncloa, Sol). Necesitas: pasaporte + foto + 4€.'
    }
  },
  {
    city: 'Barcelona',
    card: 'T-Jove (ATM)',
    cost: '€40 / 3 months',
    age: '<30 años',
    cover: {
      en: 'Unlimited Metro TMB, FGC, Rodalies trains, tram, urban buses. Zones 1-6 Catalonia.',
      ar: 'مترو TMB غير محدود، FGC، قطارات Rodalies، ترام، حافلات حضرية. المناطق 1-6 كتالونيا.',
      fr: 'Métro TMB, FGC, Rodalies, tram, bus urbains illimités. Zones 1-6 Catalogne.',
      es: 'Metro TMB, FGC, Rodalies, tram y bus urbano ilimitados. Zonas 1-6 Cataluña.'
    },
    apply: {
      en: 'Buy at metro ticket machines or TMB app. Register with passport/NIE. Load on T-Mobilitat app.',
      ar: 'اشتري من آلات التذاكر أو تطبيق TMB. سجل بجواز السفر/NIE. حمّل على تطبيق T-Mobilitat.',
      fr: "Acheter aux bornes du métro ou app TMB. S'inscrire avec passeport/NIE. Charger sur T-Mobilitat.",
      es: 'Comprar en máquinas de metro o app TMB. Registrar con pasaporte/NIE. Cargar en T-Mobilitat.'
    }
  },
  {
    city: 'Valencia',
    card: 'Suma Jove / Tarjeta Jove EMT',
    cost: '€18-25/mes',
    age: '<31 años',
    cover: {
      en: 'Unlimited EMT buses, Metrovalencia, regional trains integrated network.',
      ar: 'حافلات EMT غير محدودة، Metrovalencia، شبكة القطارات الإقليمية المتكاملة.',
      fr: 'Bus EMT, Metrovalencia, réseau intégré trains régionaux illimités.',
      es: 'EMT, Metrovalencia y trenes regionales integrados ilimitados.'
    },
    apply: {
      en: 'Apply online (ATMV website) or at ATMV offices. Passport + academic registration letter.',
      ar: 'تقدم عبر الإنترنت (موقع ATMV) أو في مكاتب ATMV. جواز سفر + رسالة التسجيل الأكاديمي.',
      fr: "Postuler en ligne (site ATMV) ou aux bureaux ATMV. Passeport + lettre d'inscription académique.",
      es: 'Solicitar online (web ATMV) o en oficinas ATMV. Pasaporte + carta de matrícula académica.'
    }
  },
  {
    city: 'Sevilla',
    card: 'Abono Joven TUSSAM & Consorcio',
    cost: '€19-24/mes',
    age: '<30 años',
    cover: {
      en: 'Unlimited municipal TUSSAM buses, Metro de Sevilla (all zones), and regional metropolitan transport.',
      ar: 'حافلات TUSSAM البلدية غير المحدودة، ومترو إشبيلية (جميع المناطق)، والنقل الإقليمي للمتروبوليتان.',
      fr: 'Bus municipaux TUSSAM, Métro de Séville (toutes zones) et transports métropolitains illimités.',
      es: 'Autobuses urbanos TUSSAM, Metro de Sevilla (todas las zonas) y transportes del Consorcio.'
    },
    apply: {
      en: 'Request online on TUSSAM portal or Prado de San Sebastián offices. Passport + photo + €2 registration.',
      ar: 'اطلبها من بوابة TUSSAM الإلكترونية أو مكاتب Prado de San Sebastián. جواز سفر + صورة + 2 يورو للتثبيت.',
      fr: 'Demande en ligne sur le portail TUSSAM ou aux bureaux de Prado de San Sebastián. Passeport + photo + 2€.',
      es: 'Solicitar online en la web de TUSSAM o presencial en Prado de San Sebastián. Pasaporte + foto + 2€ de gestión.'
    }
  },
  {
    city: 'Málaga',
    card: 'Tarjeta Estudiante EMT / Málaga Consorcio',
    cost: '€17-21/mes',
    age: '<26 años',
    cover: {
      en: 'Unlimited EMT Málaga city buses, Metro de Málaga, and coastal Cercanías C1/C2 train connections.',
      ar: 'حافلات EMT مدينة مالقة غير المحدودة، مترو مالقة، وخطوط قطار الأنفاق الساحلية Cercanías C1/C2.',
      fr: 'Bus de ville EMT Málaga, Métro de Málaga, et liaisons côtières de trains Cercanías C1/C2 illimités.',
      es: 'Autobuses urbanos EMT, Metro de Málaga y trenes de cercanías de la Costa del Sol C1/C2.'
    },
    apply: {
      en: 'Apply at EMT Málaga offices (Alameda Principal) or via their mobile application using passport, enroll slip.',
      ar: 'تقدّم في مكاتب EMT مالقة (Alameda Principal) أو عبر تطبيقهم ببطاقة التسجيل المدرسي وصورة وجواز السفر.',
      fr: "Postuler aux bureaux EMT Málaga (Alameda Principal) ou via leur application avec passeport et justificatif d'études.",
      es: 'Solicitar en oficinas de la EMT (Alameda Principal) o vía app con pasaporte, foto y matrícula de estudios.'
    }
  },
  {
    city: 'Zaragoza',
    card: 'Abono Joven 30 Días Zaragoza',
    cost: '€22/mes',
    age: '<26 años',
    cover: {
      en: 'Unlimited Zaragoza municipal buses (Avanza) and Tranvía de Zaragoza (Line 1).',
      ar: 'حافلات سرقسطة البلدية Avanza غير المحدودة، والترام (الخط الأول).',
      fr: 'Bus municipaux de Saragosse (Avanza) et Tramway de Saragosse (Ligne 1) illimités.',
      es: 'Autobuses Avanza Zaragoza y Tranvía de Zaragoza (Línea 1) ilimitados.'
    },
    apply: {
      en: 'Buy cardboard or digital pass at Avanza offices (Plaza Aragón) or online. Passport required.',
      ar: 'اشترِ التذكرة الورقية أو الرقمية من مكاتب Avanza (Plaza Aragón) أو أونلاين ببطاقة الهوية.',
      fr: "Acheter au guichet Avanza (Plaza Aragón) ou en ligne avec votre passeport pour le profil jeune.",
      es: 'Comprar de forma online o presencial en oficinas de Avanza (Plaza Aragón). Requiere pasaporte o NIE.'
    }
  },
  {
    city: 'Bilbao',
    card: 'Tarjeta Barik Joven (Gazte)',
    cost: '€23-29/mes',
    age: '<26 años',
    cover: {
      en: 'Unlimited Metro Bilbao (all zones), Bilbobus, Bizkaibus, and Basque regional trains (Euskotren).',
      ar: 'مترو بيلباو غير المحدود (جميع المناطق)، Bilbobus، وحافلات Bizkaibus، بالإضافة لقطارات إقليم الباسك Euskotren.',
      fr: 'Métro Bilbao (toutes zones), Bilbobus, Bizkaibus et trains régionaux Euskotren illimités.',
      es: 'Metro Bilbao, Bilbobus, Bizkaibus y trenes de Euskotren ilimitados.'
    },
    apply: {
      en: 'Apply at any Barik customer service office (San Mamés, Casco Viejo). Bring passport and Spanish registration padrón.',
      ar: 'تقدّم في أي مكتب لخدمة عملاء Barik (مترو San Mamés). أحضر جواز السفر وشهادة السكن (Padrón).',
      fr: 'Postuler dans un bureau client Barik (San Mamés, Casco Viejo). Fournir passeport et padrón.',
      es: 'Solicitar en Oficinas de Atención Barik (San Mamés, Casco Viejo). Llevar pasaporte y justificativo de empadronamiento.'
    }
  },
  {
    city: 'Granada',
    card: 'Tarjeta Joven de Transportes (Consorcio)',
    cost: '€15-20/mes',
    age: '<30 años',
    cover: {
      en: 'Unlimited Metro de Granada, Alhambra city buses, and regional university transport lines.',
      ar: 'مترو غرناطة غير المحدود، وحافلات قصر الحمراء البلدية، وخطوط النقل الجامعية الإقليمية.',
      fr: 'Métro de Grenade, bus urbains Alhambra et navettes universitaires régionales illimitées.',
      es: 'Metro de Granada, autobuses urbanos y metropolitanos coordinados de Granada.'
    },
    apply: {
      en: 'Request online on Consorcio de Granada portal or Estación de Autobuses. Passport + registration document.',
      ar: 'اطلبها أونلاين من موقع كونسورتيوم غرناطة أو من محطة الحافلات المركزية. جواز السفر + إثبات الدراسة.',
      fr: "Demander sur la plateforme en ligne du Consorcio de Grenade ou à la gare routière. Passeport + reçu d'études.",
      es: 'Solicitar online en la web del Consorcio de Granada o en la Estación de Autobuses. Requiere matrícula y pasaporte.'
    }
  },
  {
    city: 'Alicante',
    card: 'Tarjeta Mobilis Jove / Abono Temporal',
    cost: '€12-16/mes',
    age: '<31 años',
    cover: {
      en: 'Unlimited TRAM Metropolitano de Alicante (coastal trains up to Benidorm) and Vectalia urban buses.',
      ar: 'ترام أليكانتي المتروبوليتاني غير المحدود (القطارات الساحلية حتى Benidorm) وحافلات Vectalia البلدية.',
      fr: 'TRAM Metropolitano d’Alicante (trains côtiers vers Benidorm) et bus urbains Vectalia illimités.',
      es: 'TRAM Metropolitano de Alicante, autobuses urbanos de Alicante (Vectalia) y cercanías.'
    },
    apply: {
      en: 'Apply at TAM office (Calle Díaz Moreu) or online. Provide passport, photo, and €2 for card issuance.',
      ar: 'تقدّم في مكتب TAM (Calle Díaz Moreu) أو أونلاين. قدّم جواز سفرك، وصورة، ورسوم 2 يورو للبطاقة.',
      fr: "S'adresser au bureau TAM (Calle Díaz Moreu) ou en ligne. Fournir passeport, photo et 2€ pour le plastique.",
      es: 'Solicitar en oficina del TAM (Calle Díaz Moreu) o por internet. Requiere aportar pasaporte, foto y 2€.'
    }
  },
  {
    city: 'Murcia',
    card: 'Unibono Estudiante / Bono Murcia Joven',
    cost: '€20-22/mes',
    age: '<26 años',
    cover: {
      en: 'Unlimited Tranvía de Murcia (Direct line to UMU & UCAM campuses) and Latbus municipal buses.',
      ar: 'ترام مرسية غير المحدود (خط مباشر إلى جامعات UMU وUCAM) وحافلات Latbus البلدية.',
      fr: 'Tramway de Murcie (ligne directe vers campus UMU et UCAM) et bus municipaux Latbus illimités.',
      es: 'Tramway de Murcie (línea directa a campus UMU y UCAM) y autobuses urbanos Latbus.'
    },
    apply: {
      en: 'Buy directly at Tranvía de Murcia central offices or online with your university matriculación certificate.',
      ar: 'اشترِ مباشرة من المكاتب المركزية لترام مرسية أو أونلاين مستخدماً شهادة التسجيل ببلدية مرسية وجامعتها.',
      fr: "Acheter directement au bureau central du Tranvía ou en ligne avec votre lettre de scolarité universitaire.",
      es: 'Comprar directamente en las oficinas de Tranvía de Murcia o web oficial acreditando matrícula universitaria.'
    }
  }
];

export interface CityLifeGuide {
  city: string;
  flag: string;
  events: { en: string; ar: string; fr: string; es: string };
  friends: { en: string; ar: string; fr: string; es: string };
  supermarkets: {
    ranking: { en: string; ar: string; fr: string; es: string };
    tips: { en: string; ar: string; fr: string; es: string };
  };
  placesToVisit: { en: string; ar: string; fr: string; es: string };
  budgetRestaurants: { en: string; ar: string; fr: string; es: string };
}

export const STUDENT_CITIES_GUIDE: CityLifeGuide[] = [
  {
    city: "Madrid",
    flag: "🐻",
    events: {
      en: "Erasmus Welcome Parties at Teatro Kapital, weekly language exchanges at 'Beer Station', and weekend outdoor picnics at El Retiro Park.",
      ar: "حفلات الترحيب بالطلاب في Teatro Kapital، لقاءات التبادل اللغوي الأسبوعية في Beer Station، ونزهات نهاية الأسبوع في حديقة ريتيرو الشهيرة.",
      fr: "Fêtes d'accueil Erasmus au Teatro Kapital, échanges linguistiques hebdomadaires à 'Beer Station', et pique-niques universitaires au parc du Retiro.",
      es: "Grandes fiestas de bienvenida Erasmus en Teatro Kapital, intercambios de idiomas semanales en 'Beer Station', y picnics los domingos en el Parque del Retiro."
    },
    friends: {
      en: "Join the 'Citylife Madrid' community, participate in 'Madrid Urban Hiking' groups on Meetup, or sign up for free Tandem language exchanges in center bars.",
      ar: "انضم لمجتمع Citylife Madrid، أو شارك في مجموعات المشي والتسلق الجبلي Madrid Urban Hiking على Meetup، أو سجل في جلسات التبادل اللغوي في بارات وسط المدينة.",
      fr: "Rejoignez la communauté 'Citylife Madrid', inscrivez-vous aux sorties de rando 'Madrid Urban Hiking' sur Meetup, ou participez aux soirées de conversation gratuite Tandem.",
      es: "Únete a la comunidad virtual y física de 'Citylife Madrid', búscate grupos de senderismo en 'Madrid Urban Hiking' en la app Meetup, o asiste a los tándems de conversación."
    },
    supermarkets: {
      ranking: {
        en: "1. Alcampo (cheapest for bulk) | 2. Lidl / Dia (best private brand deals) | 3. Mercadona (highly consistent but pricier) | 4. Carrefour | 5. Sanchez Romero (extremely expensive).",
        ar: "1. Alcampo (الأرخص للشراء بكميات) | 2. Lidl / Dia (أفضل عروض العلامة الخاصة) | 3. Mercadona (ممتاز وثابت ولكنه أغلى بقليل) | 4. Carrefour | 5. Sanchez Romero (غالٍ جداً).",
        fr: "1. Alcampo (le moins cher en gros) | 2. Lidl / Dia (meilleurs prix marques blanches) | 3. Mercadona (qualité constante mais un poil plus cher) | 4. Carrefour | 5. Sanchez Romero (très haut de gamme/cher).",
        es: "1. Alcampo (el más barato para compras grandes) | 2. Lidl / Dia (excelente relación calidad-precio en marcas blancas) | 3. Mercadona (muy popular y equilibrado) | 4. Carrefour | 5. Sánchez Romero (evitar, sumamente caro)."
      },
      tips: {
        en: "Locate Alcampo in 'La Vaguada' or regional malls. Purchase Dia 'Dulce de leche' or Hacendado private labels to save up to €80/month compared to premium brands.",
        ar: "ابحث عن Alcampo في La Vaguada أو المراكز التجارية. اشترِ علامات Dia أو علامة Hacendado التابعة لميركادونا لتوفير حتى 80 يورو شهرياً مقارنة بالعلامات التجارية الفخمة.",
        fr: "Trouvez Alcampo au centre commercial 'La Vaguada'. Privilégiez les marques blanches 'Hacendado' de Mercadona pour économiser jusqu'à 80€ par mois sur votre panier de courses.",
        es: "Para ahorrar al máximo compra en el gran Alcampo de La Vaguada. Opta por la marca blanca de Mercadona (Hacendado) y de Lidl (Milbona) y ahorrarás más de 80€ al mes."
      }
    },
    placesToVisit: {
      en: "Prado Museum, Royal Palace, Gran Vía, Retiro Park, Temple of Debod.",
      ar: "متحف برادو، القصر الملكي، شارع غران فيا، حديقة ريتيرو، معبد ديبود الأثري.",
      fr: "Musée du Prado, Palais Royal, Gran Vía, Parc du Retiro, Temple de Debod.",
      es: "Museo del Prado, Palacio Real, Gran Vía, Parque del Retiro, Templo de Debod."
    },
    budgetRestaurants: {
      en: "El Tigre Sidrería (free huge plates of tapas with every beer/drink), 100 Montaditos (mini sandwiches for €1 on Wednesdays/Sundays), Museo del Jamón (ham sandwiches for €1.50).",
      ar: "سيدريا إل تيغري (الحصول على أطباق مقبلات ضخمة مجانية بالكامل مع كل مشروب)، 100 Montaditos (سندويشات صغيرة بـ 1 يورو أيام الأربعاء والأحد)، متحف الهامور (سندويشات بـ 1.50 يورو).",
      fr: "El Tigre Sidrería (tapas géantes offertes avec chaque verre), 100 Montaditos (mini-sandwichs à 1€ le mercredi et dimanche), Museo del Jamón (sandwichs de jambon à 1.50€).",
      es: "El Tigre Sidrería (platos gigantes de tapas gratis con tu bebida), 100 Montaditos (montaditos a 1€ los miércoles/domingos), y Museo del Jamón (bocadillos para estudiantes a 1,50€)."
    }
  },
  {
    city: "Barcelona",
    flag: "⛵",
    events: {
      en: "Chiringuito beach meetups in Barceloneta, student electronic assemblies at 'Sala Apolo' (Nasty Mondays), and local neighborhood street block festivals (Festes de Gràcia).",
      ar: "تجمعات الشاطئ Chiringuito في برشلونيتا، حفلات الطلاب الإلكترونية في Sala Apolo العريقة (Nasty Mondays)، ومهرجانات الأحياء الشعبية المجانية مثل Festes de Gràcia.",
      fr: "Rassemblements sur la plage de la Barceloneta, soirées étudiantes 'Nasty Mondays' à la Sala Apolo, et les festivals de quartier gratuits comme les magnifiques Festes de Gràcia.",
      es: "Kedadas junto a los chiringuitos de la playa de la Barceloneta, legendarias noches de estudiantes de 'Nasty Mondays' en Sala Apolo, y las fiestas populares de Gràcia."
    },
    friends: {
      en: "Install Badi app to meet local flatmates, attend multilingual cultural picnics organized by 'Barcelona Language Exchange' on Facebook/Meetup.",
      ar: "حمّل تطبيق Badi للتعرف على شركاء سكن محليين، واحضر نزهات ثقافية متعددة اللغات تنظمها Barcelona Language Exchange على فيسبوك.",
      fr: "Utilisez l'application Badi pour trouver des colocs sympas, visitez les pique-niques multiculturels organisés par 'Barcelona Language Exchange' sur Meetup.",
      es: "Usa la app Badi para conectar con compis de piso afines, y asiste a los picnics multiculturales colectivos de 'Barcelona Language Exchange' en Meetup."
    },
    supermarkets: {
      ranking: {
        en: "1. Consum / Mercadona (best local balance) | 2. Lidl / Dia (very cost-effective) | 3. Alcampo (few locations) | 4. Carrefour Market (expensive in center) | 5. Condis / Bonpreu.",
        ar: "1. Consum / Mercadona (أفضل توازن محلي) | 2. Lidl / Dia (اقتصادي جداً) | 3. Alcampo (فروع قليلة) | 4. Carrefour Market (غالٍ في وسط المدينة) | 5. Condis / Bonpreu.",
        fr: "1. Consum / Mercadona (meilleur rapport qualité-prix local) | 2. Lidl / Dia (très abordables) | 3. Alcampo (très économique, mais rare) | 4. Carrefour Market (assez cher en centre-ville) | 5. Condis / Bonpreu.",
        es: "1. Consum / Mercadona (el mejor equilibrio para el día a día) | 2. Lidl / Dia (súper baratos) | 3. Alcampo (económico pero con pocas tiendas) | 4. Carrefour (atención a los precios del centro) | 5. Bonpreu / Condis."
      },
      tips: {
        en: "Look for regional supermarkets like 'Bonpreu' for high-quality local Catalan cheese & meats. Avoid small 'Supermercats' open 24h as prices are 40% higher.",
        ar: "ابحث عنBonpreu للمنتجات المحلية الكتالونية عالية الجودة. تجنب البقالات الصغيرة المفتوحة 24 ساعة 'Supermercats' في وسط المدينة لأن أسعارها أعلى بـ 40%.",
        fr: "Profitez des supermarchés locaux 'Bonpreu' pour de bons produits frais catalans. Évitez absolument les petites épiceries de nuit 24h/24 dont les prix sont gonflés de 40%.",
        es: "Compra marcas de distribuidor en Consum y Bonpreu. Huye de los pequeños colmados de barrio abiertos 24 horas ('Supermercats') del centro, cobran hasta un 40% más por el mismo artículo."
      }
    },
    placesToVisit: {
      en: "La Sagrada Familia, Park Güell, Gothic Quarter, Casa Batlló, Montjuïc Hill.",
      ar: "معبد العائلة المقدسة ساغرادا فاميليا، بارك غويل الشهير، الحي القوطي، كاسا باتلو، هضبة وقلعة مونتجويك.",
      fr: "La Sagrada Familia, Parc Güell, Quartier Gothique, Casa Batlló, Colline de Montjuïc.",
      es: "La Basílica de la Sagrada Familia, Parque Güell, Barrio Gótico, La Pedrera (Casa Milà), y la montaña de Montjuïc."
    },
    budgetRestaurants: {
      en: "Bo de B (legendary giant delicious student sandwiches for €4-5), Nostrum (takeaway homecooked meals for €2-3 with student loyalty card), Mosquito (extremely cheap and tasty craft dumplings).",
      ar: "بو دي بي (سندويشات طلابية شهية وضخمة بـ 4-5 يورو)، Nostrum (أكلات مطبوخة منزلية بـ 2-3 يورو بموجب بطاقة عضوية الطالب)، Mosquito (زلابية وحلقات تايباس يدوية رخيصة ولذيذة).",
      fr: "Bo de B (sandwiches géants cultes pour étudiants à 4-5€), Nostrum (plats cuisinés équilibrés à 2-3€ avec la carte étudiant), Mosquito (dumplings artisanaux et tapas asiatiques pas chers).",
      es: "Bo de B (bocadillos gigantes y sanos a precio de estudiante), Nostrum (tuppers de cocina casera muy económicos con tarjeta de fidelidad), y Mosquito (tapas en el barrio del Born muy ricas)."
    }
  },
  {
    city: "Valencia",
    flag: "🍊",
    events: {
      en: "The historic Las Fallas festival in March, outdoor acoustic music gigs at the City of Arts & Sciences, and bonfire student nights on Malvarrosa Beach.",
      ar: "مهرجان 'فالاس' (Las Fallas) التاريخي المذهل في مارس، حفلات الموسيقى الصوتية في مدينة الفنون والعلوم، وليالي نيران المخيم الطلابية على شاطئ Malvarrosa.",
      fr: "Le festival spectaculaire de renommée mondiale 'Las Fallas' en mars, concerts acoustiques à la Cité des Arts et des Sciences, et soirées feux de camp étudiantes à la plage de la Malvarrosa.",
      es: "La fiesta mítica de las Fallas en marzo, conciertos acústicos al aire libre en la Ciudad de las Artes y las Ciencias, y noches universitarias de hogueras en la playa de la Malvarrosa."
    },
    friends: {
      en: "Join 'Soy Erasmus Valencia' for organized low-cost trips, attend the weekly language swap at 'Ubik Café' in Ruzafa neighborhood.",
      ar: "انضم لجمعية 'Soy Erasmus Valencia' لرحلات منظمة واقتصادية للطلاب، واحضر لقاءات التبادل اللغوي في مقهى Ubik Café الثقافي في حي الروثافا Ruzafa.",
      fr: "Rejoignez l'association 'Soy Erasmus Valencia' pour des voyages pas chers guidés, participez aux cafés-polyglottes à l'Ubik Café dans le quartier branché de Ruzafa.",
      es: "Apúntate a 'Soy Erasmus Valencia' para excursiones baratas, y acude al tándem de idiomas semanal del carismático 'Ubik Café' en el barrio de Ruzafa."
    },
    supermarkets: {
      ranking: {
        en: "1. Alcampo (Aldaia/Port Saplaya) | 2. Consum (Valencian cooperative, highly affordable) | 3. Lidl / Dia | 4. Mercadona | 5. El Corte Inglés Supermercado (avoid).",
        ar: "1. Alcampo (في الضواحي) | 2. Consum (التعاونية الفالنسية، موفرة جداً وممتازة) | 3. Lidl / Dia | 4. Mercadona | 5. El Corte Inglés Supermercado (تجنبه).",
        fr: "1. Alcampo (périphérie) | 2. Consum (coopérative de Valence, très abordable et locale) | 3. Lidl / Dia | 4. Mercadona (né à Valence, d'excellente qualité) | 5. El Corte Inglés Supermercado (très cher).",
        es: "1. Alcampo (en zonas comerciales lejanas) | 2. Consum (cooperativa valenciana de gran ahorro y calidad) | 3. Lidl / Dia | 4. Mercadona (origen valenciano, muy completo) | 5. Club del Gourmet / El Corte Inglés."
      },
      tips: {
        en: "Consum is a historic Valencian cooperative. Getting their free member card ('Mundo Consum') gives you immediate cashback vouchers printed at checkout.",
        ar: "سوبرماركت Consum هو تعاونية فالنسية شهيرة. التسجيل المجاني في بطاقة 'Mundo Consum' يمنحك خصومات فورية ونقوداً مستردة تُطبع مع الفاتورة.",
        fr: "Consum est une coopérative locale. Demandez la carte gratuite 'Mundo Consum' pour recevoir des bons de réduction cumulables à chaque passage en caisse.",
        es: "Consum es el rey en Valencia. Hazte la tarjeta gratuita de socio 'Mundo Consum' y te enviarán a casa o a la app cheques regalo con dinero en efectivo para descontar en tu compra."
      }
    },
    placesToVisit: {
      en: "City of Arts and Sciences, Valencia Cathedral & El Miguelete tower, Central Market, Albufera Lake (famous sunsets).",
      ar: "مدينة الفنون والعلوم، كاتدرائية فالنسيا وبرج الميكليت، السوق المركزي التاريخي، بحيرة الألبوفيرا الطبيعية لرؤية الغروب الأندلسي.",
      fr: "Cité des Arts et des Sciences, Cathédrale de Valence & tour El Miguelete, Marché Central, Lac de l'Albufera pour des couchers de soleil légendaires.",
      es: "La Ciudad de las Artes y las Ciencias, Catedral de Valencia y el campanario de El Miguelete, el Mercado Central, y el Parque Natural de la Albufera."
    },
    budgetRestaurants: {
      en: "Tanto Monta (fantastic and creative pintxos and montaditos for only €1.80 each), 100 Montaditos (weekly super cheap promos), Casa de la Paella (great individual portions of paella under €8).",
      ar: "تانتو مونتا (مقبلات بينشوص إبداعية ورائعة بـ 1.80 يورو فقط)، 105 مونتاديتوس (عرض تخفيضات أسبوعية)، بيت البايييا (أطباق أرز فردية بأقل من 8 يورو).",
      fr: "Tanto Monta (pinchos créatifs magnifiques à 1.80€ l'unité), Casa de la Paella (portions individuelles de délicieuse paella à moins de 8€).",
      es: "Tanto Monta (pinchos artísticos de autor increíbles por 1.80€), 100 Montaditos, y la Casa de la Paella (raciones individuales de arroz riquísimas por menos de 8€)."
    }
  },
  {
    city: "Sevilla",
    flag: "💃",
    events: {
      en: "Feria de Abril celebrations in full traditional dress, tapas crawls through Barrio de Santa Cruz, and sunset gatherings near Puente de Triana.",
      ar: "مهرجان 'فيريا دي أبريل' الشهير بأزيائه التقليدية الرائعة، جولات تناول ثقافة التاباس الشهية في حي سانتا كروز، وتجمعات الغروب الخلابة بجانب جسر تريانا.",
      fr: "La célébration magique de la Feria de Abril avec ses tenues de sévillane, tournées de tapas à prix d'ami dans le Barrio Santa Cruz, et couchers de soleil festifs au pont de Triana.",
      es: "La espectacular Feria de Abril, rutas interminables de tapas andaluzas por el Barrio de Santa Cruz, y quedadas al atardecer junto al río en el Puente de Triana."
    },
    friends: {
      en: "Get in touch with 'Erasmus Club Sevilla' or 'Sevilla Student', and participate in conversational exchange cycles at 'La Carbonería' flamenco bar.",
      ar: "تواصل مع 'Erasmus Club Sevilla' أو 'Sevilla Student'، وشارك في حلقات وحوارات التبادل اللغوي في بار 'La Carbonería' الفلامنكي الشهير.",
      fr: "Connectez-vous à l'association 'Erasmus Club Sevilla', participez aux soirées de rencontres d'étudiants internationaux au bar flamenco mythique 'La Carbonería'.",
      es: "Contacta con 'Erasmus Club Sevilla' o la web 'Sevilla Student' para actividades guiadas, y haz amigos en locales como 'La Carbonería', famoso por su mezcla cultural."
    },
    supermarkets: {
      ranking: {
        en: "1. CASH Fresh / El Jamón (local Andalusian discount stores) | 2. Dia / Lidl | 3. Mercadona | 4. Alcampo (Sevilla Este) | 5. MAS Premium.",
        ar: "1. CASH Fresh / El Jamón (متاجر ديسكاونت أندلسية محلية) | 2. Dia / Lidl | 3. Mercadona | 4. Alcampo | 5. MAS Premium.",
        fr: "1. CASH Fresh / El Jamón (discounters locaux andalous) | 2. Dia / Lidl | 3. Mercadona | 4. Alcampo | 5. Supermercados MAS.",
        es: "1. CASH Fresh / El Jamón (supermercados andaluces de agresivo descuento) | 2. Dia / Lidl | 3. Mercadona | 4. Alcampo (Sevilla Este) | 5. Supermercados MAS."
      },
      tips: {
        en: "'CASH Fresh' and 'El Jamón' offer the absolute lowest fruit, vegetable, and fresh meat prices across Andalusia. Shop there to keep grocery bills below €30/week.",
        ar: "توفر سلسلة 'CASH Fresh' و 'El Jamón' أدنى أسعار للفواكه والخضار واللحوم في إقليم أندلسيا. تسوق منها لتخفيض ميزانيتك لأقل من 30 يورو أسبوعياً.",
        fr: "Les chaînes locales andalouses 'CASH Fresh' et 'Supermercados El Jamón' proposent les fruits et viandes les moins chers de Séville. Idéal pour un budget serré de 30€/semaine.",
        es: "Las cadenas locales andaluzas CASH Fresh y El Jamón tienen la fruta, verdura y carnes más baratas de toda Andalucía. El ticket medio semanal no pasará de 30€."
      }
    },
    placesToVisit: {
      en: "Plaza de España, Real Alcázar palace, Giralda Cathedral tower, Triana traditional neighborhood, Las Setas (Metropol Parasol).",
      ar: "ساحة إسبانيا، قصر المورق (قصر إشبيلية)، مئذنة الجيرالدا التاريخية، حي تريانا الشعبي، مظلات السيتاس الخشبية (Metropol Parasol).",
      fr: "Plaza de España, Palais du Real Alcázar, Cathédrale de Séville & tour de la Giralda, quartier historique de Triana, Metropol Parasol.",
      es: "La Plaza de España, Real Alcázar de Sevilla, la Catedral con La Giralda, el barrio marinero de Triana, y el mirador Metropol Parasol (Las Setas)."
    },
    budgetRestaurants: {
      en: "Los Coloniales (huge delicious tapas and raciones at unbelievably low prices, ideal for sharing with friends), Bodega Santa Cruz Las Columnas (fast energetic tapas for €1.50 - €2.50 next to the cathedral).",
      ar: "لوس كولونياليس (مقبلات وأطباق دسمة ضخمة بأسعار متدنية للغاية، مثالية للمشاركة)، بوديغا سانتا كروز لا كولومناس (أكشاك مقبلات سريعة بقيمة 2 يورو بجوار الكاتدرائية).",
      fr: "Taberna Los Coloniales (portions espagnoles andalouses massives et excellentes à prix mini), Bodega Santa Cruz Las Columnas (tapas dynamiques à 2€ de moyenne à côté de la cathédrale).",
      es: "Taberna Los Coloniales (tapas andaluzas espectaculares y abundantes tiradas de precio), y Bodega Santa Cruz Las Columnas (ambiente auténtico y tapas a 2€ frente a la Giralda)."
    }
  },
  {
    city: "Málaga",
    flag: "🌴",
    events: {
      en: "Feria de Málaga beach concerts in August, central pedestrian lights on Calle Larios during seasonal periods, and dynamic student meets at Plaza de la Merced.",
      ar: "حفلات شاطئ مالقة الموسيقية الكبرى في أغسطس، أضواء شارع لاريوسCalle Larios الشهيرة، واللقاءات والتجمعات الشبابية في ساحة Plaza de la Merced.",
      fr: "Concerts géants sur la plage pendant la Feria de Málaga en août, illuminations mythiques de la Calle Larios, et rassemblements étudiants animés place de la Merced.",
      es: "Conciertos multitudinarios de Feria de Málaga en la playa en agosto, alumbrado icónico de Calle Larios, y quedadas de estudiantes de toda Europa en la Plaza de la Merced."
    },
    friends: {
      en: "Utilize the 'Erasmus Malaga / MSE' student platforms, join weekend beach volleyball matches organized on Malagueta Beach via Meetup.",
      ar: "استخدم منصة 'Málaga South Experiences' الطلابية، وانضم لمباريات كرة الطائرة الشاطئية في نهاية الأسبوع على شاطئ Malagueta عبر تطبيق Meetup.",
      fr: "Utilisez la plateforme étudiante 'Málaga South Experiences (MSE)', rejoignez les tournois amateurs de beach-volley organisés sur la plage de la Malagueta via l'app Meetup.",
      es: "Utiliza las redes de 'Málaga South Experiences' (MSE) para viajes escolares, e inscríbete en los partidos libres de vóley-playa en la Malagueta a través de Meetup."
    },
    supermarkets: {
      ranking: {
        en: "1. Lidl / Dia | 2. Supermercados El Jamón | 3. Mercadona | 4. Carrefour | 5. Maskom (regional Málaga franchise, good local olive oil).",
        ar: "1. Lidl / Dia | 2. Supermercados El Jamón | 3. Mercadona | 4. Carrefour | 5. Maskom (سلسلة محلية في مالقة، ممتازة لزيت الزيتون).",
        fr: "1. Lidl / Dia | 2. Supermercados El Jamón (local) | 3. Mercadona | 4. Carrefour | 5. Maskom (supermarché malaguène typique, excellent pour l'huile d'olive locale).",
        es: "1. Lidl / Dia | 2. Supermercados El Jamón | 3. Mercadona | 4. Carrefour | 5. Maskom (franquicia autónctona de Málaga, excelente para aceite de oliva de la zona)."
      },
      tips: {
        en: "Check out 'Maskom' supermarkets; they stock regional products like raisins, sweet Andalusian wine, and regional olive oils directly from nearby cooperatives at very low prices.",
        ar: "تصفح سوبرماركت 'Maskom'؛ ستجد فيه المنتجات الأندلسية المحلية الممتازة مثل الزبيب وزيت الزيتون البكر مباشرة من المعاصر المجاورة بأسعار منافسة.",
        fr: "Les supermarchés 'Maskom' sont fiers de leurs racines. Allez-y pour acheter de l'huile d'olive premium andalouse et des fruits secs locaux à prix fabricant.",
        es: "Visita los supermercados malagueños Maskom. Tienen marcas locales con aceites de oliva de cooperativa malagueña y embutidos de la comarca de la Axarquía tirados de precio."
      }
    },
    placesToVisit: {
      en: "Alcazaba fortress, Gibralfaro Castle, Roman Theatre, Picasso Museum, La Malagueta beach.",
      ar: "قصبة مالقة الإسلامية، قلعة جبل الفارة، المسرح الروماني الأثري، متحف الفنان بيكاسو، شاطئ مالاغيتا الممتد.",
      fr: "Forteresse de l'Alcazaba, Château du Gibralfaro, Théâtre Romain, Musée Picasso, plage de la Malagueta.",
      es: "La Alcazaba, el Castillo de Gibralfaro con vistas panorámicas, el Teatro Romano, Museo Picasso, y el Paseo Marítimo de la Malagueta."
    },
    budgetRestaurants: {
      en: "Casa Lola (traditional vermut and tapas for €2.20 in retro atmosphere), El Tintero (unique beach seafood restaurant where waiters shout active auctions of hot plates - highly cheap and fun), Mercado de Atarazanas (ultra-fresh fish tapas for €3).",
      ar: "كاسا لولا (مشروبات وتاباس أندلسية بـ 2.20 يورو)، التنتيرو (مطعم أسماك فريد على الشاطئ يعمل بنظام المزاد الحار والصاخب، رخيص ومنوع للغاية)، سوق أتارازاناس (أسماك طازجة مقلية بـ 3 يورو).",
      fr: "Casa Lola (bière, vermouth et raciones traditionnels exquis à 2.20€), El Tintero (fruits de mer servis à la criée par des serveurs ambulants sur le sable - immanquable et économique).",
      es: "Casa Lola (tapas tradicionales estilo taberna andaluza tiradas de precio), El Tintero (los platos se subastan a viva voz de los camareros junto a la playa; barato y mítico), y las freidurías del Mercado de Atarazanas."
    }
  },
  {
    city: "Zaragoza",
    flag: "🏰",
    events: {
      en: "The historic Fiestas del Pilar in October (with giant flower offerings), student tapas nights through 'El Tubo' labyrinth of alleys, and concerts near San Juan de los Panetes.",
      ar: "مهرجانات 'ال بيلار' (Fiestas del Pilar) التاريخية في أكتوبر، ليالي التاباس الطلابية في أزقة 'El Tubo' المتاهية، والحفلات بالقرب من معالم المدينة الأثرية.",
      fr: "Festivités nationales des Fiestas del Pilar en octobre (offrandes florales géantes), soirées tapas 'Juevintxo' dans le fameux labyrinthe de ruelles 'El Tubo'.",
      es: "Las emblemáticas Fiestas del Pilar en octubre, rutas universitarias de tapeo por el laberinto de callejuelas de El Tubo, y conciertos al aire libre en la plaza de la Pilarica."
    },
    friends: {
      en: "Connect with 'ESN Zaragoza' (Erasmus Student Network), join university sports clubs or study circles in the central Maria Moliner library.",
      ar: "تواصل مع ESN Zaragoza (شبكة الطلاب في إسبانيا)، وانضم للنوادي الرياضية الجامعية أو مجموعات المذاكرة في مكتبة Maria Moliner المركزية.",
      fr: "Inscrivez-vous sur le réseau d'étudiants 'ESN Zaragoza', proposez des rencontres d'entraide linguistique au sein de la grande bibliothèque Maria Moliner.",
      es: "Conecta inmediatamente con 'ESN Zaragoza' en redes, que organizan eventos a diario, o apúntate a los clubes deportivos de la Universidad de Zaragoza."
    },
    supermarkets: {
      ranking: {
        en: "1. Alcampo (Several massive stores in Zaragoza) | 2. Lidl / Dia | 3. Mercadona | 4. Eroski | 5. Supercor.",
        ar: "1. Alcampo (عدة متاجر ضخمة في سرقسطة) | 2. Lidl / Dia | 3. Mercadona | 4. Eroski | 5. Supercor.",
        fr: "1. Alcampo (très implanté à Saragosse avec des prix imbattables) | 2. Lidl / Dia | 3. Mercadona | 4. Eroski | 5. Supercor (à éviter).",
        es: "1. Alcampo (Súper implantado y con ofertas agresivas en Aragón) | 2. Lidl / Dia | 3. Mercadona | 4. Eroski | 5. Supercor."
      },
      tips: {
        en: "Zaragoza has major 'Alcampo' hypermarkets (e.g., Utrillas, Los Enlaces). Doing your major monthly shop here is up to 25% cheaper than any neighborhood supermarket.",
        ar: "تضم سرقسطة فروعاً ضخمة جداً لـ Alcampo (مثل Utrillas, Los Enlaces). القيام بمشترياتك الشهرية الكبيرة هناك يوفر 25% مقارنة بأي متجر بقالة عادي.",
        fr: "Saragosse abrite d'immenses hypermarchés Alcampo (ex: Utrillas, Los Enlaces). Y faire ses grosses courses mensuelles permet de réduire l'addition de 25%.",
        es: "En Zaragoza, Alcampo tiene hipermercados gigantescos como los de Utrillas o Los Enlaces. Hacer la compra mensual de básicos allí te ahorrará hasta un 25% mensual."
      }
    },
    placesToVisit: {
      en: "Basilica of Our Lady of the Pillar, Aljafería Moorish Palace, Roman Theatre archeological site, Stone Bridge.",
      ar: "كاتدرائية كنيسة بيلار الضخمة، قصر الجعفرية التاريخي للأمراء المسلمين، المسرح الروماني القديم، الجسر الحجري.",
      fr: "Basilique Notre-Dame du Pilier, Palais fortifié maure de l'Aljafería, Théâtre Romain antique, Pont de Pierre.",
      es: "Basílica de Nuestra Señora del Pilar, Palacio de la Aljafería (tesoro de arte hispanomusulmán), el Teatro Romano, y el Puente de Piedra."
    },
    budgetRestaurants: {
      en: "El Champi (legendary pincho of delicious garlic grilled mushrooms with bread for €2), CroquetAs ZGZ (large variety of gourmet croquettes for €1.50), Doña Hipólita (vintage student café and giant cake/sandwiches).",
      ar: "إل تشامبي (مقبلات فطر الثوم والخبز الأسطورية بـ 2 يورو فقط)، كروكيتاس سرقسطة (فطائر محلية محشوة بـ 1.50 يورو)، دونيا هيبوليتا (مقهى عتيق ووجبات رخيصة).",
      fr: "El Champi (un pincho mythique composé de champignons frais grillés à l'ail pour 2€), CroquetAs ZGZ (un choix énorme de croquettes gourmandes pour 1.50€), Doña Hipólita.",
      es: "El Champi en el Tubo (famoso pincho de champiñón fresco a la plancha por 2€), CroquetAs ZGZ (croquetas de todos los sabores por 1,50€), y Doña Hipólita para merendar."
    }
  },
  {
    city: "Bilbao",
    flag: "⛰️",
    events: {
      en: "The lively 'Semente' alternative basque pubs, the scenic coastal excursions to San Juan de Gaztelugatxe (Dragonstone), and student regatta rowing contests on the Nervión river.",
      ar: "الحفلات الصاخبة في الحانات البديلة في بيلباو، الرحلات الساحلية الخلابة إلى قلعة قزالوقاتشي (San Juan de Gaztelugatxe)، ومسابقات تجديف الطلاب على نهر نيرفيون.",
      fr: "Ambiance universitaire festive dans le Casco Viejo, randonnées à San Juan de Gaztelugatxe (lieu de tournage de Game of Thrones), et régates étudiantes sur le fleuve Nervión.",
      es: "La vibrante semana de fiestas Aste Nagusia en agosto, las excursiones mágicas a San Juan de Gaztelugatxe, y el ambiente de pinchos los jueves en Somera (Casco Viejo)."
    },
    friends: {
      en: "Register with 'ESN Bilbao', download 'Tandem' app, or participate in student surf clubs in nearby Sopela beach.",
      ar: "سجل في شبكة ESN Bilbao للطلاب، حمّل تطبيق Tandem للغات، أو انضم لنوادي الركمجة وركوب الأمواج الجامعية في شاطئ Sopela القريب.",
      fr: "Rejoignez le réseau 'ESN Bilbao', utilisez l'application 'Tandem' ou inscrivez-vous dans l'une des écoles de surf partenaires de l'université à la plage de Sopela.",
      es: "Forma parte de 'ESN Bilbao', utiliza la app Tandem para intercambios cara a cara, o únete a las escuelas de surf estudiantiles en la cercana playa de Sopela."
    },
    supermarkets: {
      ranking: {
        en: "1. BM Supermercados / Eroski (strong Basque chains, highly consistent) | 2. Lidl | 3. Mercadona | 4. Carrefour | 5. El Corte Inglés.",
        ar: "1. BM Supermercados / Eroski (سلاسل إقليم الباسك القوية والممتازة) | 2. Lidl | 3. Mercadona | 4. Carrefour | 5. El Corte Inglés.",
        fr: "1. BM Supermercados / Eroski (chaînes locales basques d'une pure fraîcheur) | 2. Lidl | 3. Mercadona | 4. Carrefour | 5. El Corte Inglés.",
        es: "1. BM Supermercados / Eroski (las cadenas vascas de referencia en producto fresco) | 2. Lidl | 3. Mercadona | 4. Carrefour | 5. El Corte Inglés."
      },
      tips: {
        en: "'Eroski' is a Basque workers cooperative. Apply for their free Eroski Club card at any desk; it gives direct discounts and accumulates cash into your account wallet.",
        ar: "سلسلة 'Eroski' هي تعاونية تابعة للعمال في إقليم الباسك. أطلب بطاقة Eroski Club المجانية من الكاشير لتجميع النقاط والخصومات وتسييلها عند الشراء.",
        fr: "Eroski est une coopérative ouvrière basque très respectée. Demandez la carte 'Eroski Club' en caisse : elle créditera de l'argent réel à déduire de vos prochains paniers.",
        es: "Eroski es una cooperativa vasca excelente. Pide gratis en caja la tarjeta 'Eroski Club'. Todo lo que compres acumula saldo en céntimos que se descuentan directamente en dinero real."
      }
    },
    placesToVisit: {
      en: "Guggenheim Museum of Modern Art, Casco Viejo historical alleyways, Mount Artxanda funicular, Zubizuri structural bridge.",
      ar: "متحف غوغنهايم الشهير للفن الحديث، زقاق وشوارع الحي القديم السبعة، سكة تلفريك جبل أرتكساندا لرؤية المدينة كاملة، جسر زوبيزوري المعماري.",
      fr: "Musée d'art contemporain Guggenheim, ruelles historiques du Casco Viejo, funiculaire du Mont Artxanda, Pont de Zubizuri.",
      es: "El icónico Museo Guggenheim Bilbao, las Siete Calles del Casco Viejo, el Funicular de Artxanda, y el Puente Zubizuri de Calatrava."
    },
    budgetRestaurants: {
      en: "Gure Toki (multi-award winning baseline pintxos on Plaza Nueva at cheap student friendly rates €2.50 each), El Globo (famous gratin crab pintxo for €2.80), Santa María Taberna (excellent Basque regional dishes).",
      ar: "غوري توكي (أفضل بينتكسوس حائز على جوائز في البلازا نويفا بأسعار اقتصادية للطلاب بـ 2.50 يورو)، إل غلوبو (بينتكسوس السرطان البحري المخبوز بـ 2.80 يورو)، حانة سانتا ماريا.",
      fr: "Gure Toki (pintxos primés sublimes dans la Plaza Nueva à prix de d'étudiant, 2.50€), El Globo (le cultissime pintxo de crabe gratiné pour 2.80€).",
      es: "Gure Toki (pintxos de calidad de campeonato en plena Plaza Nueva a un precio imbatible de 2,50€/unidad), y El Globo (famoso por sus pintxos calientes gratinados)."
    }
  },
  {
    city: "Granada",
    flag: "🍇",
    events: {
      en: "Sunset musical chillouts at Mirador de San Nicolás with acoustic guitars, language meetups at 'Café Botánico' in the center, and student snow weekends in nearby Sierra Nevada (40 mins away).",
      ar: "جلسات استرخاء موسيقية عند الغروب في مطل سان نيكولاس مع جيتار الفلامنكو، لقاءات لغوية في مقهى بوتانيكو بوسط المدينة، ورحلات تزلج شتوية للطلاب في سييرا نيفادا المجاورة.",
      fr: "Couchers de soleil musicaux au Mirador de San Nicolás face à l'Alhambra, soirées d'échanges linguistiques au 'Café Botánico', et week-ends de ski étudiants à la Sierra Nevada.",
      es: "Atardeceres con música de guitarra flamenca en el Mirador de San Nicolás frente a la Alhambra, tándem de idiomas en 'Café Botánico' centro, y fines de semana de nieve en Sierra Nevada."
    },
    friends: {
      en: "Granada is the #1 student and Erasmus city in Spain! Join the massive 'ESN Granada' community on social media (daily active student hangouts), or take free language swap hikes.",
      ar: "غرناطة هي العاصمة الكبرى لطلاب التبادل وإراسموس في إسبانيا بالكامل! انضم فورياً لجمعية ESN Granada على وسائل التواصل الاجتماعي لحضور لقاءات ترفيهية يومية.",
      fr: "Grenade est élue meilleure ville Erasmus d'Espagne ! Rejoignez absolument l'association 'ESN Granada' sur les réseaux (activités, soirées, et parrainages chaque semaine).",
      es: "¡Granada es la capital de estudiantes Erasmus por excelencia! Únete a la inmensa red de 'ESN Granada' en redes sociales para participar en viajes colectivos y fiestas semanales."
    },
    supermarkets: {
      ranking: {
        en: "1. Supermercados Dani (Accredited by OCU as the cheapest supermarket chain in Spain) | 2. Lidl / Dia | 3. Mercadona (highly common) | 4. Carrefour.",
        ar: "1. سوبر ماركت داني Dani (المرتبة الأولى كأرخص سلسلة بقالة في إسبانيا وفق OCU) | 2. Lidl / Dia | 3. Mercadona (شائع جداً) | 4. Carrefour.",
        fr: "1. Supermercados Dani (chaîne locale élue la moins chère de toute l'Espagne par l'OCU !) | 2. Lidl / Dia | 3. Mercadona | 4. Carrefour.",
        es: "1. Supermercados Dani (certificados por la OCU como la cadena más barata de España) | 2. Lidl / Dia | 3. Mercadona | 4. Carrefour."
      },
      tips: {
        en: "To save massive amounts of money, purchase all your fresh meats, cheese, fruits and vegetables at 'Dani'. It's located all over student neighborhoods like Plaza de Toros.",
        ar: "لتوفير أموال هائلة، اشترِ اللحوم الطازجة والأجبان والخضروات من فروع 'Dani'. فروعها منتشرة في أحياء الطلاب مثل بلازا دي توروس.",
        fr: "Faites absolument toutes vos provisions chez 'Dani' (très présents dans les quartiers étudiants comme Plaza de Toros). Économies mensuelles de plus de 90€ garanties !",
        es: "Haz toda tu compra de frescos en la cadena granadina 'Dani'. Tienen tiendas en barrios universitarios como Plaza de Toros o Camino de Ronda con precios imbatibles."
      }
    },
    placesToVisit: {
      en: "The Alhambra Palace & Generalife Gardens (masterpieces of Islamic art), Albaicín ancient Moorish quarter, Sacromonte district (Gypsy flamenco caves), Granada Royal Chapel.",
      ar: "قصور الحمراء الأندلسية وجنة العريف الرائعة، حي البيازين العربي القديم، تلال الساكرومونتي حيث مغاور الفلامنكو الغجرية، الضريح الملكي وسط المدينة.",
      fr: "Le Palais de l'Alhambra et ses magnifiques Jardins du Generalife, quartier maure de l'Albaicín, les grottes de flamenco du Sacromonte, Chapelle Royale.",
      es: "La Alhambra y los Jardines del Generalife, el antiguo barrio árabe del Albaicín, las cuevas flamencas del Sacromonte, y la Capilla Real."
    },
    budgetRestaurants: {
      en: "In Granada, a dynamic and generous plate of tapas is 100% FREE with every small beer/coke you order! Try 'La Bella y la Bestia' (unbelievably huge burgers/tapas free), 'Los Manueles' (giant premium ham croquettes), and 'La Antigualla'.",
      ar: "في غرناطة، تقدم جميع الحانات والبارات مقبلات تايباس غنية ومجانية بالكامل 100% مع كل كوب عصير أو كوكاكولا تطلبه! جرب 'La Bella y la Bestia' (وجبات تمنح مجاناً) و 'Los Manueles' الشهير.",
      fr: "À Grenade, une assiette de tapas généreuse est 100% GRATUITE avec chaque verre commandé ! Visitez 'La Bella y la Bestia' (tapas offertes gargantuesques), ou 'Los Manueles' (croquettes cultes).",
      es: "¡Granada es el paraíso de la tapa GRATIS con cada bebida! Imprescindible ir a 'La Bella y la Bestia' (platos de comida gratis enormes), 'Los Manueles' o 'La Antigualla' en Elvira."
    }
  },
  {
    city: "Salamanca",
    flag: "🦉",
    events: {
      en: "The historical 'Nochevieja Universitaria' festival in December (over 40,000 students celebrating New Year's early with grapes in the main square), spring academic parades, and nighttime student tours.",
      ar: "مهرجان 'رأس السنة الجامعية' الشهير في ديسمبر (حيث يحتفل أكثر من 40 ألف طالب ومغترب بنهاية العام مبكراً في الساحة المركزية)، والمسيرات الطلابية مع الطبول والأناشيد.",
      fr: "La 'Nochevieja Universitaria' en décembre (40 000 étudiants font le Nouvel An à l'avance sur la Plaza Mayor avec des bonbons), défilés folkloriques et concerts en plein air.",
      es: "La mítica noche de la 'Nochevieja Universitaria' en diciembre (más de 40.000 jóvenes toman la Plaza Mayor para celebrar un fin de año anticipado), y desfiles de estudiantinas (Tunas)."
    },
    friends: {
      en: "The entire city is adapted for college life! Participate in international student events at 'Erasmus Salamanca' or spend weekend evenings at bars on Calle Varillas.",
      ar: "المدينة بأكملها مهيأة ومصممة للحياة الجامعية! شارك في أنشطة الطلاب مع جمعية Erasmus Salamanca أو اقضِ فترات المساء في حانات شارع فارياش الصاخب بالطلاب.",
      fr: "Toute la ville bat au rythme de l'université ! Participez aux soirées d'accueil organisées par 'Erasmus Salamanque', ou discutez dans les pubs étudiants de la Calle Varillas.",
      es: "¡Es la ciudad de estudiantes universitarios por excelencia! Conecta con las asociaciones de 'Erasmus Salamanca' y sal de noche por los locales alternativos de la Calle Varillas."
    },
    supermarkets: {
      ranking: {
        en: "1. Lidl / Dia | 2. Supermercados Gadis (incredible Galician dairy and seafood) | 3. Mercadona (highly consistent but pricier) | 4. Carrefour Express.",
        ar: "1. Lidl / Dia | 2. سوبر ماركت غاديس Gadis (منتجات ألبان وأجبان وشمالية ممتازة) | 3. Mercadona (ممتاز وقريب) | 4. Carrefour Express.",
        fr: "1. Lidl / Dia | 2. Supermercados Gadis (produits galiciens frais sublimes et laiterie du Nord) | 3. Mercadona | 4. Carrefour Express.",
        es: "1. Lidl / Dia | 2. Supermercados Gadis (súper de origen gallego con excelente calidad y frescos de Galicia) | 3. Mercadona | 4. Carrefour Express."
      },
      tips: {
        en: "Get your fresh cheese, Northern Spanish meats, and bakery goods at 'Gadis'. Use Lidl or central Dia for canned or dried staples to maintain a micro budget.",
        ar: "اشترِ الأجبان الطازجة والمخبوزات واللحوم الباردة الممتازة من 'Gadis'. ودع استهلاكك من المعلبات لـ Lidl لتأمين التوفير.",
        fr: "Visitez 'Gadis' pour acheter des excellents fromages du Nord et de la charcuterie. Utilisez Lidl pour les articles quotidiens d'épicerie pour préserver votre budget.",
        es: "Haz la compra básica económica en Lidl o Dia, pero acude a Gadis para productos frescos, embutidos locales y quesos del norte de primerísima calidad a buen precio."
      }
    },
    placesToVisit: {
      en: "Plaza Mayor (Spain's most majestic baroque square), Historic building of the University of Salamanca (and search for the famous frog on the skull facade!), House of Shells, Twin Cathedrals.",
      ar: "ساحة بلازا مايور (أفخم ساحة باروكية في إسبانيا)، الواجهة التاريخية لجامعة سالامانكا القديمة (والبحث عن الضفدعة الصغيرة على تمثال الجمجمة!)، بيت الأصداف الأسطوري، الكاتدرائيتان التوأمتان.",
      fr: "Plaza Mayor (la plus belle place baroque d'Espagne), Bâtiment historique de l'Université (cherchez la célèbre petite grenouille sculptée sur un crâne !), Casa de las Conchas, les deux Cathédrales.",
      es: "La Plaza Mayor (la plaza barroca más espectacular de España), fachada histórica de la Universidad (¡debes buscar la famosa rana sobre la calavera!), la Casa de las Conchas, y las Catedrales Vieja y Nueva."
    },
    budgetRestaurants: {
      en: "Enjoy free quality tapas with drinks here too! Hop into 'Taberna de Dionisio' (huge traditional plates), 'Mesón Cervantes' (incredible central views of Plaza Mayor with massive sandwiches under €4), 'Ruta de la Plata'.",
      ar: "يمكنك الاستمتاع بالتاباس المصاحب والمجاني في سالامانكا أيضاً! تفضل بزيارة 'Taberna de Dionisio' (وجبات أندلسية تقليدية عملاقة)، أو 'Mesón Cervantes' المطل مباشرة على الساحة الرئيسية.",
      fr: "Les tapas de charcuterie premium sont offertes ici aussi ! Visitez 'Taberna de Dionisio' (plats traditionnels géants pour étudiants), 'Mesón Cervantes' (magnifique terrasse Plaza Mayor).",
      es: "¡Tapas gratis de jamón ibérico y lomo con cada bebida! Visita 'La Taberna de Dionisio' (raciones gigantescas baratas), y 'Mesón Cervantes' en plena Plaza Mayor con bocadillos buenísimos a 4€."
    }
  },
  {
    city: "Santiago de Compostela",
    flag: "🐚",
    events: {
      en: "The historic Apostle Santiago festival in July which features light projection and fireworks, traditional student musical crawls, and assemblies on Plaza del Obradoiro.",
      ar: "مهرجان 'رسول يعقوب' التاريخي في يوليو مع عروض بصرية وألعاب نارية، جولات الطلاب الليلية في الأحياء القديمة، والتجمعات المفتوحة في ساحة Obradoiro الكبرى.",
      fr: "Les grands feux de l'Apôtre en juillet avec projections de lumières monumentales, chasses au trésor et célébrations étudiantes animées sur la Plaza del Obradoiro.",
      es: "Las míticas fiestas del Apóstol Santiago en julio con fuegos artificiales junto a la Catedral, pasacalles universitarios de tunas, y quedadas estudiantiles en la Plaza del Obradoiro."
    },
    friends: {
      en: "Santiago is a compact university city. Go to the traditional student bars of Franco street and join 'ESN Santiago' on social media for student group hikes and activities.",
      ar: "سانتياغو مدينة جامعية وثقافية صغيرة الحجم. زر حانات الطلاب التقليدية في شارع فرانكو وانضم لجمعية ESN Santiago للرحلات والتجوال الجبلي الجماعي.",
      fr: "Saint-Jacques est une ville universitaire très dense et facile d'accès. Retrouvez les étudiants dans les pubs traditionnels de la rue 'Franco' ou rejoignez 'ESN Santiago'.",
      es: "Santiago es muy caminable y compacta. Júntate con estudiantes gallegos y extranjeros en los pubs tradicionales de la Rúa do Franco o asiste a los eventos integradores de 'ESN Santiago'."
    },
    supermarkets: {
      ranking: {
        en: "1. Froiz / Gadis (Highly popular local Galician supermarkets, incredibly cheap for ocean fish, fresh meats and cheese) | 2. Dia | 3. Mercadona.",
        ar: "1. Froiz / غاديس Gadis (بقالات غاليسية محلية أرخص مئة مرة للأسماك الطازجة واللحوم الباردة) | 2. Dia | 3. Mercadona.",
        fr: "1. Supermercados Froiz / Gadis (saints patrons du discount en Galice, exceptionnels pour les fruits de mer frais, poisson et crêpes galiciennes) | 2. Dia | 3. Mercadona.",
        es: "1. Supermercados Froiz / Gadis (cadenas gallegas líderes en precios bajísimos de marisco, carnes y quesos gallegos) | 2. Dia | 3. Mercadona."
      },
      tips: {
        en: "'Froiz' and 'Gadis' are Galician cooperatives. Their seafood departments are world class; you can buy ultra-fresh local fish and regional Galician steak for a raw budget under €35/week.",
        ar: "تعاونيات Froiz و Gadis هي كنز إقليم غاليسيا. يبيعون المأكولات البحرية والأسماك الطازجة للغاية بأسعار بخسة جداً. يمكنك الشراء لتقليل نفقاتك لأقل من 35 يورو أسبوعياً.",
        fr: "Froiz et Gadis proposent des produits galiciens frais péchés du matin à prix dérisoire. Idéal pour manger du poisson extra frais avec un budget total de 35€ par semaine !",
        es: "Froiz y Gadis son las estrellas gallegas. Sus pescaderías venden marisco y pescado de las rías gallegas fresquísimo y baratísimo. Podrás comer carne y marisco de calidad gallega por menos de 35€ semanales."
      }
    },
    placesToVisit: {
      en: "Catedral de Santiago de Compostela (destination of Camino de Santiago pilgrims), Plaza del Obradoiro, Historic old center (pedestrian stone alleys), Alameda park with cathedral vistas.",
      ar: "كاتدرائية سانتياغو دي كومبوستيلا الكبرى (منهى دروب حجاج كامينو الشهير)، ساحة أوبرا دويرو الفسيحة، الحي القديم المرصوف بالحصى والممطر، حدائق ألاميدا الاستعراضية.",
      fr: "Cathédrale de Saint-Jacques-de-Compostelle, Plaza del Obradoiro, Rues piétonnes en pierre du centre historique médiéval, parc d'Alameda.",
      es: "La Catedral de Santiago (meta del famoso Camino de Santiago), la Plaza del Obradoiro, el casco histórico medieval peatonal de piedra, y las vistas de la Catedral desde el Parque de la Alameda."
    },
    budgetRestaurants: {
      en: "O Saborzo (giant traditional octopus empanadas or pies for €4), Taberna O Gato Negro (legendary historic budget tavern with Galicia white wines and steamed mussels for €3.50), El Pasaje Tapas.",
      ar: "أو سابورزو (فطائر الأخطبوط الغاليسية التقليدية الضخمة بـ 4 يورو)، بوديغا أو غاتو نيغرو (حانة تاريخية شهيرة لتقديم بلح البحر المطهي بـ 3.50 يورو وكأس نبيذها الأبيض المحلي).",
      fr: "O Saborzo (empanadas géantes au poulpe à 4€), O Gato Negro (taverne médiévale mythique servant des raciones de moules à l'ail et poulpe à prix incroyable, 3.50€).",
      es: "O Saborzo (empanadas gallegas artesanas gigantes por 4€), la mítica taberna 'O Gato Negro' (raciones de mejillones, calamares y vino gallego Ribeiro baratísimo), y El Pasaje Tapas."
    }
  }
];

export interface LogementItem {
  type: Record<string, string>;
  name: Record<string, string>;
  desc: Record<string, string>;
  price: Record<string, string>;
}

export const LOGEMENT: LogementItem[] = [
  {
    type: {
      en: "Shared Flat (Piso Compartido)",
      ar: "شقة مشتركة",
      fr: "Colocation (Piso compartido)",
      es: "Piso compartido"
    },
    name: {
      en: "Single Room in Madrid / Barcelona",
      ar: "غرفة فردية في مدريد / برشلونة",
      fr: "Chambre individuelle à Madrid / Barcelone",
      es: "Habitación individual en Madrid o Barcelona"
    },
    desc: {
      en: "Rent a single room in a shared apartment. Bills (internet, water, gas) are typically split. Perfect for meeting other international or local students.",
      ar: "استئجار غرفة فردية في شقة مشتركة مع طلاب آخرين. عادة ما يتم تقسيم فواتير الخدمات (الكهرباء والإنترنت والماء). خيار ممتاز للتعرف على طلاب وثقافات جديدة.",
      fr: "Louez une chambre individuelle dans un appartement partagé. Les charges sont généralement partagées. Solution idéale pour rencontrer d'autres étudiants.",
      es: "Alquila una habitación individual en un piso compartido con otros estudiantes. Los gastos suelen dividirse. Perfecto para conocer gente nueva."
    },
    price: {
      en: "€350 - €550 / month",
      ar: "350 - 550 يورو / شهرياً",
      fr: "350€ - 550€ / mois",
      es: "350€ - 550€ / mes"
    }
  },
  {
    type: {
      en: "Student Residence (Residencia de Estudiantes)",
      ar: "سكن طلابي (جامعي)",
      fr: "Résidence Étudiante (Residencia de estudiantes)",
      es: "Residencia de estudiantes"
    },
    name: {
      en: "All-inclusive University Residence",
      ar: "سكن جامعي شامل الخدمات والوجبات",
      fr: "Chambre en résidence avec pension complète",
      es: "Habitación con pensión completa en colegio mayor"
    },
    desc: {
      en: "Includes private bedroom, cleaning services, study rooms, gym, and full board (3 meals/day). Highly secure and social, but more expensive.",
      ar: "غرفة خاصة مع حمام، مع خدمات النظافة، قاعات المذاكرة، صالة رياضية، ووجبات كاملة (فطور وغداء وعشاء). بيئة اجتماعية آمنة للغاية ولكن تكلفتها أعلى.",
      fr: "Comprend une chambre, le ménage, des salles d'étude, une salle de sport et la pension complète. Très convivial et sécurisé, mais tarif supérieur.",
      es: "Habitación privada con servicio de limpieza, zonas comunes de estudio, gimnasio y pensión completa. Entorno súper seguro y social, pero con coste elevado."
    },
    price: {
      en: "€700 - €1,200 / month",
      ar: "700 - 1200 يورو / شهرياً",
      fr: "700€ - 1200€ / mois",
      es: "700€ - 1200€ / mes"
    }
  },
  {
    type: {
      en: "Studio/Apartment (Estudio)",
      ar: "شقة استوديو مستقلة",
      fr: "Studio Indépendant (Estudio)",
      es: "Apartamento independiente / Estudio"
    },
    name: {
      en: "Private 1-bedroom Studio Apartment",
      ar: "استوديو مستقل لشخص أو شخصين",
      fr: "Studio privé 1 pièce",
      es: "Estudio privado de un dormitorio"
    },
    desc: {
      en: "A fully private small apartment with your own kitchen and bathroom. Best for students who prefer privacy, quietness, and complete independence.",
      ar: "شقة مستقلة صغيرة تحتوي على مطبخ وحمام خاص بك بالكامل. الأفضل للطلاب الذين يفضلون الخصوصية والاستقلال والهدوء التام للتركيز في المذاكرة.",
      fr: "Un petit appartement entièrement privé avec cuisine et salle de bain. Conçu pour les étudiants préférant le calme, l'indépendance et l'intimité.",
      es: "Pequeño piso totalmente privado con cocina y baño propios. La mejor opción para estudiantes que priman la privacidad, el silencio y la independencia."
    },
    price: {
      en: "€650 - €950 / month",
      ar: "650 - 950 يورو / شهرياً",
      fr: "650€ - 950€ / mois",
      es: "650€ - 950€ / mes"
    }
  }
];

export interface AlphabetChar {
  l: string;
  n: string;
  ph: string;
  ar: string;
  desc: Record<string, string>;
  w: string;
}

export const ALPHABET_DATA: AlphabetChar[] = [
  {
    l: "A a",
    n: "A",
    ph: "[a]",
    ar: "أ",
    desc: {
      en: "Pure open vocal. Pronounced short and sharp.",
      ar: "حرف متحرك مفتوح وصافٍ. ينطق قصيراً وحاداً.",
      fr: "Voyelle ouverte pure, courte et nette.",
      es: "Vocal abierta pura. Se pronuncia corta y clara."
    },
    w: "Amor"
  },
  {
    l: "B b",
    n: "Be",
    ph: "[β]",
    ar: "ب",
    desc: {
      en: "Sounds exactly like 'V'. Bilabial and soft.",
      ar: "ينطق تماماً مثل حرف 'V' بالإسبانية. صوت شفوي ناعم.",
      fr: "Se prononce exactement comme le 'V'. Son bilabial très doux.",
      es: "Se pronuncia exactamente igual que la 'V' en español."
    },
    w: "Banco"
  },
  {
    l: "C c",
    n: "Ce",
    ph: "[θ] / [k]",
    ar: "ث / ك",
    desc: {
      en: "Sounds like 'th' before E and I; sounds like 'k' before A, O, U.",
      ar: "ينطق مثل الثاء قبل E و I؛ ومثل الكاف قبل A و O و U.",
      fr: "Se prononce comme le 'th' anglais devant E/I, et comme un 'K' devant A/O/U.",
      es: "Suena como 'z' (o 'th' inglés) ante E, I; de lo contrario suena como 'K'."
    },
    w: "Cero"
  },
  {
    l: "D d",
    n: "De",
    ph: "[ð]",
    ar: "د",
    desc: {
      en: "Softer dental sound than English context.",
      ar: "صوت أسناني أنعم مقارنة باللغة الإنجليزية.",
      fr: "Son dental plus doux que le 'd' français standard.",
      es: "Sonido dental suave, apoyando la lengua en los incisivos."
    },
    w: "Día"
  },
  {
    l: "E e",
    n: "E",
    ph: "[e]",
    ar: "إي",
    desc: {
      en: "Mid-closed vowel. Clean short e accent.",
      ar: "حرف متحرك متوسط منغلق. ينطق قصيراً وصافياً.",
      fr: "Voyelle moyenne fermée, semblable au é de 'été'.",
      es: "Vocal semicerrada pura, corta, sin diptongar."
    },
    w: "Estrella"
  },
  {
    l: "G g",
    n: "Ge",
    ph: "[x] / [g]",
    ar: "خ / غ",
    desc: {
      en: "Sounds like dry harsh 'H' (or 'kh') before E/I, and hard 'G' before A/O/U.",
      ar: "صوت خشن مثل الخاء قبل E و I؛ ومثل الجيم المصرية قبل A و O و U.",
      fr: "Sonne comme un 'J' guttural (la jota) devant E/I, et un 'G' dur devant A/O/U.",
      es: "Suena como jota (/x/) ante E, I; suave como gato (/g/) de otra forma."
    },
    w: "Gente"
  },
  {
    l: "H h",
    n: "Hache",
    ph: "[muda]",
    ar: "صامت",
    desc: {
      en: "Always completely silent. Never aspirate it.",
      ar: "حرف صامت تماماً لا ينطق أبداً في الكلمات الإسبانية.",
      fr: "Toujours absolument muette. Ne jamais l'aspirer.",
      es: "Siempre completamente muda en español. No se aspira nunca."
    },
    w: "Hola"
  },
  {
    l: "J j",
    n: "Jota",
    ph: "[x]",
    ar: "خ",
    desc: {
      en: "Classic harsh guttural sound. Pronounced like Arabic 'خ'.",
      ar: "الصوت الخشن الحلقي المميز للإسبانية. ينطق تماماً كالخاء العربية.",
      fr: "Son guttural râpeux espagnol typique, comme la 'Kh' arabe.",
      es: "Sonido fricativo velar sordo muy característico, idéntico a la j."
    },
    w: "Jardín"
  },
  {
    l: "Ñ ñ",
    n: "Eñe",
    ph: "[ɲ]",
    ar: "ني",
    desc: {
      en: "Syllabic nasal sound. Pronounced like 'gn' in French or Italian.",
      ar: "صوت أنفي حنكي مميز. ينطق مثل النون المدمجة بالياء.",
      fr: "Son nasal palatal, identique au 'gn' de montagne.",
      es: "Sonido nasal palatal característico del idioma español."
    },
    w: "España"
  },
  {
    l: "Q q",
    n: "Cu",
    ph: "[k]",
    ar: "ك",
    desc: {
      en: "Always combined as 'que' or 'qui'. The 'u' remains silent.",
      ar: "يأتي دائماً كـ 'que' أو 'qui'. حرف U الذي يليه لا ينطق.",
      fr: "Toujours associé avec 'u' (en 'que'/'qui'). Le 'u' reste complètement muet.",
      es: "Aparece siempre seguido de 'u' (que, qui). La 'u' es muda."
    },
    w: "Queso"
  },
  {
    l: "R r",
    n: "Ere",
    ph: "[r] / [r̄]",
    ar: "ر",
    desc: {
      en: "Single roll of the tongue, or multiple vibrant rolls initially or if double.",
      ar: "لف الوف لسانك لمرة واحدة، أو اهتزاز متكرر وقوي في بداية الكلمة أو إذا تضاعف.",
      fr: "Roulé simple du bout de la langue, ou vibrant multiple au début ou double rr.",
      es: "Vibrante simple de la punta de la lengua, o múltiple al principio de palabra."
    },
    w: "Rosa"
  },
  {
    l: "V v",
    n: "Uve",
    ph: "[β]",
    ar: "ب",
    desc: {
      en: "Pronounced identical to 'B'. Never bite your lip like English 'v'.",
      ar: "ينطق تماماً وصوتياً مثل حرف B. لا تلمس شفتك السفلية بأسنانك.",
      fr: "Se prononce de la même façon que le 'B'. Ne pas faire un 'v' labiodental.",
      es: "En español se pronuncia exactamente igual que la letra B."
    },
    w: "Vida"
  },
  {
    l: "Z z",
    n: "Zeta",
    ph: "[θ]",
    ar: "ث",
    desc: {
      en: "Always pronounced like English 'th' in Europe. Seseo applies in Americas.",
      ar: "ينطق كالثاء دائماً in إسبانيا. بينما ينطق كالسين في أمريكا اللاتينية.",
      fr: "Se prononce comme le 'th' dur anglais en Espagne (la zeta).",
      es: "Se pronuncia colocando la lengua entre los dientes ante cualquier vocal."
    },
    w: "Zapato"
  }
];

export const LEVEL_TOPICS: Record<string, string[]> = {
  A1: [
    "Alphabet & Pronunciation",
    "Greetings & Farewells",
    "Introducing Yourself & Age",
    "Family Members & Talking about Friends",
    "Daily Activities & Telling Time",
    "University Coursework & Campus Map",
    "Ordering Food & Cafe Vocabulary",
    "Weather and Clothing",
    "Describing Places & Simple Directions",
    "My Academic Goals & Exam Prep"
  ],
  A2: [
    "Past Tense: Pretérito Indefinido",
    "Past Tense: Pretérito Imperfecto",
    "Talking about Childhood Memories",
    "Navigating Public Housing & Lease Contracts",
    "My Academic Background & Faculty Interviews",
    "Shopping & Budget Management in Spanish Cities",
    "Asking for Medical Help & University Procedures",
    "My Travel Experiences in Spain",
    "Planning Student Projects & Delegating Tasks",
    "Future Intentions & Post-Graduation Goals"
  ],
  B1: [
    "Introduction to Subjunctive Mood (Subjuntivo)",
    "Expressing Doubts, Hopes, and Recommendations",
    "Talking about Social Problems & Student Demands",
    "Writing a Motivation Letter & CV in Spanish",
    "Preparing for SIELE & DELE Oral Tasks",
    "Spanish Cinema, Culture, and Literary Icons",
    "Comparing Regional Accents and Slang in Spain",
    "Renting Shared Flats & Legal Tenancy Rights",
    "Academic Research Methods & Thesis Frameworks",
    "Formal Presentations & Group Debates"
  ],
  B2: [
    "Advanced Subjunctive Mood & Conditional Hypotheses",
    "Writing Academic Essays & Expressing Opinions",
    "Analyzing Spanish Media, Press, and Current Events",
    "Advanced Direct/Indirect Object Pronoun Placement",
    "Professional Interviews & Internship Applications",
    "Regional Economics and Sustainable Development",
    "Scientific Terminology & Tech Research of Spain",
    "Political Systems & University Student Unions",
    "History of the Spanish Language and Dialects",
    "Critical Analysis of Literary Excerpts"
  ],
  C1: [
    "Socio-Political Analysis of Contemporary Spain",
    "Advanced Technical Writing and Formulations",
    "Subtle Idiomatic Nuances & Double Meanings",
    "Defending Dissertations & Advanced Rhetorical Skills",
    "Complex Legal Terminology & Spanish Bureaucracy",
    "Deciphering Historical Manuscripts & Paleography",
    "Public Administration & State Exams (Oposiciones)",
    "Journalistic Integrity and Editing in Spanish",
    "Interpreting Dialectal Nuances across Spanish Regions",
    "Syntactic Precision & Expressing Absolutes"
  ],
  C2: [
    "Philosophical Discourse and Existential Writing",
    "Deciphering Metaphorical Expression in Poetry",
    "Mastering Archaisms and Legalistic Language",
    "Simultaneous Interpretation & Live Debate Skills",
    "Phonetic Convergence & Fluid Native Articulation",
    "Writing Published Monographs and Research Papers",
    "Cultural Semiotics and Spanish Folklore",
    "Advanced Stylistics and Editorial Columns",
    "Linguistic Authority & Academic Lexicon Mastery",
    "Spontaneous Rhetorical Reasoning under Pressure"
  ]
};
