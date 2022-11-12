console.log("Hello")

  
  	//Task 1
    //Fix the SyntaxError. No renaming
  /*

		let text = 'hello';
		 text = 'hello world';
		console.log(text);
  
   let anotherText = 'wassup';
		anotherText = 'wassup, bro!';
		console.log(anotherText);
*/
  
  	// Task 2 Done
    // Make the assertions pass. Modify the object. Don't edit the initial obj manually ;)

/*
    const obj = {}
    
    obj.count = 2;
  	
  
		obj.child = {}
  
    obj.child.count = 4;
  
  	obj.child.strings = ['aloha']

    
 		console.log(obj.count === 2) // have to be true
  	console.log(obj.child.count === 4) //have to be true
  	console.log(obj.child.strings[0] === 'aloha') //have to be true
   // console.log(a.includes(a.length * 435)) //have to be true - please confirm if it displayed there by mistake
*/
  
  // Task 3 done
  // Add any condition that will be satisfied such that the console.log() statement logs true.
  
/*
  	let text = 'hello';
		if (text === 'hello') {
  		text = text + ' world';
		}
		console.log(text === 'hello world');
  
*/
  
  	//Task 4 done
  	// Explain, why the following statements are true
  
 /*
  	console.log((4 + true) === 5) // becouse default value of true is one -  Like!
  	console.log((2 / null) === Infinity)//because of division by zero - Like!
 */   
  
 
  // Task 4.5 Done
  // Modify the array to satisfy the conditionals. Don't edit the initial array
/*

  const a = [1,2,3] 
  
	a.push("a string")
  a.push(true)
	a.push ((a.length + 1) * 435)
  
  console.log(a.length === 6)
  console.log(a.includes('a string'))
  console.log(a.includes(true))
  console.log(a.includes(a.length * 435))
*/ 
  
  //Task 5 Done
  //Write a function which would take initial array as a param and multiply all it's values by 2.
  //Function should return a new array 
    
  //Call the function and console.log the result.
  
  //Підказка
  // Для того шоб пройти про кожному елементу масиву юзай цикл for

/*
    const initial = [1,2,3,4,5,6,7]
    
    function multiplyAllBy2(array) {
      
    const initialBy2 = []

      for (let i = 0; i < array.length; i++) {
    initialBy2.push(array[i] * 2)
    	}
       return initialBy2
    }
  
    let finalCount = multiplyAllBy2(initial) 
      console.log (finalCount)

 */  
  
  // Task 6
  // Write an arrow function which would make a comparison result to true
  
/*

  const a = [1,2,3]
  const b = ['1', '2', '3']
  
 
  const equalResult =  array => { for (let i = 0; i < array.length; i++) {
  array[i] = parseInt(array[i])
  }
  return array
  }
    
 equalResult(b)

  
  console.log(JSON.stringify(a) === JSON.stringify(b))
  */
 

  

 	//Task 7 
    
 	//Write a function which would sort an array with Bubble Sort in ascending order
 	//Function should return a new array 
    
 	//Call the function and console.log the result.
  
/*
  const initial = [1,5,7,2,4,0,8,2,1]

  function bblSort(arr){
    
    let initial2 = []
    
 for(let i = 0; i < arr.length; i++){
    
   for(let j = 0; j < ( arr.length - i -1 ); j++){
      
     if(arr[j] > arr[j+1]){
        
       let temp = arr[j]
       arr[j] = arr[j + 1]
       arr[j+1] = temp
     }
   }
  
 }
     for (let i = 0; i < arr.length; i++) {
   		 initial2.push(arr[i])
      
    	}
return initial2;
}
  
let result = bblSort(initial) 

console.log (result)
*/
  
  //Task 8
/*
  const civilPlane = {
  numberOfPassenger: 200,
    wingLength: 34,
    crewList: ['pilot', 'stuart', 'stuardess', 'technician']
  }
  
  
 civilPlane.priceOfNew = 106000000
 civilPlane.priceOfUsed = civilPlane.priceOfNew - civilPlane.priceOfNew * 0.2
  
 civilPlane.crewPersonalData = {
 pilot: {
   name: 'Stiven',
 		surname: 'Jenson'
 },
 stuart: {
   name: 'Victor',
  surname: 'Job'
 },
   stuardess: {
     name: 'Sveta',
 surname: 'Termy'
   },
  technician: {
    name: 'Sasha',
  surname: 'Tortik'
  }
 }
 
  
  console.log(civilPlane.crewPersonalData.pilot.surname, civilPlane.crewPersonalData.stuart.surname, civilPlane.crewPersonalData.stuardess.surname, civilPlane.crewPersonalData.technician.surname);
//console.log (civilPlane.priceOfUsed)
  
  
  //console.log (civilPlane.numberOfPassenger, civilPlane.wingLength);
  
  */
  
  /*
function hello() {
  console.log('Hello World');
}
  
hello()
  
 */
  
  //task with filmName
 /* 
  function film(filmName) {
    for (let i=0; i < 5; i++) {
    	console.log(filmName)
    }
  }

  film('Twilight');

  //task with numbers
  
 function compareNumber(a,b) {
   if (a > b) {
   	return a;
   } else {
     return b;
   }
 }
  
  console.log (compareNumber(5,3));
  */
  
 