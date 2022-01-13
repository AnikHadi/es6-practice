function add(num1, num2 = 20) {
    // num2 = num2 || 0;
    return num1 + num2;
}
// Ai khan a function ar moddho num2 = 20 dile seti default value thakbe but amra jodi parameter a vale dey ta hole r default valu ta function count korbe na ai tai default valuer kaj 
// abr default value ES6 ar ager poddhoti function ar moddho comment kora ta
 
const sum = add(15, 10);
console.log(sum);