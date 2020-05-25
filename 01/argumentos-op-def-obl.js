"use strict";
(function () {
    function activar(quien, objeto = 'batisenal', momento) {
        if (momento) {
            console.log(`${quien} activo la ${objeto} en la ${momento}.`);
        }
        else {
            console.log(`${quien} activo la ${objeto}.`);
        }
    }
    activar('Gordon', 'tarde');
})();
