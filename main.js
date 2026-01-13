// ==================== PORTFOLIO ANDREA PIRAZZINI ====================
// File JavaScript principale - Contiene tutte le funzionalità del sito

// ==================== TRADUZIONI (Italiano/Inglese) ====================
// Oggetto che contiene tutte le traduzioni del sito
const traduzioni = {
    it: {
        'nav-contact': 'Contatti',
        'home-title': 'Ciao, sono Andrea Pirazzini',
        'home-tagline': 'Aspiring AI Specialist & Web Developer',
        'home-description': 'Trasformo idee in soluzioni intelligenti attraverso l\'intelligenza artificiale e lo sviluppo web moderno.',
        'btn-contact': 'Contattami',
        'btn-resume': 'Vedi Resume',
        'about-title': 'CHI SONO',
        'about-bg-title': 'Background',
        'about-bg-p1': 'Mi chiamo <strong>Andrea Pirazzini</strong> e sono un aspirante <strong>AI Specialist</strong>. La mia passione per la tecnologia è nata nel mondo del <strong>gaming competitivo</strong>, dove ho imparato l\'importanza dell\'ottimizzazione e del pensiero strategico.',
        'about-bg-p2': 'Durante anni di competizioni online, ho sviluppato una mentalità orientata al problem-solving e all\'analisi delle performance. Ogni partita era un\'opportunità per ottimizzare strategie, studiare pattern e migliorare continuamente.',
        'about-bg-p3': 'Oggi applico queste competenze nello sviluppo di soluzioni basate sull\'intelligenza artificiale e nella creazione di applicazioni web moderne e performanti. La stessa dedizione che mettevo nel perfezionare le mie abilità di gioco la porto ora nel codice e nell\'apprendimento delle tecnologie più innovative.',
        'about-bg-p4': 'Il mio percorso autodidatta mi ha insegnato l\'importanza della curiosità, della perseveranza e della capacità di imparare autonomamente da risorse online, documentazione tecnica e progetti pratici.',
        'about-goals-title': 'Obiettivi Professionali',
        'about-goals-p1': 'Il mio obiettivo principale è diventare un <strong>programmatore AI full-stack</strong>, capace di gestire l\'intero ciclo di vita di un prodotto: dall\'ideazione di servizi SaaS innovativi alla loro implementazione e manutenzione.',
        'about-goals-p2': 'Voglio specializzarmi nella creazione di <strong>soluzioni intelligenti</strong> che combinano:',
        'about-goals-li1': '<strong>Machine Learning e NLP</strong> - Per chatbot avanzati e sistemi di comprensione del linguaggio',
        'about-goals-li2': '<strong>Architetture Cloud-Native</strong> - Scalabilità e affidabilità dei servizi',
        'about-goals-li3': '<strong>Full-Stack Development</strong> - Dalla UI/UX fino ai database e API',
        'about-goals-li4': '<strong>DevOps e CI/CD</strong> - Automazione e deployment continuo',
        'about-goals-p3': 'Il mio focus è sulla <strong>creazione di valore reale</strong> attraverso la tecnologia, sviluppando prodotti che risolvono problemi concreti per le aziende e migliorano l\'esperienza degli utenti.',
        'about-interests-title': 'Aree di Interesse',
        'about-interests-p1': 'Le mie passioni tecnologiche spaziano attraverso diverse aree dell\'informatica moderna, con un focus particolare sull\'intelligenza artificiale e lo sviluppo full-stack.',
        'interest-1-title': 'Machine Learning',
        'interest-1-desc': 'Sviluppo di modelli predittivi e sistemi di raccomandazione',
        'interest-2-title': 'Deep Learning',
        'interest-2-desc': 'Reti neurali per computer vision e NLP',
        'interest-3-title': 'Full-Stack Development',
        'interest-3-desc': 'Architetture moderne con React, Node.js e Python',
        'interest-4-title': 'Cloud Computing',
        'interest-4-desc': 'Deployment e scaling su piattaforme cloud',
        'interest-5-title': 'Performance Optimization',
        'interest-5-desc': 'Analisi e miglioramento delle performance applicative',
        'interest-6-title': 'Open Source',
        'interest-6-desc': 'Contribuzione a progetti e condivisione della conoscenza',
        'resume-title': 'RESUME',
        'resume-formation-title': 'Percorso Formativo',
        'resume-formation-p1': 'Il mio approccio all\'apprendimento è <strong>completamente autodidatta</strong>, basato su un mix di curiosità, passione e costante sperimentazione pratica. Ogni giorno è un\'opportunità per esplorare nuove tecnologie e affinare le competenze nel mondo dell\'<strong>intelligenza artificiale</strong> e dello <strong>sviluppo full-stack</strong>.',
        'resume-formation-p2': 'La mia formazione non si limita alla teoria: preferisco imparare costruendo progetti reali, affrontando sfide concrete e risolvendo problemi autentici. Questa metodologia pratica mi ha permesso di sviluppare una comprensione profonda delle tecnologie che utilizzo e una mentalità orientata alla risoluzione creativa dei problemi.',
        'resume-project-badge': 'PROGETTO DI PUNTA',
        'resume-project-title': 'ThinkAIChat',
        'resume-project-subtitle': 'Piattaforma di Intelligenza Artificiale Conversazionale Multi-Canale',
        'resume-feature1-title': 'Assistente Virtuale Multi-Piattaforma',
        'resume-feature1-li1': 'Integrazione nativa con Web, E-commerce, Instagram, WhatsApp e Facebook',
        'resume-feature1-li2': 'Memoria conversazionale persistente con riconoscimento utente e mantenimento del contesto',
        'resume-feature1-li3': 'Campagne di marketing automatizzate su WhatsApp con supporto multimedia completo',
        'resume-feature1-li4': 'Sistema di vendita diretta integrato su tutti i canali disponibili',
        'resume-feature1-li5': 'Connettori per le principali piattaforme e-commerce: Shopify, WooCommerce, Prestashop e Magento',
        'resume-feature1-li6': 'Gestione intelligente degli appuntamenti tramite Google Calendar con promemoria automatici',
        'resume-feature2-title': 'Centralino Virtuale con Sintesi Vocale Avanzata',
        'resume-feature2-li1': 'Voce sintetizzata altamente naturale per conversazioni fluide e professionali',
        'resume-feature2-li2': 'Gestione autonoma di ordini e consultazione del catalogo prodotti',
        'resume-feature2-li3': 'Sistema di prenotazioni automatizzato con sincronizzazione Google Calendar',
        'resume-feature2-li4': 'Trascrizioni automatiche e database consultabile di tutte le conversazioni',
        'resume-feature2-li5': 'Dashboard analytics con metriche dettagliate e insights strategici',
        'resume-tech-title': 'Tecnologie Utilizzate',
        'resume-skills-title': 'Competenze Tecniche',
        'skill-cat1-title': 'Intelligenza Artificiale & Machine Learning',
        'skill-cat2-title': 'E-commerce & Integrazioni',
        'skill-cat3-title': 'Sviluppo Full-Stack',
        'skill-cat4-title': 'Database & Cloud Computing',
        'contact-title': 'Contattami',
        'contact-description': 'Hai un progetto in mente o vuoi semplicemente fare due chiacchiere? Compila il form qui sotto o contattami sui social!',
        'contact-name-label': 'Nome Completo',
        'contact-name-placeholder': 'Il tuo nome',
        'contact-email-label': 'Email',
        'contact-email-placeholder': 'La tua email',
        'contact-subject-label': 'Oggetto',
        'contact-subject-placeholder': 'Di cosa vuoi parlare?',
        'contact-message-label': 'Messaggio',
        'contact-message-placeholder': 'Scrivi qui il tuo messaggio...',
        'contact-btn-send': 'Invia Messaggio',
        'contact-success': 'Grazie! Il tuo messaggio è stato inviato con successo.',
        'footer-rights': '© 2025 Andrea Pirazzini. Tutti i diritti riservati.',
        'footer-made': 'Realizzato con HTML, CSS e JavaScript'
    },
    en: {
        'nav-contact': 'Contact',
        'home-title': 'Hi, I\'m Andrea Pirazzini',
        'home-tagline': 'Aspiring AI Specialist & Web Developer',
        'home-description': 'I transform ideas into intelligent solutions through artificial intelligence and modern web development.',
        'btn-contact': 'Contact Me',
        'btn-resume': 'View Resume',
        'about-title': 'ABOUT ME',
        'about-bg-title': 'Background',
        'about-bg-p1': 'My name is <strong>Andrea Pirazzini</strong> and I\'m an aspiring <strong>AI Specialist</strong>. My passion for technology was born in the world of <strong>competitive gaming</strong>, where I learned the importance of optimization and strategic thinking.',
        'about-bg-p2': 'During years of online competitions, I developed a problem-solving mindset and performance analysis skills. Every match was an opportunity to optimize strategies, study patterns, and continuously improve.',
        'about-bg-p3': 'Today I apply these skills in developing artificial intelligence-based solutions and creating modern, high-performance web applications. The same dedication I put into perfecting my gaming skills I now bring to code and learning the most innovative technologies.',
        'about-bg-p4': 'My self-taught journey has taught me the importance of curiosity, perseverance, and the ability to learn independently from online resources, technical documentation, and practical projects.',
        'about-goals-title': 'Professional Goals',
        'about-goals-p1': 'My main goal is to become a <strong>full-stack AI programmer</strong>, capable of managing the entire product lifecycle: from the ideation of innovative SaaS services to their implementation and maintenance.',
        'about-goals-p2': 'I want to specialize in creating <strong>intelligent solutions</strong> that combine:',
        'about-goals-li1': '<strong>Machine Learning and NLP</strong> - For advanced chatbots and language understanding systems',
        'about-goals-li2': '<strong>Cloud-Native Architectures</strong> - Service scalability and reliability',
        'about-goals-li3': '<strong>Full-Stack Development</strong> - From UI/UX to databases and APIs',
        'about-goals-li4': '<strong>DevOps and CI/CD</strong> - Automation and continuous deployment',
        'about-goals-p3': 'My focus is on <strong>creating real value</strong> through technology, developing products that solve concrete problems for businesses and improve user experience.',
        'about-interests-title': 'Areas of Interest',
        'about-interests-p1': 'My technological passions span across various areas of modern computer science, with a particular focus on artificial intelligence and full-stack development.',
        'interest-1-title': 'Machine Learning',
        'interest-1-desc': 'Development of predictive models and recommendation systems',
        'interest-2-title': 'Deep Learning',
        'interest-2-desc': 'Neural networks for computer vision and NLP',
        'interest-3-title': 'Full-Stack Development',
        'interest-3-desc': 'Modern architectures with React, Node.js and Python',
        'interest-4-title': 'Cloud Computing',
        'interest-4-desc': 'Deployment and scaling on cloud platforms',
        'interest-5-title': 'Performance Optimization',
        'interest-5-desc': 'Analysis and improvement of application performance',
        'interest-6-title': 'Open Source',
        'interest-6-desc': 'Contributing to projects and knowledge sharing',
        'resume-title': 'RESUME',
        'resume-formation-title': 'Educational Path',
        'resume-formation-p1': 'My approach to learning is <strong>completely self-taught</strong>, based on a mix of curiosity, passion and constant practical experimentation. Every day is an opportunity to explore new technologies and refine my skills in <strong>artificial intelligence</strong> and <strong>full-stack development</strong>.',
        'resume-formation-p2': 'My training is not limited to theory: I prefer to learn by building real projects, facing concrete challenges and solving authentic problems. This practical methodology has allowed me to develop a deep understanding of the technologies I use and a mindset oriented towards creative problem-solving.',
        'resume-project-badge': 'FLAGSHIP PROJECT',
        'resume-project-title': 'ThinkAIChat',
        'resume-project-subtitle': 'Multi-Channel Conversational Artificial Intelligence Platform',
        'resume-feature1-title': 'Multi-Platform Virtual Assistant',
        'resume-feature1-li1': 'Native integration with Web, E-commerce, Instagram, WhatsApp and Facebook',
        'resume-feature1-li2': 'Persistent conversational memory with user recognition and context maintenance',
        'resume-feature1-li3': 'Automated marketing campaigns on WhatsApp with full multimedia support',
        'resume-feature1-li4': 'Direct sales system integrated across all available channels',
        'resume-feature1-li5': 'Connectors for major e-commerce platforms: Shopify, WooCommerce, Prestashop and Magento',
        'resume-feature1-li6': 'Intelligent appointment management via Google Calendar with automatic reminders',
        'resume-feature2-title': 'Virtual Switchboard with Advanced Voice Synthesis',
        'resume-feature2-li1': 'Highly natural synthesized voice for fluid and professional conversations',
        'resume-feature2-li2': 'Autonomous order management and product catalog consultation',
        'resume-feature2-li3': 'Automated booking system with Google Calendar synchronization',
        'resume-feature2-li4': 'Automatic transcriptions and searchable database of all conversations',
        'resume-feature2-li5': 'Analytics dashboard with detailed metrics and strategic insights',
        'resume-tech-title': 'Technologies Used',
        'resume-skills-title': 'Technical Skills',
        'skill-cat1-title': 'Artificial Intelligence & Machine Learning',
        'skill-cat2-title': 'E-commerce & Integrations',
        'skill-cat3-title': 'Full-Stack Development',
        'skill-cat4-title': 'Database & Cloud Computing',
        'contact-title': 'Contact Me',
        'contact-description': 'Have a project in mind or just want to chat? Fill out the form below or contact me on social media!',
        'contact-name-label': 'Full Name',
        'contact-name-placeholder': 'Your name',
        'contact-email-label': 'Email',
        'contact-email-placeholder': 'Your email',
        'contact-subject-label': 'Subject',
        'contact-subject-placeholder': 'What do you want to talk about?',
        'contact-message-label': 'Message',
        'contact-message-placeholder': 'Write your message here...',
        'contact-btn-send': 'Send Message',
        'contact-success': 'Thank you! Your message has been sent successfully.',
        'footer-rights': '© 2025 Andrea Pirazzini. All rights reserved.',
        'footer-made': 'Made with HTML, CSS and JavaScript'
    }
};

