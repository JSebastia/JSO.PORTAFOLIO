export function createCardCertified(dataCards, idDivContainer) {

    const dataCertified = dataCards;
    const divContainerCards = document.getElementById(idDivContainer);
    const fragment = document.createDocumentFragment();

    dataCertified.forEach(CERTIFIED => {

        let divMainCard = document.createElement("div");
        divMainCard.classList.add("card");

        let divDataContainer = document.createElement("div");
        divDataContainer.classList.add("card-container");

        let imgProject= document.createElement("img");
        imgProject.classList.add("card-container__img");
        imgProject.src = CERTIFIED.urlImage;

        let titleProject = document.createElement("h3");
        titleProject.classList.add("card-container__title");
        titleProject.textContent = CERTIFIED.title;

        let descriptionProject = document.createElement("p");
        descriptionProject.classList.add("card-container__description");
        descriptionProject.textContent = CERTIFIED.description;

        divDataContainer.appendChild(imgProject);
        divDataContainer.appendChild(titleProject);
        divDataContainer.appendChild(descriptionProject);

        let divDecoration = document.createElement("div");
        divDecoration.classList.add("information-decoration");

        let textDecorationInitial = document.createElement("p");
        textDecorationInitial.classList.add("information-decoration__text");
        textDecorationInitial.innerHTML = "------ &gt;&nbsp;&nbsp;&nbsp;&lt;p&gt;"

        let buttonReadMore = document.createElement("button");
        buttonReadMore.classList.add("information-decoration__button-more");
        buttonReadMore.textContent = 'Leer más';
        buttonReadMore.addEventListener("click", function() {
            createReadMore(CERTIFIED.dataReadMore.title);
        });

        let textDecorationFinal = document.createElement("p");
        textDecorationFinal.classList.add("information-decoration__text");
        textDecorationFinal.innerHTML = "&lt;/p&gt;";

        divDecoration.appendChild(textDecorationInitial);
        divDecoration.appendChild(buttonReadMore);
        divDecoration.appendChild(textDecorationFinal);

        divMainCard.appendChild(divDataContainer);
        divMainCard.appendChild(divDecoration);

        fragment.append(divMainCard);
    });

    divContainerCards.appendChild(fragment);
};

export function createCardProject(dataCards, idDivContainer) {

    const dataProjects = dataCards;
    const divContainerCards = document.getElementById(idDivContainer);
    const fragment = document.createDocumentFragment();
    
    dataProjects.forEach(PROJECT => {
        //Div-Conatiner principal.
        let divMainCard = document.createElement("div");
        divMainCard.classList.add("card-project");

        //Div-Container data project.
        let divContainerProject = document.createElement("div");
        divContainerProject.classList.add("project-container");

        let imgProject = document.createElement("img");
        imgProject.classList.add("project-container__img");
        imgProject.src = PROJECT.urlImage;

        let titleProject = document.createElement("h3");
        titleProject.classList.add("project-container__title");
        titleProject.textContent = PROJECT.title;

        let descriptionProject = document.createElement("p");
        descriptionProject.classList.add("project-container__description");
        descriptionProject.textContent = PROJECT.description;

        //Div-Container data technologies.
        let divTechnologies = document.createElement("div");
        divTechnologies.classList.add("project-technologies");

        let listTechnologies = PROJECT.technologies;

        for (let i = 0; i < listTechnologies.length; i++) {
            
            let technology = document.createElement("p");
            technology.classList.add("project-technologies__text");
            technology.innerHTML = `<span class="text-color">-- ></span>&nbsp;&nbsp;${listTechnologies[i]}`;

            divTechnologies.appendChild(technology);
        };

        //Div-Container data links of the project (link GitHub and demo).
        let divProjectLinks = document.createElement("div");
        divProjectLinks.classList.add("project-link-information");

        let containerLinkGit = document.createElement("a");
        containerLinkGit.classList.add("link-gitHub");
        containerLinkGit.href = PROJECT.urlGitHub;

        let imgGit = document.createElement("img");
        imgGit.classList.add("link-gitHub__img");
        imgGit.src = "./assets/logoGitHub.svg";

        let textGit = document.createElement("p");
        textGit.classList.add("link-gitHub__text");
        textGit.innerHTML = 'Código&nbsp;&nbsp;<span class="text-color">🡭</span>';

        containerLinkGit.appendChild(imgGit);
        containerLinkGit.appendChild(textGit);

        let logo = document.createElement("p");
        logo.classList.add("project-link-information__logo");
        logo.innerHTML = 'JSO<span class="text-color">.PORTAFOLIO</span>';

        divProjectLinks.appendChild(containerLinkGit);

        if (PROJECT.demo[0] == true) {
            let linkDemo = document.createElement("a");
            linkDemo.classList.add("project-link-information__demo");
            linkDemo.href = PROJECT.demo[1];
            linkDemo.textContent = "Probar 🡭";

            divProjectLinks.appendChild(linkDemo);
        }

        divProjectLinks.appendChild(logo);

        let lineDecoration = document.createElement("hr");
        lineDecoration.classList.add("project__line");

        divContainerProject.appendChild(imgProject);
        divContainerProject.appendChild(titleProject);
        divContainerProject.appendChild(descriptionProject);
        divContainerProject.appendChild(divTechnologies);
        divContainerProject.appendChild(divProjectLinks);

        divMainCard.appendChild(divContainerProject);
        divMainCard.appendChild(lineDecoration);

        fragment.appendChild(divMainCard);
    });

    divContainerCards.appendChild(fragment);
}


export function createCardTechnology(dataCards, idDivContainer) {

    const dataTechnologies = dataCards;
    const divContainerCards = document.getElementById(idDivContainer);
    const fragment = document.createDocumentFragment();

    dataTechnologies.forEach(TECHNOLOGY => {

        let divMainCard = document.createElement("div");
        divMainCard.classList.add("container-technology");

        let divContainerData = document.createElement("div");
        divContainerData.classList.add("card-technology");

        let imgTechnology = document.createElement("img");
        imgTechnology.classList.add("card-technology__img");
        imgTechnology.src = TECHNOLOGY.urlImage;

        let nameTechnology = document.createElement("p");
        nameTechnology.classList.add("card-technology__name");
        nameTechnology.textContent = TECHNOLOGY.name;

        divContainerData.appendChild(imgTechnology);
        divContainerData.appendChild(nameTechnology);

        let lineDecoration = document.createElement("hr");
        lineDecoration.classList.add("container-technology__line");

        divMainCard.appendChild(divContainerData);
        divMainCard.appendChild(lineDecoration);


        fragment.appendChild(divMainCard);
    });

    divContainerCards.appendChild(fragment);
};

function createReadMore(text) {
    const divContainerCards = document.getElementById("containerCardsCertifieds");
    let element = document.createElement("p");
    element.textContent = text;
    divContainerCards.appendChild(element);
};

