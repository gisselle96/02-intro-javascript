

console.log('Hola Mundo');


// Funciones 


//funcion saludar no es recomendable

//function saludar( nombre ){
//    return `Hola, ${ nombre }`;

//}


//saludar = 30;



//Mejor hacer asi
const saludar = function(nombre){
    return `Hola, ${ nombre }`;
}

//Funciones de flecha
const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = (nombre) => `Hola, ${ nombre }`;

const getUser1 = () => {
    return {
        uid: 'ABC',
        username:'ABC_123'
    }
}

//o , si no tiene return parentesis cambia y ; funciona igual

const getUser = () => ({
        uid: 'ABC',
        username:'ABC_123'
});


console.log(saludar);
console.log(saludar2('Peter'));
console.log(saludar3('Maria'));

console.log(getUser1())

const user = getUser();
console.log(user)

//Tarea : 1 transformar a una funcion de flecha y 2 tiene que retornar un objeto implicito
//y 3 pruebas 

function getUsuarioActivo(nombre){
    return{
        uid: 'ABCD',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);


//Resolucion 
//1 y 3
const getUsuarioActivo2 = (nombre) => {
    return{
        uid: 'ABCDE',
        username: nombre
    }
};

const user2 = getUsuarioActivo2('Rober');
console.log(user2);

//2 y 3
const getUsuarioActivo3 = (nombre) => ({
        uid: 'ABCDEF',
        username: nombre 
});

const user3 = getUsuarioActivo3('Pedro');
console.log(user3);


