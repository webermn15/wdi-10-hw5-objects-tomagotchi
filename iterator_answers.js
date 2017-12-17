

//Iterator answers

const words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];

words.forEach((foo) => {
	foo.toUpperCase();	
	// console.log(foo);
})


//COMMIT 8


const moreWords = ["Joe", "Overeats", "Eggs"];

const firstLetter = moreWords.map((str) => {
	// console.log(str);
	return str.trim().substring(0,1);
})

// console.log(firstLetter);


//COMMIT 9


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


const justSheep = sheepShearers.map((foo) => {
	return foo.sheepCount;
}).reduce((prev, curr) => {
	return prev + curr;
});



// console.log(justSheep);


//COMMIT 11


















