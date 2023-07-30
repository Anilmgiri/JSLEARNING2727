
   var monthOfYear=function(month){
     
         switch(month){
            
             case 2:
                  console.log(` ${month} -febuary`);
                  break;
                   
              case 5:
                console.log(` ${month} - may`);
                break;
               case 12:
               console.log(` ${month}  - december`);
               break;
               default:
               console.log(` ${month} invalid month input valid month`);
         }
        }
        monthOfYear(0);
        monthOfYear(2);
        monthOfYear(5);
        monthOfYear(12);
        monthOfYear(null);
        monthOfYear(undefined);