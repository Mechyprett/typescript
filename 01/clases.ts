(()=>{
    /*
    class Avenger {
    nombre: string;
    equipo :string;
    nombreReal?:string;

    puedePeliar:boolean;
    peleasGanadas:number;

    constructor (nombre: string, equipo: string){
        this.nombre = nombre;
        this.equipo = equipo;
    }

    }
    */

    class Avenger {
        /*
        nombre: string;
        equipo :string;
        nombreReal:string;

        puedePeliar:boolean;
        peleasGanadas:number;
    */

        constructor (
            public nombre: string,
            public equipo: string,
            public nombreReal?: string,
            public puedesPeliar?: boolean =true,
            public peleasGanadas:number = 0){}


    }

    const  antman = new Avenger('Antman','Capi');
    console.log(antman);

})();
