(function () {
    function activar (quien:string,
                      objeto:string ='batisenal' ,
                      momento?:string) { //? quiere decir que es un argumento obcional

        if (momento){
            console.log (`${quien } activo la ${objeto} en la ${momento}.`);
        }else {
            console.log(`${quien} activo la ${objeto}.`);
        }



    }

    activar('Gordon','tarde');

})();
