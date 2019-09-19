class Ciudadano
{
    public nombres: string;
    public apellidos: string;
    public edad: number;
    public estadoC: string;
    constructor(nombres: string,apellidos: string,edad: number,estadoC: string)
    {
        this.nombres=nombres;
        this.apellidos=apellidos
        this.edad=edad;
        this.estadoC=estadoC;
    }
}

interface Soldado extends Ciudadano
{
    arma: string;
    rango: number;
}

interface Policia extends Ciudadano
{
    vehiculo: string;
    uniforme: number;
}

function Saludo(ciudadano: Soldado,ciudadano2: Policia)
{
    console.log("Hola, "+ciudadano.nombres+" "+ciudadano.apellidos+",arma: "+ciudadano.arma+" ,rango: "+ciudadano.rango);
    return "Hola, "+ciudadano2.nombres+" "+ciudadano2.apellidos+",vehiculo: "+ciudadano2.vehiculo+" ,uniforme: "+ciudadano2.uniforme;
}

let soldado1: Soldado={nombres: "Vegeta",apellidos: "Saiyan",arma: "garlick gun",edad: 31,estadoC:"Casado",rango:1};
let policia1: Policia={nombres: "Josuke",apellidos: "Higashigata",vehiculo: "Jeep Wrangler",edad: 23,estadoC:"Soltero",uniforme:1};
document.body.textContent = Saludo(soldado1,policia1);