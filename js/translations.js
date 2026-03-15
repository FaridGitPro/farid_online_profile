const translations = {
    en: {
        /**Home Sec **/
        trHome : "Home",
        trAbout : "About",
        trSkills : "Skills",
        treducation: "Education",
        trContact : "Contact",
        trHomeh1 : "Hi I am Farid",
        trHomeh3 : "Software Engineer",
        trHomep1 : "Experienced Software Developer with more than 4 years of experience in programming, software and data management based on specific requirements. Adaptable, diligent and bilingual(English and French)",
        trHomeHireMebtn : "Resume",
        trHomeLetsTalkbtn : "Let's Talk",
        trHomespan: "Farid Bouda",
        /**About section **/
        trAbouth2 : "About",
        trAboutspanMe: "Me",
        trAbouth3 : "Software Engineer!",
        trAboutp : "Experienced Software Developer with more than 4 years of experience in programming, software and data management based on specific requirements. Adaptable, diligent and bilingual(English and French)",
        trAboutReadMe : "Github profile",
        /**Education section **/
        trJourneyh2: "My",
        trSpanJourney: "journey",
        treducation: "Education",
        treducationXP: "Experience",
        trEducationh3: "Bachelor degree - Ottawa university",
        trEducationh3_1: "Bachelor Degree",
        trEducationp1: "Graduated from Ottawa university with a major program in software engineering and a minor program in marketing and entrepreneurship.",
        trEducationp1_1: "I Studied at Ottawa university with major program software engineering and minor program in Entreprenariat",
        /**Experience section**/
        trExph3: "Software developer",
        trExph3_1: "Data Analyst",
        trExpp1: "Analytical and results-oriented professional with 3+ years of experience in software and data systems development within the Government of Canada",
        trExp1_1: "Developer",
        trExpp2: "4 months internship as a data analyst at Ottawa University (01/2021 – 04/2021)",
        /**Coding Skills Section **/
        trCodingSkillh2My:"My",
        trCodingSkillh2:"Skills",
        trCodingSkillh3:"Coding Skills",
        /**Experience Skills Section **/
        trExpSkill:"Experience skills",
        trExpSkill1:"Data extraction",
        trExpSkill2:"Data cleaning(ETL process)",
        trExpSkill3:"Data visualization",
        trExpSkill4:"Workflow and Database management",
        /**Contact Section **/
        trContacth2: "Contact",
        trContacth2Me: "Me",
        trContactFullName: "Full Name",
        trContactEmail:"Email address",
        trContactMobile:"Mobile number",
        trContactSubject:"Subject",
        trContactMessage:"Your Message",
        trContactSubmitbtn:"Submit",
        /**Footer Section **/
        trFooterCopyright: "Copyright &copy; 2025 by Farid Bouda | All right reserved.",


    },

    fr: {
        /**Home Section **/
        trHome : "Accueil",
        trAbout : "À propos",
        trSkills : "Compétences",
        treducation: "Éducation",
        trContact : "Nous joindre",
        trHomeh1 : "Salut je suis Farid",
        trHomeh3 : "Ingénieur en logiciel",
        trHomep1 : "Développeur logiciel expérimenté avec plus de 4 ans d'expérience en programmation,conception et gestion de logicielle et de données selon des exigences spécifiques. Adaptable, assidu et bilingue (anglais et français)",
        trHomeHireMebtn : "Mon CV",
        trHomeLetsTalkbtn : "Discutons",
        /**About section **/
        trAbouth2 : "À propos de",
        trAboutspanMe: "Moi",
        trAbouth3 : "Ingénieur en logiciel!",
        trAboutp : "Développeur logiciel expérimenté avec plus de 4 ans d'expérience en programmation, gestion de logiciels et de données basées sur des exigences spécifiques. Adaptable, assidu et bilingue(anglais et français)",
        trAboutReadMe : "Profil github ",
        /**Education Section **/
        trJourneyh2: "Mon",
        trSpanJourney: "parcours",
        treducation: "Éducation",
        treducationXP: "Expérience",
        trEducationh3: "Maîtrise en logiciel",
        trEducationh3_1: "Baccalauréat en logiciel",
        trEducationp1: "Diplômé de l'université d'Ottawa avec un programme principal en génie logiciel et un programme secondaire en marketing et entrepreneuriat",
        trEducationp1_1: "Études à l'université d'Ottawa avec un programme principal en génie logiciel et un programme mineur en entrepreneuriat.",
        /**Experience Section **/
        trExph3: "Développeur",
        trExpp1: "3 ans d'expérience en tant que développeur de logiciels au Service partagés Canada (10/2021 – 05/2024).",
        trExph3_1: "Analyst de données",
        trExpp2: "Experience de plusieurs mois en tant qu'analyste de données à l'Université d'Ottawa (01/2021 – 04/2021)",
        /**Coding Skills Section **/
        trCodingSkillh2My:"Mes",
        trCodingSkillh2:"compétences",
        trCodingSkillh3:"Compétences en codage",
        /**Experience Skills Section **/
        trExpSkill:"Expérience",
        trExpSkill1:"Extraction de données",
        trExpSkill2:"Transformation de données(ETL)",
        trExpSkill3:"Visualisation de données",
        trExpSkill4:"Gestion de flux de travail et de base de données",
        /**Contact Section **/
        trContacth2: "Contactez",
        trContacth2Me: "Moi",
        trContactFullName: "Nom complet",
        trContactEmail:"Adresse mail",
        trContactMobile:"Numéro de téléphone",
        trContactSubject:"Objet du message",
        trContactMessage:"Votre Message",
        trContactSubmitbtn:"Envoyer",
        /**Footer Section **/
        trFooterCopyright: "Droits d'auteur &copy; 2025 par Farid Bouda | Tous droits réservés.",
    }
}

/* Translation function (core logic)*/

function setLanguage(lang) {
    /* Translate text content */
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n
        element.textContent = translations[lang][key]
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


    
  