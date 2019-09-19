var Ciudadano = /** @class */ (function () {
    function Ciudadano(nombres, apellidos, edad, estadoC) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.edad = edad;
        this.estadoC = estadoC;
    }
    return Ciudadano;
}());
function Saludo(ciudadano, ciudadano2) {
    console.log("Hola, " + ciudadano.nombres + " " + ciudadano.apellidos + ",arma: " + ciudadano.arma + " ,rango: " + ciudadano.rango);
    return "Hola, " + ciudadano2.nombres + " " + ciudadano2.apellidos + ",vehiculo: " + ciudadano2.vehiculo + " ,uniforme: " + ciudadano2.uniforme;
}
var soldado1 = { nombres: "Vegeta", apellidos: "Saiyan", arma: "garlick gun", edad: 31, estadoC: "Casado", rango: 1 };
var policia1 = { nombres: "Josuke", apellidos: "Higashigata", vehiculo: "Jeep Wrangler", edad: 23, estadoC: "Soleto", uniforme: 1 };
document.body.textContent = Saludo(soldado1, policia1);
