const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => "Hola mundo";

//Tarea

function getUsuarioActivo(nombre){
    return {
        uid: "ABC123",
        username: nombre
    }
}

let usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);

//Ejercicio

const getUsuarioActivoFuncionFlecha = (nombre) => (
    {
        uid: "ABC123",
        username: nombre
    }
);

usuarioActivo = getUsuarioActivoFuncionFlecha("Andres");
console.log(usuarioActivo);