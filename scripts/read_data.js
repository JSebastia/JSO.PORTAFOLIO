export async function getDataCards(urlFile) {

    try {
        const response = await fetch(urlFile);
        if (!response.ok) {
            throw new Error("No se pudo leer el archivo JSON. Verifique la ruta del archivo.");
        }
        return response.json();

    } catch (error) {
        console.log(error);
        return null;
    }    
};

/*if (dataCertified == null) {
        const information = document.createElement("p")
        information.classList.add("error-information")
        information.textContent = "⚠️ No se pudo cargar los datos de las tarjetas.";

        divContainerCards.classList.add("container-certifieds-error")
        divContainerCards.appendChild(information);
        return;
    }*/

    //divContainerCards.classList.remove("container-certifieds-error");