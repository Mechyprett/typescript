//FUNCIONES DE FLECHA
( function () {

    //Funcion asignada a una variable
    const miFuncion = function (a: string) {
        return a.toUpperCase();

    }
    //funsion tradicional
    const miFuncionF = (a: string) => a.toUpperCase();

    const sumarN = function (a:number ,b:number){
        return a + b;
    }

    const sumarF = (a:number, b:number)=> a+b;

    const hulk = {
        nombre : 'Hulk',
        smash(){

            setTimeout( ()=>{
                console.log(`${this.nombre} smash!!!`);
            }, 1000);


        }
    }

    hulk.smash();


})();
