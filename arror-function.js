// js old function methods
function add(num1, num2) {
    return num1 + num2;
}

// old style
const add2 = function(num1, num2){
    return num1 + num2;
}
const result2 = add2(8, 100);
console.log(result2);

// ES6 new Method
const add3 = (num1, num2) => num1 + num2;
const result = add3(5,2);
console.log(result);

// ES6 Method
const otherSSS = (num1, num2) => {
    const sum = num1 + num2;
    const sub = num1 - num2;
    const total = sum + sub;
    return total;
}

const result4 = otherSSS(10, 6);
console.log(result4);