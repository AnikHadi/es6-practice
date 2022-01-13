const num1 = [12, 14, 15, 17];
const num2 = [3, 5, 8, 6];
const num3 = [20, 24, 28, 26];

// old method
const allArray = num1.concat(num2).concat(num3);
console.log(allArray);

// ES6 ar new method
const allArray2 = [...num1, ...num2, 80, ...num3];
console.log(allArray2);

// ES6 a array ar moddho max value bar korar method
const maxValue = Math.max(...allArray2);
console.log(maxValue);

