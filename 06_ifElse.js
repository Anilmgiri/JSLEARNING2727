 
 

          var cheked= function show(num){
    
        if(num % 2 == 0){
        console.log(` the number is even,${num} `);
        }
       else {
       console.log(` the number is odd ,${num} `);
   
    }
          }
          cheked(45);
          cheked(70);
          cheked(67);
          cheked(98);
          console.log("*********   part no-2  ************************");

          
         var voteEligible=function vote(age){
            
                  if(age>=18){
                        console.log(`${age} your are eligible for voting`);
                  }
                  else{
                        console.log(`${age} your not eligible for voting`);
                  }
             }

   voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);