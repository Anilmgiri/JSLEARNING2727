
 
var array=[10,20,30,50,60,null,"merray"];
console.log(array);
console.log(`type of array is: ${typeof array}`);
console.log(`Total number of elements in array is:${ array.length}`);
 
  let element2=array[2];
  console.log(`element stored  at index 2 is :${element2}`);
   
    let element1=array[0];
    console.log(`element stored at index is :${element1}`);

     let arrayLength = array.length;
     let elementLast =array[arrayLength-1];
      console.log(`last element is :${elementLast}`);

       console.log(`=========================================`);
       array[1]= 100;
       console.log(array);
       let isavailable =array.includes(60);
       console.log(` Is 80 available:${isavailable}`);
       let indexOfElement=array.indexOf(30);
       console.log(`Index of 30 is:${indexOfElement}`);
       console.log(`================ array traversing =========================`);
        for (let index = 0; index < array.length; index++) {
            const element=array[index];
            console.log(element);
            console.log(`============== array travers in reverse orde ================`);
            for (let index = array.length-1; index>=0;index--) {
                const element = array[index];
                console.log(element);
                
            }
            
        }
      console.log(`=========  inserting element first and last position ==================`);
       var array=[10,20,30,40,50,80,70]
       array.push(18);
       array.push(21);
       array.unshift(55);
       array.unshift(66);
         console.log(array);
         console.log(`================= remove element in 0the and last index ================`);
         var array=[10,20,30,40,50,80,70]
            array.pop();
            array.shift();
            console.log(array);
            console.log(`================ Geting the slice from the array =========================`);
            var array=[10,20,30,40,50,80,70];
            console.log(array.slice(3));
            console.log(array.slice(1,4));
            console.log(`================removeing the array element using splice()==================`);
            var array=[10,20,30,40,50,80,70];
            let removedElement=array.splice(4);
            console.log(array);
            console.log(removedElement);
            console.log(`=========== second example==============`);
            var array=[10,20,30,40,50,80,70];
            let removedElement1=array.splice(4,2);
            console.log(array);
            console.log(removedElement);
            console.log(`Inserting the array element using splice()`);
            
               var array=[40,10,35,20,30,25,40,80];
               array.splice(10,60,200,150);
               console.log(array);
               var array=[3,10,35,20,30,25,40,80];
               array.splice(4,3,88,99,44,11);
               console.log(array);
  