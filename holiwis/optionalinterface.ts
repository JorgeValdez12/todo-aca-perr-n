interface Heroe {
    nombre: string;
    poder?: string;
    arma?: string;
}

let superman: Heroe = {
    nombre: 'Super man',
    poder: 'Super fuerza'
}

let ironman: Heroe = {
    nombre: "Iron man"
    poder: "Mark One"
}

let thor: Heroe = {
    nombre: 'Thor'
    poder: 'Rayo'
    arma: 'Martillo'
}

function getHeroe( heroe: Heroe) {
    let mensaje:string;

    if(heroe.poder && heroe.arma) {
        return mensaje = `${ heroe.nombre} tiene el poder de: ${ heroe.poder } y un arma: ${ heroe.arma }` }
        else if (heroe.arma) {
            return mensaje = `${ heroe.nombre} tiene un: ${heroe.arma}`}
            else if (heroe.poder) {
                return mensaje = `${ heroe.nombre } tiee un poder de : ${heroe.poder}`
            

        
    
 
}

}


document.body.textContent = getHeroe( thor );