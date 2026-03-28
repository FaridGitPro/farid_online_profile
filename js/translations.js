const translations = {
    en: {
        /**Home Sec **/
        trHome: "Home",
        trAbout: "About",
        trSkills: "Skills",
        treducation: "Education",
        trContact: "Contact",
        trHomeh1: "Hi I am Farid",
        trHomeh3: "Data Engineer",
        trHomep1: `I am a bilingual software Engineer specializing in Data Engineering with experience working with structured 
                    and unstructured data, transforming raw information into reliable, high-quality datasets that support 
                    analytics and business decision-making. Skilled in ETL processes, data modelling, and database management 
                    I am passionate about solving complex data challenges.`,
        trHomeHireMebtn: "Resume",
        trHomeLetsTalkbtn: "Let's Talk",
        trHomespan: "Farid Bouda",
        /**About section **/
        trAbouth2: "About <span>Me</span>",
        //trAboutspanMe: "Me",
        trAbouth3: "Software Engineer!",
        trAboutp: `Realization of multiple software projects and applications, including data engineering projects involving 
                    the design and implementation of scalable data pipelines to collect, process, and transform large 
                    volumes of structured and unstructured data`,
        trAboutReadMe: "Github profile",
        /**Education section **/
        trJourneyh2: "My <span>journey</span>",
        treducation: "Education",
        treducationXP: "Experience",
        trEducationh3: "Bachelor degree - Ottawa university",
        trEducationh3_1: "Certifications",
        trEducationp1: `Graduated from Ottawa university with a major program in software engineering and a minor program 
                        in marketing and entrepreneurship.`,
        trEducationp1_1: "Python, SQL",
        /**Experience section**/
        trExph3: "Software developer",
        trExph3_1: "Data Analyst",
        trExpp1: `Improved operational efficiency by automating processes, building secure data dashboards, and delivering 
                    reliable technical solutions.`,
        trExp1_1: "Developer",
        trExpp2: `Enhanced financial analytics through advanced data modelling (DAX) and interactive dashboards to support strategic 
                    decision-making.`,
        /**Coding Skills Section **/
        trCodingSkillh2My: "My <span>skills</span>",
        trCodingSkillh3: "Coding Skills",
        /**Experience Skills Section **/
        trExpSkill: "Experience",
        trExpSkill1: "Data extraction<span>93%</span>",
        trExpSkill2: "Data cleaning(ETL process)<span>86%</span>",
        trExpSkill3: "Data visualization<span>95%</span>",
        trExpSkill4: "Workflow and Database management <span>81%</span>",
        /**Contact Section **/
        trContacth2: "Contact <span>Me!</span>",
        trContactFullName: "Full Name",
        trContactEmail: "Email address",
        trContactMobile: "Mobile number",
        trContactSubject: "Subject",
        trContactMessage: "Your Message",
        trContactSubmitbtn: "Submit",
        /**Footer Section **/
        trFooterCopyright: "&copy;2026. All rights reserved. Created by Farid Bouda.",


    },

    fr: {
        /**Home Section **/
        trHome: "Accueil",
        trAbout: "À propos",
        trSkills: "Compétences",
        treducation: "Éducation",
        trContact: "Nous joindre",
        trHomeh1: "Salut je suis Farid",
        trHomeh3: "Ingénieur de données",
        trHomep1: "Je suis un ingénieur logiciel bilingue spécialisé en ingénierie des données, avec de l’expérience dans la gestion de données structurées et non structurées, transformant des informations brutes en ensembles de données fiables et de haute qualité, destinés à soutenir l’analyse et la prise de décision. Compétent dans les processus ETL, la modélisation des données et la gestion de bases de données, je suis passionné par la résolution de défis complexes liés aux données.",
        trHomeHireMebtn: "Mon CV",
        trHomeLetsTalkbtn: "Discutons",
        /**About section **/
        trAbouth2: "À propos de <span>Moi</span>",
        trAbouth3: "Ingénieur de données!",
        trAboutp: "Réalisation de plusieurs projets et applications logiciels, y compris des projets en ingénierie des données impliquant la conception et la mise en œuvre de pipelines de données évolutifs pour collecter, traiter et transformer de grands volumes de données structurées et non structurées.",
        trAboutReadMe: "Profil github ",
        /**Education Section **/
        trJourneyh2: "Mon <span>parcours</span>",
        treducation: "Éducation",
        treducationXP: "Expérience",
        trEducationh3: "Ingénieur logiciel",
        trEducationh3_1: "Certifications",
        trEducationp1: "Diplômé de l'université d'Ottawa avec pour domaine majeur l'ingénierie logiciel et pour domaine mineur l'entrepreneuriat et la gestion d'entreprise.",
        trEducationp1_1: "Python, SQL",
        /**Experience Section **/
        trExph3: "Développeur",
        trExpp1: "Amélioration de l'efficacité opérationnelle d'automatisation des tableaux de données sécurisés et en fournissant des solutions techniques fiables.",
        trExph3_1: "Analyst de données",
        trExpp2: `Analyse financière améliorée utilisant une modélisation de données avancée et des tableaux interactifs pour la prise de décision stratégique.`,
        /**Coding Skills Section **/
        trCodingSkillh2My: "Mes <span>compétences</span>",
        trCodingSkillh3: "Programmation",
        /**Experience Skills Section **/
        trExpSkill: "Expérience",
        trExpSkill1: "Extraction de données<span>93%</span>",
        trExpSkill2: "Transformation de données(ETL)<span>86%</span>",
        trExpSkill3: "Visualisation de données<span>95%</span>",
        trExpSkill4: "Gestion de flux de travail et de base de données<span>81%</span>",
        /**Contact Section **/
        trContacth2: "Contactez <span>Moi!</span>",
        trContactFullName: "Nom complet",
        trContactEmail: "Adresse mail",
        trContactMobile: "Numéro de téléphone",
        trContactSubject: "Objet du message",
        trContactMessage: "Votre Message",
        trContactSubmitbtn: "Envoyer",
        /**Footer Section **/
        trFooterCopyright: "&copy;2026. Tous droits réservés. Réalisé par Farid Bouda.",
    }
}

/* Translation function (core logic)*/

function setLanguage(lang) {
    /* Translate text content */
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n
        element.innerHTML = translations[lang][key]
    })

    /* Translate placeholders */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder")
        el.placeholder = translations[lang][key]
    })

    localStorage.setItem('language', lang);
}

/* Select variable*/
const select = document.getElementById("languageSelect")
/* Event listener for language selection*/
select.addEventListener('change', (e) => {
    setLanguage(e.target.value)
})

/* Load saved language on page load */
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "en";
    setLanguage(savedLang);
    document.getElementById("languageSelect").value = savedLang;
})



