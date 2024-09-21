onload = () =>{
    document.body.classList.remove("container");
};

// Función para obtener el parámetro 'name' de la URL
function getQueryParam(param) {
    let params = new URLSearchParams(window.location.search);
    return params.get(param);
}

// Obtener el nombre desde el parámetro 'name' en la URL
let name = getQueryParam('name');

// Verificar si el nombre existe y reemplazar el texto en el HTML
const greetingElement = document.getElementById('greeting');

if (name) {
    greetingElement.textContent = ` ${name}`;

} else {
    greetingElement.textContent = '';
}
