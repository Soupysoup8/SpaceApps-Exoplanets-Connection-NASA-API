const axios = require('axios'); // Importa axios usando CommonJS

// Función para hacer una consulta a la API de Exoplanet Archive
async function queryExoplanets(query) {
    const baseUrl = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=';
    
    try {
        // Concatena la consulta directamente en la URL
        const url = `${baseUrl}${encodeURIComponent(query)}&format=json`;

        const response = await axios.get(url);
        
        return response.data;  // Devuelve los datos de la respuesta
    } catch (error) {
        console.error('Error al realizar la consulta:', error.response ? error.response.data : error.message);
        throw error;  // Propaga el error para manejarlo más tarde si es necesario
    }
}

// Ejemplo de uso con una consulta simple
const exampleQuery = "SELECT top 20 pl_name,hostname,pl_letter,hd_name,hip_name,tic_id,gaia_id FROM pscomppars"; 

//devolver el nombre de 20 planetas
const exampleQuery3 = "select * from pscomppars WHERE hostname = 'kepler'"; 

// devolver info de un planeta por su nombre
const exampleQuery2  = "select top 1 * from pscomppars WHERE pl_name = 'bet Pic b'";

const coordenadasQuery = "select top 1 x,y,z from pscomppars where pl_name = 'HD 47366 c' ";

queryExoplanets(exampleQuery3)
    .then(data => {
        console.log('Resultados de la consulta:', data);  // Muestra los resultados en la consola
    })
    .catch(error => {
        console.error('Error en la consulta:', error);  // Maneja errores en la consulta
    });
