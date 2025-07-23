export function sumBigStringNumbers(a,b) { 
  return (BigInt(a) + BigInt(b)).toString()
}

/**
 * Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

 */

/**
 * NOTE:
 * En JavaScript, cuando los números son demasiado grandes (más de ~16 dígitos), se pierde precisión al usar el tipo Number.
🔢 ¿Por qué?
JavaScript usa internamente el tipo Number basado en IEEE 754 de 64 bits, lo que significa que pierde precisión con números enteros mayores a 
2^53 - 1 (aprox. 9,007,199,254,740,991).
 */