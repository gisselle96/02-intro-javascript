
console.log('Hola Mundo');

// Objetos

const persona = {

    nombre:'Juan',
    apellido:'Perez',
    edad: 45,
    direccion:{
        ciudad: 'Capiata',
        zip: 9827348,
        lat: 98.324589,
        lng: 34.53244,

    }

}

console.log(persona);

//const persona2 = persona; //no se debe hacer jamas, es un falso positivo, es decir que cambia todo

const persona2 = { ...persona };

persona2.nombre = 'Peter';

console.log(persona2);





// otra forma de imprimir en consola 
//console.table( persona2 );