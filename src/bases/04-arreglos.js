
console.log('Hola Mundo');

// Arreglos en Javascript


//Array() tamanho que se sabe 

const arreglo = [1,2,3,4];

//arreglo.push(1); no es recomendable ya que el push modifica el objeto principal

//let arreglo2 = (arreglo);
//arreglo2.push (5);



//Tarea expandir arreglo y agregarle el 5
let arreglo2 = [...arreglo,5];

const arreglo3 = arreglo2.map( function(numero){
    return numero*2;
})

console.log(arreglo);

console.log(arreglo2);

console.log(arreglo3);