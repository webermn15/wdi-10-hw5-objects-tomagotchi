console.log('tamagotchi or tomogatchi?');


//OBJECT METHODS

const tamagotchi = {
	tamName: 'james',
	creatureType: 'dog',
	foodInTummy: 5,
	restedness: 5,
	health: 10,
	cry() {
		console.log("'waaaaa'");
		this.foodInTummy--;
		console.log(this.tamName+" has "+this.foodInTummy+" food in tummy.");
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

// tamagotchi.cry();

// tamagotchi.puke();

// tamagotchi.yawn();


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

// tamagotchi2.cry();

// tamagotchi2.puke();

// tamagotchi2.yawn();


const player = {
	playerName: 'michael',
	sayName() {
		console.log("Hi, my name is "+this.playerName);
	},
	feedTamagotchi() {
		tamagotchi.foodInTummy++;
		tamagotchi2.foodInTummy++;
	}
}

// player.feedTamagotchi();

// console.log(tamagotchi2.foodInTummy, tamagotchi.foodInTummy);

// player.sayName();

//COMMIT 12 

//COMMIT 13

//COMMIT 14

//COMMIT 15

//COMMIT 16

//COMMIT 17

//COMMIT 18

//COMMIT 19
































