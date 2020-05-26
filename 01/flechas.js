"use strict";
//FUNCIONES DE FLECHA
(function () {
    //Funcion asignada a una variable
    var miFuncion = function (a) {
        return a.toUpperCase();
    };
    //funsion tradicional
    var miFuncionF = function (a) { return a.toUpperCase(); };
    var sumarN = function (a, b) {
        return a + b;
    };
    var sumarF = function (a, b) { return a + b; };
    var hulk = {
        nombre: 'Hulk',
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.nombre + " smash!!!");
            }, 1000);
        }
    };
    hulk.smash();
})();
