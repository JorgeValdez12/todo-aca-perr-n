function saludo(persona, edad, deporte) {
    var cadena = "Hola, " + persona + ', tu tienes ' + edad + "años de edad."
        + '¿Practicas deporte? ' + deporte;
    return cadena;
}
var persona = "Jorge";
var edad = 23;
var deporte = true;
document.body.textContent = saludo(persona, edad, deporte);