// Lingua corrente del sito (default: italiano)
let linguaCorrente = 'it';

// ==================== FUNZIONE: Cambia Lingua ====================
// Cambia la lingua del sito tra italiano e inglese
function cambiaLingua(lingua) {
    linguaCorrente = lingua;

    // Salva la scelta nel browser
    localStorage.setItem('lingua', lingua);

    // Aggiorna tutti i testi con traduzione
    document.querySelectorAll('[data-i18n]').forEach(elemento => {
        const chiave = elemento.getAttribute('data-i18n');
        if (traduzioni[lingua][chiave]) {
            elemento.innerHTML = traduzioni[lingua][chiave];
        }
    });

    // Aggiorna i placeholder dei campi input
    document.querySelectorAll('[data-i18n-placeholder]').forEach(elemento => {
        const chiave = elemento.getAttribute('data-i18n-placeholder');
        if (traduzioni[lingua][chiave]) {
            elemento.placeholder = traduzioni[lingua][chiave];
        }
    });

    // Aggiorna i pulsanti della lingua (IT/EN)
    document.querySelectorAll('.lang-option-btn').forEach(bottone => {
        if (bottone.getAttribute('data-lang') === lingua) {
            bottone.classList.add('active');
        } else {
            bottone.classList.remove('active');
        }
    });
}

