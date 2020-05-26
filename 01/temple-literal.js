"use strict";
(function () {
    function getEdad() {
        return 100 + 100 + 300;
    }
    var nombre = 'Fernando';
    var apellido = "Herrera";
    var edad = 33;
    // const salida = nombre + apellido + edad;
    // const salida = nombre + "" + apellido + "(" + edad + ")";
    var salida = nombre + " \n " + apellido + " (" + getEdad() + ")";
    // Fernando Herrera (Edad:33)
    console.log(salida);
})();
