interface Persona {
    id: number;
    nombre: string;

}

let Personas: Array<Persona>

const compa1: Persona = {
    id: 1,
    nombre: "Jorge",
}

const compa2: Persona = {
    id: 2,
    nombre: "obiwan",
}

Personas.push(compa1, compa2);

console.log(Personas);