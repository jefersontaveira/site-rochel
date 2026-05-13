/* =========================================
   LÓGICA DE TEMA (DARK/LIGHT MODE)
   ========================================= */

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Verificar se existe uma preferência guardada no localStorage
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    htmlElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        themeToggle.textContent = '☀️'; // Ícone de sol para voltar ao tema claro
    }
}

// Função para alternar o tema
themeToggle.addEventListener('click', () => {
    let theme = htmlElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        htmlElement.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});


// Lógica do Menu Hambúrguer
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navLinks = document.querySelector('.nav-links');

hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        hamburgerBtn.innerHTML = '✕';
    } else {
        hamburgerBtn.innerHTML = '☰';
    }
});


/* =========================================
   LÓGICA DE TRADUÇÃO (I18N)
   ========================================= */

// 1. Dicionário de Traduções
const translations = {
    en: {
        // Navegação
        nav_home: "Home",
        nav_about: "About",
        nav_pricing: "Pricing",
        nav_testimonials: "Reviews",
        
        // Hero
        hero_title: "Master English with Confidence",
        hero_subtitle: "Personalized lessons to help you speak fluently, organized by a top-rated communication expert.",
        hero_cta: "Book Your First Class",

        // About
        about_title: "Meet Your Teacher",
        about_name: "Rochell \ Furton",
        about_text_1: "With a degree in Office Administration and a proven track record as Top Agent of the Year in high-performance corporate environments, I bring a structured and highly efficient approach to English teaching.",
        about_text_2: "My experience in project coordination and customer support allows me to focus on what really matters: clear communication, problem-solving, and practical results for my students.",
        badge_1: "Award-Winning Communication",
        badge_2: "Certified Professional",

        // Pricing
        pricing_title: "Invest in Your Fluency",
        pricing_subtitle: "Choose the perfect plan for your schedule and learning pace.",
        plan_1_title: "Quick Practice",
        plan_1_duration: "30 minutes",
        feat_1_1: "Conversation focus",
        feat_1_2: "Quick vocabulary boost",
        feat_1_3: "Flexible scheduling",
        btn_choose: "Choose Plan",
        badge_popular: "Most Popular",
        plan_2_title: "Standard Lesson",
        plan_2_duration: "50 minutes",
        feat_2_1: "Grammar & Speaking",
        feat_2_2: "Customized materials",
        feat_2_3: "In-depth feedback",
        plan_3_title: "Deep Dive",
        plan_3_duration: "1 hour 30 mins",
        feat_3_1: "Intensive learning",
        feat_3_2: "Test preparation",
        feat_3_3: "Advanced grammar",

        // Why Choose Me
        why_title: "Why Choose Me?",
        why_subtitle: "More than just English. I bring structure, patience, and proven communication skills to every lesson.",
        why_card1_title: "Structured Learning",
        why_card1_text: "Leveraging my solid foundation in office administration, I develop perfectly organized lesson plans. You will always know exactly what we are studying, the reasoning behind it, and the next practical step toward your fluency—delivered efficiently and without confusion.",
        why_card2_title: "Clear Communication",
        why_card2_text: "As an award-winning professional with extensive experience in high-stakes customer service, I excel at explaining grammar rules and exceptions in a simple, direct manner. My priority is ensuring you grasp every detail within a patient environment dedicated to your total comprehension.",
        why_card3_title: "Goal-Oriented Focus",
        why_card3_text: "Through my background in project coordination, I’ve learned that real results stem from clear objectives. We define your language goals on day one—be it for business leadership, confident travel, or academic exams—and tailor every minute of our sessions to ensure you achieve those milestones.",

        // Reviews
        reviews_title: "What My Students Say",
        reviews_subtitle: "Real results from people who improved their English with me.",
        review_1_text: "\"Rochell's classes are amazing! I was terrified of speaking English, but she is super patient and creates a safe environment to make mistakes and learn. My fluency improved in weeks.\"",
        review_1_name: "Mateus S.",
        review_1_role: "Software Developer",
        review_2_text: "\"Her organization and teaching methods are impressive. The lesson plan is always well-structured and focused on my real needs, especially for daily vocabulary at work.\"",
        review_2_name: "Camila F.",
        review_2_role: "Marketing Analyst",
        review_3_text: "\"Thanks to the intensive conversation practice and focus on pronunciation, I managed to pass my job interview in English. Her direct and focused method makes all the difference!\"",
        review_3_name: "Rafael T.",
        review_3_role: "Business Consultant",

        // CTA Final
        cta_final_title: "Ready to speak English fluently?",
        cta_final_subtitle: "Don't let language barriers hold back your career. Join my classes and start speaking with confidence today.",
        cta_final_btn: "Book Your First Class Now",

        // Footer
        footer_tagline: "Helping you stay organized and focused on your English journey.",
        footer_links_title: "Quick Links",
        footer_contact_title: "Contact Me",
        footer_thanks: "Thank you for your consideration."
    },
    pt: {
        // Navegação
        nav_home: "Início",
        nav_about: "Sobre",
        nav_pricing: "Preços",
        nav_testimonials: "Depoimentos",
        
        // Hero
        hero_title: "Domine o Inglês com Confiança",
        hero_subtitle: "Aulas personalizadas para o ajudar a falar fluentemente, organizadas por uma especialista em comunicação.",
        hero_cta: "Agende a sua Primeira Aula",

        // About
        about_title: "Conheça a sua Professora",
        about_name: "Rochell \ Furton",
        about_text_1: "Com uma licenciatura em Administração de Escritórios e um histórico comprovado como Top Agent do Ano em ambientes corporativos de alta performance, trago uma abordagem estruturada e extremamente eficiente para o ensino de inglês.",
        about_text_2: "A minha experiência em coordenação de projetos e apoio ao cliente permite-me focar no que realmente importa: comunicação clara, resolução de problemas e resultados práticos para os meus alunos.",
        badge_1: "Comunicação Premiada",
        badge_2: "Profissional Certificada",

        // Pricing
        pricing_title: "Invista na sua Fluência",
        pricing_subtitle: "Escolha o plano perfeito para a sua rotina e ritmo de aprendizagem.",
        plan_1_title: "Prática Rápida",
        plan_1_duration: "30 minutos",
        feat_1_1: "Foco na conversação",
        feat_1_2: "Expansão de vocabulário",
        feat_1_3: "Horários flexíveis",
        btn_choose: "Escolher Plano",
        badge_popular: "Mais Popular",
        plan_2_title: "Aula Standard",
        plan_2_duration: "50 minutos",
        feat_2_1: "Gramática e Fala",
        feat_2_2: "Materiais personalizados",
        feat_2_3: "Feedback detalhado",
        plan_3_title: "Imersão Total",
        plan_3_duration: "1 hora e 30 min",
        feat_3_1: "Aprendizagem intensiva",
        feat_3_2: "Preparação para exames",
        feat_3_3: "Gramática avançada",

        // Why Choose Me
        why_title: "Por que me Escolher?",
        why_subtitle: "Muito mais do que inglês. Trago estrutura, paciência e competências de comunicação comprovadas para cada aula.",
        why_card1_title: "Aprendizagem Estruturada",
        why_card1_text: "Aproveitando a minha base sólida em administração, construo planos de aula perfeitamente organizados. Saberá sempre exatamente o que estamos a estudar, o motivo e qual será o próximo passo para alcançar a fluência de forma eficiente e sem confusão.",
        why_card2_title: "Comunicação Clara",
        why_card2_text: "Como profissional premiada com vasta experiência em apoio ao cliente de alta exigência, sei explicar regras gramaticais e exceções de forma simples e direta. A minha prioridade é garantir que absorve cada detalhe num ambiente focado na sua total compreensão.",
        why_card3_title: "Foco nos Objetivos",
        why_card3_text: "Trabalhando com coordenação de projetos, aprendi que resultados exigem metas claras. Definimos os seus objetivos logo no primeiro dia — seja para reuniões de negócios, viagens ou exames — e direcionamos cada minuto da aula para conquistar esses resultados.",

        // Reviews
        reviews_title: "O que dizem os meus alunos",
        reviews_subtitle: "Resultados reais de pessoas que melhoraram o seu inglês comigo.",
        review_1_text: "\"As aulas da Rochell são incríveis! Eu tinha muito medo de falar em inglês, mas ela é super paciente e cria um ambiente onde me sinto seguro para errar e aprender. A minha fluência melhorou em semanas.\"",
        review_1_name: "Mateus S.",
        review_1_role: "Programador de Software",
        review_2_text: "\"A organização e didática dela são impressionantes. O plano de aula é sempre bem estruturado e focado nas minhas necessidades reais, principalmente para o vocabulário do dia a dia no trabalho.\"",
        review_2_name: "Camila F.",
        review_2_role: "Analista de Marketing",
        review_3_text: "\"Graças aos treinos intensivos de conversação e foco na pronúncia, consegui passar na minha entrevista de emprego em inglês. O método direto e focado dela faz toda a diferença!\"",
        review_3_name: "Rafael T.",
        review_3_role: "Consultor de Negócios",

        // CTA Final
        cta_final_title: "Pronto para falar inglês fluentemente?",
        cta_final_subtitle: "Não deixe a barreira do idioma travar a sua carreira. Junte-se às minhas aulas e comece a falar com confiança hoje mesmo.",
        cta_final_btn: "Agende sua primeira aula agora",

        // Footer
        footer_tagline: "Ajudando a manter o foco e a organização na sua jornada com o inglês.",
        footer_links_title: "Links Rápidos",
        footer_contact_title: "Contacte-me",
        footer_thanks: "Obrigada pela sua consideração."
    },
    es: {
        // Navegação
        nav_home: "Inicio",
        nav_about: "Sobre Mí",
        nav_pricing: "Precios",
        nav_testimonials: "Testimonios",
        
        // Hero
        hero_title: "Domina el Inglés con Confianza",
        hero_subtitle: "Clases personalizadas para ayudarte a hablar con fluidez, organizadas por una experta en comunicación.",
        hero_cta: "Reserva tu Primera Clase",

        // About
        about_title: "Conoce a tu Profesora",
        about_name: "Rochell \ Furton",
        about_text_1: "Con una licenciatura en Administración de Oficinas y un historial comprobado como Top Agent del Año en entornos corporativos de alto rendimiento, aporto un enfoque estructurado y altamente eficiente a la enseñanza del inglés.",
        about_text_2: "Mi experiencia en la coordinación de proyectos y atención al cliente me permite centrarme en lo que realmente importa: comunicación clara, resolución de problemas y resultados prácticos para mis alumnos.",
        badge_1: "Comunicación Premiada",
        badge_2: "Profesional Certificada",

        // Pricing
        pricing_title: "Invierte en tu Fluidez",
        pricing_subtitle: "Elige el plan perfecto para tu horario y ritmo de aprendizaje.",
        plan_1_title: "Práctica Rápida",
        plan_1_duration: "30 minutos",
        feat_1_1: "Enfoque en conversación",
        feat_1_2: "Impulso de vocabulario",
        feat_1_3: "Horarios flexibles",
        btn_choose: "Elegir Plan",
        badge_popular: "Más Popular",
        plan_2_title: "Clase Estándar",
        plan_2_duration: "50 minutos",
        feat_2_1: "Gramática y Habla",
        feat_2_2: "Materiales personalizados",
        feat_2_3: "Feedback detallado",
        plan_3_title: "Inmersión Total",
        plan_3_duration: "1 hora y 30 min",
        feat_3_1: "Aprendizaje intensivo",
        feat_3_2: "Preparación de exámenes",
        feat_3_3: "Gramática avanzada",

        // Why Choose Me
        why_title: "¿Por qué Elegirme?",
        why_subtitle: "Mucho más que inglés. Aporto estructura, paciencia y habilidades de comunicación comprobadas a cada clase.",
        why_card1_title: "Aprendizaje Estructurado",
        why_card1_text: "Aprovechando mi sólida base en administración, construyo planes de estudio perfectamente organizados. Siempre sabrás exactamente qué estamos estudiando, el motivo y cuál será el siguiente paso para alcanzar la fluidez sin confusiones.",
        why_card2_title: "Comunicación Clara",
        why_card2_text: "Como profesional premiada con amplia experiencia en atención al cliente de alta exigencia, sé explicar reglas gramaticales y excepciones de forma sencilla y directa. Mi prioridad es asegurar que asimiles cada detalle en un entorno paciente.",
        why_card3_title: "Enfoque en Objetivos",
        why_card3_text: "Al trabajar en coordinación de proyectos, aprendí que los resultados exigen metas claras. Definimos tus objetivos el primer día (ya sea para reuniones de negocios, viajes o exámenes) y dirigimos cada minuto de la clase para lograr esos resultados.",

        // Reviews
        reviews_title: "Lo que dicen mis alumnos",
        reviews_subtitle: "Resultados reales de personas que mejoraron su inglés conmigo.",
        review_1_text: "\"¡Las clases de Rochell son increíbles! Me aterraba hablar en inglés, pero ella es súper paciente y crea un ambiente seguro para equivocarse y aprender. Mi fluidez mejoró en semanas.\"",
        review_1_name: "Mateus S.",
        review_1_role: "Desarrollador de Software",
        review_2_text: "\"Su organización y didáctica son impresionantes. El plan de clases siempre está bien estructurado y enfocado en mis necesidades reales, especialmente para el vocabulario diario en el trabajo.\"",
        review_2_name: "Camila F.",
        review_2_role: "Analista de Marketing",
        review_3_text: "\"Gracias a las prácticas intensivas de conversación y al enfoque en la pronunciación, logré pasar mi entrevista de trabajo en inglés. ¡Su método directo hace toda la diferencia!\"",
        review_3_name: "Rafael T.",
        review_3_role: "Consultor de Negocios",

        // CTA Final
        cta_final_title: "¿Listo para hablar inglés con fluidez?",
        cta_final_subtitle: "No dejes que la barrera del idioma frene tu carrera. Únete a mis clases y empieza a hablar con confianza hoy mismo.",
        cta_final_btn: "Reserva tu primera clase ahora",

        // Footer
        footer_tagline: "Ayudándote a mantener el enfoque y la organización en tu viaje con el inglés.",
        footer_links_title: "Enlaces Rápidos",
        footer_contact_title: "Contáctame",
        footer_thanks: "Gracias por su consideración."
    }
};

// 2. Elementos do DOM
const langSelector = document.getElementById('lang-selector');
const elementsToTranslate = document.querySelectorAll('[data-i18n]');

// 3. Função para atualizar os textos
function setLanguage(language) {
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[language] && translations[language][key]) {
            // Verifica se é o placeholder do nome ou um input, se necessário no futuro
            element.innerHTML = translations[language][key]; 
        }
    });
    // Atualiza o valor do select para refletir a escolha atual
    langSelector.value = language;
}

// 4. Lógica de Inicialização e Salvamento no LocalStorage
const savedLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Padrão é Inglês
setLanguage(savedLanguage);

// 5. Event Listener para o Seletor
langSelector.addEventListener('change', (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem('selectedLanguage', selectedLanguage);
});