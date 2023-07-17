
console.log('Hola Mundo');

// Desestructuracion 

//Asignacion Desestructurante

const persona = {
    nombre: 'Andres',
    edad: 45,
    clave: 'profesor',
};


console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

const {nombre} = persona;
console.log(nombre);

const {edad: edad2} = persona;
console.log(edad2);



//const retornaPersona = (usuario) => {
//    const {nombre, edad, clave} = usuario;
//    console.log(edad, clave, nombre)
//}

//retornaPersona();


//const retornaPersona2 = ({nombre, edad, rango='Lic'}) => {
//    console.log(nombre,edad, rango);
//}

//retornaPersona2(persona);


const usoContexto = ({clave, nombre, edad}) => {
    //console.log(nombre,edad, rango);
    return {
        nombreClave: clave,
        anios: edad
    }
}

const avenger = usoContexto(persona);

console.log(avenger);


//Desestructuracion
const {nombreClave, anios} = usoContexto(persona);

console.log(nombreClave,anios)



//con objetos
const usoContexto2 = ({clave, nombre, edad}) => {
    //console.log(nombre,edad, rango);
    return {
        nombreClave2: clave,
        anios2: edad,
        latlng:{
            lat:123.543,
            lng:8923.42
        }
    }
}

//Desestructuracion
const {nombreClave2, anios2, latlng} = usoContexto2(persona);

console.log(nombreClave2,anios2);
console.log(latlng);


//con objetos con sus respectivos valores
const usoContexto3 = ({clave, nombre, edad}) => {
    //console.log(nombre,edad, rango);
    return {
        nombreClave3: clave,
        anios3: edad,
        latlng3:{
            lat3:123.543,
            lng3:8923.42
        }
    }
}

//Desestructuracion
const {nombreClave3, anios3, latlng3:{lat3, lng3}} = usoContexto3(persona);

console.log(nombreClave3,anios3);
console.log(lat3, lng3);