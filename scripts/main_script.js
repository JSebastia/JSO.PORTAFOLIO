import { getDataCards } from "./read_data.js";
import { createCardCertified, createCardProject, createCardTechnology } from "./create_cards.js";

// --- CREATE CERTIFIED CARDS. ---
const dataCardsCertified = await getDataCards("data_certifieds.json");

const idContainerCertified = "containerCardsCertifieds";
createCardCertified(dataCardsCertified.data, idContainerCertified);

// --- CREATE PROJECT CARDS: ---- 
const dataCardsProject = await getDataCards("data_projects.json");

// Create cards for personal projects.
const idContainerPersonalP = "containerPersonalProjects";
createCardProject(dataCardsProject.dataPersonalProjects, idContainerPersonalP);

// Create cards for academic projects.
const idContainerAcademicP = "containerAcademicProjects";
createCardProject(dataCardsProject.dataAcademicProjects, idContainerAcademicP);

// --- CREATE TECHNOLOGIES CARDS: --- 
const dataCardsTechnologies = await getDataCards("data_technologies.json");

// Create cards for technologies.
const idContainerTechnologies = "containerLanguagesTechnologies";
createCardTechnology(dataCardsTechnologies.dataLanguages, idContainerTechnologies);

// Create cards for framworks and bookstore.
const idContainerFramework = "containerFrameworkTechnologies";
createCardTechnology(dataCardsTechnologies.dataFramework, idContainerFramework);

// Create cards for tools.
const idContainerTools = "containerToolsTechnologies";
createCardTechnology(dataCardsTechnologies.dataTools, idContainerTools);

/*async function verifyNull(listIdContainers) {

    try

}*/

/*const a = "hola"
    + "Sebas" + "carla";
    console.log(a);*/
