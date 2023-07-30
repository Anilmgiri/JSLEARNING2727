
   var   gradeCalculation= function stds(mark){

        if (mark>=90) {
            console.log(`funtastic mark ${mark} your grade is A+`);
            
        }
        else{
            if(mark>=75 & mark<=90){

                  console.log(`good marks ${mark} your grade is A`);
            }
        }
        if(mark<=50&mark>=75){
            console.log(`marks is  ${mark} your grade `);

        }
        else{
            if(mark<=35 & mark>=50){
                console.log(`marks is  ${mark} you grade is C  need improvement`);
            }
        }
        if(mark<=0||mark<=100 ){
         
            console.log(`please provide the valid maks`);
        }

        }
   
   gradeCalculation(98);
   gradeCalculation(80);
   gradeCalculation(90);
   gradeCalculation(0);
   gradeCalculation(150);
   gradeCalculation(-7);
   gradeCalculation(35);
   gradeCalculation(29);
   gradeCalculation(64);
   gradeCalculation(49);
   gradeCalculation(91);
   gradeCalculation("Eighty");
   gradeCalculation(undefined);
   gradeCalculation(null);

