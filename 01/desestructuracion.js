"use strict";
(function () {
    var avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Droga'
    };
    /*en argumentos */
    //  const extraer = ({nombre,poder}: any)=>{
    //aqui la destructuracion sucedio como argumento  o sea como en el directamente en el argumento que yo recibo
    //const {nombre, clave, poder} = avenger;
    //tomame esete objeto y traeme todas sus propiedades
    // o seleccionamos la prodiedad que querramos extraer
    /*
    * En la impresion no importa el orden siempre que sea un objeto no imorta
    * su orden
    * */
    // console.log(nombre, clave);
    //}
    //extraer(avenger)
    //DESTRUCTURACION DE ARREGLOS
    var avengers = ['Thor', 'Ironman', 'Spiderman'];
    var arana = avengers[2]; //las comas significa que me interesa dichasposiciones
    //console.log( loki);
    //console.log(hombre);
    // console.log(arana);
    var extraerArr = function (_a) {
        var thor = _a[0], ironman = _a[1], spiderman = _a[2];
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    };
    extraerArr(avengers);
})();
