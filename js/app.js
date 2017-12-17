


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









































