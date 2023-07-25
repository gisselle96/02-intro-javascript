import { getHeroeById } from "./bases/08-imp-exp";

// Promesas

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //console.log('2 seg despues') quito este y pongo resolve
//         //resolve();

//         //Tarea: importar 
//         const p1 = getHeroeById(2);
//         //console.log(p1);
//         resolve(p1);
//         //resolve('No se pudo encontrar al heroe');

//     }, 2000)
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe)
// })
// .catch(err => console.warn(err));


const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
            setTimeout(() => {
                const p1 = getHeroeById(id);
                console.log(p1);
                if (p1){
                    resolve(p1);
                }else{
                    reject('No se pudo encontrar al heroe');
                }
            }, 2000)
        });

}


getHeroeByIdAsync(1)
    //.then(heroe => console.log('Heroe', heroe))
    .then(console.log)
    //.catch(err => console.warn(err));
    .catch(console.warn)




