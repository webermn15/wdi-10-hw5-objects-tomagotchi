

//Iterator answers

const words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];

words.forEach((foo) => {
	foo.toUpperCase();	
	// console.log(foo);
})


//COMMIT 8


const moreWords = ["Joe", "Overeats", "Eggs"];

const firstLetter = moreWords.map((str) => {
	console.log(str);
	return str.trim().substring(0,1);
})

console.log(firstLetter);