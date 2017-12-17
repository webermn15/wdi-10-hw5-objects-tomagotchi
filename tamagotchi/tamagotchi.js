console.log('tamagotchi or tomogatchi?');


//OBJECT METHODS

//made a tamagotchi object
const tamagotchi = {
	tamName: 'james',
	creatureType: 'dog',
	foodInTummy: 5,
	restedness: 5,
	health: 10,
	//cry method decrements the food in tummy property and logs the new value 
	cry() {
		console.log("'waaaaa'");
		this.foodInTummy--;
		console.log(this.tamName+" has "+this.foodInTummy+" food in tummy.");
	},
	//puke method decrements health property and logs new value
	puke() {
		console.log(this.tamName+" is sick! 'bleeehhhh :0~'");
		this.health--;
		console.log(this.tamName+" has "+this.health+" health.");
	},
	//yawn method decrements the restedness property and logs new value
	yawn() {
		console.log(this.tamName+" is tired! 'yawwwnnnn'");
		this.restedness--;
		console.log(this.tamName+" has "+this.restedness+" restedness.");
	}
}

// tamagotchi.cry();

// tamagotchi.puke();

// tamagotchi.yawn();


//created a new tamagotchi object
const tamagotchi2 = {
	tamName: 'ronald',
	creatureType: 'cat',
	foodInTummy: 10,
	restedness: 10,
	health: 8,
	cry() {
		console.log("'waaaaa'");
		this.foodInTummy--;
		console.log(this.tamName+" has "+this.foodInTummy+" food in tummy");
	},
	puke() {
		console.log(this.tamName+" is sick! 'bleeehhhh :0~'");
		this.health--;
		console.log(this.tamName+" has "+this.health+" health.");
	},
	yawn() {
		console.log(this.tamName+" is tired! 'yawwwnnnn'");
		this.restedness--;
		console.log(this.tamName+" has "+this.restedness+" restedness.");
	}
}


//COMMIT 12 

//COMMIT 13

//COMMIT 14

//COMMIT 15

//COMMIT 16

//COMMIT 17


// tamagotchi2.cry();

// tamagotchi2.puke();

// tamagotchi2.yawn();

//created player object for interacting with the tamagotchi objects
const player = {
	playerName: 'michael',
	//logs player nam
	sayName() {
		console.log("Hi, my name is "+this.playerName);
	},
	// increments food in tummy for each tamagotchi
	feedTamagotchi() {
		tamagotchi.foodInTummy++;
		tamagotchi2.foodInTummy++;
	},
	//takes one parameter, the name of the tamagotchi object that you want to increment the health of 
	medicateTamagotchi(tama) {
		tama.health++;
	},
	//accepts parameter of the tamagotchi object you want to increment the restedness of

	knockOutTamagotchi(tama) {
		tama.restedness++;
	}
}

//created a set of timers 
//hunger timer calls the cry method on tamagotchi 2 every 6 seconds
const hungerTimer = () => {
	let hungry = setInterval(() => {
		tamagotchi2.cry();
	}, 6000);
}

//sick timer calls tamagotchi 2 method every 10 seconds
const sickTimer = () => {
	let healthy = setInterval(() => {
		tamagotchi2.puke();
	}, 10000);
}

//yawn timer runs the tamagotchi 2 method yawn every 25 seconds
const yawnTimer = () => {
	let tired = setInterval(() => {
		tamagotchi2.yawn();
	}, 25000);
}


//COMMIT 18

//COMMIT 19

//COMMIT 20

//COMMIT 21

//COMMIT 22


// player.knockOutTamagotchi(tamagotchi2);

// console.log(tamagotchi2.restedness);

// player.medicateTamagotchi(tamagotchi2);

// console.log(tamagotchi2.health);

// player.feedTamagotchi();

// console.log(tamagotchi2.foodInTummy, tamagotchi.foodInTummy);

// player.sayName();





























