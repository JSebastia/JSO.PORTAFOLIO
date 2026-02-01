import { getDataCards } from "./read_data.js";

async function createCardCertified() {

    const dataCertified = await getDataCards("data_certifieds.json");

    const divContainerCards = document.getElementById("containerCardsCertifieds");
    const fragment = document.createDocumentFragment();

    dataCertified.data.forEach(certified => {

        let divMainCard = document.createElement("div");
        divMainCard.classList.add("card");

        let divDataContainer = document.createElement("div");
        divDataContainer.classList.add("card-container");

        let imgElement = document.createElement("img");
        imgElement.classList.add("card-container__img");
        imgElement.src = certified.urlImage;

        let titleCard = document.createElement("h3");
        titleCard.classList.add("card-container__title");
        titleCard.textContent = certified.title;

        let descriptionCard = document.createElement("p");
        descriptionCard.classList.add("card-container__description");
        descriptionCard.textContent = certified.description;

        divDataContainer.appendChild(imgElement);
        divDataContainer.appendChild(titleCard);
        divDataContainer.appendChild(descriptionCard);

        let divDecoration = document.createElement("div");
        divDecoration.classList.add("information-decoration");

        let textDecorationInitial = document.createElement("p");
        textDecorationInitial.classList.add("information-decoration__text");
        textDecorationInitial.innerHTML = "------ &gt;&nbsp;&nbsp;&nbsp;&lt;p&gt;"

        let buttonReadMore = document.createElement("button");
        buttonReadMore.classList.add("information-decoration__button-more");
        buttonReadMore.textContent = 'Leer más';
        buttonReadMore.addEventListener("click", function() {
            createReadMore(certified.dataReadMore.title);
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
}

function createReadMore(text) {
    const divContainerCards = document.getElementById("containerCardsCertifieds");
    let element = document.createElement("p");
    element.textContent = text;
    divContainerCards.appendChild(element);
}

createCardCertified();

