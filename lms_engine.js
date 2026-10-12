// Alberto Bedeschi — LMS Engine & Authoring System (Microlearning & Moodle-Style Workflow)
(function () {
  'use strict';

  // Video URL to Embed Formatter
  function formatVideoEmbed(url) {
    if (!url || typeof url !== 'string' || !url.trim()) return null;
    const trimmed = url.trim();

    // YouTube match (standard, share shortlink, embed)
    const ytMatch = trimmed.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
    if (ytMatch && ytMatch[1]) {
      return `https://www.youtube.com/embed/${ytMatch[1]}`;
    }

    // Vimeo match
    const vimeoMatch = trimmed.match(/vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)/i);
    if (vimeoMatch && vimeoMatch[3]) {
      return `https://player.vimeo.com/video/${vimeoMatch[3]}`;
    }

    if (trimmed.includes('embed') || trimmed.endsWith('.mp4') || trimmed.endsWith('.webm')) {
      return trimmed;
    }

    return trimmed;
  }

  // Default Courses Database
  const defaultCourses = [
    {
      id: "corso-benessere",
      title: "Benessere Digitale & Gestione del Carico Cognitivo",
      category: "Instructional Design & AI",
      badge: "Modulo 1 · Microlearning",
      steps: [
        {
          type: "video",
          title: "1. Video Intro: Attenzione e Tecnostress",
          badge: "Fase 1 · Ingaggio Iniziale",
          videoTitle: "Pillola Video 1: L'impatto del Sovraccarico Cognitivo",
          videoDuration: "01:45",
          videoUrl: "",
          text: "<strong>Obiettivo didattico:</strong> Esplorare l'impatto del continuo cambio di contesto (<em>context switching</em>) e come la progettazione formativa a micro-blocchi favorisce il recupero dell'attenzione."
        },
        {
          type: "text",
          title: "2. Quadro Didattico: Cognitive Load Theory",
          badge: "Fase 2 · Approfondimento Concettuale",
          text: "<p>La <strong>Cognitive Load Theory (Sweller)</strong> suddivide il carico cognitivo in tre componenti fondamentali:</p><ul><li><strong>Carico Intrinseco:</strong> la difficoltà intrinseca del contenuto stesso. Si gestisce con una corretta gradualità didattica (Tassonomia di Bloom).</li><li><strong>Carico Estraneo:</strong> il rumore generato da una cattiva interfaccia, slide dense o audio disturbato. Deve tendere a zero.</li><li><strong>Carico Pertinente:</strong> l'energia mentale dedicata alla reale costruzione di schemi mentali stabili. Va massimizzato.</li></ul><div class='callout-quote'>💡 <strong>Regola per l'Instructional Designer:</strong> Riduciamo a zero il carico estraneo affinché tutto il potenziale cognitivo dello studente sia canalizzato nella comprensione reale.</div>"
        },
        {
          type: "video",
          title: "3. Video 2: Caso Studio Pratico con AI",
          badge: "Fase 3 · Applicazione Pratica",
          videoTitle: "Pillola Video 2: Ristrutturare un Manuale di 50 Pagine",
          videoDuration: "02:10",
          videoUrl: "",
          text: "<strong>Caso reale:</strong> Analisi di documentazione aziendale complessa tramite NotebookLM su fonti certificate, con validazione pedagogica umana e scomposizione in moduli da 3 minuti."
        },
        {
          type: "game",
          title: "4. Gioco Didattico: Scenario di Progettazione",
          badge: "Fase 4 · Attività Gamificata (Sblocca il passaggio)",
          scenario: "🎯 <strong>Scenario di Decisione:</strong> Un'azienda ti chiede di formare 200 dipendenti su una nuova procedura interna. I dipendenti hanno solo 10 minuti di pausa tra un turno e l'altro. Quale strategia didattica applichi per garantire efficacia senza sovraccarico?",
          options: [
            { text: "A) Invio di un manuale PDF di 60 pagine con richiesta di firma di presa visione via email.", correct: false, feedback: "❌ <strong>Scelta non idonea:</strong> Crea un forte sovraccarico cognitivo, disimpegno e un tasso di ritenzione quasi nullo. Riprova!" },
            { text: "B) Una sequenza di 3 micro-pillole da 2 minuti fruibili su smartphone, ciascuna seguita da una singola domanda situazionale.", correct: true, feedback: "🎉 <strong>Risposta Corretta!</strong> Il microlearning asincrono da 2 minuti rispetta i vincoli di tempo ed elimina il sovraccarico cognitivo. L'attività è superata e lo step successivo è ora sbloccato!" },
            { text: "C) Un webinar sincrono obbligatorio di 4 ore registrato senza momenti interattivi.", correct: false, feedback: "❌ <strong>Scelta non idonea:</strong> Non compatibile con i turni operativi e causa rapido affaticamento mentale (digital burnout). Riprova!" }
          ]
        },
        {
          type: "video",
          title: "5. Video 3: Checklist Operativa di Qualità",
          badge: "Fase 5 · Consolidamento & Sintesi",
          videoTitle: "Pillola Video 3: I 4 Criteri di Validazione di un Corso",
          videoDuration: "01:30",
          videoUrl: "",
          text: "In questa pillola finale vengono fissati i 4 criteri di qualità prima del rilascio in piattaforma Moodle: coerenza con gli obiettivi di Bloom, conformità WCAG, feedback metacognitivo e tracciamento SCORM/xAPI."
        },
        {
          type: "quiz",
          title: "6. Quiz Finale di Valutazione",
          badge: "Fase 6 · Valutazione Formativa (Sblocca la certificazione)",
          question: "Qual è il vantaggio pedagogico principale nell'uso di NotebookLM per l'Instructional Designer?",
          options: [
            { text: "Generare contenuti fittizi e teorie inventate in modo totalmente autonomo.", correct: false, feedback: "⚠️ Non corretto: l'obiettivo non è inventare, ma elaborare fonti reali senza allucinazioni." },
            { text: "Ancorare l'estrazione dei concetti e le sintesi esclusivamente ai documenti primari caricati dal formatore umano.", correct: true, feedback: "✅ <strong>Esatto!</strong> L'ancoraggio rigoroso (grounding) previene le allucinazioni e garantisce fedeltà pedagogica e scientifica. Quiz superato!" },
            { text: "Sostituire la figura del progettista formativo ed eliminare ogni supervisione umana.", correct: false, feedback: "⚠️ Non corretto: il giudizio pedagogico umano rimane il fulcro insostituibile." }
          ]
        },
        {
          type: "completion",
          title: "7. Completamento & Dispensa Finale",
          badge: "Fase 7 · Conclusione del Percorso",
          text: "Congratulazioni! Hai completato l'intero percorso didattico sequenziale, superando sia l'attività di gamification sia il test di verifica formativa."
        }
      ]
    },
    {
      id: "corso-territorio",
      title: "Mappatura Territoriale & Risorse Educative (Accento)",
      category: "Educativa & Digital Tools",
      badge: "Modulo 2 · Gestione Risorse",
      steps: [
        {
          type: "video",
          title: "1. Video Intro: La Frammentazione Territoriale",
          badge: "Fase 1 · Il Contesto",
          videoTitle: "Pillola Video: Il Lavoro dell'Educatore sul Territorio",
          videoDuration: "01:30",
          videoUrl: "",
          text: "L'esperienza sul campo con <strong>Accento Cooperativa Sociale</strong>: il raccordo costante con i Servizi Sociali di Reggio Emilia e la necessità di una mappa condivisa."
        },
        {
          type: "text",
          title: "2. Architettura dei Dati: Google My Maps & Gecos",
          badge: "Fase 2 · Integrazione Strumenti",
          text: "<p>Unire strumenti gestionali (Gecos per le ore, Google Drive per i dossier DOS) a una mappa geografica interattiva per visualizzare a colpo d'occhio sportelli di ascolto, centri pomeridiani e risorse per minori.</p><div class='callout-quote'>📍 <strong>Impatto:</strong> Riduzione dei tempi di orientamento delle famiglie e maggiore efficacia per le équipe multidisciplinari.</div>"
        },
        {
          type: "game",
          title: "3. Attività Interattiva: Scelta della Risorsa",
          badge: "Fase 3 · Decisione Operativa",
          scenario: "🎯 <strong>Scenario Operativo:</strong> Una famiglia seguita dal servizio sociale necessita di un supporto pomeridiano per compiti e socializzazione per un minore. Quale risorsa mappata sul territorio selezioni?",
          options: [
            { text: "A) Pronto Soccorso Ospedaliero.", correct: false, feedback: "❌ Risorsa medica per emergenze, non pertinente al bisogno educativo." },
            { text: "B) Polo Educativo Territoriale con laboratori di media education e spazio compiti.", correct: true, feedback: "🎉 <strong>Esatto!</strong> Il Polo Educativo risponde sia al bisogno didattico sia alla prevenzione del ritiro sociale. Attività superata!" },
            { text: "C) Ufficio Tributi Comunale.", correct: false, feedback: "❌ Ente amministrativo non correlato." }
          ]
        },
        {
          type: "quiz",
          title: "4. Quiz di Verifica: Privacy & Documentazione DOS",
          badge: "Fase 4 · Conformità & Metodo",
          question: "Nell'aggiornamento della documentazione DOS su cloud, quale principio è prioritario?",
          options: [
            { text: "Condividere i dati sensibili pubblicamente senza protezioni.", correct: false, feedback: "⚠️ Grave violazione della normativa privacy." },
            { text: "Rispetto rigoroso della riservatezza (GDPR) e tracciamento orario certificato.", correct: true, feedback: "✅ <strong>Corretto!</strong> Riservatezza ed etica documentale sono il cardine del lavoro educativo." },
            { text: "Evitare qualsiasi verbalizzazione scritta.", correct: false, feedback: "⚠️ La tracciabilità condivisa è fondamentale per l'équipe." }
          ]
        },
        {
          type: "completion",
          title: "5. Scheda Finale del Caso Accento",
          badge: "Fase 5 · Conclusione",
          text: "Modulo completato! Dimostrazione dell'integrazione tra competenze educative territoriali e digitalizzazione dei processi."
        }
      ]
    }
  ];

  // State Management
  function loadStoredCourses() {
    try {
      const data = localStorage.getItem('alberto_lms_courses');
      if (data) return JSON.parse(data);
    } catch (e) {
      console.warn('Impossibile leggere i corsi salvati:', e);
    }
    return JSON.parse(JSON.stringify(defaultCourses));
  }

  let courses = loadStoredCourses();
  let activeCourseIndex = 0;
  let currentStepIndex = 0;
  let currentMode = 'player'; // 'player' | 'editor'
  let currentEditingStepIndex = null;
  let modalTempOptions = [];

  // Persistent User Progress per Course (solves Bug 4)
  let courseProgress = {};
  function loadProgress() {
    try {
      courseProgress = JSON.parse(localStorage.getItem('alberto_lms_progress') || '{}');
    } catch (e) {
      courseProgress = {};
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem('alberto_lms_progress', JSON.stringify(courseProgress));
    } catch (e) {
      console.warn('Impossibile salvare i progressi:', e);
    }
  }

  function getCourseProgress(courseId) {
    if (!courseProgress[courseId]) {
      courseProgress[courseId] = {
        unlockedSteps: [0],
        completedSteps: [],
        lastStepIndex: 0
      };
    }
    const p = courseProgress[courseId];
    if (!Array.isArray(p.unlockedSteps) || p.unlockedSteps.length === 0) p.unlockedSteps = [0];
    if (!Array.isArray(p.completedSteps)) p.completedSteps = [];
    return p;
  }

  function saveCourses() {
    try {
      localStorage.setItem('alberto_lms_courses', JSON.stringify(courses));
    } catch (e) {
      console.warn('Impossibile salvare i corsi:', e);
    }
  }

  // Escape helper
  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Toast / Dialog wrapper for seamless fallback
  function showToast(msg, type = 'success') {
    if (window.ui && window.ui.toast) {
      window.ui.toast(msg, type);
    } else {
      alert(msg);
    }
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    renderCourseSelector();
    loadCourse(0);
  });

  // Render Course Selector in Toolbar
  function renderCourseSelector() {
    const select = document.getElementById('lmsCourseSelect');
    if (!select) return;
    select.innerHTML = '';
    courses.forEach((c, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = `${c.badge || 'Modulo'}: ${c.title}`;
      select.appendChild(opt);
    });
    select.value = activeCourseIndex;
  }

  // Switch Mode (Player vs Editor)
  window.setLmsMode = function (mode) {
    currentMode = mode;
    const btnPlayer = document.getElementById('btnModePlayer');
    const btnEditor = document.getElementById('btnModeEditor');
    if (btnPlayer) btnPlayer.setAttribute('aria-selected', String(mode === 'player'));
    if (btnEditor) btnEditor.setAttribute('aria-selected', String(mode === 'editor'));

    const playerArea = document.getElementById('lmsPlayerView');
    const editorArea = document.getElementById('lmsEditorView');

    if (mode === 'player') {
      if (playerArea) playerArea.hidden = false;
      if (editorArea) editorArea.hidden = true;
      renderPlayerUI();
    } else {
      if (playerArea) playerArea.hidden = true;
      if (editorArea) editorArea.hidden = false;
      renderEditorUI();
    }
  };

  // Switch Course
  window.switchCourse = function (index) {
    activeCourseIndex = parseInt(index, 10);
    if (isNaN(activeCourseIndex) || activeCourseIndex < 0 || activeCourseIndex >= courses.length) {
      activeCourseIndex = 0;
    }
    const course = courses[activeCourseIndex];
    const prog = getCourseProgress(course.id);
    currentStepIndex = Math.min(prog.lastStepIndex || 0, course.steps.length - 1);

    if (currentMode === 'player') {
      renderPlayerUI();
    } else {
      renderEditorUI();
    }
  };

  function loadCourse(index) {
    activeCourseIndex = index;
    const course = courses[activeCourseIndex];
    if (course) {
      const prog = getCourseProgress(course.id);
      currentStepIndex = Math.min(prog.lastStepIndex || 0, course.steps.length - 1);
    } else {
      currentStepIndex = 0;
    }
    renderPlayerUI();
  }

  // Toggle Syllabus on mobile
  window.toggleSyllabusMobile = function () {
    const col = document.getElementById('lmsSyllabusCol');
    const toggleBtn = document.getElementById('syllabusToggle');
    if (!col) return;
    const isOpen = col.classList.toggle('is-open');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', String(isOpen));
  };

  // =========================================================
  // 1. PLAYER VIEW
  // =========================================================
  function renderPlayerUI() {
    const course = courses[activeCourseIndex];
    if (!course || !course.steps || course.steps.length === 0) return;

    // Boundary check (solves Bug 3)
    currentStepIndex = Math.max(0, Math.min(currentStepIndex, course.steps.length - 1));

    const prog = getCourseProgress(course.id);
    prog.lastStepIndex = currentStepIndex;
    saveProgress();

    const unlocked = new Set(prog.unlockedSteps);
    const completed = new Set(prog.completedSteps);

    // Update Header Info
    const badgeEl = document.getElementById('lmsCourseBadge');
    const titleHeader = document.getElementById('lmsCourseTitleHeader');
    const catHeader = document.getElementById('lmsCourseCatHeader');

    if (badgeEl) badgeEl.textContent = course.badge || 'Modulo Didattico';
    if (titleHeader) titleHeader.textContent = course.title;
    if (catHeader) catHeader.textContent = course.category || 'Microlearning didattico';

    // Calculate real progress percentage (Bug 4 fix)
    const totalSteps = course.steps.length;
    const progressPercent = totalSteps > 0 ? Math.min(100, Math.round((completed.size / totalSteps) * 100)) : 0;
    const progressFill = document.getElementById('lmsProgressFill');
    const progressText = document.getElementById('lmsProgressText');

    if (progressFill) progressFill.style.width = progressPercent + '%';
    if (progressText) progressText.textContent = progressPercent + '%';

    // Render Syllabus Items with accessible buttons
    const navList = document.getElementById('lmsNavList');
    if (navList) {
      navList.innerHTML = '';
      course.steps.forEach((step, idx) => {
        const isUnlocked = unlocked.has(idx);
        const isDone = completed.has(idx);
        const isActive = (idx === currentStepIndex);

        const li = document.createElement('li');

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `syllabus-item ${isActive ? 'is-active' : ''} ${isDone ? 'is-done' : ''} ${!isUnlocked ? 'is-locked' : ''}`;
        btn.setAttribute('aria-current', isActive ? 'step' : 'false');
        if (!isUnlocked) btn.setAttribute('aria-disabled', 'true');

        let iconName = 'file-text';
        if (step.type === 'video') iconName = 'video';
        else if (step.type === 'game') iconName = 'target';
        else if (step.type === 'quiz') iconName = 'help';
        else if (step.type === 'completion') iconName = 'award';

        let stateIcon = '';
        if (!isUnlocked) {
          stateIcon = `<span class="syllabus-state" title="Modulo blocc"><svg class="icon" aria-hidden="true"><use href="#i-lock"></use></svg></span>`;
        } else if (isDone) {
          stateIcon = `<span class="syllabus-state" style="color:var(--accent);" title="Completato"><svg class="icon" aria-hidden="true"><use href="#i-check"></use></svg></span>`;
        }

        btn.innerHTML = `
          <span class="step-icon">
            <svg class="icon" aria-hidden="true"><use href="#i-${iconName}"></use></svg>
          </span>
          <span class="syllabus-item-title">${escapeHtml(step.title)}</span>
          ${stateIcon}
        `;

        btn.onclick = () => {
          if (isUnlocked) {
            currentStepIndex = idx;
            // Close mobile syllabus if open
            const col = document.getElementById('lmsSyllabusCol');
            if (col && col.classList.contains('is-open')) window.toggleSyllabusMobile();
            renderPlayerUI();
          } else {
            showToast('Questo modulo è bloccato. Completa l\'attività precedente per sbloccarlo.', 'info');
          }
        };

        li.appendChild(btn);
        navList.appendChild(li);
      });
    }

    // Render Active Step Content
    const step = course.steps[currentStepIndex];
    const contentArea = document.getElementById('lmsStepContent');
    if (!contentArea || !step) return;

    // Add entering animation
    contentArea.classList.remove('is-entering');
    void contentArea.offsetWidth;
    contentArea.classList.add('is-entering');

    let stepHTML = `
      <span class="step-badge">${escapeHtml(step.badge || 'Modulo Didattico')}</span>
      <h3 class="step-title">${escapeHtml(step.title)}</h3>
    `;

    const isStepAlreadyDone = completed.has(currentStepIndex);

    // 1. VIDEO STEP
    if (step.type === 'video') {
      const embedUrl = formatVideoEmbed(step.videoUrl);

      if (embedUrl) {
        stepHTML += `
          <div class="video-frame" style="margin-bottom: 20px;">
            <iframe src="${embedUrl}" title="${escapeHtml(step.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="content-panel">${step.text || ''}</div>
        `;
      } else {
        stepHTML += `
          <button type="button" class="video-mockup" onclick="simulateVideoPlay(this)" aria-label="Riproduci simulazione video">
            <div class="video-play"><svg class="icon" aria-hidden="true"><use href="#i-play"></use></svg></div>
            <div class="video-mockup-title">${escapeHtml(step.videoTitle || 'Pillola Formativa Video')}</div>
            <div class="video-mockup-meta">Durata stimata: ${escapeHtml(step.videoDuration || '02:00')} · Progettazione didattica Alberto Bedeschi</div>
            <div class="video-bar">
              <span>HD 1080p · Sottotitoli IT [WCAG]</span>
              <span>Durata: ${escapeHtml(step.videoDuration || '02:00')}</span>
            </div>
          </button>
          <p class="video-hint">💡 <em>Per mostrare un tuo video reale, incolla il link YouTube o Vimeo nella scheda "Vista Gestore".</em></p>
          <div class="content-panel">${step.text || ''}</div>
        `;
      }

      if (isStepAlreadyDone) {
        stepHTML += `
          <div class="unlock-banner ok">
            <svg class="icon" aria-hidden="true"><use href="#i-check-circle"></use></svg>
            <div><strong>Modulo completato!</strong> Hai già confermato la visione di questa pillola. Puoi procedere al modulo successivo.</div>
          </div>
        `;
      } else {
        stepHTML += `
          <div class="unlock-banner">
            <svg class="icon" aria-hidden="true"><use href="#i-video"></use></svg>
            <div>Clicca sul pulsante in basso per confermare la visione della pillola e <strong>sbloccare il modulo successivo</strong>.</div>
          </div>
        `;
      }
    }
    // 2. TEXT STEP
    else if (step.type === 'text') {
      stepHTML += `<div class="content-panel">${step.text || ''}</div>`;
      if (isStepAlreadyDone) {
        stepHTML += `
          <div class="unlock-banner ok">
            <svg class="icon" aria-hidden="true"><use href="#i-check-circle"></use></svg>
            <div><strong>Modulo completato!</strong> Hai già letto e assimilato questo approfondimento concettuale.</div>
          </div>
        `;
      } else {
        stepHTML += `
          <div class="unlock-banner">
            <svg class="icon" aria-hidden="true"><use href="#i-file-text"></use></svg>
            <div>Al termine della lettura concettuale, clicca in basso per <strong>sbloccare lo step successivo</strong>.</div>
          </div>
        `;
      }
    }
    // 3. GAME STEP (Interactive Scenario)
    else if (step.type === 'game') {
      const opts = step.options || [];
      stepHTML += `
        <div class="activity-box">
          <div class="activity-meta">
            <span>Dilemma Situazionale</span>
            <span>Scenario a Bivi</span>
          </div>
          <div class="activity-prompt">${step.scenario || ''}</div>
          <div class="option-list">
            ${opts.map((opt, i) => {
              const letter = String.fromCharCode(65 + i);
              const isCorrectClass = (isStepAlreadyDone && opt.correct) ? 'is-correct' : '';
              return `
                <button type="button" class="option-btn ${isCorrectClass}" id="game_btn_${i}" onclick="checkGameOption(${i})">
                  <span class="option-key">${letter}</span>
                  <span style="flex:1;">${escapeHtml(opt.text)}</span>
                </button>
              `;
            }).join('')}
          </div>
          <div class="feedback-box" id="gameFeedback" style="display:${isStepAlreadyDone ? 'block' : 'none'};" class="${isStepAlreadyDone ? 'feedback-box ok' : 'feedback-box'}">
            ${isStepAlreadyDone ? '🎉 <strong>Attività già superata!</strong> Il passaggio successivo è sbloccato.' : ''}
          </div>
        </div>
        <div class="unlock-banner ${isStepAlreadyDone ? 'ok' : ''}" id="gameUnlockBanner">
          <svg class="icon" aria-hidden="true"><use href="#i-${isStepAlreadyDone ? 'check-circle' : 'lock'}"></use></svg>
          <div>
            ${isStepAlreadyDone
              ? '<strong>Attività superata!</strong> Il modulo successivo è sbloccato. Puoi ripetere la scelta o continuare.'
              : '<strong>Attività vincolata:</strong> Seleziona l\'opzione corretta per superare lo scenario e <strong>sbloccare il passaggio successivo</strong>.'}
          </div>
        </div>
      `;
    }
    // 4. QUIZ STEP (Assessment)
    else if (step.type === 'quiz') {
      const opts = step.options || [];
      stepHTML += `
        <div class="activity-box">
          <div class="activity-meta">
            <span>Valutazione Formativa</span>
            <span>Verifica dell'Apprendimento</span>
          </div>
          <div class="activity-prompt">Domanda di verifica: <strong>${escapeHtml(step.question || '')}</strong></div>
          <div class="option-list">
            ${opts.map((opt, i) => {
              const letter = String.fromCharCode(65 + i);
              const isCorrectClass = (isStepAlreadyDone && opt.correct) ? 'is-correct' : '';
              return `
                <button type="button" class="option-btn ${isCorrectClass}" id="quiz_btn_${i}" onclick="checkQuizOption(${i}, this)">
                  <span class="option-key">${letter}</span>
                  <span style="flex:1;">${escapeHtml(opt.text)}</span>
                </button>
              `;
            }).join('')}
          </div>
          <div class="feedback-box" id="quizFeedback" style="display:${isStepAlreadyDone ? 'block' : 'none'};" class="${isStepAlreadyDone ? 'feedback-box ok' : 'feedback-box'}">
            ${isStepAlreadyDone ? '✅ <strong>Quiz già superato!</strong> Puoi accedere alla schermata di completamento.' : ''}
          </div>
        </div>
        <div class="unlock-banner ${isStepAlreadyDone ? 'ok' : ''}" id="quizUnlockBanner">
          <svg class="icon" aria-hidden="true"><use href="#i-${isStepAlreadyDone ? 'check-circle' : 'lock'}"></use></svg>
          <div>
            ${isStepAlreadyDone
              ? '<strong>Valutazione superata con successo!</strong> Clicca sul pulsante in basso per procedere.'
              : '<strong>Verifica formativa:</strong> Rispondi correttamente al quesito per sbloccare la certificazione e la scheda finale.'}
          </div>
        </div>
      `;
    }
    // 5. COMPLETION STEP
    else if (step.type === 'completion') {
      // Mark completion step as done automatically
      if (!completed.has(currentStepIndex)) {
        completed.add(currentStepIndex);
        prog.completedSteps = Array.from(completed);
        saveProgress();
      }

      stepHTML += `
        <div class="completion">
          <div class="completion-trophy">
            <svg class="icon" aria-hidden="true"><use href="#i-award"></use></svg>
          </div>
          <span class="badge badge-green">Percorso Concluso con Successo</span>
          <h3>Tutti i moduli sono stati completati!</h3>
          <p>${escapeHtml(step.text || 'Congratulazioni per aver completato con successo l\'intero percorso di microlearning.')}</p>

          <div class="completion-actions">
            <div class="completion-card">
              <h4>
                <svg class="icon" aria-hidden="true" style="color:var(--accent);"><use href="#i-file-text"></use></svg>
                Dispensa Didattica
              </h4>
              <p>Mappa concettuale riassuntiva, checklist e sintesi metodologica pronte per la stampa.</p>
              <a href="dispensa_didattica_riassuntiva.html" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
                Apri la Dispensa Finale <svg class="icon" aria-hidden="true"><use href="#i-external"></use></svg>
              </a>
            </div>

            <div class="completion-card">
              <h4>
                <svg class="icon" aria-hidden="true" style="color:var(--terra);"><use href="#i-award"></use></svg>
                Attestato Formativo
              </h4>
              <p>Visualizza e stampa il certificato nominativo di partecipazione generato per questa pillola.</p>
              <button type="button" class="btn btn-terra btn-sm" onclick="openCertModal()">
                Visualizza Attestato <svg class="icon" aria-hidden="true"><use href="#i-printer"></use></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    contentArea.innerHTML = stepHTML;

    // Step Counter and Footer Controls
    const stepNumEl = document.getElementById('currentStepNum');
    const totalNumEl = document.getElementById('totalStepsNum');
    if (stepNumEl) stepNumEl.textContent = currentStepIndex + 1;
    if (totalNumEl) totalNumEl.textContent = totalSteps;

    const btnPrev = document.getElementById('btnPrev');
    if (btnPrev) btnPrev.disabled = (currentStepIndex === 0);

    const btnNext = document.getElementById('btnNext');
    if (btnNext) {
      const isLastStep = (currentStepIndex === totalSteps - 1);
      const isGameOrQuiz = (step.type === 'game' || step.type === 'quiz');
      const isNextUnlocked = unlocked.has(currentStepIndex + 1);

      if (isLastStep) {
        btnNext.innerHTML = `<svg class="icon" aria-hidden="true"><use href="#i-refresh"></use></svg>Ricomincia Percorso`;
        btnNext.disabled = false;
        btnNext.className = 'btn btn-secondary btn-sm';
        btnNext.onclick = handleRestartCourse;
      } else if (isGameOrQuiz && !isStepAlreadyDone && !isNextUnlocked) {
        btnNext.innerHTML = `<svg class="icon" aria-hidden="true"><use href="#i-lock"></use></svg>Completa l'attività per proseguire`;
        btnNext.disabled = true;
        btnNext.className = 'btn btn-primary btn-sm';
        btnNext.onclick = nextStep;
      } else {
        btnNext.innerHTML = `Continua allo Step Successivo <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"></use></svg>`;
        btnNext.disabled = false;
        btnNext.className = 'btn btn-primary btn-sm';
        btnNext.onclick = nextStep;
      }
    }
  }

  // Next Step Action
  window.nextStep = function () {
    const course = courses[activeCourseIndex];
    if (!course) return;

    const prog = getCourseProgress(course.id);
    const unlocked = new Set(prog.unlockedSteps);
    const completed = new Set(prog.completedSteps);

    // Mark current step as completed
    completed.add(currentStepIndex);
    prog.completedSteps = Array.from(completed);

    if (currentStepIndex < course.steps.length - 1) {
      currentStepIndex++;
      unlocked.add(currentStepIndex);
      prog.unlockedSteps = Array.from(unlocked);
      prog.lastStepIndex = currentStepIndex;
      saveProgress();
      renderPlayerUI();
    } else {
      currentStepIndex = 0;
      prog.lastStepIndex = 0;
      saveProgress();
      renderPlayerUI();
    }
  };

  // Previous Step Action
  window.prevStep = function () {
    if (currentStepIndex > 0) {
      currentStepIndex--;
      const course = courses[activeCourseIndex];
      const prog = getCourseProgress(course.id);
      prog.lastStepIndex = currentStepIndex;
      saveProgress();
      renderPlayerUI();
    }
  };

  // Restart Course from Beginning (solves Bug: real reset)
  async function handleRestartCourse() {
    const ok = window.ui ? await window.ui.confirm({
      title: 'Ricomincia il Percorso',
      message: 'Vuoi ricominciare il percorso formativo da capo? I progressi di questa pillola verranno azzerati per consentirti di ripetere le attività.',
      confirmText: 'Ricomincia',
      danger: false
    }) : confirm('Vuoi ricominciare il percorso formativo da capo?');

    if (!ok) return;

    const course = courses[activeCourseIndex];
    courseProgress[course.id] = {
      unlockedSteps: [0],
      completedSteps: [],
      lastStepIndex: 0
    };
    currentStepIndex = 0;
    saveProgress();
    renderPlayerUI();
    showToast('Percorso riavviato. Buon apprendimento!', 'info');
  }

  // Video Play Simulation
  window.simulateVideoPlay = function (btn) {
    showToast('Simulazione avviata! Incolla il link del tuo video YouTube o Vimeo nel gestore per vederlo riprodotto direttamente qui.', 'info');
  };

  // Check Game Option
  window.checkGameOption = function (optIdx) {
    const course = courses[activeCourseIndex];
    const step = course.steps[currentStepIndex];
    const opt = step.options[optIdx];
    const fb = document.getElementById('gameFeedback');
    const banner = document.getElementById('gameUnlockBanner');
    const btnNext = document.getElementById('btnNext');
    if (!fb) return;

    // Reset styles on option buttons
    step.options.forEach((_, i) => {
      const b = document.getElementById(`game_btn_${i}`);
      if (b) b.classList.remove('is-correct', 'is-wrong');
    });

    const clickedBtn = document.getElementById(`game_btn_${optIdx}`);

    fb.style.display = 'block';
    if (opt.correct) {
      if (clickedBtn) clickedBtn.classList.add('is-correct');
      fb.className = 'feedback-box ok';
      fb.innerHTML = opt.feedback;

      // Unlock next step and complete this one
      const prog = getCourseProgress(course.id);
      const unlocked = new Set(prog.unlockedSteps);
      const completed = new Set(prog.completedSteps);

      unlocked.add(currentStepIndex + 1);
      completed.add(currentStepIndex);

      prog.unlockedSteps = Array.from(unlocked);
      prog.completedSteps = Array.from(completed);
      saveProgress();

      if (banner) {
        banner.className = 'unlock-banner ok';
        banner.innerHTML = `
          <svg class="icon" aria-hidden="true"><use href="#i-check-circle"></use></svg>
          <div><strong>Attività superata con successo!</strong> Il modulo successivo è stato sbloccato. Clicca sul pulsante qui sotto per proseguire.</div>
        `;
      }

      if (btnNext) {
        btnNext.innerHTML = `Continua allo Step Successivo <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"></use></svg>`;
        btnNext.disabled = false;
        btnNext.className = 'btn btn-primary btn-sm';
      }

      // Update progress bar & syllabus immediately
      const totalSteps = course.steps.length;
      const progressPercent = Math.min(100, Math.round((completed.size / totalSteps) * 100));
      const progressFill = document.getElementById('lmsProgressFill');
      const progressText = document.getElementById('lmsProgressText');
      if (progressFill) progressFill.style.width = progressPercent + '%';
      if (progressText) progressText.textContent = progressPercent + '%';

      // Re-render syllabus icons
      const navList = document.getElementById('lmsNavList');
      if (navList) {
        const items = navList.querySelectorAll('.syllabus-item');
        if (items[currentStepIndex]) items[currentStepIndex].classList.add('is-done');
        if (items[currentStepIndex + 1]) items[currentStepIndex + 1].classList.remove('is-locked');
      }
    } else {
      if (clickedBtn) clickedBtn.classList.add('is-wrong');
      fb.className = 'feedback-box ko';
      fb.innerHTML = opt.feedback;
    }
  };

  // Check Quiz Option
  window.checkQuizOption = function (optIdx, elem) {
    const course = courses[activeCourseIndex];
    const step = course.steps[currentStepIndex];
    const opt = step.options[optIdx];
    const fb = document.getElementById('quizFeedback');
    const banner = document.getElementById('quizUnlockBanner');
    const btnNext = document.getElementById('btnNext');
    if (!fb) return;

    step.options.forEach((_, i) => {
      const b = document.getElementById(`quiz_btn_${i}`);
      if (b) b.classList.remove('is-correct', 'is-wrong');
    });

    const clickedBtn = document.getElementById(`quiz_btn_${optIdx}`);
    fb.style.display = 'block';

    if (opt.correct) {
      if (clickedBtn) clickedBtn.classList.add('is-correct');
      fb.className = 'feedback-box ok';
      fb.innerHTML = opt.feedback;

      // Unlock completion step
      const prog = getCourseProgress(course.id);
      const unlocked = new Set(prog.unlockedSteps);
      const completed = new Set(prog.completedSteps);

      unlocked.add(currentStepIndex + 1);
      completed.add(currentStepIndex);

      prog.unlockedSteps = Array.from(unlocked);
      prog.completedSteps = Array.from(completed);
      saveProgress();

      if (banner) {
        banner.className = 'unlock-banner ok';
        banner.innerHTML = `
          <svg class="icon" aria-hidden="true"><use href="#i-check-circle"></use></svg>
          <div><strong>Valutazione superata con successo!</strong> Clicca in basso per accedere alla scheda di completamento e all'attestato finale.</div>
        `;
      }

      if (btnNext) {
        btnNext.innerHTML = `Accedi alla Scheda Finale <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"></use></svg>`;
        btnNext.disabled = false;
        btnNext.className = 'btn btn-primary btn-sm';
      }

      const totalSteps = course.steps.length;
      const progressPercent = Math.min(100, Math.round((completed.size / totalSteps) * 100));
      const progressFill = document.getElementById('lmsProgressFill');
      const progressText = document.getElementById('lmsProgressText');
      if (progressFill) progressFill.style.width = progressPercent + '%';
      if (progressText) progressText.textContent = progressPercent + '%';

      const navList = document.getElementById('lmsNavList');
      if (navList) {
        const items = navList.querySelectorAll('.syllabus-item');
        if (items[currentStepIndex]) items[currentStepIndex].classList.add('is-done');
        if (items[currentStepIndex + 1]) items[currentStepIndex + 1].classList.remove('is-locked');
      }
    } else {
      if (clickedBtn) clickedBtn.classList.add('is-wrong');
      fb.className = 'feedback-box ko';
      fb.innerHTML = opt.feedback;
    }
  };

  // =========================================================
  // 2. AUTHORING TOOL / GESTORE EDITOR VIEW
  // =========================================================
  function renderEditorUI() {
    const course = courses[activeCourseIndex];
    if (!course) return;

    const titleInput = document.getElementById('editCourseTitle');
    const badgeInput = document.getElementById('editCourseBadge');
    const catInput = document.getElementById('editCourseCategory');

    if (titleInput) titleInput.value = course.title || '';
    if (badgeInput) badgeInput.value = course.badge || '';
    if (catInput) catInput.value = course.category || '';

    const stepsList = document.getElementById('editorStepsList');
    if (!stepsList) return;
    stepsList.innerHTML = '';

    course.steps.forEach((step, idx) => {
      const li = document.createElement('li');
      li.className = 'step-row';

      const isFirst = (idx === 0);
      const isLast = (idx === course.steps.length - 1);
      const videoTag = (step.type === 'video' && step.videoUrl) ? '<span class="tag-video">🎬 Video collegato</span>' : '';

      li.innerHTML = `
        <span class="step-row-num">${idx + 1}.</span>
        <div class="step-row-main">
          <div class="step-row-title">${escapeHtml(step.title)}</div>
          <div class="step-row-type">
            <span>[${step.type.toUpperCase()}] ${escapeHtml(step.badge || '')}</span>
            ${videoTag}
          </div>
        </div>
        <div class="step-row-actions">
          <button type="button" class="btn btn-secondary btn-xs" onclick="moveStep(${idx}, -1)" ${isFirst ? 'disabled' : ''} title="Sposta in alto">
            <svg class="icon" aria-hidden="true"><use href="#i-arrow-up"></use></svg>
          </button>
          <button type="button" class="btn btn-secondary btn-xs" onclick="moveStep(${idx}, 1)" ${isLast ? 'disabled' : ''} title="Sposta in basso">
            <svg class="icon" aria-hidden="true"><use href="#i-arrow-down"></use></svg>
          </button>
          <button type="button" class="btn btn-secondary btn-xs" onclick="duplicateStep(${idx})" title="Duplica questo step">
            <svg class="icon" aria-hidden="true"><use href="#i-copy"></use></svg>
          </button>
          <button type="button" class="btn btn-secondary btn-xs" onclick="openStepModal(${idx})" title="Modifica contenuti">
            <svg class="icon" aria-hidden="true"><use href="#i-edit"></use></svg>
          </button>
          <button type="button" class="btn btn-danger-ghost btn-xs" onclick="deleteStep(${idx})" title="Elimina step">
            <svg class="icon" aria-hidden="true"><use href="#i-trash"></use></svg>
          </button>
        </div>
      `;

      stepsList.appendChild(li);
    });
  }

  // Save Course Metadata
  window.saveCourseMeta = function () {
    const course = courses[activeCourseIndex];
    if (!course) return;

    course.title = document.getElementById('editCourseTitle').value.trim() || 'Senza titolo';
    course.badge = document.getElementById('editCourseBadge').value.trim() || 'Modulo';
    course.category = document.getElementById('editCourseCategory').value.trim() || 'Microlearning';

    saveCourses();
    renderCourseSelector();
    showToast('Intestazione della pillola salvata con successo!', 'success');
  };

  // Reorder Step (Up / Down)
  window.moveStep = function (idx, direction) {
    const course = courses[activeCourseIndex];
    const newIdx = idx + direction;
    if (newIdx < 0 || newIdx >= course.steps.length) return;

    const temp = course.steps[idx];
    course.steps[idx] = course.steps[newIdx];
    course.steps[newIdx] = temp;

    // Adjust active index
    if (currentStepIndex === idx) currentStepIndex = newIdx;
    else if (currentStepIndex === newIdx) currentStepIndex = idx;

    saveCourses();
    renderEditorUI();
    showToast('Ordine degli step aggiornato!', 'info');
  };

  // Duplicate Step
  window.duplicateStep = function (idx) {
    const course = courses[activeCourseIndex];
    const original = course.steps[idx];
    const copy = JSON.parse(JSON.stringify(original));
    copy.title = `${copy.title} (Copia)`;

    course.steps.splice(idx + 1, 0, copy);
    saveCourses();
    renderEditorUI();
    showToast('Step duplicato con successo!', 'success');
  };

  // Delete Step with Safety Bounds Check (solves Bug 3)
  window.deleteStep = async function (idx) {
    const course = courses[activeCourseIndex];
    if (course.steps.length <= 2) {
      showToast('Un percorso formativo deve contenere almeno 2 step.', 'error');
      return;
    }

    const stepName = course.steps[idx].title;
    const ok = window.ui ? await window.ui.confirm({
      title: 'Elimina Step Didattico',
      message: `Vuoi eliminare definitivamente lo step "${stepName}"?`,
      confirmText: 'Elimina',
      danger: true
    }) : confirm(`Vuoi eliminare lo step "${stepName}"?`);

    if (!ok) return;

    course.steps.splice(idx, 1);
    currentStepIndex = Math.max(0, Math.min(currentStepIndex, course.steps.length - 1));

    saveCourses();
    renderEditorUI();
    showToast(`Step "${stepName}" rimosso.`, 'info');
  };

  // Add New Step
  window.addNewStepDirectly = function (type) {
    const course = courses[activeCourseIndex];
    const stepNum = course.steps.length + 1;

    let newStep = {
      type: type,
      title: `${stepNum}. Nuovo ${type.toUpperCase()}`,
      badge: `Fase ${stepNum}`,
      text: 'Inserisci qui la spiegazione didattica del contenuto.'
    };

    if (type === 'video') {
      newStep.videoTitle = 'Pillola Formativa Video';
      newStep.videoDuration = '02:00';
      newStep.videoUrl = '';
    } else if (type === 'game') {
      newStep.scenario = '🎯 <strong>Scenario di prova:</strong> Come risolveresti questa situazione applicativa?';
      newStep.options = [
        { text: 'Opzione A (Corretta)', correct: true, feedback: '🎉 Ottimo! Decisione pedagogicamente corretta.' },
        { text: 'Opzione B (Errata)', correct: false, feedback: '❌ Non appropriato per questo scenario. Riprova!' }
      ];
    } else if (type === 'quiz') {
      newStep.question = 'Qual è il punto chiave di questa pillola didattica?';
      newStep.options = [
        { text: 'Risposta Esatta', correct: true, feedback: '✅ Bravissimo, risposta esatta!' },
        { text: 'Risposta Errata', correct: false, feedback: '❌ Non corretto, rileggi il testo didattico.' }
      ];
    }

    // Insert before completion step if present
    const lastIdx = course.steps.length - 1;
    if (course.steps.length > 0 && course.steps[lastIdx].type === 'completion') {
      course.steps.splice(lastIdx, 0, newStep);
    } else {
      course.steps.push(newStep);
    }

    saveCourses();
    renderEditorUI();
    showToast(`Nuovo step [${type.toUpperCase()}] aggiunto.`, 'success');
  };

  // Create New Course
  window.handleCreateNewCourse = async function () {
    const title = window.ui ? await window.ui.prompt({
      title: 'Nuova Pillola Formativa',
      label: 'Titolo del Corso / Microlearning:',
      placeholder: 'Es. Strategie di Prompting Didattico',
      confirmText: 'Crea Pillola'
    }) : prompt('Titolo della nuova pillola:');

    if (!title || !title.trim()) return;

    const newCourse = {
      id: 'corso-' + Date.now(),
      title: title.trim(),
      category: 'Microlearning Didattico',
      badge: `Modulo ${courses.length + 1} · Microlearning`,
      steps: [
        {
          type: 'video',
          title: '1. Video Introduttivo',
          badge: 'Fase 1 · Ingaggio',
          videoTitle: 'Introduzione agli Obiettivi',
          videoDuration: '02:00',
          videoUrl: '',
          text: 'Introduzione agli obiettivi formativi e al problema di partenza.'
        },
        {
          type: 'text',
          title: '2. Quadro Teorico',
          badge: 'Fase 2 · Concetti Chiave',
          text: '<p>Inserisci qui la spiegazione teorica ed evidenzia i concetti fondamentali.</p>'
        },
        {
          type: 'game',
          title: '3. Gioco Didattico a Bivi',
          badge: 'Fase 3 · Scenario Applicativo',
          scenario: '🎯 <strong>Scenario applicativo:</strong> Come risolveresti questo dilemma?',
          options: [
            { text: 'Scelta Ragionata (Corretta)', correct: true, feedback: '🎉 Corretto!' },
            { text: 'Scelta Istintiva (Errata)', correct: false, feedback: '❌ Riprova con metodo.' }
          ]
        },
        {
          type: 'quiz',
          title: '4. Quiz di Valutazione',
          badge: 'Fase 4 · Verifica',
          question: 'Qual è il punto chiave di questa pillola didattica?',
          options: [
            { text: 'Risposta Esatta', correct: true, feedback: '✅ Esatto!' },
            { text: 'Risposta Errata', correct: false, feedback: '❌ Errato!' }
          ]
        },
        {
          type: 'completion',
          title: '5. Completamento & Attestato',
          badge: 'Fase 5 · Conclusione',
          text: 'Hai completato con successo questa pillola formativa!'
        }
      ]
    };

    courses.push(newCourse);
    saveCourses();
    renderCourseSelector();
    switchCourse(courses.length - 1);
    showToast(`Pillola "${title}" creata con successo!`, 'success');
  };

  // Reset to Defaults (solves Bug 2: deep clone + cleanup)
  window.handleResetCourses = async function () {
    const ok = window.ui ? await window.ui.confirm({
      title: 'Ripristina Corsi Predefiniti',
      message: 'Vuoi ripristinare i corsi originali? Tutte le pillole create e le modifiche salvate localmente verranno azzerate.',
      confirmText: 'Ripristina Tutto',
      danger: true
    }) : confirm('Vuoi ripristinare i corsi predefiniti?');

    if (!ok) return;

    localStorage.removeItem('alberto_lms_courses');
    localStorage.removeItem('alberto_lms_progress');
    courses = JSON.parse(JSON.stringify(defaultCourses));
    courseProgress = {};
    activeCourseIndex = 0;
    currentStepIndex = 0;

    renderCourseSelector();
    renderPlayerUI();
    renderEditorUI();
    showToast('Corsi e progressi ripristinati ai valori predefiniti.', 'success');
  };

  // Export JSON
  window.exportCoursesJSON = function () {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(courses, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', `pillole_lms_alberto_bedeschi_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    showToast('File JSON delle pillole esportato con successo!', 'success');
  };

  // Trigger file import
  window.triggerImportJSON = function () {
    const input = document.getElementById('lmsFileInput');
    if (input) input.click();
  };

  // Import JSON from file
  window.importCoursesFromFile = function (event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const parsed = JSON.parse(e.target.result);
        if (!Array.isArray(parsed) || parsed.length === 0 || !parsed[0].steps) {
          throw new Error('Formato non conforme.');
        }
        courses = parsed;
        saveCourses();
        activeCourseIndex = 0;
        currentStepIndex = 0;
        renderCourseSelector();
        renderPlayerUI();
        renderEditorUI();
        showToast(`Importate ${courses.length} pillole formative con successo!`, 'success');
      } catch (err) {
        showToast('File JSON non valido o struttura dei corsi non corretta.', 'error');
      }
      event.target.value = '';
    };
    reader.readAsText(file);
  };

  // =========================================================
  // 3. STEP MODAL EDITOR WITH LIVE PREVIEW & OPTIONS DYNAMICS
  // =========================================================
  window.openStepModal = function (idx) {
    currentEditingStepIndex = idx;
    const course = courses[activeCourseIndex];
    const step = course.steps[idx];

    const modal = document.getElementById('stepEditModal');
    const container = document.getElementById('stepEditFields');
    if (!modal || !container) return;

    modalTempOptions = step.options ? JSON.parse(JSON.stringify(step.options)) : [];

    let fieldsHTML = `
      <div class="form-group">
        <label class="form-label" for="m_title">Titolo dello Step:</label>
        <input type="text" class="form-input" id="m_title" value="${escapeHtml(step.title)}">
      </div>
      <div class="form-group">
        <label class="form-label" for="m_badge">Etichetta Fase / Badge:</label>
        <input type="text" class="form-input" id="m_badge" value="${escapeHtml(step.badge || '')}">
      </div>
    `;

    // VIDEO FIELDS + LIVE PREVIEW
    if (step.type === 'video') {
      fieldsHTML += `
        <div class="form-box">
          <label class="form-label" for="m_videoUrl">🎬 Link Video (YouTube o Vimeo):</label>
          <input type="text" class="form-input" id="m_videoUrl" placeholder="Es. https://youtu.be/... o https://vimeo.com/..." value="${escapeHtml(step.videoUrl || '')}" oninput="updateModalVideoPreview(this.value)">
          <span class="form-hint">💡 Su YouTube puoi usare anche video con visibilità <strong>"Non in elenco"</strong> per mantenerli riservati al tuo portfolio.</span>

          <div id="modalVideoPreview" class="video-preview"></div>

          <div class="form-row-2" style="margin-top: 14px;">
            <div>
              <label class="form-label" for="m_videoTitle">Titolo Video:</label>
              <input type="text" class="form-input" id="m_videoTitle" value="${escapeHtml(step.videoTitle || '')}">
            </div>
            <div>
              <label class="form-label" for="m_videoDuration">Durata Stimata:</label>
              <input type="text" class="form-input" id="m_videoDuration" value="${escapeHtml(step.videoDuration || '02:00')}">
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label" for="m_text">Testo Didattico di Accompagnamento:</label>
          <textarea class="form-input" id="m_text" style="min-height:90px;">${escapeHtml(step.text || '')}</textarea>
        </div>
      `;
    }
    // TEXT FIELDS
    else if (step.type === 'text') {
      fieldsHTML += `
        <div class="form-group">
          <label class="form-label" for="m_text">Contenuto Didattico (supporta tag HTML come &lt;p&gt;, &lt;strong&gt;, &lt;ul&gt;):</label>
          <textarea class="form-input" id="m_text" style="min-height:160px;">${escapeHtml(step.text || '')}</textarea>
        </div>
      `;
    }
    // GAME FIELDS
    else if (step.type === 'game') {
      fieldsHTML += `
        <div class="form-group">
          <label class="form-label" for="m_scenario">Scenario del Dilemma a Bivi:</label>
          <textarea class="form-input" id="m_scenario" style="min-height:80px;">${escapeHtml(step.scenario || '')}</textarea>
        </div>
        <div class="form-box">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <label class="form-label" style="margin:0;">Opzioni di Risposta (seleziona quella corretta):</label>
            <button type="button" class="btn btn-secondary btn-xs" onclick="addModalOption('game')">+ Aggiungi Opzione</button>
          </div>
          <div id="modalOptionsContainer">
            ${renderModalOptionsList('game')}
          </div>
        </div>
      `;
    }
    // QUIZ FIELDS
    else if (step.type === 'quiz') {
      fieldsHTML += `
        <div class="form-group">
          <label class="form-label" for="m_question">Domanda del Quiz:</label>
          <input type="text" class="form-input" id="m_question" value="${escapeHtml(step.question || '')}">
        </div>
        <div class="form-box">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <label class="form-label" style="margin:0;">Risposte del Quiz (seleziona quella esatta):</label>
            <button type="button" class="btn btn-secondary btn-xs" onclick="addModalOption('quiz')">+ Aggiungi Opzione</button>
          </div>
          <div id="modalOptionsContainer">
            ${renderModalOptionsList('quiz')}
          </div>
        </div>
      `;
    }
    // COMPLETION FIELDS
    else if (step.type === 'completion') {
      fieldsHTML += `
        <div class="form-group">
          <label class="form-label" for="m_text">Messaggio Finale di Completamento:</label>
          <textarea class="form-input" id="m_text" style="min-height:90px;">${escapeHtml(step.text || '')}</textarea>
        </div>
      `;
    }

    container.innerHTML = fieldsHTML;

    if (modal.showModal) {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }

    // Trigger preview if video URL exists
    if (step.type === 'video' && step.videoUrl) {
      updateModalVideoPreview(step.videoUrl);
    }
  };

  // Live video preview in modal
  window.updateModalVideoPreview = function (url) {
    const previewContainer = document.getElementById('modalVideoPreview');
    if (!previewContainer) return;
    const embed = formatVideoEmbed(url);
    if (embed) {
      previewContainer.innerHTML = `
        <div style="position:relative; aspect-ratio:16/9; max-height:200px; border-radius:8px; overflow:hidden; border:1px solid var(--border); margin-top:10px;">
          <iframe src="${embed}" style="width:100%; height:100%; border:0;" allowfullscreen></iframe>
        </div>
      `;
    } else {
      previewContainer.innerHTML = '';
    }
  };

  // Render options list for modal
  function renderModalOptionsList(type) {
    if (!modalTempOptions || modalTempOptions.length === 0) return '<p>Nessuna opzione inserita.</p>';
    return modalTempOptions.map((opt, i) => `
      <div class="option-edit">
        <div class="option-edit-head">
          <label>
            <input type="radio" name="m_correct_opt" onchange="setModalCorrectOption(${i})" ${opt.correct ? 'checked' : ''}>
            <span>Opzione ${i + 1} (${opt.correct ? 'Corretta' : 'Errata'})</span>
          </label>
          ${modalTempOptions.length > 2 ? `<button type="button" class="btn btn-danger-ghost btn-xs" onclick="removeModalOption(${i}, '${type}')">✕ Rimuovi</button>` : ''}
        </div>
        <input type="text" class="form-input" placeholder="Testo opzione" value="${escapeHtml(opt.text)}" oninput="modalTempOptions[${i}].text = this.value">
        <input type="text" class="form-input" placeholder="Feedback pedagogico per lo studente" value="${escapeHtml(opt.feedback || '')}" oninput="modalTempOptions[${i}].feedback = this.value">
      </div>
    `).join('');
  }

  window.setModalCorrectOption = function (idx) {
    modalTempOptions.forEach((opt, i) => {
      opt.correct = (i === idx);
    });
  };

  window.addModalOption = function (type) {
    modalTempOptions.push({
      text: `Nuova opzione ${modalTempOptions.length + 1}`,
      correct: false,
      feedback: 'Feedback formativo per questa opzione.'
    });
    const c = document.getElementById('modalOptionsContainer');
    if (c) c.innerHTML = renderModalOptionsList(type);
  };

  window.removeModalOption = function (idx, type) {
    if (modalTempOptions.length <= 2) return;
    const wasCorrect = modalTempOptions[idx].correct;
    modalTempOptions.splice(idx, 1);
    if (wasCorrect && modalTempOptions.length > 0) {
      modalTempOptions[0].correct = true;
    }
    const c = document.getElementById('modalOptionsContainer');
    if (c) c.innerHTML = renderModalOptionsList(type);
  };

  window.closeStepModal = function () {
    const modal = document.getElementById('stepEditModal');
    if (!modal) return;
    if (modal.close) modal.close();
    else modal.removeAttribute('open');
  };

  window.saveStepModal = function () {
    if (currentEditingStepIndex === null) return;
    const course = courses[activeCourseIndex];
    const step = course.steps[currentEditingStepIndex];

    const titleEl = document.getElementById('m_title');
    const badgeEl = document.getElementById('m_badge');
    if (titleEl) step.title = titleEl.value.trim() || step.title;
    if (badgeEl) step.badge = badgeEl.value.trim() || step.badge;

    if (step.type === 'video') {
      const urlEl = document.getElementById('m_videoUrl');
      const vTitleEl = document.getElementById('m_videoTitle');
      const vDurEl = document.getElementById('m_videoDuration');
      const textEl = document.getElementById('m_text');
      if (urlEl) step.videoUrl = urlEl.value.trim();
      if (vTitleEl) step.videoTitle = vTitleEl.value.trim();
      if (vDurEl) step.videoDuration = vDurEl.value.trim();
      if (textEl) step.text = textEl.value;
    } else if (step.type === 'text') {
      const textEl = document.getElementById('m_text');
      if (textEl) step.text = textEl.value;
    } else if (step.type === 'game') {
      const scenEl = document.getElementById('m_scenario');
      if (scenEl) step.scenario = scenEl.value;
      step.options = JSON.parse(JSON.stringify(modalTempOptions));
    } else if (step.type === 'quiz') {
      const qEl = document.getElementById('m_question');
      if (qEl) step.question = qEl.value;
      step.options = JSON.parse(JSON.stringify(modalTempOptions));
    } else if (step.type === 'completion') {
      const textEl = document.getElementById('m_text');
      if (textEl) step.text = textEl.value;
    }

    saveCourses();
    closeStepModal();
    renderEditorUI();
    showToast('Modifiche allo step salvate con successo!', 'success');
  };

  // =========================================================
  // 4. CERTIFICATE MODAL
  // =========================================================
  window.openCertModal = function () {
    const course = courses[activeCourseIndex];
    const modal = document.getElementById('certModal');
    const body = document.getElementById('certModalBody');
    if (!modal || !body) return;

    const today = new Date().toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });

    body.innerHTML = `
      <div style="text-align:center; padding:16px 12px; border:2px solid var(--accent); border-radius:12px; background:var(--surface-2);">
        <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--accent); font-weight:700; margin-bottom:8px;">
          Micro-Attestato di Completamento
        </div>
        <h3 style="font-family:var(--font-serif); font-size:1.45rem; color:var(--text); margin-bottom:12px;">
          ${escapeHtml(course.title)}
        </h3>
        <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.6; margin-bottom:14px;">
          Si certifica il completamento dell'intero percorso didattico asincrono a progressione vincolata, con esito positivo nelle prove di verifica formativa e situazionale.
        </p>
        <div style="font-size:0.82rem; color:var(--text-soft); border-top:1px dashed var(--border); padding-top:12px;">
          Rilasciato per: <strong>Discente del Portfolio</strong><br>
          Progettazione: <strong>Alberto Bedeschi</strong> · Reggio Emilia<br>
          Data di emissione: <strong>${today}</strong>
        </div>
      </div>
    `;

    if (modal.showModal) modal.showModal();
    else modal.setAttribute('open', '');
  };

  window.closeCertModal = function () {
    const modal = document.getElementById('certModal');
    if (!modal) return;
    if (modal.close) modal.close();
    else modal.removeAttribute('open');
  };

  window.printCertificate = function () {
    window.print();
  };

})();
