export function countRepeated(string) {
  let obj = {};
  string.split('').map((item,index)=>{
    obj[item] = (obj[item] ?? 0) + 1;
  })
  return obj;
}

/**
 * The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

 */