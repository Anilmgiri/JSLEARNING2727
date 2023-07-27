
console.log("################################ function with variable########################");

     var num = 100;
    console.log(num);
    var display=function(){
    console.log(`I am Angular developer !`);
    }
      display();
       var add = function(num1,num2){
     var result=num1+num2;
      console.log(`Addition is : ${result}`);
    } 
      add(20,50);
       
     var wordCount = function(word){
      
         var words =word.split(" ");
         var wordCount =word.length;
         console.log(`given string is: ${word}`);
        return wordCount;
    } 
        var result=wordCount("I am UI developer");
         console.log(`total word count is: ${result}`);
      wordCount();  