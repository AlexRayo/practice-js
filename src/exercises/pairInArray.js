//long solution
export function pairInArray(string) {
  let arr = []
  let count = 0;
  let pair = '';
 string.split('').forEach(item=>{
    count++; 
    pair += item;
   if(count === 2){
     arr.push(pair);
     count= 0;
     pair = '';
   }
   if(arr.join('').length === string.length -1 && count === 1){
     pair+='_';
     arr.push(pair);
   }
  })
  return arr
}

//better solution
function fn(string) {
  const arr = [];
  for (let i = 0; i < string.length; i += 2) {
    const pair = string[i] + (string[i + 1] || '_');
    arr.push(pair);
  }
  return arr;
}

//smarter solution
function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}

/**
 * Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']


 */