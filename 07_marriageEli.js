
  var marriageeligibility=function marry(gender ,age){
      
          if(age>=21){
              
               console.log(`gender is  ${gender}  and age is ${age} your eligible for marriage `);
          }
          else{
              console.log(`gende is ${gender}  and age is  ${age} your not eligible for marriage`);
          }
          if(age>=18){
              
            console.log(`gender is  ${gender}  and age is ${age} your eligible for marriage `);
       }
       else{
           console.log(`gende is ${gender}  and age is  ${age} your not eligible for marriage`);
       }
       if(age>=25){
              
        console.log(`gender is  ${gender}  and age is ${age} your eligible for marriage `);
   }
   else{
       console.log(`gende is ${gender}  and age is  ${age} your not eligible for marriage`);
   }
  }
  marriageeligibility("male",17);
  marriageeligibility("male",25);
  marriageeligibility("female",28);
  marriageeligibility("female",16);
  marriageeligibility("other",35);
  marriageeligibility("other",41);
