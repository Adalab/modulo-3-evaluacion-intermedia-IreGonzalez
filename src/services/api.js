
const callToApi = () => {
    // Llamamos al API
    return fetch('')
        .then(response => response.json())
        .then(response => {
            // Cuando responde el API podemos limpiar los datos aquí
            const result = {
            };
            return result;
        });
};

export default callToApi;