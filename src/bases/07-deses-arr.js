
console.log('Hola Mundo');

// Desestructuracion de arreglos seccion 3 video 19

const personajes = ['Goku','Vegeta','Trunks'];

const [ , , p3] = personajes; //desestructuracion

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const arr = retornaArreglo;

console.log(arr);

//usando desestructuracion se ve asi
const [letras,numeros] = retornaArreglo();

console.log(letras,numeros);


//Tarea: 1El 1er valor del arreglo se llama nombre y 
//el 2do se llamara setNombre
const useState = (valor) => {
    return [valor,()=>{console.log('Hola Mundoo')}];
}

//const arri = useState('Goku');

//console.log(arri);

//arri[1]();

//Tarea es imprimir en consola el nombre 
const [nombre, setNombre] = useState('Goku');

console.log( nombre );

setNombre();


