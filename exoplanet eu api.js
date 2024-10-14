const axios = require('axios'); // Importa axios usando CommonJS

// Función para hacer una consulta a la API de Exoplanet Archive
async function queryExoplanets(query) {
    const baseUrl = 'http://voparis-tap-planeto.obspm.fr/tap?query=';

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

// Ejemplo de consulta para obtener todos los campos de los exoplanetas con semiejes menores a 5 AU
const exampleQuery = "show databases;";

// Realiza la consulta
queryExoplanets(exampleQuery)
    .then(data => {
        console.log('Resultados de la consulta:', data);  // Muestra los resultados en la consola
    })
    .catch(error => {
        console.error('Error en la consulta:', error);  // Maneja errores en la consulta
    });
