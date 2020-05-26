"use strict";
(function () {
    var retirarDinero = function (montoRetirar) {
        var dineroActual = 1000;
        return new Promise(function (resolve, reject) {
            if (montoRetirar > dineroActual) {
                reject('No hay suficientes fondos');
            }
            else {
                dineroActual = -montoRetirar;
                resolve(dineroActual);
            }
        });
    };
    retirarDinero(1500)
        .then(function (montoActual) { return console.log("Me queda " + montoActual); })
        .catch(function (err) { return console.warn(err); }); //.catch(console.warn) es lo mismo reducido
})();
