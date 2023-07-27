console.log(`========== Function Expression Using Ternary Operators ========== \n`)
var greatest = function (num1,num2){
    var result = (num1>num2) ?`The greatest number among "${num1}" and "${num2}" is = ${num1}.`
    : `The greatest number among "${num1}" And "${num2}" is = ${num2} \n`;
    console.log(result);
}
greatest(10,-10);
greatest(800,899);

console.log(`=============== Even Odd No & Fun Exp Using One Arg. With It's Return ================= \n`);
console.log(`2)`);
var evenOrOdd = function (num1){ 
var newResult = num1%2==0 ? `The number ${num1} is even number.` : 
`The number ${num1} is odd Number.`;
console.log(newResult);
}
evenOrOdd(29);
evenOrOdd(44);
evenOrOdd(0);
evenOrOdd(101);
console.log("===============================================…");
console.log(`3)`);
var evenOddLength = function (Value){
    var result1 = Value.length%2==0 ? `The length Of Word "${Value}" is EVEN.`:
    `The length of Word "${Value}" is ODD.`;
    console.log(result1);
}
evenOddLength("JavaScript");
evenOddLength("Developer");
evenOddLength("Google");