// ==================== MENU MOBILE ====================
// Gestisce apertura/chiusura menu su smartphone
const pulsanteMenu = document.getElementById('menuToggle');
const menu = document.getElementById('navMenu');

if (pulsanteMenu) {
    pulsanteMenu.addEventListener('click', function() {
        // Alterna classe 'active' per mostrare/nascondere menu
        pulsanteMenu.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

// ==================== NAVIGAZIONE FLUIDA ====================
// Scorrimento fluido quando clicco sui link del menu
const linkMenu = document.querySelectorAll('.nav-link');

linkMenu.forEach(link => {
    link.addEventListener('click', function(evento) {
        evento.preventDefault(); // Blocca comportamento default del link

        // Trova la sezione di destinazione
        const destinazione = this.getAttribute('href');
        const sezione = document.querySelector(destinazione);

        if (sezione) {
            // Scrolla in modo fluido fino alla sezione
            sezione.scrollIntoView({ behavior: 'smooth' });

            // Aggiorna link attivo
            linkMenu.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Chiudi menu mobile se aperto
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                pulsanteMenu.classList.remove('active');
            }
        }
    });
});

// ==================== AGGIORNA LINK ATTIVO DURANTE SCROLL ====================
// Evidenzia il link del menu corrispondente alla sezione visibile
window.addEventListener('scroll', function() {
    const sezioni = document.querySelectorAll('section[id]');
    let sezioneCorrente = '';

    // Trova quale sezione è visibile
    sezioni.forEach(sezione => {
        const altezzaSezione = sezione.offsetTop;
        if (window.pageYOffset >= altezzaSezione - 200) {
            sezioneCorrente = sezione.getAttribute('id');
        }
    });

    // Aggiorna classe active sul link corrispondente
    linkMenu.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sezioneCorrente}`) {
            link.classList.add('active');
        }
    });
});

// ==================== VALIDAZIONE FORM CONTATTI ====================
const formContatti = document.getElementById('contactForm');

if (formContatti) {
    formContatti.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Blocca invio automatico

        // Pulisci eventuali errori precedenti
        document.querySelectorAll('.form-group').forEach(gruppo => {
            gruppo.classList.remove('error');
        });
        document.querySelectorAll('.error-message').forEach(msg => {
            msg.textContent = '';
        });

        // Prendi valori dai campi
        const nome = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const oggetto = document.getElementById('subject').value.trim();
        const messaggio = document.getElementById('message').value.trim();

        let valido = true;

        // Valida nome (minimo 2 caratteri)
        if (nome.length < 2) {
            mostraErrore('name', 'Il nome deve contenere almeno 2 caratteri');
            valido = false;
        }

        // Valida email (controllo formato)
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            mostraErrore('email', 'Inserisci un indirizzo email valido');
            valido = false;
        }

        // Valida oggetto (minimo 5 caratteri)
        if (oggetto.length < 5) {
            mostraErrore('subject', 'L\'oggetto deve contenere almeno 5 caratteri');
            valido = false;
        }

        // Valida messaggio (minimo 10 caratteri)
        if (messaggio.length < 10) {
            mostraErrore('message', 'Il messaggio deve contenere almeno 10 caratteri');
            valido = false;
        }

        // Se tutto valido, invia email
        if (valido) {
            // Crea corpo email
            const corpoEmail = `Nome: ${nome}\nEmail: ${email}\nOggetto: ${oggetto}\n\nMessaggio:\n${messaggio}`;

            // Apri client email
            const linkEmail = `mailto:pirazz1996@gmail.com?subject=${encodeURIComponent(oggetto)}&body=${encodeURIComponent(corpoEmail)}`;
            window.location.href = linkEmail;

            // Mostra messaggio successo
            const messaggioSuccesso = document.getElementById('successMessage');
            messaggioSuccesso.classList.add('show');

            // Nascondi messaggio dopo 5 secondi
            setTimeout(() => messaggioSuccesso.classList.remove('show'), 5000);

            // Resetta form dopo 1 secondo
            setTimeout(() => formContatti.reset(), 1000);
        }
    });
}

// Funzione per mostrare errori nel form
function mostraErrore(campo, testoErrore) {
    const campoInput = document.getElementById(campo);
    const spanErrore = document.getElementById(campo + 'Error');
    const gruppo = campoInput.closest('.form-group');

    gruppo.classList.add('error');
    spanErrore.textContent = testoErrore;
}

// ==================== CHIUDI MENU CLICCANDO FUORI ====================
document.addEventListener('click', function(evento) {
    if (menu.classList.contains('active')) {
        // Chiudi menu se clicco fuori
        if (!menu.contains(evento.target) && !pulsanteMenu.contains(evento.target)) {
            menu.classList.remove('active');
            pulsanteMenu.classList.remove('active');
        }
    }
});

// ==================== EFFETTI SCROLL SEZIONI ABOUT ====================
// Effetto scroll rimosso - il titolo rimane sempre visibile

// ==================== INIZIALIZZAZIONE ====================
// Eseguito quando la pagina è completamente caricata
document.addEventListener('DOMContentLoaded', function() {
    // Imposta lingua salvata (o default italiano)
    const linguaSalvata = localStorage.getItem('lingua') || 'it';
    cambiaLingua(linguaSalvata);

    // Aggiungi evento click ai pulsanti IT/EN
    document.querySelectorAll('.lang-option-btn').forEach(bottone => {
        bottone.addEventListener('click', function() {
            const lingua = this.getAttribute('data-lang');
            cambiaLingua(lingua);
        });
    });

    // Messaggio console
    console.log('👋 Grazie per aver visitato il mio portfolio!');
    console.log('Per collaborazioni: pirazz1996@gmail.com');
});
