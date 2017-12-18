

//Iterator answers

//forEach used to affect every index in an array
const words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];

words.forEach((foo) => {
	foo.toUpperCase();	
	// console.log(foo);
})


//COMMIT 8

//used map in conjunction with array methods trim and substring to return a new array with only the first letters of each array index
const moreWords = ["Joe", "Overeats", "Eggs"];

const firstLetter = moreWords.map((str) => {
	// console.log(str);
	return str.trim().substring(0,1);
})

// console.log(firstLetter);


//COMMIT 9

//used reduce with addition to add all elements of the array together
const arr = [8, 8, 8, 8, 8, 8, 8, 8];

let sumOfParts = arr.reduce((prev, curr) => {
	return prev + curr;
});

// console.log(sumOfParts);


//COMMIT 10


const sheepShearers = [
    {
        name: "Tim",
        age: 20,
        sheepCount: 18
    },
    {
        name: "C3PO",
        age: 200,
        sheepCount: 320
    },
    {
        name: "Cousin It",
        age: Infinity,
        sheepCount: 2900
    }
];

//chained methods to add sheepcount- map lists all sheepcount property values in an array and reduce adds them together
const justSheep = sheepShearers.map((foo) => {
	return foo.sheepCount;
}).reduce((prev, curr) => {
	return prev + curr;
});



// console.log(justSheep);


//COMMIT 11





//ITERATOR ANSWERS CONTINUED


















