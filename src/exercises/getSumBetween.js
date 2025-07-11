export function getSumBetween(a, b)
{
  let min = Math.min(a,b);
   let max = Math.max(a,b);
   let sum = 0;
   for(let i = min; i <= max; i++){
    sum += i;
   }
   return sum;
}

/*
Toma la suma entre dos números dados por parámetros
por ejemplo: getSumBetween(-1,3) devuelve 6 porque son los números -1, 0, 1, 2, 3, 4

*/