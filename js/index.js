const ICONS = [
    { name: "Angular.png", alt: "Angular icon" },
    { name: "html.png", alt: "HTML icon" },
    { name: "css.png", alt: "CSS icon" },
    { name: "JavaScript.png", alt: "JavaScript icon" },
    { name: "TS.png", alt: "TypeScript icon" },
    { name: "AWS.png", alt: "AWS icon" },
    { name: "azure.png", alt: "azure icon" },
    { name: "git.png", alt: "git icon" },
    { name: "jest.png", alt: "Jest icon" },
    { name: "karma.png", alt: "Karma icon" },
    { name: "sass.png", alt: "Sass icon" },
    { name: "webpack.png", alt: "webpack icon" }
];

const WORKS = [
    { 
        name: "My Own Space",
        img: "Logo.jpg",
        alt: "My Own Space logo",
        framework: "Angular",
        tools: "AWS, Serverless, TypeScript, SCSS",
        url: "https://myownspace.santiagotapascodeveloper.com/#/login"
    }
];

let iconsList = '';
let workList = '';

const loadIcons = () => {
    ICONS.forEach(icon => {
        iconsList += `
            <img src="img/${icon.name}" alt="${icon.alt}" title="${icon.alt}">
        `
    });

    document.getElementById('stack-icons').innerHTML = iconsList;
};

const loadWorks = () => {
    WORKS.forEach(work => {
        workList += `
        <div class="work-container">
            <div class="work-container__title">
                ${work.name}
            </div>
            <figure>
                <img src="img/${work.img}" alt="${work.alt}">
            </figure>
            <div class="work-container__info ">
                <label for="">Framework</label>
                <p>${work.framework}</p>
                <label for="">Tools</label>
                <p>${work.tools}</p>
            </div>
            <div class="work-container__rip"></div>
            <div class="work-container__footer">
                <button onclick=" window.open('${work.url}','_blank')">Visit</button>
            </div>
        </div>
        `
    });

    document.getElementById('work-items').innerHTML = workList;
}

loadIcons();
loadWorks();