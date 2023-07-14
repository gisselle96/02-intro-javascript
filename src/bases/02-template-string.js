
console.log('Hola Mundo');

// Template Strings

const nombre = 'Gisselle';

const apellido = 'Barreto';

//const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = `
${ nombre } 
${ apellido }
${ 1 + 1 } 
`;


console.log(nombreCompleto)


function getSaludo(nombre){
    return 'Hola Mundo ' + nombre;
}

console.log(`Este es un texto:  ${getSaludo(nombre) } `);