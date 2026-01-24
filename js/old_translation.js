const translations = {
    en: {
        /**Home Sec **/
        trHome : "Home",
        trAbout : "About",
        trSkills : "Skills",
        trContact : "Contact",
        trHomeh1 : "Hi I am Farid Bouda",
        trHomeh3 : "Frontend Developer",
        trHomep1 : "Experienced Software Developer with 4 years of experience in programming, software and data management based on specific requirements. Adaptable, diligent and bilingual(English and French)",
        trHomeHireMebtn : "Hire me",
        trHomeLetsTalkbtn : "Let's Talk",
        trHomespan: "Farid Bouda",
        /**About section **/
        trAbouth2 : "About",
        trAboutspanMe: "Me",
        trAbouth3 : "Frontend Developer!",
        trAboutp : "Experienced Software Developer with 4 years of experience in programming, software and data management based on specific requirements. Adaptable, diligent and bilingual(English and French)",
        trAboutReadMe : "Read more",
        /**Education section **/
        trJourneyh2: "My Journey",
        trEducationh3: "Master degree",
        trEducationh3_1: "Bachelor Degree",
        trEducationp1: "I Studied at Ottawa university with major program software engineering and minor program in Entreprenariat",
        trEducationp1_1: "I Studied at Ottawa university with major program software engineering and minor program in Entreprenariat",
        /**Experience section**/
        trExph3: "Developer",
        trExph3_1: "Data Analyst",
        trExpp1: "3 years experience as a software developer at Shared Service Canada (10/2021 – 05/2024).",
        trExp1_1: "Developer",
        /**Coding Skills Section **/
        trCodingSkillh2:"My Skills",
        trCodingSkillh3:"Coding Skills",
        /**Experience Skills Section **/
        trExpSkill:"Experience skills",
        trExpSkill1:"Data visualisation",
        trExpSkill2:"Automation",
        trExpSkill3:"Interface and Database management",
        trExpSkill4:"Entrepreneurship",
        /**Contact Section **/
        trContacth2My: "My",
        trContacth2: "Contact",
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
        trContact : "Nous joindre",
        trHomeh1 : "Salut je suis Farid Bouda",
        trHomeh3 : "Developpeur Frontend",
        trHomep1 : "Développeur logiciel expérimenté avec 4 ans d'expérience en programmation, gestion de logiciels et de données basées sur des exigences spécifiques. Adaptable, assidu et bilingue(anglais et français)",
        trHomeHireMebtn : "Embaucher",
        trHomeLetsTalkbtn : "Discutons",
        /**About section **/
        trAbouth2 : "À propos de",
        trAbouth3 : "Developpeur Frontend",
        trAboutp : "Développeur logiciel expérimenté avec 4 ans d'expérience en programmation, gestion de logiciels et de données basées sur des exigences spécifiques. Adaptable, assidu et bilingue(anglais et français)",
        trAboutReadMe : "Savoir plus ",
        trAboutspanMe: "Moi",
        /**Education Section **/
        trJourneyh2: "Mon parcours",
        trEducationh3: "Maîtrise en logiciel",
        trEducationh3_1: "Baccalauréat en logiciel",
        trEducationp1: "Études à l'université d'Ottawa avec un programme principal en génie logiciel et un programme mineur en entrepreneuriat.",
        trEducationp1_1: "Études à l'université d'Ottawa avec un programme principal en génie logiciel et un programme mineur en entrepreneuriat.",
        /**Expereince Section **/
        trExph3: "Developpeur",
        trExph3_1: "Analyst de données",
        trExpp1: "3 ans d'expérience en tant que développeur de logiciels au Service partagés Canada (10/2021 – 05/2024).",
        trExpp1_1: "Experience de plusieurs mois en tant qu'analyste de données à l'Université d'Ottawa (01/2021 – 04/2021)",
        /**Coding Skills Section **/
        trCodingSkillh2:"Mes compétences",
        trCodingSkillh3:"Programmation",
        /**Experience Skills Section **/
        trExpSkill:"Expérience",
        trExpSkill1:"Visualisation de données",
        trExpSkill2:"Automatisation",
        trExpSkill3:"Interface et Base de données",
        trExpSkill4:"Entrepreneuriat",
        /**Contact Section **/
        trContacth2: "Mon contact",
        trContactFullName: "Nom complet",
        trContactEmail:"Adresse courriel",
        trContactMobile:"Numéro de téléphone",
        trContactSubject:"Objet du message",
        trContactMessage:"Votre Message",
        trContactSubmitbtn:"Envoyer",
        /**Footer Section **/
        trFooterCopyright: "Droits d'auteur &copy; 2025 par Farid Bouda | Tous droits réservés.",
    }

}

