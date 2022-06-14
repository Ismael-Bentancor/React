let edad_variable = 23;

const persona = {
    nombre: "Jesus",
    edad: edad_variable,
}

console.table(persona)

const persona2 = {...persona, nombre: "Hernesto"};

console.table(persona2);
console.log(`Hola, ${edad_variable}`);