function saludo(persona,edad, deporte) {
    const cadena: any = "Hola, " + persona + ', tu tienes ' + edad + "años de edad."
    + '¿Practicas deporte? ' + deporte;
    return cadena;
}

let persona: string =  "Jorge";
let edad: number = 23;
let deporte: boolean = true;


document.body.textContent = saludo(persona, edad, deporte);