/**Home Section variables **/
const languageSelectTop = document.querySelector("select");
let traductionHome = document.getElementById("traductionHome");
let traductionAbout = document.getElementById("traductionAbout");
let traductionSkills = document.getElementById("traductionSkills");
let traductionContact = document.getElementById("traductionContact");

let traductionHomeh1 = document.getElementById("traductionHomeh1");
let traductionHomeh3 = document.getElementById("TraductionHomeh3");
let traductionHomep1 = document.getElementById("TraductionHomep1");
let traductionHireMebtn = document.getElementById("TraductionhireMebtn");
let traductionLetstalkbtn = document.getElementById("TraductionletsTalkbtn");
/**About section variables**/
let traductionAbouth2 = document.getElementById("tradAbouth2");
let traductionAbouth3 = document.getElementById("tradAbouth3");
let traductionAboutp = document.getElementById("tradAboutp");
let traductionAboutReadMe = document.getElementById("tradAboutReadMore");
const traductionAboutspanMe = document.getElementById("trAboutMe"); // const to keep css style
traductionAboutspanMe.classList.add('translationSpan');
console.log(traductionAboutspanMe);
/**Education section variables**/
let traductionEducationJourneyh2 = document.getElementById("trEducationh2"); 
let traductionEducationh3 = document.getElementById("trEducationh3.1"); 
let traductionEducationh3_1 = document.getElementById("trEducationh3.2"); 
let traductionEducationp1 = document.getElementById("trEducationp1"); 
let traductionEducationp1_1 = document.getElementById("trEducationp2"); 
/**Experience section variables**/
let traductionExperienceh3 = document.getElementById("trExph3");
let traductionExperienceh3_1 = document.getElementById("trExph3.1");
let traductionExperiencep = document.getElementById("trExpp1");
let traductionExperiencep_1 = document.getElementById("trExpp2");
/**Coding Skills variable **/
let traductionCodingSkillh2 = document.getElementById("tradCodingSkillh2");
let traductionCodingSkillh3 = document.getElementById("tradCodingSkillh3");
/**Experience variable **/
let traductionExperienceSkill = document.getElementById("tradExpSkill");
let traductionExperienceSkill1 = document.getElementById("tradExpSkill1");
let traductionExperienceSkill2 = document.getElementById("tradExpSkill2");
let traductionExperienceSkill3 = document.getElementById("tradExpSkill3");
let traductionExperienceSkill4 = document.getElementById("tradExpSkill4");
/**Contact variable **/
let traductionContacth2 = document.getElementById("traContacth2");
let traductionContactSubmitBtn = document.getElementById("contactSubmitbtn");
/**Footer variable **/
let footerCopyright = document.getElementById("footerCopyright");


