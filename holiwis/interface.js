function saludo(persona) {
    return "Hola, " + persona.primerNombre + "" + persona.segundoNombre;
}
var llamarUsuario = { primerNombre: "Jorge", segundoNombre: "Daniel" };
document.body.textContent = saludo(llamarUsuario);
