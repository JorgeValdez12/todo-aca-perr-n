interface Persona {
    primerNombre: string;
    segundoNombre: string;

} 

function saludo(persona: Persona) { 
    return "Hola, " +persona.primerNombre + "" + persona.segundoNombre;
}
let llamarUsuario = {primerNombre: "Jorge" , segundoNombre: "Daniel" };



document.body.textContent = saludo(llamarUsuario);