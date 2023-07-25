//import {heroes} from './data/heroes'

import heroes, {owners}  from '../data/heroes';

// tab 'imp' y muestra esto import heroes from './data/heroes'

// heroes  apretar ctrl espaciadora enter e importa

console.log('Hola Mundo');

// import y export 


// const getHeroeById = (id) => {
//     return heroes.find((heroe) =>{
//         if (heroe.id === id){
//         return true;
//         }else{
//             return false;
//         }
//     });
// }

//mejor practica que la de arriba es :

export const getHeroeById = (id) => {
     return heroes.find((heroe) => heroe.id === id );
    }

console.log(getHeroeById(2));
console.log(owners);

export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('DC')); 


