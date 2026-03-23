const translations = {
    en: {
        /**Home Sec **/
        trHome: "Home",
        trAbout: "About",
        trSkills: "Skills",
        treducation: "Education",
        trContact: "Contact",
        trHomeh1: "Hi I am Farid",
        trHomeh3: "Software Engineer",
        trHomep1: "Experienced Software Developer with more than 4 years of experience in programming, software and data management based on specific requirements. Adaptable, diligent and bilingual(English and French)",
        trHomeHireMebtn: "Resume",
        trHomeLetsTalkbtn: "Let's Talk",
        trHomespan: "Farid Bouda",
        /**About section **/
        trAbouth2: "About <span>Me</span>",
        //trAboutspanMe: "Me",
        trAbouth3: "Software Engineer!",
        trAboutp: "Experienced Software Developer with more than 4 years of experience in programming, software and data management based on specific requirements. Adaptable, diligent and bilingual(English and French)",
        trAboutReadMe: "Github profile",
        /**Education section **/
        trJourneyh2: "My <span>journey</span>",
        //trSpanJourney: "journey",
        treducation: "Education",
        treducationXP: "Experience",
        trEducationh3: "Bachelor degree - Ottawa university",
        trEducationh3_1: "Certifications",
        trEducationp1: `Graduated from Ottawa university with a major program in software engineering and a minor program in marketing and entrepreneurship.`,
        trEducationp1_1: "Python, SQL",
        /**Experience section**/
        trExph3: "Software developer",
        trExph3_1: "Data Analyst",
        trExpp1: "Analytical and results-oriented professional with 3+ years of experience in software and data systems development within the Government of Canada",
        trExp1_1: "Developer",
        trExpp2: "4 months internship as a data analyst at Ottawa University (01/2021 – 04/2021)",
        /**Coding Skills Section **/
        trCodingSkillh2My: "My <span>skills</span>",
        //trCodingSkillh2: "Skills",
        trCodingSkillh3: "Coding Skills",
        /**Experience Skills Section **/
        trExpSkill: "Experience",
        trExpSkill1: "Data extraction<span>93%</span>",
        trExpSkill2: "Data cleaning(ETL process)<span>86%</span>",
        trExpSkill3: "Data visualization<span>95%</span>",
        trExpSkill4: "Workflow and Database management <span>81%</span>",
        /**Contact Section **/
        trContacth2: "Contact <span>Me!</span>",
        //trContacth2Me: "Me",
        trContactFullName: "Full Name",
        trContactEmail: "Email address",
        trContactMobile: "Mobile number",
        trContactSubject: "Subject",
        trContactMessage: "Your Message",
        trContactSubmitbtn: "Submit",
        /**Footer Section **/
        trFooterCopyright: "&copy;2026. All rights reserved. Created by Farid Bouda",


    },

    fr: {
        /**Home Section **/
        trHome: "Accueil",
        trAbout: "À propos",
        trSkills: "Compétences",
        treducation: "Éducation",
        trContact: "Nous joindre",
        trHomeh1: "Salut je suis Farid",
        trHomeh3: "Ingénieur en logiciel",
        trHomep1: "Développeur logiciel expérimenté avec plus de 4 ans d'expérience en programmation,conception et gestion de logicielle et de données selon des exigences spécifiques. Adaptable, assidu et bilingue (anglais et français)",
        trHomeHireMebtn: "Mon CV",
        trHomeLetsTalkbtn: "Discutons",
        /**About section **/
        trAbouth2: "À propos de <span>Moi</span>",
        //trAboutspanMe: "Moi",
        trAbouth3: "Ingénieur en logiciel!",
        trAboutp: "Développeur logiciel expérimenté avec plus de 4 ans d'expérience en programmation, gestion de logiciels et de données basées sur des exigences spécifiques. Adaptable, assidu et bilingue(anglais et français)",
        trAboutReadMe: "Profil github ",
        /**Education Section **/
        trJourneyh2: "Mon <span>parcours</span>",
        //trSpanJourney: "parcours",
        treducation: "Éducation",
        treducationXP: "Expérience",
        trEducationh3: "Ingénieur logiciel",
        trEducationh3_1: "Certifications",
        trEducationp1: "Diplômé de l'université d'Ottawa avec pour domaine majeur l'ingénierie logiciel et pour domaine mineur l'entrepreneuriat et la gestion d'entreprise.",
        trEducationp1_1: "Python, SQL",
        /**Experience Section **/
        trExph3: "Développeur",
        trExpp1: "3 ans d'expérience en tant que développeur de logiciels au Service partagés Canada (10/2021 – 05/2024).",
        trExph3_1: "Analyst de données",
        trExpp2: "Experience de plusieurs mois en tant qu'analyste de données à l'Université d'Ottawa (01/2021 – 04/2021)",
        /**Coding Skills Section **/
        trCodingSkillh2My: "Mes <span>compétences</span>",
        //trCodingSkillh2: "compétences",
        trCodingSkillh3: "Programmation",
        /**Experience Skills Section **/
        trExpSkill: "Expérience",
        trExpSkill1: "Extraction de données<span>93%</span>",
        trExpSkill2: "Transformation de données(ETL)<span>86%</span>",
        trExpSkill3: "Visualisation de données<span>95%</span>",
        trExpSkill4: "Gestion de flux de travail et de base de données<span>81%</span>",
        /**Contact Section **/
        trContacth2: "Contactez <span>Moi!</span>",
        //trContacth2Me: "Moi",
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



