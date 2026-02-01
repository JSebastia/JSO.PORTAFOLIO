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