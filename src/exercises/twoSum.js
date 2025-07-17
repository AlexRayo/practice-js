export function twoSumOptimized(numbers, target) {
  const seen = {}; // valor -> índice

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    if (seen.hasOwnProperty(complement)) {
      return [seen[complement], i];
    }

    seen[numbers[i]] = i;
  }
}

//another solution for small arrays
export function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}


//Esta seria una mala practica porque el reduce no se detiene cuando se encuentra el resultado
function twoSumBadPractice(numbers, target) {
  let result;

  numbers.reduce((acc, curr, index) => {
    const complement = target - curr;

    if (acc.hasOwnProperty(complement)) {
      // Si ya vimos el número necesario antes,
      // acc[complement] nos da su índice
      result = [acc[complement], index];
    }

    // Guardamos el número actual con su índice
    acc[curr] = index;

    return acc;
  }, {}); // acumulador inicia como objeto vacío

  return result || [];
}


/**
 * Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indexes of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: https://leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]

 */