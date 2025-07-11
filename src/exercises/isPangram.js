export function isPangram(string){
  return new Set(string.toLowerCase().match(/[a-z]/g)).size === 26
  //la clase Set regresa un objeto que contiene los elementos sin repetir
  //match utiliza expresiones regulares para buscar coincidencias; en este caso, coincidencias de letras desde la "a" hasta la "z", 
  //g = global. Le dice a match() que devuelva todas las coincidencias, no solo la primera. ✅ Con g: busca todas las letras ❌ Sin g: busca una sola letra
}

/*
Toma un string y devuelve true si es un pangrama(un pangrama es una frase compuesta por todas las letras del alfabeto) y false en caso contrario.

Ejemplo: isPangram('The quick brown fox jumps over the lazy dog') devuelve true porque es un pangrama
Ejemplo: isPangram('The quick brown cat jumps over the lazy dog') devuelve false porque no es un pangrama
*/