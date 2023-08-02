
   var array=["Banana","Orange","Apple","Mango","Water Melon"];
      console.log(array);
      console.log(`type of array is: ${typeof array}`);
console.log(`Total number of elements in array is:${ array.length}`);
 let element2=array[1];
 console.log(`the first element is : ${element2}`);
 //let arrayLength = array.length;
 //let elementLast =array[arrayLength-1];
  //console.log(`last element is :   ${elementLast}`);
  console.log(`================adding "Papaya" before banana=================`);
    var array1=["Banana","Orange","Apple","Mango","Water Melon"];
    let element0=array.unshift(`Papaya`);
    console.log(element0);
    console.log(array);
    console.log(`============remove mango from array=======================`);
    let removedElement=array.splice(4);
    console.log(removedElement);
    console.log(array);
    console.log(`=========== add the last position ========================`);
    let lastposition=array.push(`Pineapple`);
    console.log(lastposition);
    console.log(array);
    console.log(`==============insert an element dragon fruit before water lemon ==============`);
       var array1=["Banana","Orange","Apple","Mango","Water Melon"];
       array.splice(4,0,`dragonfruit`);
       console.log(array);
       console.log(`=================== Repalace an element ================`);
       array.splice(1,2,`kiwi`)
       console.log(array);
       console.log(`================ starting 1 to 4index ====================`);
       let element4=array[1];
       console.log(`element stored  at index 2 is :  ${element4}`);
        
         let element5=array[2];
         console.log(`element stored at index is :  ${element5}`);
          let element6=array[3];
          console.log(`element stored at index is : ${element6}`);
          let element7=array[4];
          console.log(`element stored at index is : ${element7}`);
          console.log(`================ using length property ==============`);

            var greet = `Apple,dragonfruit,Pieapple`;
            var lengthGreet=greet.length;
           console.log("The total length is string:",lengthGreet);
           console.log(greet);
         

    
    