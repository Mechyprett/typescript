"use strict";
(function () {
    console.log('Inicio');
    var prom1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('Se termino el timeout');
        }, 1000);
    });
    prom1
        .then(function (mensaje) { return console.log(mensaje); })
        .catch(function (err) { return console.warn(err); });
    console.log('Fin');
})();
