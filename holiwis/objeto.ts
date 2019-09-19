interface Persona {
    id: number;
    nombre: string;
    correo: string;
    direccion: string;
    edad: number;
}

const jorge: Persona = {
    id: 1,
    nombre: "Jorge",
    correo: "jorgevaldez@gmail.com",
    direccion: "señora del rosario 111",
    edad: 456 
}

console.log(jorge.nombre);


 function printObjeto(person: Persona) {
  return "Hola" + person.nombre;
}

document.body.textContent = printObjeto(jorge);