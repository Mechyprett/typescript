//TIPADO DE UNA FUNCION
/*

 */
(()=>{
    const sumar =(a:number, b:number): number => a+b;

     const nombre = () => 'Hola Fernando';

     const obtenerSalario =():Promise<string> =>{
         return new Promise( (resolve, reject)=>{
            resolve('Fernando');
         });
     }

 // const sumar = (a:number, b:number): number =>{
    //  return a +b;
        obtenerSalario().then(a => console.log(a.toUpperCase()))

})();
