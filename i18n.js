/* =========================================================
   Alberto Bedeschi — Sistema Bilingue IT / EN
   Traduce in modo lossless (ripristina sempre l'italiano originale)
   Header, Footer, Home, Chi sono, Curriculum e intestazioni chiave.
   ========================================================= */
(function () {
  'use strict';

  const LANG_KEY = 'ab-lang';

  const EN = {
    // Shared Header & Navigation
    'brand.role': 'Digital Learning Designer',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.lms': 'LMS Platform',
    'nav.projects': 'Case Studies',
    'nav.cv': 'Resume',
    'nav.cta': 'Contact',

    // Shared Footer
    'footer.bio': 'Digital Learning Designer and M.Sc. student in Theories and Methods of Digital Learning (LM-93).',
    'footer.explore': 'Explore',
    'footer.contacts': 'Contacts',
    'footer.projects': 'Case studies & projects',
    'footer.location': 'Reggio Emilia, Italy · Remote',
    'footer.tagline': 'Professional & educational portfolio',

    // Contact Modal
    'contact.title': 'Get in touch',
    'contact.subtitle': 'Choose the most convenient way to reach me — available for Instructional Design, E-Learning & HR Training roles (remote or Reggio Emilia area).',
    'contact.gmail': 'Write via Gmail Web',
    'contact.copy': 'Copy email address',
    'contact.linkedin': 'Message on LinkedIn',
    'contact.mailto': 'Open default Mail app',
    'contact.phone': 'Call 340 588 8657',
    'contact.close': 'Close',

    // HOME (index.html)
    'home.tag': '<span class="status-dot" aria-hidden="true"></span>Reggio Emilia &amp; Remote · Open to collaborations',
    'home.title': 'Pedagogy, digital tools &amp; <em>learning experiences</em>.',
    'home.lead': 'My name is <strong>Alberto Bedeschi</strong>. I hold a Bachelor\'s degree (100/110) in <em>Digital Education</em> and am currently pursuing a Master\'s degree in <em>Theories and Methods of Digital Learning</em> (LM-93) at UNIMORE. I focus on instructional design, microlearning, game-based learning, and responsible use of Generative AI in education and corporate training.',
    'home.cta.projects': 'Explore case studies &amp; demos <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"></use></svg>',
    'home.cta.cv': '<svg class="icon" aria-hidden="true"><use href="#i-download"></use></svg>Download PDF Resume',
    'home.cta.copy': '<svg class="icon" aria-hidden="true"><use href="#i-copy"></use></svg>Copy email',
    'home.card.status': '<span class="status-dot" aria-hidden="true"></span>Digital Learning Designer',
    'home.fact1.title': 'B.A. in Digital Education · 100/110',
    'home.fact1.sub': 'UNIMORE · L-19, Psycho-social Educator curriculum',
    'home.fact2.title': 'M.Sc. LM-93 (in progress)',
    'home.fact2.sub': 'Theories and Methods of Digital Learning',
    'home.fact3.title': 'Internship at Skilla – Amicucci Formazione',
    'home.fact3.sub': '300 hours · Final tutor evaluation: «Excellent»',
    'home.fact4.title': 'Community Educator',
    'home.fact4.sub': 'Accento Social Cooperative · Reggio Emilia',
    'home.areas.label': 'Portfolio sections',
    'home.area1.num': '01 / Background & vision',
    'home.area1.title': 'About me',
    'home.area1.text': 'My journey across educational sciences, Generative AI literacy, media education, and academic research on youth social withdrawal (Hikikomori).',
    'home.area1.badge': 'Pedagogical vision',
    'home.area1.link': 'Read more <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"></use></svg>',
    'home.area2.num': '02 / E-learning environment',
    'home.area2.title': 'LMS Platform & modules',
    'home.area2.text': 'A microlearning LMS prototype inspired by Moodle: explore sequential courses with videos, flashcards, quizzes, SCORM 1.2 export, xAPI logs, and an open Authoring Sandbox.',
    'home.area2.badge': 'Interactive simulation',
    'home.area2.link': 'Try the LMS <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"></use></svg>',
    'home.area3.num': '03 / Real-world case studies',
    'home.area3.title': 'Case studies & projects',
    'home.area3.text': 'Hands-on corporate & social projects: the gamified course <strong>Working with AI (Prompting &amp; Security)</strong> on Gamindo Builder, the <strong>Proximity Digital Map</strong> for Accento, and my internship at Skilla.',
    'home.area3.badge': 'Live demos & map',
    'home.area3.link': 'View projects <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"></use></svg>',
    'home.area4.num': '04 / Experience & education',
    'home.area4.title': 'Curriculum vitae',
    'home.area4.text': 'A clear, transparent overview of my academic background, field experience (Skilla, Accento, tutoring), digital tools, and languages.',
    'home.area4.badge': 'A4 PDF printable',
    'home.area4.link': 'View Resume <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"></use></svg>',
    'home.quote.1': '«Technology is a learning facilitator, never the end goal.»',
    'home.quote.2': 'My approach bridges human-centered pedagogy with practical digital tools (LMS, Gamindo Builder, NotebookLM, Google Workspace). The goal is always to reduce cognitive overload and make learning engaging and accessible to everyone.',

    // ABOUT (chi-sono.html)
    'about.tag': 'Background & perspective',
    'about.title': 'Exploring the intersection of <em>pedagogy</em>, digital tools, and human contexts.',
    'about.lead': 'My name is <strong>Alberto Bedeschi</strong>. I graduated with 100/110 in <em>Digital Education</em> (L-19) and am pursuing a Master\'s degree in <em>Theories and Methods of Digital Learning</em> (LM-93) at UNIMORE. I believe technology only creates real value when grounded in pedagogical awareness and genuine listening.',
    'about.e1.eyebrow': 'Technology & learning',
    'about.e1.title': 'Curiosity for AI: understanding how it works to apply it wisely',
    'about.e1.p1': 'I closely follow the evolution of Artificial Intelligence. Rather than treating AI tools as "black boxes", I study their mechanics, opportunities, and limitations:',
    'about.e1.b1': '<strong>Large Language Models (LLMs):</strong> I study context windows, structured prompting, and source-grounded extraction (<em>grounding</em>). I focus on evaluating conversational agent outputs, as I did while reviewing the AI tutor <em>Arianna</em> during my Skilla internship.',
    'about.e1.b2': '<strong>Forward-looking perspective:</strong> I follow how emerging AI models reshape studying, corporate training, and knowledge workflows.',
    'about.e1.b3': '<strong>Practical application:</strong> I apply AI to concrete educational workflows—such as turning complex institutional manuals into searchable grounded bases (NotebookLM) and designing active microlearning storyboards.',
    'about.e2.eyebrow': 'Educational sciences & society',
    'about.e2.title': 'The pedagogical lens: media literacy and new fragilities',
    'about.e2.p1': 'My academic roots lie in educational sciences. That is why I always evaluate how digital environments impact human well-being and social bonds:',
    'about.e2.b1': '<strong>Social withdrawal &amp; Hikikomori:</strong> My Bachelor\'s thesis explored youth social isolation from a multidimensional perspective, examining shared storytelling and video games not as causes of isolation, but as relational bridges for listening and re-engagement.',
    'about.e2.b2': '<strong>Media literacy &amp; digital well-being:</strong> I care deeply about youth online cultures, cyberbullying prevention, and managing cognitive/information overload.',
    'about.e2.b3': '<strong>Inclusion &amp; accessibility (WCAG):</strong> I design digital learning materials to be readable, inclusive, and free of unnecessary cognitive or visual barriers.',
    'about.thesis.summary': 'Read thesis abstract &amp; Game-Based Learning link (100/110)',
    'about.thesis.p': 'In <em>"Hikikomori: a multidimensional analysis"</em> (UNIMORE, 2025), I examined how video games provide a <strong>safe space to fail</strong>, immediate formative feedback, and personal agency—the very principles that underpin effective corporate Game-Based Learning today.',
    'about.thesis.btn': 'Open full printable Thesis Brief (PDF)',
    'about.skills.label': 'Core areas of focus',
    'about.s1.title': 'Academic background',
    'about.s1.text': 'B.A. in Digital Education L-19 (100/110) and ongoing M.Sc. in <em>Theories and Methods of Digital Learning</em> (LM-93) at UNIMORE.',
    'about.s2.title': 'Digital tools & AI',
    'about.s2.text': 'Structured prompting, QA for AI learning assistants, grounded knowledge bases with NotebookLM, and Google Workspace.',
    'about.s3.title': 'Instructional Design',
    'about.s3.text': 'Microlearning, game-based learning (Gamindo Builder), WCAG accessibility, SCORM/xAPI standards, and Moodle environments.',
    'about.s4.title': 'Mapping & organization',
    'about.s4.text': 'Interactive territorial maps (Google My Maps), GDPR-compliant cloud documentation (Drive), and Gecos reporting.',
    'about.s5.title': 'Education & relationships',
    'about.s5.text': 'Research on social withdrawal (Hikikomori), active listening, media literacy, cyberbullying prevention, and multidisciplinary teamwork.',
    'about.cta.lms': 'Try the LMS platform <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"></use></svg>',
    'about.cta.projects': 'View case studies',

    // RESUME (profilo.html)
    'cv.tag': 'Curriculum vitae · Experience & skills',
    'cv.lead': 'B.A. in Digital Education (100/110) and M.Sc. student in Theories and Methods of Digital Learning (LM-93) at UNIMORE. I combine pedagogical design, WCAG accessibility, and digital authoring tools: open to opportunities in Instructional Design, Corporate E-Learning, HR Training & Development, or Learning Coordination (Reggio Emilia & Remote, full-time or part-time).',
    'cv.btn.pdf': '<svg class="icon" aria-hidden="true"><use href="#i-download"></use></svg>Download PDF CV',
    'cv.btn.print': '<svg class="icon" aria-hidden="true"><use href="#i-printer"></use></svg>Print / Save via browser',
    'cv.sec.exp': 'Professional experience',
    'cv.j1.title': 'Instructional Design & E-Learning Intern',
    'cv.j1.period': '2025 · 300 hours',
    'cv.j1.company': 'Skilla – Amicucci Formazione Srl (Civitanova Marche / Remote)',
    'cv.j1.b1': '<strong>Didactic QA &amp; storyboards:</strong> storyboard proofreading and pedagogical-linguistic review of corporate e-learning modules prior to release.',
    'cv.j1.b2': '<strong>Assessment &amp; quizzes:</strong> drafting learning verification tests and formative feedback.',
    'cv.j1.b3': '<strong>Accessibility &amp; localization:</strong> WCAG digital accessibility checks and preparing multimedia assets for translation.',
    'cv.j1.b4': '<strong>Generative AI &amp; "Arianna" tutor:</strong> testing and giving qualitative feedback on AI tutor responses; supporting team workshops on <em>Arianna</em>.',
    'cv.j1.b5': '<strong>E-learning standards:</strong> hands-on understanding of SCORM, LMS architectures, microlearning, and gamification.',
    'cv.j1.badge': '<svg class="icon" aria-hidden="true"><use href="#i-star"></use></svg>Final tutor evaluation: «Excellent»',
    'cv.j2.title': 'Community & Home-Based Educator',
    'cv.j2.period': 'Apr 2026 – Jul 2026',
    'cv.j2.company': 'Accento Social Cooperative — Reggio Emilia',
    'cv.j2.b1': 'Designed an interactive territorial map (Google My Maps) and a grounded local-services database on NotebookLM.',
    'cv.j2.b2': 'Home and community educational support in coordination with Municipal Social Services and multidisciplinary teams.',
    'cv.j2.b3': 'Family and youth support in complex settings, ensuring strict confidentiality and GDPR compliance.',
    'cv.j2.b4': 'Official case documentation (DOS) on Google Drive and time tracking on Gecos.',
    'cv.j2.b5': 'Digital literacy coaching for collaborative online platforms.',
    'cv.j3.title': 'Private Academic Tutor & Study Coach',
    'cv.j3.period': '2020 – Present',
    'cv.j3.company': 'Independent activity',
    'cv.j3.b1': 'One-to-one coaching on study methodology, motivation, and academic performance anxiety.',
    'cv.j3.b2': 'Integrating Generative AI tools to adapt explanations and study materials to individual learner needs.',
    'cv.sec.edu': 'Academic education',
    'cv.e1.title': 'M.Sc. in Theories and Methods of Digital Learning (LM-93)',
    'cv.e1.period': '2026 – Present',
    'cv.e1.desc': 'E-learning instructional models, instructional design, media epistemology, and Generative AI applied to educational and corporate settings.',
    'cv.e2.title': 'B.A. in Digital Education (L-19)',
    'cv.e2.period': '2025 · 100/110',
    'cv.e2.curr': '<strong>Track:</strong> Psycho-social Educator in Digital Contexts.',
    'cv.e2.thesis': '<strong>Thesis:</strong> <em>"Hikikomori: a multidimensional analysis"</em> — exploring youth social withdrawal, online subcultures, and the relational potential of shared storytelling and video games. <a href="scheda_tesi_hikikomori.html" class="no-print" style="font-weight:600; text-decoration:underline;">Read Thesis Brief →</a>',
    'cv.e3.title': 'High School Diploma in Social & Health Services',
    'cv.e3.desc': 'Foundations in interpersonal communication, psychology, and social-health law.',
    'cv.sec.skills': 'Key skills',
    'cv.sk.digital': '<svg class="icon" aria-hidden="true"><use href="#i-layers"></use></svg>Digital &amp; Instructional Design',
    'cv.sk.soft': '<svg class="icon" aria-hidden="true"><use href="#i-users"></use></svg>Relational &amp; Organizational',
    'cv.sk.lang': '<svg class="icon" aria-hidden="true"><use href="#i-globe"></use></svg>Languages',
    'cv.sk.avail': '<svg class="icon" aria-hidden="true"><use href="#i-pin"></use></svg>Availability',
    'cv.lang.it': 'Italian',
    'cv.lang.it.lvl': 'Native',
    'cv.lang.en': 'English',
    'cv.lang.es': 'Spanish',
    'cv.sec.live': 'Playable Portfolio Projects & Learning Objects',

    // PROJECTS (progetti.html)
    'proj.tag': 'Field experience · Live prototypes',
    'proj.title': 'Case studies &amp; <em>hands-on projects</em>',
    'proj.lead': 'Real work spanning corporate EdTech and social innovation: from e-learning quality assurance and game-based microlearning to territorial resource mapping.',
    'proj.jump.label': 'Jump to:',
    'proj.jump.1': '1. Skilla Internship',
    'proj.jump.2': '2. AI Mini-Game (Gamindo)',
    'proj.jump.3': '3. Accento Map',
    'proj.jump.4': '4. NotebookLM Method',

    // LMS (lms.html)
    'lms.tag': 'E-Learning Environment · Interactive Microlearning',
    'lms.title': 'LMS Platform: <em>Sequential Player</em> &amp; Authoring Sandbox',
    'lms.lead': 'An asynchronous e-learning environment featuring sequential unlocking (inspired by <strong>Moodle</strong>), situational games, simulated xAPI tracking, real <strong>SCORM 1.2 (.zip) export</strong>, and an open Authoring Sandbox.'
  };

  const originals = new WeakMap();

  function getLang() {
    try {
      return localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'it';
    } catch (e) {
      return 'it';
    }
  }

  function applyLang(lang) {
    const isEn = lang === 'en';
    document.documentElement.lang = isEn ? 'en' : 'it';
    document.documentElement.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!originals.has(el)) originals.set(el, el.textContent);
      if (isEn && EN[key] !== undefined) {
        el.textContent = EN[key];
      } else if (!isEn && originals.has(el)) {
        el.textContent = originals.get(el);
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (!originals.has(el)) originals.set(el, el.innerHTML);
      if (isEn && EN[key] !== undefined) {
        el.innerHTML = EN[key];
      } else if (!isEn && originals.has(el)) {
        el.innerHTML = originals.get(el);
      }
    });

    document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
      btn.textContent = isEn ? 'IT' : 'EN';
      btn.setAttribute('aria-label', isEn ? 'Passa alla lingua italiana' : 'Switch language to English');
      btn.setAttribute('title', isEn ? 'Passa a Italiano' : 'Switch to English');
      btn.setAttribute('aria-pressed', String(isEn));
    });
  }

  function t(key, fallbackIt) {
    if (getLang() === 'en' && EN[key] !== undefined) return EN[key];
    return fallbackIt;
  }

  function initLang() {
    const current = getLang();
    applyLang(current);

    document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const next = getLang() === 'en' ? 'it' : 'en';
        try { localStorage.setItem(LANG_KEY, next); } catch (e) {}
        applyLang(next);
        if (window.ui && window.ui.toast) {
          window.ui.toast(next === 'en' ? 'Language switched to English' : 'Lingua impostata su Italiano', 'info', 2200);
        }
      });
    });
  }

  window.abI18n = { getLang, applyLang, t };
  document.addEventListener('DOMContentLoaded', initLang);
})();
