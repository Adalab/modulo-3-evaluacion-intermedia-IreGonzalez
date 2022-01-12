
// // Función que obtiene una propiedad del local storage
// // Si esta propiedad no existe porque es la primera vez que la usuaria entra en la página la función devuelve el valor de defaultValue
// // Que esta función devuelva un valor por defecto es una cómoda manera de trabajar, así esta comprobación no la tenemos que hacer App.js
// const getProjects = (data, projects) => {
//     const localStorageData = localStorage.getItem(data);
//     //Si la lista guardada de favoritos es null, está vacía, por lo que se usará la initialData por defecto
//     if (localStorageData === null) {
//         return setData([...data, projects])
//     }
//     //Si no está vacía se extraen los datos obtenidos del ls
//     else {
//         return JSON.parse(localStorageData);
//     }
// };

// // Función que guarda una propiedad y su valor en el local storage
// const savedProjects = (data, projects) => {
//     const localStorageData = JSON.stringify(projects);
//     localStorage.setItem(data, localStorageData);
// };

// // Función que borra una propiedad del local storage
// const remove = data => {
//     localStorage.removeItem(data);
// };

// // Función que limpia todo el local storage
// const clear = () => {
//     localStorage.clear();
// };

// // Creamos un objeto temporal que es el que queremos exportar
// // Este objeto tiene la una propiedad get cuyo valor es la función get
// // Este objeto tiene la una propiedad set cuyo valor es la función set
// // Este objeto tiene la una propiedad remove cuyo valor es la función remove
// // Este objeto tiene la una propiedad clear cuyo valor es la función clear
// const objectToExport = {
//     get: getProjects,
//     set: savedProjects,
//     remove: remove,
//     clear: clear
// };

// // Exportamos el objeto para que pueda ser usado desde App
// export default objectToExport;