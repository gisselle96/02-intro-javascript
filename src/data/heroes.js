
//export const heroes = [
//export  default [ : y se quita la llave en el primer argumento 
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//export const owners = ['DC', 'Marvel'];


//export default heroes;


//exportacion por defecto mas una individual se importa(en el archivo necesario) de la siguiente manera:
//import heroes, {owners} from './data/heroes';


//otra forma de exportar normal es

const owners = ['DC', 'Marvel'];


export { 
    heroes as default,
    owners
}