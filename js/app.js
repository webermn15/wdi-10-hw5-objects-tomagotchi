


//clicker object
const clicker = {
	clickCount: 0,
	clickCounter() {
		this.clickCount++;
	}
}

// clicker.clickCounter();

// console.log(clicker.clickCount);


//COMMIT 1


const myInformation = {
	myName: 'Michael',
	myAge: 29,
	myFact: 'I never learned how to read',
	statement() {
		return 'Hi, my name is '+this.myName+', in 10 years I\'ll be '+(this.myAge+10)+', and '+this.myFact+'.';
	},
	birthday() {
		this.myAge++;
	},
	changeName(str) {
		this.myName = str;
	}
}

// myInformation.birthday();

// myInformation.changeName('rumpelstiltskin');

// console.log(myInformation.statement());


//COMMIT 2


const greeter = {
	hello(name) {
		return 'what\'s up '+name;
	},
	goodybe(name) {
		return 'later '+name;
	},
	whoAreYou(name) {
		return 'oh right, '+name+', how could i forget';
	}
}

// console.log(greeter.hello('dan'),greeter.goodybe('dan'),greeter.whoAreYou('dan'));


//COMMIT 3


const stringCollector = {
	collection: [],
	collect(str) {
		this.collection.push(str.trim().split('').reverse().join(''));
	},
	admireCollection() {
		for (let i = 0; i < this.collection.length; i++) {
			console.log(this.collection[i]);
		}
	}
}


// stringCollector.collect('michael');
// stringCollector.collect('abbie');
// stringCollector.admireCollection();



//COMMIT 4



const atm = {
	totalCash: 190,
	dispenseTwenties(num) {
		let cashOut = num * 20;
		if (cashOut <= this.totalCash) {
			this.totalCash -= cashOut;
			return cashOut;
		}
		else {
			return null;
		}
	}
}


// atm.dispenseTwenties(7);
// console.log(atm.totalCash);


//COMMIT 5


const leonardo = {
	named: 'leonardo',
	color: 'blue',
	weapon: 'katana',
	pizzaEaten: false,
	eatPizza() {
		if (this.pizzaEaten == true) {
			console.log(this.named+' has already eaten pizza');
			this.pizzaEaten = false;
		}
		else {
			console.log(this.named+' is eating pizza');
			this.pizzaEaten = true;
		}
	}
}

// leonardo.eatPizza();
// console.log(leonardo.pizzaEaten);
// leonardo.eatPizza();
// console.log(leonardo.pizzaEaten);


//COMMIT 6


const calculator = {
	output: 0,
	multiply(num1, num2) {
		let multiplied = num1 * num2;
		this.output = multiplied;
		console.log(this.output);
	},
	divide(num1, num2) {
		let divided = num1 / num2;
		this.output = divided;
		console.log(this.output);
	},
	add(num1,num2) {
		let added = num1 + num2;
		this.output = added;
		console.log(this.output);
	},
	subtract(num1,num2) {
		let subtracted = num1 + num2;
		this.output = subtracted;
		console.log(this.output);
	}
}

// calculator.multiply(10, 2);
// calculator.divide(10, 2);
// calculator.multiply(-2, 8);
// calculator.divide(-2, 8);
// calculator.multiply(2, 2);
// calculator.divide(2,2);


//COMMIT 7



































