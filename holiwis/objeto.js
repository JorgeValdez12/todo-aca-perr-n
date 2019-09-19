var jorge = {
    id: 1,
    nombre: "Jorge",
    correo: "jorgevaldez@gmail.com",
    direccion: "señora del rosario 111",
    edad: 456
};
console.log(jorge.nombre);
function printObjeto(person) {
    return "Hola" + person.nombre;
}
document.body.textContent = printObjeto(jorge);
