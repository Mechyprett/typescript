"use strict";
//FUNCIONES DE FLECHA
(function () {
    //Funcion asignada a una variable
    const miFuncion = function (a) {
        return a.toUpperCase();
    };
    //funsion tradicional
    const miFuncionF = (a) => a.toUpperCase();
    const sumarN = function (a, b) {
        return a + b;
    };
    const sumarF = (a, b) => a + b;
    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            }, 1000);
        }
    };
    hulk.smash();
})();
