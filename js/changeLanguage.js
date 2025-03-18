function changeLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem("selectedLanguage", lang);

    document.getElementById("menu_home").textContent = translations[lang].menu_home;
    document.getElementById("menu_about").textContent = translations[lang].menu_about;
    document.getElementById("menu_skills").textContent = translations[lang].menu_skills;
    document.getElementById("menu_portfolio").textContent = translations[lang].menu_portfolio;

    document.getElementById("greeting").textContent = translations[lang].greeting;
    document.getElementById("intro").textContent = translations[lang].intro;
    document.getElementById("motto").textContent = translations[lang].motto;

    document.getElementById("title_about").textContent = translations[lang].title_about;
    document.getElementById("name_age").textContent = translations[lang].name_age;
    document.getElementById("contact").textContent = translations[lang].contact;
    document.getElementById("location_title").textContent = translations[lang].location_title;
    document.getElementById("location").textContent = translations[lang].location;
    document.getElementById("experience").textContent = translations[lang].experience;
    document.getElementById("short_resume").innerHTML = translations[lang].short_resume;
    document.getElementById("langs").textContent = translations[lang].langs;
    document.getElementById("education").textContent = translations[lang].education;
    document.getElementById("academy").textContent = translations[lang].academy;
    document.getElementById("career").textContent = translations[lang].career;
    document.getElementById("position").textContent = translations[lang].position;
    document.getElementById("movie").textContent = translations[lang].movie;

    document.getElementById("title_skills").textContent = translations[lang].title_skills;
    document.getElementById("title_portfolio").textContent = translations[lang].title_portfolio;

    document.getElementById("btn-en").textContent = translations[lang].btnEnglish;
    document.getElementById("btn-uk").textContent = translations[lang].btnUkrainian;

    if (lang === "en") {
        document.getElementById("btn-en").style.visibility = "hidden";
        document.getElementById("btn-uk").style.visibility = "visible"; 
    } else if (lang === "uk") {
        document.getElementById("btn-uk").style.visibility = "hidden";
        document.getElementById("btn-en").style.visibility = "visible"; 
    }
}

const cv_ua = `Вивчаю Python з 2021 року.<br> 
    Після проходження двох онлайн курсів залишилось глибоке відчуття браку знань, 
    отже далі я почав займатись самотужки.<br><br> 

    Спочатку дивився відео на YouTube. Потім почав читати офіційну документацію, 
    статті та сайти такі, як learnpython.org, w3schools.com... 
    Із виникненням чату GPT також використовую і його.<br><br> 

    Люблю Python, бо у нього найкращий синтаксис для читання (у порівнянні з C-подібними мовами). 
    Більш того, Python має широкий ряд бібліотек та фреймворків.<br> 
    Я створив декілька проектів, використовуючи найбільш поширені фреймворки, 
    що можна побачити в секції Портфоліо.<br><br> 

    Маю базові знання із JavaScript.<br> 
    Комерційного досвіду в IT немає.`;

const cv_en = `I've been learning Python since 2021.<br> 
  After completing two online courses
  I felt a lack of knowledge, so I started learning by my own.<br><br> 

  Firstly, I was watching videos on YouTube. Then I began to read official docs, 
  articles, sites such as learnpython.org, w3schools.com, etc... 
  And finally I started using GPT chat.<br><br> 

  I love Python because of its readable syntax(in comparison with C similar languages). 
  Moreover, Python has a wide range of libraries and frameworks.<br> 
  And I've created several projects on Python you can see in the Portfolio section.<br><br> 

  I have basic knowledge of JavaScript.<br> 
  Got no commercial IT Experience.`;

const translations = {
    en: {
        menu_home: "HOME",
        menu_about: "ABOUT",
        menu_skills: "SKILLS",
        menu_portfolio: "PORTFOLIO",

        greeting: "Hello, friends!",
        intro: "I'm Serhii Ovsiuk - Python Developer",
        motto: '"Crafting the future, one line of code at a time."',

        title_skills: "These are technics that I know:", 
        
        title_about: "Short Resume",
        name_age: "SERHII OVSIUK, 42 years old.",
        contact: "CONTACT: ",
        location_title: "LOCATION: ",
        location: "Khmelnytskyi, Ukraine",
        experience: "IT EXPERIENCE: ",
        short_resume: cv_en,
        langs: "LANGUAGES: ",
        education: "EDUCATION: ",
        academy: "Ternopil Academy of National Economy, Accounting and Auditing",
        career: "CAREER: ",
        position: "Clerk in the Town Council",
        movie: "Favourite Movie: ",

        title_portfolio: "See my recent projects",

        btnEnglish: "🇬🇧",
        btnUkrainian: "🇺🇦",
    },
    uk: {
        menu_home: "ГОЛОВНА",
        menu_about: "ПРО МЕНЕ",
        menu_skills: "НАВИКИ",
        menu_portfolio: "ПОРТФОЛІО",

        greeting: "Вітаю, друзі!",
        intro: "Я, Овсюк Сергій - Python Developer",
        motto: '"Crafting the future, one line of code at a time."',

        title_skills: "Технології, які знаю",

        title_about: "Коротке резюме",
        name_age: "ОВСЮК СЕРГІЙ, 42 роки.",
        contact: "КОНТАКТИ: ",
        location_title: "ПРОЖИВАННЯ: ",
        location: "Хмельницький, Україна",
        experience: "ДОСВІД в IT: ",
        short_resume: cv_ua,
        langs: "ІНОЗЕМНІ МОМИ: ",
        education: "ОСВІТА: ",
        academy: "Тернопільська академія народного господарства, облік і аудит",
        career: "КАР'ЄРА: ",
        position: "Службовець у міській раді.",
        movie: "Улюблене кіно: ",

        title_portfolio: "Перегляньте мої останні проекти",

        btnEnglish: "🇬🇧",
        btnUkrainian: "🇺🇦",
    }
};
c