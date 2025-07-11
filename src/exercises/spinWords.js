export function spinWords(string){
  console.log(string.split(' '))
  const newString = string.split(' ').map(word=>
    word.length >= 5 ? word.split('').reverse().join('') : word  
    ).join(' ')
  return newString
  /**
   * split toma un string y lo divide en un array de strings, 
   * en este caso puede determinar la separación por palabras pasando un espacio como parámetro => output = [ "He", "is", "the", "Hollow", "Knight" ]
   * map toma un array y aplica una función a cada elemento, devolviendo un nuevo array. Es necesario este metodo para modificar cada array/palabra
   */
}

/**
 * Toma un string phrase, determina las palabras que contienen al menos 5 letras y las invierte
 * Ejemplo: spinWords('He is the Hollow Knight') devuelve 'He is the wolloH thginK'
 */