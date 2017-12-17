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
		console.log(this.tamName+" has "+this.foodInTummy+" food in tummy");
	},
	puke() {
		console.log(this.tamName+" is sick! 'bleeehhhh :0~'");
	},
	yawn() {
		console.log(this.tamName+" is tired! 'yawwwnnnn'");
	}
}

tamagotchi.cry();

// tamagotchi.puke();

// tamagotchi.yawn();


//COMMIT 12 

//COMMIT 13

//COMMIT 14

//COMMIT 15





































