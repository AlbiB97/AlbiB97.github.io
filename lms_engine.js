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

  // Default Courses Database (Fallback & Template)
  const defaultCourses = [
    {
      "id": "corso-clark-mayer",
      "title": "Scienza dell'Apprendimento Digitale & Principi di Clark & Mayer",
      "category": "Instructional Design & E-Learning",
      "badge": "Modulo 1 · Mobile-First Microlearning",
      "badgeImage": "moduli-formativi/corso-clark-mayer/badge_certified_id.png",
      "infographicUrl": "moduli-formativi/corso-clark-mayer/scienza_apprendimento_digitale.png",
      "objectives": [
        {
          "bloom": "Comprendere",
          "text": "Distinguere l'architettura cognitiva della memoria (di lavoro vs a lungo termine) e prevenire l'essential overload."
        },
        {
          "bloom": "Applicare",
          "text": "Applicare il Principio di Segmentazione progettando unità di microlearning autonome a ritmo controllato dal discente."
        },
        {
          "bloom": "Valutare",
          "text": "Valutare l'efficacia di un corso e-learning tramite il Principio di Coerenza, eliminando elementi grafici e sonori estranei."
        }
      ],
      "steps": [
        {
          "type": "text",
          "title": "1. Obiettivi Formativi & Tassonomia di Bloom",
          "badge": "Fase Iniziale · Quadro delle Competenze",
          "text": "<p>Benvenuto nel modulo di <strong>Mobile-First Microlearning</strong> dedicato all'evidence-based instructional design (Clark & Mayer). Prima di iniziare la visione delle pillole video, ecco i traguardi didattici categorizzati secondo la <strong>Tassonomia di Bloom</strong>:</p><div class='objectives-list-step'><div class='objective-item'><span class='bloom-tag'>Comprendere</span><span>Distinguere l'architettura cognitiva della memoria (di lavoro vs a lungo termine) e prevenire il sovraccarico essenziale (<em>essential overload</em>).</span></div><div class='objective-item'><span class='bloom-tag'>Applicare</span><span>Applicare il Principio di Segmentazione progettando unità didattiche autonome (<em>chunking</em>) fruite a ritmo controllato dal discente.</span></div><div class='objective-item'><span class='bloom-tag'>Valutare</span><span>Valutare storyboards e materiali digitali applicando il Principio di Coerenza, eliminando grafica decorativa e stimoli estranei.</span></div></div><div class='callout-quote'>🎯 <strong>Architettura del percorso:</strong> Ogni argomento è strutturato in una sequenza rigorosa: video pillola verticale, approfondimento teorico, flashcard di active retrieval, quiz situazionale e riflessione metacognitiva.</div>"
        },
        {
          "type": "video",
          "title": "2. Video 1: Il Carico Cognitivo & La Memoria",
          "badge": "Pillola 1 · Mobile-First (9:16)",
          "videoTitle": "Architettura Cognitiva: Memoria di Lavoro vs Lungo Termine",
          "videoDuration": "00:45",
          "videoUrl": "moduli-formativi/corso-clark-mayer/video1_carico_cognitivo.mp4",
          "isVertical": true
        },
        {
          "type": "text",
          "title": "3. Quadro Didattico: Carico Cognitivo & Memoria",
          "badge": "Fase 1 · Approfondimento Concettuale",
          "text": "<p>L'architettura cognitiva dell'apprendimento (<strong>Clark & Mayer</strong>) individua due strutture mentali cardine per la formazione digitale:</p><ul><li><strong>Memoria di Lavoro:</strong> ha una capacità strettamente limitata (può gestire solo pochissimi elementi simultanei) ed è volatile ed effimera nel tempo.</li><li><strong>Memoria a Lungo Termine:</strong> è l'archivio permanente che immagazzina schemi mentali e competenze consolidate.</li></ul><div class='callout-quote'>⚠️ <strong>Essential Overload:</strong> Quando un corso digitale inonda la memoria di lavoro con un flusso ininterrotto di nozioni prima che abbia avuto il tempo di organizzarle, si verifica un blocco cognitivo immediato che annulla la ritenzione.</div>"
        },
        {
          "type": "flashcard",
          "title": "4. Flashcard: Memoria di Lavoro vs Lungo Termine",
          "badge": "Fase 1 · Consolidamento Rapido",
          "frontText": "🧠 Perché un corso e-learning denso di nozioni continue provoca 'Essential Overload'?",
          "backText": "Perché la memoria di lavoro ha una capacità ridotta ed è effimera. Senza pause e attivatori per trasferire i dati nella memoria a lungo termine, le informazioni non vengono assimilate e decadono rapidamente.",
          "tip": "Clicca sulla card (o premi Spazio) per ruotarla e verificare la tua comprensione."
        },
        {
          "type": "quiz",
          "title": "5. Quiz di Verifica: Architettura Cognitiva",
          "badge": "Fase 1 · Verifica Formativa",
          "question": "Secondo Clark e Mayer, quale strategia didattica previene il sovraccarico essenziale (essential overload)?",
          "options": [
            {
              "text": "Condensare tutti i concetti in un'unica lezione intensiva da 30 minuti senza pause.",
              "correct": false,
              "feedback": "❌ Non corretto: supera la capacità della memoria di lavoro, provocando affaticamento e distrazione."
            },
            {
              "text": "Strutturare il contenuto in nuclei graduali, permettendo alla memoria di lavoro di elaborare e integrare prima di proseguire.",
              "correct": true,
              "feedback": "✅ <strong>Esatto!</strong> Rispettare i limiti della memoria di lavoro garantisce il consolidamento nella memoria a lungo termine."
            },
            {
              "text": "Aggiungere musica ritmata in sottofondo per tenere sveglia l'attenzione del discente.",
              "correct": false,
              "feedback": "❌ Non corretto: la musica aggiunge carico cognitivo estraneo."
            }
          ]
        },
        {
          "type": "reflection",
          "title": "6. Riflessione Metacognitiva: Il Tuo Carico Cognitivo",
          "badge": "Fase 1 · Diario Metacognitivo",
          "prompt": "✍️ <strong>Spazio di Auto-Valutazione:</strong> Pensa a un corso o a un manuale tecnico che hai studiato recentemente. In quale momento hai avvertito saturazione cognitiva e cosa avrebbe potuto fare il formatore per evitarla?",
          "placeholder": "Annota qui la tua riflessione personale (viene salvata in automatico nel tuo browser)..."
        },
        {
          "type": "video",
          "title": "7. Video 2: Il Principio di Segmentazione (Microlearning)",
          "badge": "Pillola 2 · Mobile-First (9:16)",
          "videoTitle": "Segmenting Principle: Scomposizione in Unità Autonome",
          "videoDuration": "00:48",
          "videoUrl": "moduli-formativi/corso-clark-mayer/video2_segmentazione.mp4",
          "isVertical": true
        },
        {
          "type": "text",
          "title": "8. Quadro Didattico: Il Principio di Segmentazione",
          "badge": "Fase 2 · Approfondimento Concettuale",
          "text": "<p><strong>Il Principio di Segmentazione (Segmenting Principle):</strong> Clark e Mayer dimostrano che le persone apprendono meglio quando una materia complessa è suddivisa in <em>brevi unità didattiche autonome (chunking)</em> fruite al ritmo controllato dal discente (<em>learner-paced</em>).</p><div class='callout-quote'>⏱️ <strong>Il potere del Microlearning:</strong> Permettere allo studente di decidere quando passare al blocco successivo offre il tempo indispensabile per elaborare ciascun concetto prima di accogliere nuove nozioni.</div>"
        },
        {
          "type": "flashcard",
          "title": "9. Flashcard: Segmentazione & Chunking",
          "badge": "Fase 2 · Consolidamento Rapido",
          "frontText": "🧩 In che modo la segmentazione (chunking) rende il microlearning efficace e memorabile?",
          "backText": "Scomponendo compiti complessi in unità indipendenti a ritmo autonomo, il discente non subisce un flusso passivo: ha il tempo di riflettere e consolidare ogni singolo schema prima di procedere.",
          "tip": "Gira la flashcard per verificare il principio pedagogico del chunking."
        },
        {
          "type": "quiz",
          "title": "10. Quiz di Progettazione: Applicare la Segmentazione",
          "badge": "Fase 2 · Verifica Formativa",
          "question": "Un'azienda ti commissiona un corso su una procedura complessa. Come applichi il Principio di Segmentazione?",
          "options": [
            {
              "text": "Mostri l'intera procedura in un'unica video-lezione continua da 40 minuti.",
              "correct": false,
              "feedback": "❌ Non corretto: viola il principio di segmentazione e sovraccarica il discente."
            },
            {
              "text": "Scomponi il percorso in micro-pillole da 1-2 minuti focalizzate su singoli task, con navigazione controllata dal discente.",
              "correct": true,
              "feedback": "✅ <strong>Risposta Corretta!</strong> La scomposizione modulare a ritmo autonomo azzera il sovraccarico e massimizza la memorizzazione operativa."
            },
            {
              "text": "Invii un unico documento PDF da 80 pagine invitando i colleghi a leggerlo autonomamente.",
              "correct": false,
              "feedback": "❌ Non corretto: manca la mediazione didattica e la gradualità interattiva."
            }
          ]
        },
        {
          "type": "reflection",
          "title": "11. Riflessione Metacognitiva: Scomporre la Complessità",
          "badge": "Fase 2 · Diario Metacognitivo",
          "prompt": "✍️ <strong>Laboratorio di Chunking:</strong> Individua una competenza complessa che insegni o usi nel tuo lavoro. Come la suddivideresti in 3 micro-moduli da 1 minuto ciascuno?",
          "placeholder": "Descrivi i tuoi 3 micro-chunk e la loro logica sequenziale..."
        },
        {
          "type": "video",
          "title": "12. Video 3: Il Principio di Coerenza (Eliminare il Superfluo)",
          "badge": "Pillola 3 · Mobile-First (9:16)",
          "videoTitle": "Coherence Principle: Eliminare Stimoli Estranei e Grafica Inutile",
          "videoDuration": "00:46",
          "videoUrl": "moduli-formativi/corso-clark-mayer/video3_coerenza.mp4",
          "isVertical": true
        },
        {
          "type": "text",
          "title": "13. Quadro Didattico: Il Principio di Coerenza",
          "badge": "Fase 3 · Approfondimento Concettuale",
          "text": "<p><strong>Il Principio di Coerenza (Coherence Principle):</strong> Clark e Mayer spiegano perché nei corsi e-learning è fondamentale eliminare grafica puramente decorativa, testi ridondanti e musiche di sottofondo inutili.</p><div class='callout-quote'>✂️ <strong>Eliminare gli stimoli estranei:</strong> Gli elementi visivi o sonori non pertinenti generano <em>carico cognitivo estraneo</em>, affaticando la mente dello studente e riducendo drasticamente la capacità di comprendere i contenuti centrali.</div>"
        },
        {
          "type": "flashcard",
          "title": "14. Flashcard: Il Principio di Coerenza",
          "badge": "Fase 3 · Consolidamento Rapido",
          "frontText": "✂️ Perché nei corsi digitali è fondamentale eliminare grafica puramente decorativa e musica di sottofondo inutile?",
          "backText": "Perché generano 'carico cognitivo estraneo'. Il cervello dello studente è costretto a spendere energia mentale per ignorare gli stimoli irrilevanti, riducendo la capacità di comprendere e memorizzare i contenuti centrali.",
          "tip": "Gira la flashcard per analizzare il ruolo del carico cognitivo estraneo."
        },
        {
          "type": "quiz",
          "title": "15. Quiz di Revisione Didattica: Applicare la Coerenza",
          "badge": "Fase 3 · Verifica Formativa",
          "question": "Durante la revisione dello storyboard di un corso digitale, noti schermate cariche di illustrazioni decorative, testo ridondante e musica di sottofondo continua. Come intervieni?",
          "options": [
            {
              "text": "Mantieni tutto invariato perché gli stimoli visivi e sonori rendono la lezione più accattivante.",
              "correct": false,
              "feedback": "❌ Non corretto: gli stimoli decorativi causano l'effetto 'seductive details' e riducono l'apprendimento."
            },
            {
              "text": "Elimini le illustrazioni decorative, rimuovi la musica di sottofondo e ripulisci il testo per focalizzare l'attenzione sui contenuti centrali.",
              "correct": true,
              "feedback": "✅ <strong>Esatto!</strong> Il Principio di Coerenza impone di eliminare qualsiasi elemento che non supporti direttamente l'obiettivo pedagogico."
            },
            {
              "text": "Aggiungi ulteriori effetti sonori per ogni interazione dell'utente.",
              "correct": false,
              "feedback": "❌ Non corretto: aumenta ulteriormente il rumore cognitivo estraneo."
            }
          ]
        },
        {
          "type": "reflection",
          "title": "16. Riflessione Metacognitiva: Caccia al Carico Estraneo",
          "badge": "Fase 3 · Diario Metacognitivo",
          "prompt": "✍️ <strong>Audit di Coerenza:</strong> Pensa a un materiale e-learning, slide o video in cui hai notato elementi decorativi o ridondanti. Quale elemento avresti tagliato e perché?",
          "placeholder": "Condividi la tua analisi critica..."
        },
        {
          "type": "completion",
          "title": "17. Completamento & Certificazione",
          "badge": "Traguardo Finale · Competenze Validate",
          "badgeImage": "moduli-formativi/corso-clark-mayer/badge_certified_id.png",
          "text": "<p>Hai completato con successo l'intero percorso didattico sequenziale, dimostrando padronanza dell'architettura della memoria, del Principio di Segmentazione e del Principio di Coerenza secondo l'evidence-based design di <strong>Clark & Mayer</strong>.</p>"
        }
      ]
    },
    {
      "id": "corso-dinosauri-learning-object",
      "title": "Dai Fossili alle Piume · Dinosauri ed Evoluzione",
      "category": "Didattica Primaria & Learning Object (BES)",
      "badge": "Modulo 2 · Progetto K-12 & Illustrazioni Originali",
      "badgeImage": "moduli-formativi/corso-dinosauri-learning-object/badge_giovane_paleontologo.png",
      "infographicUrl": "moduli-formativi/corso-dinosauri-learning-object/copertina_dai_fossili_alle_piume.jpg",
      "objectives": [
        {
          "bloom": "Comprendere",
          "text": "Distinguere le tre ere geologiche del Mesozoico (Triassico, Giurassico, Cretacico) e l'importanza dei fossili per ricostruire la vita del passato."
        },
        {
          "bloom": "Analizzare",
          "text": "Comprendere la funzione biologica originaria delle piume nei dinosauri (termoregolazione e protezione) prima dello sviluppo del volo."
        },
        {
          "bloom": "Valutare",
          "text": "Riconoscere l'Archaeopteryx come anello di congiunzione anatomico tra dinosauri e uccelli moderni (ossa cave, sterno carenato, ali)."
        }
      ],
      "steps": [
        {
          "type": "text",
          "title": "1. Inquadramento Pedagogico & Scheda del Learning Object",
          "badge": "Fase 1 · Progettazione & Target",
          "text": "<p>Benvenuto nel Learning Object <strong>Dai Fossili alle Piume</strong>, un percorso multimediale animato progettato per avvicinare i bambini alla paleontologia e alla teoria dell'evoluzione biologica.</p><div class='objectives-list-step'><div class='objective-item'><span class='bloom-tag'>Target & BES</span><span>Progettato per la <strong>scuola primaria (6–9 anni)</strong>, percorsi informali e allievi con <strong>Bisogni Educativi Speciali (BES)</strong>, grazie a video brevi, linguaggio chiaro ed empatia visiva.</span></div><div class='objective-item'><span class='bloom-tag'>Co-Design Artistico</span><span><strong>Progettazione didattica, storyboard e montaggio audio-video:</strong> Alberto Bedeschi (esame universitario UNIMORE, Prof. Poletti, 2021).<br><strong>Illustrazioni e sfondi originali disegnati a mano con Procreate:</strong> Zoe Pinzuti.</span></div><div class='objective-item'><span class='bloom-tag'>LMS Multi-Piattaforma</span><span>Validato su <strong>Moodle</strong> (ambiente completo con forum cooperativi) e su <strong>TalentLMS</strong> (ambiente lineare, immediato e accessibile da casa).</span></div></div><div class='callout-quote'>🦖 <strong>Approccio Didattico:</strong> Struttura lineare conforme agli indici di Brenda Laurel (frequenza e variabilità calibrate per l'età), arricchita da verifiche formative gamificate e attestato finale.</div>"
        },
        {
          "type": "video",
          "title": "2. Capitolo 1: Chi siamo noi dinosauri?",
          "badge": "Capitolo 1 · Video Animato (16:9)",
          "videoTitle": "Capitolo 1: Chi siamo noi dinosauri? (Le origini e i fossili)",
          "videoDuration": "01:28",
          "videoUrl": "moduli-formativi/corso-dinosauri-learning-object/capitolo1_chi_siamo_noi_dinosauri.mp4",
          "isVertical": false
        },
        {
          "type": "flashcard",
          "title": "3. Flashcard: Come conosciamo i Dinosauri?",
          "badge": "Fase 2 · Consolidamento Concettuale",
          "frontText": "🦴 Come facciamo a sapere che aspetto avevano i dinosauri se nessun essere umano li ha mai visti vivi?",
          "backText": "Attraverso i reperti fossili! Nel corso di milioni di anni, resti di ossa, uova, impronte, foglie e perfino escrementi si sono trasformati in roccia solida, conservando indizi preziosi per gli scienziati paleontologi.",
          "tip": "Clicca sulla card per girarla e scoprire come si formano i fossili."
        },
        {
          "type": "quiz",
          "title": "4. Quiz: Alla Scoperta dei Fossili",
          "badge": "Verifica Capitolo 1",
          "question": "Quali elementi del passato possono trasformarsi in fossili dopo milioni di anni?",
          "options": [
            {
              "text": "Solo oggetti di plastica e metalli moderni.",
              "correct": false,
              "feedback": "❌ No: la plastica e i metalli moderni non esistevano all'epoca dei dinosauri!"
            },
            {
              "text": "Ossa, uova, impronte e foglie ricoperte da strati di fango e roccia.",
              "correct": true,
              "feedback": "🎉 <strong>Bravissimo!</strong> I fossili sono proprio resti di esseri viventi trasformati in pietra nel corso del tempo."
            },
            {
              "text": "Solo l'acqua del mare e le nuvole nel cielo.",
              "correct": false,
              "feedback": "❌ No: l'acqua e le nuvole evaporano e cambiano forma continuamente."
            }
          ]
        },
        {
          "type": "video",
          "title": "5. Capitolo 2: Che fine abbiamo fatto?",
          "badge": "Capitolo 2 · Video Animato (16:9)",
          "videoTitle": "Capitolo 2: L'Era Mesozoica e la Grande Estinzione",
          "videoDuration": "01:26",
          "videoUrl": "moduli-formativi/corso-dinosauri-learning-object/capitolo2_che_fine_abbiamo_fatto.mp4",
          "isVertical": false
        },
        {
          "type": "flashcard",
          "title": "6. Flashcard: Le Tre Ere del Mesozoico",
          "badge": "Fase 3 · Consolidamento Temporale",
          "frontText": "⏳ Quali sono i tre grandi periodi dell'Era Mesozoica in cui vissero i dinosauri?",
          "backText": "Triassico (comparsa dei primi dinosauri), Giurassico (il periodo d'oro in cui dominarono la Terra) e Cretacico (il terzo periodo, conclusosi 65 milioni di anni fa con l'impatto del meteorite).",
          "tip": "Gira la card per memorizzare le tre epoche geologiche."
        },
        {
          "type": "quiz",
          "title": "7. Quiz: Il Mistero dell'Estinzione",
          "badge": "Verifica Capitolo 2",
          "question": "Cosa accadde circa 65 milioni di anni fa sulla Terra?",
          "options": [
            {
              "text": "Un gigantesco meteorite e grandi cambiamenti climatici causarono l'estinzione di molte specie, ma alcuni sopravvissuti iniziarono a evolversi.",
              "correct": true,
              "feedback": "🎉 <strong>Esatto!</strong> L'impatto e il clima spazzarono via molte specie, ma i sopravvissuti intrapresero un lungo cammino evolutivo."
            },
            {
              "text": "Tutti i dinosauri salirono su navicelle spaziali e lasciarono la Terra.",
              "correct": false,
              "feedback": "❌ No: questa è solo fantascienza!"
            },
            {
              "text": "Non cambiò assolutamente nulla e la Terra rimase identica a prima.",
              "correct": false,
              "feedback": "❌ No: il pianeta subì sconvolgimenti epocali."
            }
          ]
        },
        {
          "type": "video",
          "title": "8. Capitolo 3: Dinosauri Piumati",
          "badge": "Capitolo 3 · Video Animato (16:9)",
          "videoTitle": "Capitolo 3: I Dromeosauri e il Segreto delle Piume",
          "videoDuration": "01:26",
          "videoUrl": "moduli-formativi/corso-dinosauri-learning-object/capitolo3_dinosauri_piumati.mp4",
          "isVertical": false
        },
        {
          "type": "video",
          "title": "9. Capitolo 3.5: Focus Archaeopteryx",
          "badge": "Capitolo 3.5 · Video Animato (16:9)",
          "videoTitle": "Capitolo 3.5: L'Antica Penna e il Fossile di Berlino",
          "videoDuration": "01:26",
          "videoUrl": "moduli-formativi/corso-dinosauri-learning-object/capitolo3_5_archaeopteryx.mp4",
          "isVertical": false
        },
        {
          "type": "flashcard",
          "title": "10. Flashcard: A cosa servivano le Piume?",
          "badge": "Fase 4 · Principio Evolutivo",
          "frontText": "🪶 A cosa servivano le prime piume comparse sui piccoli dinosauri milioni di anni fa?",
          "backText": "Non per volare! I dinosauri erano animali a sangue caldo: le prime piume servivano come un 'cappotto termico' per trattenere il calore corporeo e per farsi notare dai propri simili con colori vivaci.",
          "tip": "Gira la card per verificare la vera funzione biologica originaria."
        },
        {
          "type": "quiz",
          "title": "11. Quiz: Le Abilità dell'Archaeopteryx",
          "badge": "Verifica Capitolo 3 & 3.5",
          "question": "Come si muoveva l'Archaeopteryx (l'antica penna) nel suo ambiente naturale?",
          "options": [
            {
              "text": "Nuotava velocissimo negli abissi marini come uno squalo.",
              "correct": false,
              "feedback": "❌ No: l'Archaeopteryx viveva sulla terraferma tra la vegetazione."
            },
            {
              "text": "Si arrampicava sugli alberi con i suoi lunghi artigli e planava grazie alle sue antiche ali piumate.",
              "correct": true,
              "feedback": "🎉 <strong>Corretto!</strong> Non volava ancora battendo le ali come gli uccelli moderni, ma era un provetto arrampicatore e planatore."
            },
            {
              "text": "Scavava gallerie sotto terra per nascondersi dalla luce.",
              "correct": false,
              "feedback": "❌ No: non era un animale sotterraneo."
            }
          ]
        },
        {
          "type": "video",
          "title": "12. Capitolo 4: Dai dinosauri agli uccelli",
          "badge": "Capitolo 4 · Video Animato (16:9)",
          "videoTitle": "Capitolo 4: L'Evoluzione dei Polsi, delle Ossa Cave e del Volo",
          "videoDuration": "01:26",
          "videoUrl": "moduli-formativi/corso-dinosauri-learning-object/capitolo4_dai_dinosauri_agli_uccelli.mp4",
          "isVertical": false
        },
        {
          "type": "flashcard",
          "title": "13. Flashcard: Il Segreto del Volo",
          "badge": "Fase 5 · Anatomia Comparata",
          "frontText": "🕊️ Quali trasformazioni fisiche permisero ai dinosauri sopravvissuti di diventare uccelli e conquistare il cielo?",
          "backText": "Le ossa sono diventate cave e leggerissime, i muscoli pettorali si sono potenziati grazie a uno sterno con carena, gli artigli hanno lasciato spazio alle ali e la lunga coda ossea si è accorciata.",
          "tip": "Gira la card per ripassare gli adattamenti al volo."
        },
        {
          "type": "reflection",
          "title": "14. Diario dell'Esploratore: Uno Sguardo al Cielo",
          "badge": "Fase 6 · Attivazione Metacognitiva",
          "scenario": "🔭 <strong>Diario del Giovane Paleontologo:</strong><br>Hai mai guardato un passero, una rondine o un piccione pensando che sono i discendenti diretti dei dinosauri? Quale curiosità ti ha colpito di più in questo viaggio evolutivo? Raccontalo con parole tue!",
          "tip": "Scrivi una breve riflessione (almeno 15 caratteri) per condividere la tua scoperta scientifica e sbloccare l'attestato finale."
        },
        {
          "type": "completion",
          "title": "15. Missione Paleontologica Completata!",
          "badge": "Fase 7 · Traguardo Finale",
          "badgeImage": "moduli-formativi/corso-dinosauri-learning-object/badge_giovane_paleontologo.png",
          "text": "<p>Congratulazioni! Hai completato l'intero Learning Object multimediale <strong>Dai Fossili alle Piume</strong>.</p><p>Hai scoperto come i dinosauri sono sopravvissuti, perché hanno sviluppato le prime piume e come l'Archaeopteryx rappresenti il ponte evolutivo verso gli uccelli che vediamo volare oggi intorno a noi.</p><div class='callout-quote'>🎓 <strong>Riconoscimento delle Competenze:</strong> Clicca sui pulsanti in basso per visualizzare e stampare l'<strong>Attestato di Giovane Paleontologo</strong> con il badge ufficiale disegnato da Zoe Pinzuti!</div>"
        }
      ]
    },
    {
      "id": "corso-ai-prompting",
      "title": "Lavorare con l'AI: Prompting Efficace e Sicuro",
      "category": "Corporate AI Enablement & Game-Based Learning",
      "badge": "Modulo 3 · Game-Based Microlearning",
      "badgeImage": "moduli-formativi/corso-clark-mayer/badge_certified_id.png",
      "objectives": [
        {
          "bloom": "Applicare",
          "text": "Padroneggiare la 'Formula dei 4 Mattoni' (Contesto, Ruolo, Formato, Vincoli) per strutturare prompt efficaci in ambito aziendale."
        },
        {
          "bloom": "Valutare",
          "text": "Discriminare comportamenti sicuri (anonimizzazione preventiva, Grounding) da rischi critici (Shadow AI, violazioni GDPR, allucinazioni)."
        },
        {
          "bloom": "Creare",
          "text": "Progettare in autonomia un prompt lavorativo completo, verificandone l'efficacia tramite rubrica strutturata."
        }
      ],
      "steps": [
        {
          "type": "text",
          "title": "1. Introduzione & Formula dei 4 Mattoni",
          "badge": "Livello 1 · Le 4 regole d'oro",
          "text": "<p>Tutti oggi usiamo l'<strong>Intelligenza Artificiale</strong> al lavoro per risparmiare tempo, ma spesso otteniamo risposte generiche o rischiamo di esporre dati aziendali riservati.</p><p>Un prompt efficace si fonda sulla <strong>Formula dei 4 Mattoni</strong>:</p><ul><li><strong>1. Contesto:</strong> l'insieme delle informazioni di sfondo che spiegano la situazione e l'obiettivo.</li><li><strong>2. Ruolo:</strong> il punto di vista o la figura professionale che chiediamo all'AI di assumere.</li><li><strong>3. Formato:</strong> la struttura visiva in cui vogliamo ricevere l'output (es. elenco puntato, tabella).</li><li><strong>4. Vincoli:</strong> i limiti precisi da rispettare (lunghezza massima, tono di voce, uso esclusivo dei dati forniti).</li></ul><div class='callout-quote'>🎮 <strong>Vuoi provare la versione Game-Based completa a 28 blocchi?</strong> Puoi giocarla anche nel <a href='moduli-formativi/corso-ai-prompting/gioco-interattivo.html' target='_blank'>Simulatore Interattivo</a> o leggere lo <a href='moduli-formativi/corso-ai-prompting/storyboard-ai-prompting.html'>Storyboard integrale</a>.</div>"
        },
        {
          "type": "flashcard",
          "title": "2. Flashcard: I 4 Mattoni del Prompt",
          "badge": "Livello 1 · Richiamo Attivo",
          "frontText": "🧩 Qual è la differenza tra 'Formato' e 'Vincoli' nella costruzione di un prompt aziendale?",
          "backText": "Il FORMATO definisce la struttura visiva dell'output (es. 'Crea una tabella a 3 colonne' o 'Riassumi in 5 punti elenco'), mentre i VINCOLI stabiliscono i paletti da non superare (es. 'Massimo 120 parole, tono formale, usa solo i dati allegati').",
          "tip": "Gira la card per consolidare i due mattoni finali della formula."
        },
        {
          "type": "quiz",
          "title": "3. Verifica: Costruire la Sequenza Corretta",
          "badge": "Livello 1 · Verifica Formativa",
          "question": "Quale tra questi prompt applica in modo completo la Formula dei 4 Mattoni (Contesto + Ruolo + Formato + Vincoli)?",
          "options": [
            {
              "text": "Scrivi una presentazione sui risultati del trimestre.",
              "correct": false,
              "feedback": "❌ Troppo vago: mancano ruolo, formato e vincoli; l'AI produrrà un testo generico."
            },
            {
              "text": "Devo presentare i risultati trimestrali al team (Contesto). Agisci come esperto di comunicazione interna (Ruolo). Prepara una scaletta in 3 punti (Formato). Non superare 150 parole e usa un tono motivante (Vincoli).",
              "correct": true,
              "feedback": "✅ <strong>Esatto!</strong> Tutti i 4 mattoni sono presenti e guidano l'AI verso un risultato mirato fin dal primo tentativo."
            },
            {
              "text": "Fammi un riassunto veloce di tutto quello che sai sulla comunicazione aziendale.",
              "correct": false,
              "feedback": "❌ Non contestualizzato all'obiettivo operativo."
            }
          ]
        },
        {
          "type": "text",
          "title": "4. Sicurezza dei Dati, Shadow AI & Allucinazioni",
          "badge": "Livello 2 · Quando condividere dati?",
          "text": "<p>Uno studio della <strong>Harvard Business School</strong> e del <strong>MIT</strong> ha dimostrato che chi usa l'AI con il 'pilota automatico' commette il <strong>19% di errori in più</strong> nei compiti complessi.</p><ul><li><strong>Shadow AI & GDPR:</strong> caricare file con nomi, email o dati finanziari su siti AI gratuiti o su account personali (anche a pagamento) espone l'azienda a violazioni di sicurezza.</li><li><strong>Anonimizzazione preventiva:</strong> sostituisci sempre i nomi reali con sigle generiche come <code>[CLIENTE A]</code> prima di inviare il prompt.</li><li><strong>Grounding contro le allucinazioni:</strong> vincola l'AI a usare <em>esclusivamente il testo fornito</em> e verifica sempre statistiche e fonti.</li></ul>"
        },
        {
          "type": "game",
          "title": "5. Scenario Decisionale: Il Caso di Andrea (Ufficio Acquisti)",
          "badge": "Livello 3 · Applicazione Situazionale",
          "scenario": "🎯 <strong>Scenario Aziendale:</strong> Andrea lavora nel team Acquisti e domani deve presentare un confronto tra le offerte economiche di tre nuovi fornitori strategici. Nei PDF originali compaiono nomi dei referenti, contatti diretti e clausole di riservatezza. Qual è il modo corretto di procedere?",
          "options": [
            {
              "text": "A) Caricare i tre PDF originali su un sito gratuito trovato online che confronta i documenti in automatico.",
              "correct": false,
              "feedback": "❌ <strong>Grave rischio Shadow AI:</strong> espone dati personali e segreti contrattuali su un server esterno non autorizzato."
            },
            {
              "text": "B) Usare l'assistente AI aziendale approvato, incollando solo i dati tecnici ed economici anonimizzati (Fornitore A, B e C) e chiedendo una tabella basata solo sul testo fornito.",
              "correct": true,
              "feedback": "🎉 <strong>Scelta ottimale!</strong> Protegge la riservatezza (anonimizzazione + ambiente aziendale) ed evita allucinazioni grazie al Grounding sul testo."
            },
            {
              "text": "C) Chiedere all'AI pubblica senza allegare nulla: 'Dimmi quali sono i migliori fornitori e quanto costano', fidandosi dei prezzi generati.",
              "correct": false,
              "feedback": "❌ <strong>Rischio allucinazioni:</strong> l'AI inventerebbe prezzi non corrispondenti alle offerte reali."
            }
          ]
        },
        {
          "type": "reflection",
          "title": "6. Laboratorio Pratico: Scrivi il Tuo Prompt",
          "badge": "Livello 3 · Produzione Autonoma",
          "prompt": "✍️ <strong>Tocca a te!</strong> Devi inviare una mail a tutto il tuo team per invitarli a un corso di aggiornamento di 2 ore previsto per venerdì, spiegando perché è utile. Scrivi qui sotto il prompt che daresti all'AI includendo <strong>Contesto, Ruolo, Formato e Vincoli</strong>:",
          "placeholder": "Scrivi qui il tuo prompt strutturato..."
        },
        {
          "type": "completion",
          "title": "7. Percorso Completato!",
          "badge": "Traguardo Finale · AI Co-Pilot",
          "badgeImage": "moduli-formativi/corso-clark-mayer/badge_certified_id.png",
          "text": "<p>Complimenti! Hai completato il percorso <strong>Lavorare con l'AI: Prompting Efficace e Sicuro</strong>. Ricorda che l'Intelligenza Artificiale dà il meglio solo quando a guidarla c'è il tuo pensiero critico.</p>"
        }
      ]
    }
  ];

  // State Management with Async Data Loading & Local Sandbox Persistence
  let courses = [];
  let activeCourseIndex = 0;
  let currentStepIndex = 0;
  let currentMode = 'player'; // 'player' | 'editor'
  let currentEditingStepIndex = null;
  let modalTempOptions = [];
  let courseProgress = {};
  let lastExperiencedStepKey = null;
  let flashcardFlippedSteps = new Set();

  // Persistent User Progress per Course
  function loadProgress() {
    try {
      courseProgress = JSON.parse(localStorage.getItem('alberto_lms_progress') || '{}');
      if (courseProgress['corso-benessere'] && !courseProgress['corso-clark-mayer']) {
        courseProgress['corso-clark-mayer'] = courseProgress['corso-benessere'];
      }
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
      if (courseId === 'corso-clark-mayer' && courseProgress['corso-benessere']) {
        courseProgress['corso-clark-mayer'] = courseProgress['corso-benessere'];
      } else if (courseId === 'corso-benessere' && courseProgress['corso-clark-mayer']) {
        courseProgress['corso-benessere'] = courseProgress['corso-clark-mayer'];
      } else {
        courseProgress[courseId] = {
          unlockedSteps: [0],
          completedSteps: [],
          lastStepIndex: 0
        };
      }
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

  // Async Initialization: courses.json (live) > localStorage > inline defaultCourses
  async function initLmsData() {
    loadProgress();

    // 1. Fetch official courses.json first with cache-buster
    try {
      const res = await fetch('courses.json?v=' + Date.now());
      if (res.ok) {
        const remote = await res.json();
        if (Array.isArray(remote) && remote.length > 0) {
          courses = remote;
          // Clear any outdated local sandbox cache to prevent stale data
          try { localStorage.removeItem('alberto_lms_courses'); } catch (e) {}
          finishInit();
          return;
        }
      }
    } catch (err) {
      console.info('Fetch courses.json non disponibile (es. protocollo file://), procedo con fallback:', err);
    }

    // 2. Check local Sandbox override ONLY as fallback
    try {
      const local = localStorage.getItem('alberto_lms_courses');
      if (local) {
        const parsed = JSON.parse(local);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0]?.steps?.length >= 2) {
          courses = parsed;
          finishInit();
          return;
        }
      }
    } catch (e) {}

    // 3. Fallback inline
    courses = JSON.parse(JSON.stringify(defaultCourses));
    finishInit();
  }

  function finishInit() {
    let startIdx = 0;
    try {
      const param = new URLSearchParams(window.location.search).get('course');
      if (param) {
        const byId = courses.findIndex(c => c.id === param);
        if (byId >= 0) {
          startIdx = byId;
        } else {
          const asNum = parseInt(param, 10);
          if (!isNaN(asNum) && asNum >= 0 && asNum < courses.length) {
            startIdx = asNum;
          }
        }
      }
    } catch (e) {}

    activeCourseIndex = startIdx;
    renderCourseSelector();
    loadCourse(startIdx);
  }

  document.addEventListener('DOMContentLoaded', initLmsData);

  // Flashcard dynamic measurement & 3D flip toggle
  window.adjustCurrentFlashcardHeight = function () {
    const contentArea = document.getElementById('lmsStepContent');
    if (!contentArea) return;
    const card = contentArea.querySelector('.flashcard-card');
    const front = contentArea.querySelector('.flashcard-front');
    const back = contentArea.querySelector('.flashcard-back');
    if (!card || !front || !back) return;

    const measureFace = (face) => {
      const clone = face.cloneNode(true);
      clone.style.position = 'fixed';
      clone.style.left = '-9999px';
      clone.style.top = '0';
      clone.style.width = (card.offsetWidth > 40 ? card.offsetWidth : 300) + 'px';
      clone.style.height = 'auto';
      clone.style.maxHeight = 'none';
      clone.style.minHeight = '0';
      clone.style.transform = 'none';
      clone.style.visibility = 'hidden';
      clone.style.overflow = 'visible';
      document.body.appendChild(clone);
      const h = clone.offsetHeight;
      document.body.removeChild(clone);
      return h;
    };

    const frontH = measureFace(front);
    const backH = measureFace(back);
    const maxH = Math.max(frontH, backH, 320);
    card.style.minHeight = (maxH + 18) + 'px';
    card.style.height = (maxH + 18) + 'px';
  };

  window.addEventListener('resize', () => {
    if (typeof window.adjustCurrentFlashcardHeight === 'function') {
      window.adjustCurrentFlashcardHeight();
    }
  }, { passive: true });

  window.toggleFlashcardFlip = function (elem) {
    if (!elem) return;
    elem.classList.toggle('is-flipped');
    if (typeof window.adjustCurrentFlashcardHeight === 'function') {
      window.adjustCurrentFlashcardHeight();
    }
    const course = courses[activeCourseIndex];
    if (course) {
      flashcardFlippedSteps.add(`${course.id}_step_${currentStepIndex}`);
      // Record verification statement in xAPI
      recordXApiStatement('interacted', 'ha girato la flashcard per verifica attiva', course.steps[currentStepIndex]?.title || 'Flashcard');
      const btnNext = document.getElementById('btnNext');
      if (btnNext && btnNext.dataset.awaitingFlip === 'true') {
        btnNext.disabled = false;
        btnNext.dataset.awaitingFlip = 'false';
        btnNext.innerHTML = `Continua allo Step Successivo <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"></use></svg>`;
        const banner = document.getElementById('flashcardUnlockBanner');
        if (banner) {
          banner.className = 'unlock-banner ok';
          banner.innerHTML = `<svg class="icon" aria-hidden="true"><use href="#i-check-circle"></use></svg><div><strong>Flashcard verificata!</strong> Concetto assimilato. Ora puoi proseguire allo step successivo.</div>`;
        }
      }
    }
  };

  // Reflection journal auto-save with threshold validation
  window.saveReflectionDraft = function (key, value) {
    try {
      const saved = JSON.parse(localStorage.getItem('alberto_lms_reflections') || '{}');
      saved[key] = value;
      localStorage.setItem('alberto_lms_reflections', JSON.stringify(saved));
      const valTrimmed = (value || '').trim();
      const st = document.getElementById('reflectionStatus');
      if (st) {
        if (valTrimmed.length >= 10) {
          st.textContent = `✓ Bozza memorizzata in locale (${valTrimmed.length} caratteri)`;
        } else {
          st.textContent = `Scrivi ancora ${10 - valTrimmed.length} caratteri per sbloccare il passaggio`;
        }
      }
      const btnNext = document.getElementById('btnNext');
      const banner = document.getElementById('reflectionUnlockBanner');
      if (btnNext && btnNext.dataset.awaitingReflection === 'true') {
        if (valTrimmed.length >= 10) {
          btnNext.disabled = false;
          btnNext.dataset.awaitingReflection = 'false';
          btnNext.innerHTML = `Continua allo Step Successivo <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"></use></svg>`;
          if (banner) {
            banner.className = 'unlock-banner ok';
            banner.innerHTML = `<svg class="icon" aria-hidden="true"><use href="#i-check-circle"></use></svg><div><strong>Riflessione completata!</strong> Le tue annotazioni sono memorizzate. Ora puoi procedere.</div>`;
          }
        }
      }
    } catch (e) {}
  };

  // Toggle Bloom Objectives Panel
  window.toggleCourseObjectives = function () {
    const list = document.getElementById('courseObjectivesList');
    const btn = document.getElementById('btnCourseObjToggle');
    if (!list) return;
    const isHidden = list.hidden;
    list.hidden = !isHidden;
    if (btn) btn.setAttribute('aria-expanded', String(isHidden));
  };

  // Simulated xAPI Statement Logger (Learning Analytics)
  function recordXApiStatement(verbId, verbDisplay, objectName, resultData = null) {
    try {
      const log = JSON.parse(localStorage.getItem('alberto_lms_xapi_log') || '[]');
      const course = courses[activeCourseIndex];
      const statement = {
        id: 'urn:uuid:' + (crypto.randomUUID ? crypto.randomUUID() : ('stmt-' + Date.now() + '-' + Math.floor(Math.random() * 10000))),
        timestamp: new Date().toISOString(),
        actor: {
          name: "Discente del Portfolio",
          mbox: "mailto:discente.portfolio@digital-learning.it"
        },
        verb: {
          id: "http://adlnet.gov/expapi/verbs/" + verbId,
          display: { "it-IT": verbDisplay, "en-US": verbId }
        },
        object: {
          id: `https://albib97.github.io/lms#${course ? course.id : 'corso'}/${encodeURIComponent(objectName)}`,
          definition: {
            name: { "it-IT": objectName },
            type: "http://adlnet.gov/expapi/activities/microlearning-module"
          }
        }
      };
      if (resultData) statement.result = resultData;
      log.push(statement);
      if (log.length > 100) log.shift();
      localStorage.setItem('alberto_lms_xapi_log', JSON.stringify(log));
    } catch (e) {
      console.warn('Errore salvataggio xAPI:', e);
    }
  }

  window.exportXApiLog = function () {
    const log = JSON.parse(localStorage.getItem('alberto_lms_xapi_log') || '[]');
    if (!log || log.length === 0) {
      showToast('Nessuna interazione xAPI registrata. Esplora i moduli per generare tracciamenti!', 'info');
      return;
    }
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(log, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', `xapi_statements_alberto_bedeschi_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    showToast(`Esportati ${log.length} statement xAPI con successo!`, 'success');
  };

  // Render Course Selector in Toolbar & Quick Tabs
  function renderCourseSelector() {
    const select = document.getElementById('lmsCourseSelect');
    if (select) {
      select.innerHTML = '';
      courses.forEach((c, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.textContent = `${c.badge || 'Modulo'}: ${c.title}`;
        select.appendChild(opt);
      });
      select.value = activeCourseIndex;
    }

    const countEl = document.getElementById('lmsCourseCount');
    if (countEl) {
      countEl.textContent = `${courses.length} ${courses.length === 1 ? 'modulo' : 'moduli'}`;
    }

    const tabsWrap = document.getElementById('lmsCourseTabs');
    if (tabsWrap) {
      tabsWrap.innerHTML = '';
      courses.forEach((c, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `lms-course-tab${idx === activeCourseIndex ? ' is-active' : ''}`;
        btn.setAttribute('aria-pressed', String(idx === activeCourseIndex));
        btn.innerHTML = `
          <span class="lms-course-tab-badge">${escapeHtml(c.badge || `Modulo ${idx + 1}`)}</span>
          <span class="lms-course-tab-title">${escapeHtml(c.title)}</span>
        `;
        btn.onclick = () => switchCourse(idx);
        tabsWrap.appendChild(btn);
      });
    }
  }

  function syncCourseSelectorState() {
    const select = document.getElementById('lmsCourseSelect');
    if (select) select.value = activeCourseIndex;

    const countEl = document.getElementById('lmsCourseCount');
    if (countEl) {
      countEl.textContent = `${courses.length} ${courses.length === 1 ? 'modulo' : 'moduli'}`;
    }

    const tabsWrap = document.getElementById('lmsCourseTabs');
    if (tabsWrap) {
      tabsWrap.querySelectorAll('.lms-course-tab').forEach((btn, idx) => {
        const active = idx === activeCourseIndex;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', String(active));
      });
    }
  }

  // Switch Mode (Player vs Editor / Sandbox)
  window.setLmsMode = function (mode) {
    currentMode = mode;
    const btnPlayer = document.getElementById('btnModePlayer');
    const btnEditor = document.getElementById('btnModeEditor');
    if (btnPlayer) {
      btnPlayer.setAttribute('aria-selected', String(mode === 'player'));
      btnPlayer.classList.toggle('active', mode === 'player');
    }
    if (btnEditor) {
      btnEditor.setAttribute('aria-selected', String(mode === 'editor'));
      btnEditor.classList.toggle('active', mode === 'editor');
    }

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
    syncCourseSelectorState();
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
    syncCourseSelectorState();
    const course = courses[activeCourseIndex];
    if (course) {
      const prog = getCourseProgress(course.id);
      currentStepIndex = Math.min(prog.lastStepIndex || 0, course.steps.length - 1);
    } else {
      currentStepIndex = 0;
    }
    renderPlayerUI();
  }

  /** Restituisce configurazione, testi e link di completamento coerenti con il corso attivo. */
  function getCourseCompletionMeta(course) {
    const id = course ? course.id : '';
    if (id === 'corso-dinosauri-learning-object') {
      return {
        certUrl: 'attestato_giovane_paleontologo.html',
        certLabel: 'Diploma Ufficiale Giovane Paleontologo',
        certModalText: "Si certifica il completamento dell'intero Learning Object 'Dai Fossili alle Piume', con superamento di tutti i capitoli animati e delle prove di verifica paleontologica.",
        infographicLabel: "Copertina &amp; Identità Visiva del Learning Object",
        cardsHTML: `
          <div class="completion-card">
            <h4>
              <svg class="icon" aria-hidden="true" style="color:var(--accent);"><use href="#i-file-text"></use></svg>
              Scheda del Learning Object
            </h4>
            <p>Progettazione didattica, target 6-9 anni, illustrazioni di Zoe Pinzuti e validazione Moodle/TalentLMS.</p>
            <button type="button" class="btn btn-primary btn-sm" onclick="goToStep(0)">
              Rileggi Scheda Didattica <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"></use></svg>
            </button>
          </div>

          <div class="completion-card">
            <h4>
              <svg class="icon" aria-hidden="true" style="color:var(--terra);"><use href="#i-award"></use></svg>
              Attestato Giovane Paleontologo
            </h4>
            <p>Visualizza e stampa il diploma ufficiale A4 con il badge dell'Archaeopteryx.</p>
            <a href="attestato_giovane_paleontologo.html" target="_blank" rel="noopener" class="btn btn-terra btn-sm">
              Apri Attestato Ufficiale <svg class="icon" aria-hidden="true"><use href="#i-external"></use></svg>
            </a>
          </div>
        `
      };
    }

    if (id === 'corso-ai-prompting') {
      const certUrl = 'attestato_completamento.html?course=corso-ai-prompting';
      return {
        certUrl,
        certLabel: 'Micro-Attestato AI & Prompting',
        certModalText: "Si certifica il completamento del percorso 'Lavorare con l'AI: Prompting Efficace e Sicuro', con padronanza della Formula dei 4 Mattoni, prevenzione Shadow AI e verifica delle allucinazioni.",
        infographicLabel: "Schema Riepilogativo del Modulo AI",
        cardsHTML: `
          <div class="completion-card">
            <h4>
              <svg class="icon" aria-hidden="true" style="color:var(--accent);"><use href="#i-book"></use></svg>
              Storyboard &amp; Player Gamindo
            </h4>
            <p>Consulta la sceneggiatura integrale da 26 blocchi o gioca la versione Game-Based su Gamindo Builder.</p>
            <div style="display:flex; flex-wrap:wrap; gap:8px;">
              <a href="moduli-formativi/corso-ai-prompting/storyboard-ai-prompting.html" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
                Storyboard (26 blocchi) <svg class="icon" aria-hidden="true"><use href="#i-external"></use></svg>
              </a>
              <a href="https://go.gamindo.com/?cd=OU5MQXY7KD-PA_01OX-aN-A_010DHYHHIMEMOPH7Q0ANPNIM76H7DCA94-HY9Q8P-aPQL8AN-aOWOPaG56OXSUFI.1F8" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                Gioca su Gamindo <svg class="icon" aria-hidden="true"><use href="#i-external"></use></svg>
              </a>
            </div>
          </div>

          <div class="completion-card">
            <h4>
              <svg class="icon" aria-hidden="true" style="color:var(--terra);"><use href="#i-award"></use></svg>
              Attestato di Competenze AI
            </h4>
            <p>Visualizza e stampa il certificato A4 con le competenze acquisite sul prompting sicuro.</p>
            <a href="${certUrl}" target="_blank" rel="noopener" class="btn btn-terra btn-sm">
              Apri Attestato Ufficiale <svg class="icon" aria-hidden="true"><use href="#i-external"></use></svg>
            </a>
          </div>
        `
      };
    }

    if (id === 'corso-clark-mayer' || id === 'corso-benessere') {
      return {
        certUrl: 'attestato_completamento.html',
        certLabel: 'Micro-Attestato di Completamento',
        certModalText: "Si certifica il completamento dell'intero percorso didattico asincrono a progressione vincolata, con esito positivo nelle prove di verifica formativa e situazionale.",
        infographicLabel: "Mappa Concettuale Integrata: Scienza dell'Apprendimento Digitale",
        cardsHTML: `
          <div class="completion-card">
            <h4>
              <svg class="icon" aria-hidden="true" style="color:var(--accent);"><use href="#i-file-text"></use></svg>
              Dispensa Didattica Riassuntiva
            </h4>
            <p>Evidence-Based Instructional Design: Architettura Cognitiva &amp; Principi di Clark &amp; Mayer (2024).</p>
            <a href="dispensa_didattica_riassuntiva.html" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
              Apri la Scheda Finale <svg class="icon" aria-hidden="true"><use href="#i-external"></use></svg>
            </a>
          </div>

          <div class="completion-card">
            <h4>
              <svg class="icon" aria-hidden="true" style="color:var(--terra);"><use href="#i-award"></use></svg>
              Attestato di Competenze ID
            </h4>
            <p>Visualizza e stampa l'attestato nominativo con il badge Certified ID.</p>
            <a href="attestato_completamento.html" target="_blank" rel="noopener" class="btn btn-terra btn-sm">
              Apri Attestato Ufficiale <svg class="icon" aria-hidden="true"><use href="#i-external"></use></svg>
            </a>
          </div>
        `
      };
    }

    // Fallback generico per nuove pillole create dall'utente nella Sandbox Authoring
    const safeCourseTitle = escapeHtml((course && course.title) || 'Modulo Didattico');
    const customTitleParam = encodeURIComponent((course && course.title) || 'Pillola Formativa');
    const customCertUrl = `attestato_completamento.html?title=${customTitleParam}`;
    return {
      certUrl: customCertUrl,
      certLabel: 'Attestato di Completamento',
      certModalText: `Si certifica il completamento del percorso formativo "${safeCourseTitle}" nella Sandbox LMS.`,
      infographicLabel: 'Schema Visivo del Modulo',
      cardsHTML: `
        <div class="completion-card">
          <h4>
            <svg class="icon" aria-hidden="true" style="color:var(--accent);"><use href="#i-file-text"></use></svg>
            Riepilogo del Percorso
          </h4>
          <p>Rileggi dall'inizio gli step didattici e le verifiche della pillola formativa creata.</p>
          <button type="button" class="btn btn-primary btn-sm" onclick="goToStep(0)">
            Torna all'inizio <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"></use></svg>
          </button>
        </div>

        <div class="completion-card">
          <h4>
            <svg class="icon" aria-hidden="true" style="color:var(--terra);"><use href="#i-award"></use></svg>
            Attestato di Completamento
          </h4>
          <p>Visualizza e stampa l'attestato personalizzato A4 per questo modulo.</p>
          <a href="${customCertUrl}" target="_blank" rel="noopener" class="btn btn-terra btn-sm">
            Apri Attestato Ufficiale <svg class="icon" aria-hidden="true"><use href="#i-external"></use></svg>
          </a>
        </div>
      `
    };
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
        btn.title = `Modulo ${idx + 1}: ${step.title}`;

        let iconName = 'file-text';
        if (step.type === 'video') iconName = 'video';
        else if (step.type === 'flashcard') iconName = 'layers';
        else if (step.type === 'game') iconName = 'target';
        else if (step.type === 'reflection') iconName = 'edit';
        else if (step.type === 'quiz') iconName = 'help';
        else if (step.type === 'completion') iconName = 'award';

        let stateIcon = '';
        if (!isUnlocked) {
          stateIcon = `<span class="syllabus-state is-state-locked" title="Modulo bloccato"><svg class="icon" aria-hidden="true"><use href="#i-lock"></use></svg></span>`;
        } else if (isDone) {
          stateIcon = `<span class="syllabus-state is-state-done" style="color:var(--accent);" title="Completato"><svg class="icon" aria-hidden="true"><use href="#i-check"></use></svg></span>`;
        }

        btn.innerHTML = `
          <span class="syllabus-step-num">${idx + 1}</span>
          <span class="step-icon">
            <svg class="icon" aria-hidden="true"><use href="#i-${iconName}"></use></svg>
          </span>
          <span class="syllabus-item-title">${escapeHtml(step.title)}</span>
          ${stateIcon}
        `;

        btn.onclick = () => {
          if (isUnlocked) {
            currentStepIndex = idx;
            renderPlayerUI();
          } else {
            showToast('Questo modulo è bloccato. Completa l\'attività precedente per sbloccarlo.', 'info');
          }
        };

        li.appendChild(btn);
        navList.appendChild(li);
      });

      // Centratura automatica dello step attivo nella barra orizzontale
      const activeItem = navList.querySelector('.syllabus-item.is-active');
      if (activeItem) {
        requestAnimationFrame(() => {
          activeItem.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        });
      }
    }

    // Render Active Step Content
    const step = course.steps[currentStepIndex];
    const contentArea = document.getElementById('lmsStepContent');
    if (!contentArea || !step) return;

    // Record xAPI Learning Experience Statement (deduplicated per step visit)
    const currentStepKey = `${course.id}_step_${currentStepIndex}`;
    if (lastExperiencedStepKey !== currentStepKey) {
      recordXApiStatement('experienced', 'ha fruito', step.title);
      lastExperiencedStepKey = currentStepKey;
    }

    // Add entering animation
    contentArea.classList.remove('is-entering');
    void contentArea.offsetWidth;
    contentArea.classList.add('is-entering');

    const isStepAlreadyDone = completed.has(currentStepIndex);
    let stepHTML = `
      <span class="step-badge">${escapeHtml(step.badge || 'Modulo Didattico')}</span>
      <h3 class="step-title">${escapeHtml(step.title)}</h3>
    `;

    // 1. VIDEO STEP
    if (step.type === 'video') {
      const embedUrl = formatVideoEmbed(step.videoUrl);
      const isVertical = Boolean(step.isVertical || step.format === 'vertical');
      const frameClass = isVertical ? 'video-frame video-vertical' : 'video-frame';

      let unlockBannerHTML = '';
      if (isStepAlreadyDone) {
        unlockBannerHTML = `
          <div class="unlock-banner ok" style="margin-top: 18px;">
            <svg class="icon" aria-hidden="true"><use href="#i-check-circle"></use></svg>
            <div><strong>Modulo completato!</strong> Hai già confermato la visione di questa pillola. Puoi procedere.</div>
          </div>
        `;
      } else {
        unlockBannerHTML = `
          <div class="unlock-banner" style="margin-top: 18px;">
            <svg class="icon" aria-hidden="true"><use href="#i-video"></use></svg>
            <div>Guarda il video e clicca in basso per <strong>sbloccare il modulo successivo</strong>.</div>
          </div>
        `;
      }

      if (embedUrl) {
        const isDirectVideo = embedUrl.endsWith('.mp4') || embedUrl.endsWith('.webm') || embedUrl.endsWith('.mov') || embedUrl.includes('.mp4');
        const mediaTag = isDirectVideo
          ? `<video src="${escapeHtml(embedUrl)}" controls playsinline preload="metadata" style="width:100%; height:100%; object-fit:contain; background:#000;"></video>`
          : `<iframe src="${embedUrl}" title="${escapeHtml(step.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

        stepHTML += `
          <div class="${frameClass}">
            ${mediaTag}
          </div>
          ${step.text ? `<div class="content-panel" style="margin-top: 16px;">${step.text}</div>` : ''}
          ${unlockBannerHTML}
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
          ${step.text ? `<div class="content-panel" style="margin-top: 16px;">${step.text}</div>` : ''}
          ${unlockBannerHTML}
        `;
      }
    }
    // 2. FLASHCARD STEP (Active Retrieval Practice)
    else if (step.type === 'flashcard') {
      stepHTML += `
        <div class="activity-box">
          <div class="activity-meta">
            <span>Microlearning Flashcard</span>
            <span>Consolidamento Attivo</span>
          </div>
          <div class="flashcard-container" onclick="toggleFlashcardFlip(this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleFlashcardFlip(this);}" tabindex="0" role="button" aria-label="Gira la flashcard per verificare la spiegazione">
            <div class="flashcard-card">
              <div class="flashcard-face flashcard-front">
                <span class="flashcard-badge">Concetto da verificare (Clicca per girare)</span>
                <div class="flashcard-text">${step.frontText || ''}</div>
                <div class="flashcard-hint"><svg class="icon" aria-hidden="true"><use href="#i-refresh"></use></svg> Clicca o premi Spazio per girare</div>
              </div>
              <div class="flashcard-face flashcard-back">
                <span class="flashcard-badge">Spiegazione &amp; Approfondimento</span>
                <div class="flashcard-text">${step.backText || ''}</div>
                <div class="flashcard-hint"><svg class="icon" aria-hidden="true"><use href="#i-check"></use></svg> Concetto assimilato</div>
              </div>
            </div>
          </div>
          ${step.tip ? `<p class="form-hint" style="margin-top:10px;">💡 ${escapeHtml(step.tip)}</p>` : ''}
        </div>
        <div class="unlock-banner ${isStepAlreadyDone ? 'ok' : ''}" id="flashcardUnlockBanner">
          <svg class="icon" aria-hidden="true"><use href="#i-${isStepAlreadyDone ? 'check-circle' : 'layers'}"></use></svg>
          <div>${isStepAlreadyDone ? '<strong>Flashcard appresa!</strong> Puoi proseguire o girarla di nuovo per ripassare.' : 'Gira la card per verificare la comprensione e <strong>sbloccare il modulo successivo</strong>.'}</div>
        </div>
      `;
    }
    // 3. TEXT STEP
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
          <div class="feedback-box ${isStepAlreadyDone ? 'ok' : ''}" id="gameFeedback" style="display:${isStepAlreadyDone ? 'block' : 'none'};">
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
    // 5. REFLECTION STEP (Metacognitive Journaling)
    else if (step.type === 'reflection') {
      let savedReflections = {};
      try { savedReflections = JSON.parse(localStorage.getItem('alberto_lms_reflections') || '{}'); } catch(e){}
      const refKey = `${course.id}_step_${currentStepIndex}`;
      const savedVal = savedReflections[refKey] || '';
      const hasEnough = savedVal.trim().length >= 10;

      stepHTML += `
        <div class="activity-box">
          <div class="activity-meta">
            <span>Riflessione Metacognitiva</span>
            <span>Diario di Bordo del Discente</span>
          </div>
          <div class="activity-prompt">${step.prompt || 'Annota qui la tua riflessione personale:'}</div>
          <div class="reflection-box">
            <label for="reflectionInput" class="form-label" style="font-size:0.8rem; color:var(--text-soft);">Le tue annotazioni (salvate automaticamente nel browser):</label>
            <textarea class="form-input reflection-textarea" id="reflectionInput" placeholder="${escapeHtml(step.placeholder || 'Scrivi qui la tua riflessione...')}" oninput="saveReflectionDraft('${refKey}', this.value)">${escapeHtml(savedVal)}</textarea>
            <div class="reflection-actions">
              <span class="form-hint" id="reflectionStatus">${hasEnough ? `✓ Bozza memorizzata in locale (${savedVal.trim().length} caratteri)` : (savedVal ? `Scrivi ancora ${10 - savedVal.trim().length} caratteri per sbloccare` : 'Scrivi almeno 10 caratteri per sbloccare lo step')}</span>
            </div>
          </div>
        </div>
        <div class="unlock-banner ${(isStepAlreadyDone || hasEnough) ? 'ok' : ''}" id="reflectionUnlockBanner">
          <svg class="icon" aria-hidden="true"><use href="#i-${(isStepAlreadyDone || hasEnough) ? 'check-circle' : 'edit'}"></use></svg>
          <div>${(isStepAlreadyDone || hasEnough) ? '<strong>Riflessione memorizzata!</strong> Le tue considerazioni rimangono nel tuo browser.' : 'Scrivi una breve riflessione (minimo 10 caratteri) per <strong>sbloccare lo step successivo</strong>.'}</div>
        </div>
      `;
    }
    // 6. QUIZ STEP (Assessment)
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
          <div class="feedback-box ${isStepAlreadyDone ? 'ok' : ''}" id="quizFeedback" style="display:${isStepAlreadyDone ? 'block' : 'none'};">
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
    // 7. COMPLETION STEP
    else if (step.type === 'completion') {
      // Mark completion step as done automatically
      if (!completed.has(currentStepIndex)) {
        completed.add(currentStepIndex);
        prog.completedSteps = Array.from(completed);
        saveProgress();
        recordXApiStatement('completed', 'ha completato il modulo formativo', course.title, { completion: true });
      }

      const badgeSrc = step.badgeImage || course.badgeImage;
      const badgeHeroHTML = badgeSrc
        ? `
          <div class="completion-badge-showcase">
            <img src="${escapeHtml(badgeSrc)}" alt="Badge di Certificazione" class="completion-badge-img">
          </div>
        `
        : `
          <div class="completion-trophy">
            <svg class="icon" aria-hidden="true"><use href="#i-award"></use></svg>
          </div>
        `;

      const completionMeta = getCourseCompletionMeta(course);
      const infographicUrl = step.infographicUrl || (course && course.infographicUrl);
      const infographicHTML = infographicUrl ? `
        <div class="infographic-box" style="margin: 20px auto 26px auto; max-width: 620px; text-align: center;">
          <p style="font-size: 0.88rem; font-weight: 600; color: var(--text-muted); margin-bottom: 10px; display: inline-flex; align-items: center; justify-content: center; gap: 6px;">
            <svg class="icon" aria-hidden="true" style="color:var(--accent);"><use href="#i-layers"></use></svg>
            ${completionMeta.infographicLabel}
          </p>
          <a href="${escapeHtml(infographicUrl)}" target="_blank" rel="noopener" title="Clicca per ingrandire l'immagine ad alta risoluzione" style="display:block; border-radius:12px; overflow:hidden; box-shadow:var(--shadow); border:1px solid var(--border); background:var(--surface);">
            <img src="${escapeHtml(infographicUrl)}" alt="${escapeHtml(course.title)}" style="max-width:100%; height:auto; display:block; margin:0 auto; border-radius:12px;">
          </a>
          <span style="display:block; font-size:0.78rem; color:var(--text-soft); margin-top:8px;">
            🔍 Clicca sull'immagine per visualizzarla a schermo intero in una nuova scheda
          </span>
        </div>
      ` : '';

      stepHTML += `
        <div class="completion">
          ${badgeHeroHTML}
          <span class="badge badge-green">Competenze Certificate con Successo</span>
          <h3 style="margin-top: 10px;">${escapeHtml(step.title || 'Percorso Concluso!')}</h3>
          <div class="completion-body" style="margin: 14px 0 20px 0; color: var(--text-muted); line-height: 1.6;">
            ${step.text || '<p>Congratulazioni per aver completato con successo l\'intero percorso di microlearning.</p>'}
          </div>

          ${infographicHTML}

          <div class="completion-actions">
            ${completionMeta.cardsHTML}
          </div>
        </div>
      `;
    }

    contentArea.innerHTML = stepHTML;

    // Dynamic height calculation for flashcards so card never overflows text
    if (step.type === 'flashcard') {
      window.adjustCurrentFlashcardHeight();
      setTimeout(window.adjustCurrentFlashcardHeight, 60);
      setTimeout(window.adjustCurrentFlashcardHeight, 300);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(window.adjustCurrentFlashcardHeight);
      }
    }

    // Step Counter and Footer Controls
    const stepNumEl = document.getElementById('currentStepNum');
    const totalNumEl = document.getElementById('totalStepsNum');
    if (stepNumEl) stepNumEl.textContent = currentStepIndex + 1;
    if (totalNumEl) totalNumEl.textContent = totalSteps;

    const btnPrev = document.getElementById('btnPrev');
    if (btnPrev) btnPrev.disabled = (currentStepIndex === 0);

    const btnNext = document.getElementById('btnNext');
    if (btnNext) {
      btnNext.dataset.awaitingFlip = 'false';
      btnNext.dataset.awaitingReflection = 'false';
      const isLastStep = (currentStepIndex === totalSteps - 1);
      const isGameOrQuiz = (step.type === 'game' || step.type === 'quiz');
      const isNextUnlocked = unlocked.has(currentStepIndex + 1);

      if (isLastStep) {
        btnNext.innerHTML = `<svg class="icon" aria-hidden="true"><use href="#i-refresh"></use></svg>Ricomincia Percorso`;
        btnNext.disabled = false;
        btnNext.className = 'btn btn-secondary btn-sm';
        btnNext.onclick = handleRestartCourse;
      } else if (step.type === 'flashcard' && !isStepAlreadyDone && !isNextUnlocked && !flashcardFlippedSteps.has(`${course.id}_step_${currentStepIndex}`)) {
        btnNext.innerHTML = `<svg class="icon" aria-hidden="true"><use href="#i-refresh"></use></svg>Gira la flashcard per proseguire`;
        btnNext.disabled = true;
        btnNext.dataset.awaitingFlip = 'true';
        btnNext.className = 'btn btn-primary btn-sm';
        btnNext.onclick = nextStep;
      } else if (step.type === 'reflection' && !isStepAlreadyDone && !isNextUnlocked) {
        let savedReflections = {};
        try { savedReflections = JSON.parse(localStorage.getItem('alberto_lms_reflections') || '{}'); } catch(e){}
        const savedVal = (savedReflections[`${course.id}_step_${currentStepIndex}`] || '').trim();
        if (savedVal.length < 10) {
          btnNext.innerHTML = `<svg class="icon" aria-hidden="true"><use href="#i-edit"></use></svg>Scrivi una riflessione per proseguire`;
          btnNext.disabled = true;
          btnNext.dataset.awaitingReflection = 'true';
          btnNext.className = 'btn btn-primary btn-sm';
          btnNext.onclick = nextStep;
        } else {
          btnNext.innerHTML = `Continua allo Step Successivo <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"></use></svg>`;
          btnNext.disabled = false;
          btnNext.className = 'btn btn-primary btn-sm';
          btnNext.onclick = nextStep;
        }
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

  // Direct Step Navigation Action
  window.goToStep = function (idx) {
    const course = courses[activeCourseIndex];
    if (!course || !course.steps) return;
    const targetIdx = Math.max(0, Math.min(Number(idx) || 0, course.steps.length - 1));
    currentStepIndex = targetIdx;
    const prog = getCourseProgress(course.id);
    prog.lastStepIndex = currentStepIndex;
    saveProgress();
    renderPlayerUI();
    const content = document.getElementById('lmsStepContent');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  // Recruiter Mode: Unlock All Steps Instantly for HR Reviews
  window.unlockAllRecruiterMode = function () {
    courses.forEach(c => {
      if (c && c.steps) {
        const p = getCourseProgress(c.id);
        const allIdx = c.steps.map((_, i) => i);
        p.unlockedSteps = allIdx;
        p.completedSteps = allIdx;
      }
    });
    saveProgress();
    setLmsMode('player');
    const btn = document.getElementById('btnRecruiterUnlock');
    if (btn) btn.classList.add('is-unlocked');
    renderPlayerUI();
    showToast('🔓 Modalità Recruiter attiva: tutti i moduli e l\'attestato sono stati sbloccati per la consultazione rapida!', 'success');
  };

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
      const flashTag = (step.type === 'flashcard') ? '<span class="tag-video" style="background:rgba(42,92,69,0.15);color:var(--accent);">🃏 Flashcard</span>' : '';
      const refTag = (step.type === 'reflection') ? '<span class="tag-video" style="background:rgba(169,77,46,0.15);color:var(--terra);">✍️ Riflessione</span>' : '';

      li.innerHTML = `
        <span class="step-row-num">${idx + 1}.</span>
        <div class="step-row-main">
          <div class="step-row-title">${escapeHtml(step.title)}</div>
          <div class="step-row-type">
            <span>[${step.type.toUpperCase()}] ${escapeHtml(step.badge || '')}</span>
            ${videoTag}${flashTag}${refTag}
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

  // Delete Step with Safety Bounds Check
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
    } else if (type === 'flashcard') {
      newStep.title = `${stepNum}. Flashcard: Concetto Chiave`;
      newStep.badge = `Fase ${stepNum} · Flashcard`;
      newStep.frontText = 'Domanda o concetto chiave da verificare';
      newStep.backText = 'Spiegazione concettuale e approfondimento didattico';
      newStep.tip = 'Gira la card per verificare la spiegazione.';
    } else if (type === 'game') {
      newStep.scenario = '🎯 <strong>Scenario di prova:</strong> Come risolveresti questa situazione applicativa?';
      newStep.options = [
        { text: 'Opzione A (Corretta)', correct: true, feedback: '🎉 Ottimo! Decisione pedagogicamente corretta.' },
        { text: 'Opzione B (Errata)', correct: false, feedback: '❌ Non appropriato per questo scenario. Riprova!' }
      ];
    } else if (type === 'reflection') {
      newStep.title = `${stepNum}. Riflessione Metacognitiva`;
      newStep.badge = `Fase ${stepNum} · Diario di Bordo`;
      newStep.prompt = '✍️ <strong>Spazio di Auto-Valutazione:</strong> Quali considerazioni operative puoi trarre da questa fase per la tua pratica?';
      newStep.placeholder = 'Scrivi qui la tua riflessione personale...';
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
          type: 'flashcard',
          title: '3. Flashcard di Consolidamento',
          badge: 'Fase 3 · Flashcard',
          frontText: 'Concetto chiave da memorizzare',
          backText: 'Definizione ed esempi pratici',
          tip: 'Clicca per verificare la spiegazione.'
        },
        {
          type: 'game',
          title: '4. Gioco Didattico a Bivi',
          badge: 'Fase 4 · Scenario Applicativo',
          scenario: '🎯 <strong>Scenario applicativo:</strong> Come risolveresti questo dilemma?',
          options: [
            { text: 'Scelta Ragionata (Corretta)', correct: true, feedback: '🎉 Corretto!' },
            { text: 'Scelta Istintiva (Errata)', correct: false, feedback: '❌ Riprova con metodo.' }
          ]
        },
        {
          type: 'reflection',
          title: '5. Diario di Bordo',
          badge: 'Fase 5 · Riflessione',
          prompt: 'Qual è il takeaway principale di questa pillola per te?',
          placeholder: 'Annota le tue considerazioni...'
        },
        {
          type: 'quiz',
          title: '6. Quiz di Valutazione',
          badge: 'Fase 6 · Verifica',
          question: 'Qual è il punto chiave di questa pillola didattica?',
          options: [
            { text: 'Risposta Esatta', correct: true, feedback: '✅ Esatto!' },
            { text: 'Risposta Errata', correct: false, feedback: '❌ Errato!' }
          ]
        },
        {
          type: 'completion',
          title: '7. Completamento & Attestato',
          badge: 'Fase 7 · Conclusione',
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

  // Reset to Defaults (solves Bug: deep clone + cleanup)
  window.handleResetCourses = async function () {
    const ok = window.ui ? await window.ui.confirm({
      title: 'Ripristina Corsi Predefiniti',
      message: 'Vuoi ripristinare i corsi originali? Tutte le pillole create e le modifiche salvate localmente nella sandbox verranno azzerate.',
      confirmText: 'Ripristina Tutto',
      danger: true
    }) : confirm('Vuoi ripristinare i corsi predefiniti?');

    if (!ok) return;

    localStorage.removeItem('alberto_lms_courses');
    localStorage.removeItem('alberto_lms_progress');
    localStorage.removeItem('alberto_lms_reflections');

    try {
      const res = await fetch('courses.json');
      if (res.ok) {
        const remote = await res.json();
        if (Array.isArray(remote) && remote.length > 0) {
          courses = remote;
        } else {
          courses = JSON.parse(JSON.stringify(defaultCourses));
        }
      } else {
        courses = JSON.parse(JSON.stringify(defaultCourses));
      }
    } catch (e) {
      courses = JSON.parse(JSON.stringify(defaultCourses));
    }

    courseProgress = {};
    activeCourseIndex = 0;
    currentStepIndex = 0;

    renderCourseSelector();
    renderPlayerUI();
    renderEditorUI();
    showToast('Corsi e progressi ripristinati con successo.', 'success');
  };

  // Export JSON (generates courses.json ready to replace in repository)
  window.exportCoursesJSON = function () {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(courses, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', 'courses.json');
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    showToast('File courses.json scaricato! Sostituiscilo nella cartella del repository per aggiornare i corsi ufficiali.', 'success');
  };

  // Pure-JS Zero-Dependency ZIP Builder (PKWARE STORE method 0, IEEE CRC-32)
  function crc32Bytes(bytes) {
    let crc = 0xffffffff;
    for (let i = 0; i < bytes.length; i++) {
      crc ^= bytes[i];
      for (let j = 0; j < 8; j++) {
        crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
      }
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function buildZipBlob(files) {
    const enc = new TextEncoder();
    const localParts = [];
    const centralParts = [];
    let offset = 0;

    files.forEach((f) => {
      const nameBytes = enc.encode(f.name);
      const dataBytes = typeof f.content === 'string' ? enc.encode(f.content) : f.content;
      const crc = crc32Bytes(dataBytes);
      const size = dataBytes.length;

      const localHeader = new Uint8Array(30 + nameBytes.length);
      const lv = new DataView(localHeader.buffer);
      lv.setUint32(0, 0x04034b50, true);
      lv.setUint16(4, 20, true);
      lv.setUint16(6, 0x0800, true);
      lv.setUint16(8, 0, true);
      lv.setUint16(10, 0, true);
      lv.setUint16(12, 0x5921, true);
      lv.setUint32(14, crc, true);
      lv.setUint32(18, size, true);
      lv.setUint32(22, size, true);
      lv.setUint16(26, nameBytes.length, true);
      lv.setUint16(28, 0, true);
      localHeader.set(nameBytes, 30);

      localParts.push(localHeader, dataBytes);

      const cdHeader = new Uint8Array(46 + nameBytes.length);
      const cv = new DataView(cdHeader.buffer);
      cv.setUint32(0, 0x02014b50, true);
      cv.setUint16(4, 20, true);
      cv.setUint16(6, 20, true);
      cv.setUint16(8, 0x0800, true);
      cv.setUint16(10, 0, true);
      cv.setUint16(12, 0, true);
      cv.setUint16(14, 0x5921, true);
      cv.setUint32(16, crc, true);
      cv.setUint32(20, size, true);
      cv.setUint32(24, size, true);
      cv.setUint16(28, nameBytes.length, true);
      cv.setUint16(30, 0, true);
      cv.setUint16(32, 0, true);
      cv.setUint16(34, 0, true);
      cv.setUint16(36, 0, true);
      cv.setUint32(38, 0, true);
      cv.setUint32(42, offset, true);
      cdHeader.set(nameBytes, 46);

      centralParts.push(cdHeader);
      offset += localHeader.length + dataBytes.length;
    });

    const cdSize = centralParts.reduce((acc, p) => acc + p.length, 0);
    const eocd = new Uint8Array(22);
    const ev = new DataView(eocd.buffer);
    ev.setUint32(0, 0x06054b50, true);
    ev.setUint16(4, 0, true);
    ev.setUint16(6, 0, true);
    ev.setUint16(8, files.length, true);
    ev.setUint16(10, files.length, true);
    ev.setUint32(12, cdSize, true);
    ev.setUint32(16, offset, true);
    ev.setUint16(20, 0, true);

    return new Blob([...localParts, ...centralParts, eocd], { type: 'application/zip' });
  }

  function escapeXml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  // Export Active Course as Real SCORM 1.2 (.zip) Package
  window.exportScorm12Package = function () {
    const course = courses[activeCourseIndex];
    if (!course) return;

    const slug = (course.id || 'modulo-scorm').replace(/[^a-zA-Z0-9_-]/g, '_');
    const manifestId = `MANIFEST_${slug}`;
    const orgId = `ORG_${slug}`;
    const itemId = `ITEM_${slug}`;
    const resId = `RES_${slug}`;

    const imsmanifest = `<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="${escapeXml(manifestId)}" version="1.0"
  xmlns="http://www.imsproject.org/xsd/imscp_rootv1p1p2"
  xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_rootv1p2"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd">
  <metadata>
    <schema>ADL SCORM</schema>
    <schemaversion>1.2</schemaversion>
  </metadata>
  <organizations default="${escapeXml(orgId)}">
    <organization identifier="${escapeXml(orgId)}">
      <title>${escapeXml(course.title)}</title>
      <item identifier="${escapeXml(itemId)}" identifierref="${escapeXml(resId)}" isvisible="true">
        <title>${escapeXml(course.title)}</title>
      </item>
    </organization>
  </organizations>
  <resources>
    <resource identifier="${escapeXml(resId)}" type="webcontent" adlcp:scormtype="sco" href="index.html">
      <file href="index.html"/>
    </resource>
  </resources>
</manifest>`;

    const serializedCourse = JSON.stringify(course).replace(/<\//g, '<\\/');
    const scoHtml = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(course.title)} · SCORM 1.2</title>
  <style>
    :root { --bg:#faf8f4; --surf:#fff; --surf2:#f3efe7; --txt:#1d211f; --muted:#4d524e; --acc:#2a5c45; --terra:#a94d2e; --bdr:#e2ddd2; }
    * { box-sizing:border-box; margin:0; padding:0; }
    body { font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; background:var(--bg); color:var(--txt); padding:20px 14px 40px; line-height:1.6; }
    .wrap { max-width:760px; margin:0 auto; background:var(--surf); border:1px solid var(--bdr); border-radius:16px; overflow:hidden; box-shadow:0 8px 28px rgba(0,0,0,0.06); }
    .head { background:#1a1f1c; color:#fff; padding:16px 22px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; }
    .head h1 { font-size:1.05rem; font-weight:700; }
    .pill { font-size:0.72rem; font-weight:700; padding:3px 10px; border-radius:999px; background:rgba(109,187,147,0.2); color:#8fd0ae; }
    .bar { height:5px; background:var(--surf2); }
    .bar-fill { height:100%; background:var(--acc); width:0%; transition:width 0.3s ease; }
    .body { padding:26px 24px; min-height:280px; }
    .tag { display:inline-block; font-size:0.72rem; font-weight:700; text-transform:uppercase; color:var(--terra); margin-bottom:8px; }
    h2 { font-size:1.3rem; margin-bottom:14px; }
    p, li { color:var(--muted); margin-bottom:10px; }
    ul { padding-left:20px; margin-bottom:12px; }
    .opt { display:block; width:100%; text-align:left; padding:12px 14px; margin-bottom:8px; border:1.5px solid var(--bdr); border-radius:10px; background:var(--surf); cursor:pointer; font:inherit; color:var(--txt); }
    .opt:hover { border-color:var(--acc); background:#eaf3ed; }
    .opt.ok { border-color:#17703a; background:#e8f5ec; }
    .opt.err { border-color:#b42318; background:#fdf0ee; }
    .fb { margin-top:12px; padding:12px 14px; border-radius:10px; background:var(--surf2); font-size:0.9rem; display:none; }
    .card { padding:22px; border-radius:12px; background:var(--surf2); border:1.5px solid var(--bdr); cursor:pointer; text-align:center; }
    textarea { width:100%; min-height:110px; padding:12px; border-radius:10px; border:1px solid var(--bdr); font:inherit; margin-top:8px; }
    .foot { padding:14px 24px; border-top:1px solid var(--bdr); background:var(--surf2); display:flex; justify-content:space-between; align-items:center; gap:10px; }
    .btn { padding:9px 16px; border-radius:8px; border:none; font:inherit; font-weight:600; cursor:pointer; background:var(--acc); color:#fff; }
    .btn.sec { background:var(--surf); color:var(--txt); border:1px solid var(--bdr); }
    .btn:disabled { opacity:0.45; cursor:not-allowed; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="head">
      <h1>${escapeHtml(course.title)}</h1>
      <span class="pill" id="scormStatus">SCORM 1.2</span>
    </div>
    <div class="bar"><div class="bar-fill" id="barFill"></div></div>
    <div class="body" id="content"></div>
    <div class="foot">
      <button class="btn sec" id="btnPrev">← Precedente</button>
      <span id="counter" style="font-size:0.84rem;color:var(--muted);"></span>
      <button class="btn" id="btnNext">Continua →</button>
    </div>
  </div>
  <script>
    const COURSE = ${serializedCourse};
    let idx = 0, flipped = false, answered = false, api = null;

    function findAPI(win) {
      let tries = 0;
      while (win && !win.API && win.parent && win.parent !== win && tries++ < 10) win = win.parent;
      return (win && win.API) ? win.API : (window.opener && window.opener.API ? window.opener.API : null);
    }

    function initScorm() {
      api = findAPI(window);
      const badge = document.getElementById('scormStatus');
      if (api) {
        api.LMSInitialize('');
        api.LMSSetValue('cmi.core.lesson_status', 'incomplete');
        api.LMSSetValue('cmi.core.score.min', '0');
        api.LMSSetValue('cmi.core.score.max', '100');
        api.LMSCommit('');
        badge.textContent = 'SCORM 1.2 · API Connessa';
      } else {
        badge.textContent = 'SCORM 1.2 · Anteprima Locale';
      }
    }

    function syncScorm() {
      if (!api) return;
      const pct = Math.round(((idx + 1) / COURSE.steps.length) * 100);
      api.LMSSetValue('cmi.core.lesson_location', String(idx));
      api.LMSSetValue('cmi.core.score.raw', String(pct));
      if (idx === COURSE.steps.length - 1) api.LMSSetValue('cmi.core.lesson_status', 'completed');
      api.LMSCommit('');
    }

    function render() {
      const s = COURSE.steps[idx];
      flipped = false; answered = false;
      const pct = Math.round(((idx + 1) / COURSE.steps.length) * 100);
      document.getElementById('barFill').style.width = pct + '%';
      document.getElementById('counter').textContent = 'Step ' + (idx + 1) + ' di ' + COURSE.steps.length;
      document.getElementById('btnPrev').disabled = idx === 0;
      const nextBtn = document.getElementById('btnNext');
      nextBtn.textContent = idx === COURSE.steps.length - 1 ? 'Completato ✓' : 'Continua →';
      nextBtn.disabled = (s.type === 'quiz' || s.type === 'game');

      const box = document.getElementById('content');
      let html = '<span class="tag">' + (s.badge || s.type) + '</span><h2>' + (s.title || '') + '</h2>';
      if (s.type === 'text' || s.type === 'completion') {
        html += '<div>' + (s.text || '') + '</div>';
      } else if (s.type === 'video') {
        html += '<p><strong>' + (s.videoTitle || 'Risorsa video') + '</strong> (' + (s.videoDuration || '') + ')</p>' +
          (s.text ? '<div>' + s.text + '</div>' : '') +
          '<p style="font-size:0.85rem;margin-top:10px;">Sorgente video: <code>' + (s.videoUrl || 'non collegata') + '</code></p>';
      } else if (s.type === 'flashcard') {
        html += '<div class="card" id="fcCard"><strong>' + (s.frontText || '') + '</strong><p style="font-size:0.8rem;margin-top:10px;">(Clicca per girare la flashcard)</p></div>';
      } else if (s.type === 'reflection') {
        html += '<p>' + (s.prompt || s.scenario || '') + '</p><textarea placeholder="' + (s.placeholder || 'Scrivi qui...') + '"></textarea>';
      } else if (s.type === 'quiz' || s.type === 'game') {
        html += '<p>' + (s.question || s.scenario || '') + '</p><div id="opts"></div><div class="fb" id="fb"></div>';
      }
      box.innerHTML = html;

      if (s.type === 'flashcard') {
        const card = document.getElementById('fcCard');
        card.onclick = () => {
          flipped = !flipped;
          card.innerHTML = flipped
            ? '<div><strong>Risposta:</strong><br><br>' + (s.backText || '') + '</div>'
            : '<strong>' + (s.frontText || '') + '</strong><p style="font-size:0.8rem;margin-top:10px;">(Clicca per girare la flashcard)</p>';
        };
      }
      if (s.type === 'quiz' || s.type === 'game') {
        const optsEl = document.getElementById('opts');
        const fbEl = document.getElementById('fb');
        (s.options || []).forEach((o) => {
          const b = document.createElement('button');
          b.className = 'opt';
          b.textContent = o.text;
          b.onclick = () => {
            optsEl.querySelectorAll('.opt').forEach(x => x.classList.remove('ok', 'err'));
            b.classList.add(o.correct ? 'ok' : 'err');
            fbEl.style.display = 'block';
            fbEl.innerHTML = o.feedback || (o.correct ? 'Corretto!' : 'Riprova!');
            if (o.correct) { answered = true; nextBtn.disabled = false; }
          };
          optsEl.appendChild(b);
        });
      }
      syncScorm();
    }

    document.getElementById('btnPrev').onclick = () => { if (idx > 0) { idx--; render(); } };
    document.getElementById('btnNext').onclick = () => {
      if (idx < COURSE.steps.length - 1) { idx++; render(); }
      else if (api) { api.LMSSetValue('cmi.core.lesson_status', 'completed'); api.LMSCommit(''); }
    };
    window.addEventListener('beforeunload', () => { if (api) api.LMSFinish(''); });
    initScorm();
    render();
  </script>
</body>
</html>`;

    const blob = buildZipBlob([
      { name: 'imsmanifest.xml', content: imsmanifest },
      { name: 'index.html', content: scoHtml }
    ]);

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SCORM12_${slug}.zip`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    showToast(`📦 Pacchetto SCORM 1.2 "${a.download}" generato (pronto per Moodle / TalentLMS)!`, 'success');
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
        if (!Array.isArray(parsed) || parsed.length === 0) {
          throw new Error('Il file deve contenere un elenco di pillole formative.');
        }
        for (let i = 0; i < parsed.length; i++) {
          const c = parsed[i];
          if (!c.id || !c.title || !Array.isArray(c.steps) || c.steps.length === 0) {
            throw new Error(`La pillola #${i + 1} (${c.title || 'senza titolo'}) non ha una struttura valida.`);
          }
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
        showToast(`Errore nell'importazione: ${err.message || 'File JSON non conforme.'}`, 'error');
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
    // FLASHCARD FIELDS
    else if (step.type === 'flashcard') {
      fieldsHTML += `
        <div class="form-group">
          <label class="form-label" for="m_frontText">Fronte della Card (Domanda / Concetto):</label>
          <textarea class="form-input" id="m_frontText" style="min-height:80px;">${escapeHtml(step.frontText || '')}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label" for="m_backText">Retro della Card (Spiegazione / Risposta):</label>
          <textarea class="form-input" id="m_backText" style="min-height:100px;">${escapeHtml(step.backText || '')}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label" for="m_tip">Suggerimento / Istruzione per il discente:</label>
          <input type="text" class="form-input" id="m_tip" value="${escapeHtml(step.tip || '')}">
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
    // REFLECTION FIELDS
    else if (step.type === 'reflection') {
      fieldsHTML += `
        <div class="form-group">
          <label class="form-label" for="m_prompt">Prompt di Riflessione / Domanda-Guida:</label>
          <textarea class="form-input" id="m_prompt" style="min-height:90px;">${escapeHtml(step.prompt || '')}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label" for="m_placeholder">Placeholder per il diario del discente:</label>
          <input type="text" class="form-input" id="m_placeholder" value="${escapeHtml(step.placeholder || '')}">
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
      const isDirect = embed.endsWith('.mp4') || embed.endsWith('.webm') || embed.includes('.mp4');
      const media = isDirect
        ? `<video src="${escapeHtml(embed)}" controls playsinline style="width:100%; height:100%; object-fit:contain; background:#000;"></video>`
        : `<iframe src="${embed}" style="width:100%; height:100%; border:0;" allowfullscreen></iframe>`;
      previewContainer.innerHTML = `
        <div style="position:relative; aspect-ratio:16/9; max-height:200px; border-radius:8px; overflow:hidden; border:1px solid var(--border); margin-top:10px; background:#000;">
          ${media}
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
    } else if (step.type === 'flashcard') {
      const frontEl = document.getElementById('m_frontText');
      const backEl = document.getElementById('m_backText');
      const tipEl = document.getElementById('m_tip');
      if (frontEl) step.frontText = frontEl.value.trim();
      if (backEl) step.backText = backEl.value.trim();
      if (tipEl) step.tip = tipEl.value.trim();
    } else if (step.type === 'text') {
      const textEl = document.getElementById('m_text');
      if (textEl) step.text = textEl.value;
    } else if (step.type === 'game') {
      const scenEl = document.getElementById('m_scenario');
      if (scenEl) step.scenario = scenEl.value;
      step.options = JSON.parse(JSON.stringify(modalTempOptions));
    } else if (step.type === 'reflection') {
      const promptEl = document.getElementById('m_prompt');
      const phEl = document.getElementById('m_placeholder');
      if (promptEl) step.prompt = promptEl.value;
      if (phEl) step.placeholder = phEl.value.trim();
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

    const completionMeta = getCourseCompletionMeta(course);
    const certUrl = completionMeta.certUrl;

    const today = new Date().toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
    const badgeImg = course.badgeImage || (course.steps && course.steps.find(s => s.badgeImage)?.badgeImage);
    const badgeModalHTML = badgeImg
      ? `<img src="${escapeHtml(badgeImg)}" alt="Badge Certificato" style="width:115px; height:auto; margin:0 auto 12px auto; display:block; filter:drop-shadow(0 6px 16px rgba(0,0,0,0.18));">`
      : '';

    body.innerHTML = `
      <div style="text-align:center; padding:20px 16px; border:2px solid var(--accent); border-radius:14px; background:var(--surface-2);">
        ${badgeModalHTML}
        <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--accent); font-weight:700; margin-bottom:6px;">
          ${completionMeta.certLabel}
        </div>
        <h3 style="font-family:var(--font-serif); font-size:1.45rem; color:var(--text); margin-bottom:12px;">
          ${escapeHtml(course.title)}
        </h3>
        <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.6; margin-bottom:14px;">
          ${completionMeta.certModalText}
        </p>
        <div style="margin-bottom:16px;">
          <a href="${certUrl}" target="_blank" rel="noopener" class="btn btn-terra btn-sm" style="display:inline-flex; align-items:center; gap:8px;">
            🎓 Apri Pagina Attestato A4 da Stampare / Salvare PDF
          </a>
        </div>
        <div style="font-size:0.82rem; color:var(--text-soft); border-top:1px dashed var(--border); padding-top:12px;">
          Rilasciato per: <strong>Discente del Portfolio</strong><br>
          Progettazione: <strong>Alberto Bedeschi</strong> · Reggio Emilia<br>
          Data di emissione: <strong>${today}</strong>
        </div>
      </div>
    `;

    const footerLink = modal.querySelector('.ui-dialog-foot a');
    if (footerLink) {
      footerLink.href = certUrl;
    }

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
    const course = courses[activeCourseIndex];
    const completionMeta = getCourseCompletionMeta(course);
    window.open(completionMeta.certUrl, '_blank');
  };

  // Learning Analytics & Progress Modal
  window.openAnalyticsModal = function () {
    const modal = document.getElementById('analyticsModal');
    const body = document.getElementById('analyticsModalBody');
    if (!modal || !body) return;

    loadProgress();
    let savedReflections = {};
    try { savedReflections = JSON.parse(localStorage.getItem('alberto_lms_reflections') || '{}'); } catch(e){}
    let xapiLog = [];
    try { xapiLog = JSON.parse(localStorage.getItem('alberto_lms_xapi_log') || '[]'); } catch(e){}

    const totalCourses = courses.length;
    let completedCoursesCount = 0;
    let totalCompletedSteps = 0;

    courses.forEach(c => {
      const p = getCourseProgress(c.id);
      const isComplete = p.completedSteps && p.completedSteps.length >= c.steps.length;
      if (isComplete) completedCoursesCount++;
      if (p.completedSteps) totalCompletedSteps += p.completedSteps.length;
    });

    const reflectionEntries = Object.entries(savedReflections).filter(([k, v]) => v && v.trim().length > 0);

    body.innerHTML = `
      <div class="analytics-stats-grid">
        <div class="analytics-stat-card">
          <span class="analytics-stat-num">${completedCoursesCount}/${totalCourses}</span>
          <span class="analytics-stat-label">Pillole Concluse</span>
        </div>
        <div class="analytics-stat-card">
          <span class="analytics-stat-num">${totalCompletedSteps}</span>
          <span class="analytics-stat-label">Step Superati</span>
        </div>
        <div class="analytics-stat-card">
          <span class="analytics-stat-num">${reflectionEntries.length}</span>
          <span class="analytics-stat-label">Diari Compilati</span>
        </div>
        <div class="analytics-stat-card">
          <span class="analytics-stat-num">${xapiLog.length}</span>
          <span class="analytics-stat-label">Statement xAPI</span>
        </div>
      </div>

      <div class="analytics-section-title">
        <svg class="icon" aria-hidden="true" style="color:var(--terra);"><use href="#i-edit"></use></svg>
        <span>Diario di Bordo &amp; Riflessioni Metacognitive</span>
      </div>
      ${reflectionEntries.length === 0
        ? '<p style="font-size:0.88rem; color:var(--text-soft); font-style:italic;">Nessuna riflessione ancora annotata. Esplora i moduli per scrivere le tue considerazioni.</p>'
        : reflectionEntries.map(([k, text]) => `
            <div class="analytics-journal-item">
              <div class="analytics-journal-head">${escapeHtml(k.replace('_', ' · '))}</div>
              <div>${escapeHtml(text)}</div>
            </div>
          `).join('')
      }

      <div class="analytics-section-title">
        <svg class="icon" aria-hidden="true" style="color:var(--accent);"><use href="#i-layers"></use></svg>
        <span>Ultime Interazioni Tracciate (Simulazione xAPI)</span>
      </div>
      ${xapiLog.length === 0
        ? '<p style="font-size:0.88rem; color:var(--text-soft); font-style:italic;">Nessuno statement registrato. Naviga nei corsi per generare Learning Analytics.</p>'
        : `
          <ul class="analytics-xapi-list">
            ${xapiLog.slice(-5).reverse().map(stmt => `
              <li class="analytics-xapi-item">
                <span><strong>${escapeHtml(stmt.verb?.display?.['it-IT'] || stmt.verb?.id || '')}</strong>: ${escapeHtml(stmt.object?.definition?.name?.['it-IT'] || '')}</span>
                <span style="color:var(--text-soft);">${new Date(stmt.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </li>
            `).join('')}
          </ul>
        `
      }
    `;

    if (modal.showModal) modal.showModal();
    else modal.setAttribute('open', '');
  };

  window.closeAnalyticsModal = function () {
    const modal = document.getElementById('analyticsModal');
    if (!modal) return;
    if (modal.close) modal.close();
    else modal.removeAttribute('open');
  };

})();
