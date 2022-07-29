// No cambies los nombres de las funciones.

const { convertToRecursiveGlob } = require("@11ty/eleventy/src/TemplatePath");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  const array = []
  // Object.keys(objeto)
  for (prop in objeto){
    array.push([prop, objeto[prop]])
  }
  return array
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let obj = {}
  for (let i=0; i<string.length; i++) {
    if (string[i] in obj){
      obj[string[i]]++ ;
    }
      else obj[string[i]] = 1 ;
  }
  return obj ;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la .
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayus = ''
  let minus = ''
  for (i=0; i<s.length ; i++){
    if (s[i] === s[i].toUpperCase()){
      mayus = mayus + s[i]
    }
    else {
      minus = minus + s[i]
    }
  }
  return mayus + minus
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let array = str.split(' ')
  for (indice in array){
    array[indice] = array[indice].split("").reverse().join("")
  }
  return array.join(' ')
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var nstr = numero.toString()
  for (let i=0 ; i+1 < nstr.length/2 ; i++) {
    if (nstr[i] !== nstr[nstr.length-i-1]){
      return "No es capicua"
    }
  }
  return "Es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  return cadena.replaceAll('a','').replaceAll('b','').replaceAll('c','')
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  return arr.sort(function (a, b) {
    if (a.length > b.length) {
      return 1;
    }
    if (a.length < b.length) {
      return -1;
    }
    return 0;
  })
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,7,4,3] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  nuevo = []
  arreglo1.forEach(numero => {
    if(arreglo2.includes(numero)){
      nuevo.push(numero)
    }
  })
  return nuevo
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

