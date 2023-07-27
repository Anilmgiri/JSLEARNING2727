var squareOfwordLength= function(word){
 
    console.log(`given string is  : "${word}"`);
    var word =word.split("");
var squareOfwordLength = word.length;
console.log(`total charecter is : ${word}`);
return squareOfwordLength;
}
var result = squareOfwordLength("JavaScript");
console.log(`total length is: ${result}`);
var result1 =result *result;
console.log(`square of length ${result1}`);
console.log("===========================================")
var result = squareOfwordLength("Googale Chrome");
console.log(`total length is: ${result}`);
var result1 =result *result;
console.log(`square of length ${result1}`);
console.log("===========================================")
var result = squareOfwordLength("Developer smart");
console.log(`total length is: ${result}`);
var result1 =result *result;
console.log(`square of length ${result1}`);
console.log("+++++++++++++++++++ part 2 +++++++++++++");
 
     
var FEstring = function(){
          
    console.log(`the given string  is : "${str}"`);
    console.log(`the given string length is : "${result}"`);
    console.log(` total number of word given string  is : "${wordCount}"`);
    console.log(`divided by words  is : "${result1}"`);
    console.log(`multiplication by word is : "${result2}"`); 

}
var str= "I am Angular developr";
var result =str.length;
var word = str.split(" ");
var wordCount = word.length;
var result1 =result/wordCount;
var result2 = result * wordCount;

FEstring();
