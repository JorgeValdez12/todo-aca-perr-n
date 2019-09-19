function getHeroe(nombre, poder, arma) {
    if (arma === void 0) { arma = "martillo"; }
    var mensaje;
    if (poder) {
        return mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        return mensaje = nombre + "   tiene  un arma: ";
    }
}
document.body.textContent = getHeroe('Thor', 'rayo');
