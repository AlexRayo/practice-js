export function incrementString (str) {
  const num = str.match(/[0-9]+$/)?.join('');
  return num ? str.slice(0, num.length * -1) + (Number(num) +1).toString().padStart(num.length, '0') : str + 1;
}

/**
 * Your job is to write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

 */