languageSelectTop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if(language == "fr"){
        /**Home Section **/
        traductionHome.innerText = translations.fr.trHome;
        traductionAbout.innerText = translations.fr.trAbout;
        traductionSkills.innerText = translations.fr.trSkills;
        traductionContact.innerText = translations.fr.trContact;

        traductionHomeh1.innerText = translations.fr.trHomeh1;
        traductionHomeh3.innerText = translations.fr.trHomeh3;
        traductionHomep1.innerText = translations.fr.trHomep1;
        traductionHireMebtn.innerText = translations.fr.trHomeHireMebtn;
        traductionLetstalkbtn.innerText = translations.fr.trHomeLetsTalkbtn;
        /**About section **/
        traductionAboutspanMe.innerText = translations.fr.trAboutspanMe; /**Apply CSS Style for that js **/
        traductionAbouth2.innerText = translations.fr.trAbouth2+ " " + traductionAboutspanMe;
        traductionAbouth3.innerText = translations.fr.trAbouth3;
        traductionAboutp.innerText = translations.fr.trAboutp;
        traductionAboutReadMe.innerText = translations.fr.trAboutReadMe;
        
        /**Education Section **/
        traductionEducationJourneyh2.innerText = translations.fr.trJourneyh2;
        traductionEducationh3.innerText = translations.fr.trEducationh3;
        traductionEducationh3_1.innerText = translations.fr.trEducationh3_1;
        traductionEducationp1.innerText = translations.fr.trEducationp1;
        traductionEducationp1_1.innerText = translations.fr.trEducationp1_1;
        /**Experience section**/
        traductionExperienceh3.innerText = translations.fr.trExph3;
        traductionExperienceh3_1.innerText = translations.fr.trExph3_1;
        traductionExperiencep.innerText = translations.fr.trExpp1;
        traductionExperiencep_1.innerText = translations.fr.trExpp1_1;
        /**Coding Skills Section **/
        traductionCodingSkillh2.innerText = translations.fr.trCodingSkillh2;
        traductionCodingSkillh3.innerText = translations.fr.trCodingSkillh3;
        /**Experience Skills Section **/
        traductionExperienceSkill.innerText = translations.fr.trExpSkill;
        traductionExperienceSkill1.innerText = translations.fr.trExpSkill1;
        traductionExperienceSkill2.innerText = translations.fr.trExpSkill2;
        traductionExperienceSkill3.innerText = translations.fr.trExpSkill3;
        traductionExperienceSkill4.innerText = translations.fr.trExpSkill4;
        /**Contact Section **/
        traductionContacth2.innerText = translations.fr.trContacth2;
        document.getElementById("contactFullName").placeholder = translations.fr.trContactFullName;
        document.getElementById("contactEmailAddress").placeholder = translations.fr.trContactEmail;
        document.getElementById("contactMobileNumber").placeholder = translations.fr.trContactMobile;
        document.getElementById("contactMessage").placeholder = translations.fr.trContactMessage;
        document.getElementById("contactSubject").placeholder = translations.fr.trContactSubject;
        traductionContactSubmitBtn.innerText = translations.fr.trContactSubmitbtn;
        /**Footer section **/
        footerCopyright.innerText = translations.fr.trFooterCopyright;


    }
    

    else if(language == "en"){
        /**Home Section **/
        traductionHome.innerText = translations.en.trHome;
        traductionAbout.innerText = translations.en.trAbout;
        traductionSkills.innerText = translations.en.trSkills;
        traductionContact.innerText = translations.en.trContact;

        traductionHomeh1.innerText = translations.en.trHomeh1;
        traductionHomeh3.innerText = translations.en.trHomeh3 ;
        traductionHomep1.innerText = translations.en.trHomep1;
        traductionHireMebtn.innerText = translations.en.trHomeHireMebtn;
        traductionLetstalkbtn.innerText = translations.en.trHomeLetsTalkbtn;
        /**About section **/
        traductionAboutspanMe.innerText = translations.en.trAboutspanMe;
        traductionAbouth2.innerText = translations.en.trAbouth2;
        traductionAbouth3.innerText = translations.en.trAbouth3;
        traductionAboutp.innerText = translations.en.trAboutp;
        traductionAboutReadMe.innerText = translations.en.trAboutReadMe;
        /**Education Section **/
        traductionEducationJourneyh2.innerText = translations.en.trJourneyh2;
        traductionEducationh3.innerText = translations.en.trEducationh3;
        traductionEducationh3_1.innerText = translations.en.trEducationh3_1;
        traductionEducationp1.innerText = translations.en.trEducationp1;
        traductionEducationp1_1.innerText = translations.en.trEducationp1_1;
        /**Experience section**/
        traductionExperienceh3.innerText = translations.en.trExph3;
        traductionExperienceh3_1.innerText = translations.en.trExph3_1;
        traductionExperiencep.innerText = translations.en.trExpp1;
        traductionExperiencep_1.innerText = translations.en.trExp1_1;
        /**Coding Skills Section **/
        traductionCodingSkillh2.innerText = translations.en.trCodingSkillh2;
        traductionCodingSkillh3.innerText = translations.en.trCodingSkillh3;
        /**Experience Skills Section **/
        traductionExperienceSkill.innerText = translations.en.trExpSkill;
        traductionExperienceSkill1.innerText = translations.en.trExpSkill1;
        traductionExperienceSkill2.innerText = translations.en.trExpSkill2;
        traductionExperienceSkill3.innerText = translations.en.trExpSkill3;
        traductionExperienceSkill4.innerText = translations.en.trExpSkill4;
        /**Contact Section **/
        traductionContacth2.innerText = translations.en.trContacth2;
        document.getElementById("contactFullName").placeholder = translations.en.trContactFullName;
        document.getElementById("contactEmailAddress").placeholder = translations.en.trContactEmail;
        document.getElementById("contactMobileNumber").placeholder = translations.en.trContactMobile;
        document.getElementById("contactMessage").placeholder = translations.en.trContactMessage;
        document.getElementById("contactSubject").placeholder = translations.en.trContactSubject;
        traductionContactSubmitBtn.innerText = translations.en.trContactSubmitbtn;
        /**Footer section **/
        footerCopyright.innerText = translations.en.trFooterCopyright;
        
    }
}