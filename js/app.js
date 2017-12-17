


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

myInformation.birthday();

myInformation.changeName('rumpelstiltskin');

console.log(myInformation.statement());

