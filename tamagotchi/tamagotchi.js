// console.log('tamagotchi or tomogatchi?');


// //OBJECT METHODS

// //made a tamagotchi object
// const tamagotchi = {
// 	tamName: 'james',
// 	creatureType: 'dog',
// 	foodInTummy: 10,
// 	restedness: 10,
// 	health: 10,
// 	//cry method decrements the food in tummy property and logs the new value 
// 	cry() {
// 		console.log("'waaaaa'");
// 		this.foodInTummy--;
// 		console.log(this.tamName+" has "+this.foodInTummy+" food in tummy.");
// 	},
// 	//puke method decrements health property and logs new value
// 	puke() {
// 		console.log(this.tamName+" is sick! 'bleeehhhh :0~'");
// 		this.health--;
// 		console.log(this.tamName+" has "+this.health+" health.");
// 	},
// 	//yawn method decrements the restedness property and logs new value
// 	yawn() {
// 		console.log(this.tamName+" is tired! 'yawwwnnnn'");
// 		this.restedness--;
// 		console.log(this.tamName+" has "+this.restedness+" restedness.");
// 	},
// 	//added the timers inside my object
// 	hungerTimer() {
// 		let hungry = setInterval(() => {
// 			this.cry();
// 		}, 6000);
// 	},
// 	sickTimer() {
// 		let healthy = setInterval(() => {
// 			this.puke();
// 		}, 10000);
// 	},
// 	yawnTimer() {
// 		let tired = setInterval(() => {
// 			this.yawn();
// 		}, 25000);
// 	},
// 	//added a start method that runs each of the 3 timers
// 	start() {
// 		this.hungerTimer();
// 		this.sickTimer();
// 		this.yawnTimer();
// 	}
// }

// // tamagotchi.cry();

// // tamagotchi.puke();

// // tamagotchi.yawn();


// //created a new tamagotchi object
// const tamagotchi2 = {
// 	tamName: 'ronald',
// 	creatureType: 'cat',
// 	foodInTummy: 10,
// 	restedness: 10,
// 	health: 8,

// 	//added cry method puke method and yawn method
// 	//updated the cry/puke/yawn methods to affect the tamagotchi's stats when called
// 	cry() {
// 		console.log("'waaaaa'");
// 		this.foodInTummy--;
// 		console.log(this.tamName+" has "+this.foodInTummy+" food in tummy");
// 	},
// 	puke() {
// 		console.log(this.tamName+" is sick! 'bleeehhhh :0~'");
// 		this.health--;
// 		console.log(this.tamName+" has "+this.health+" health.");
// 	},
// 	yawn() {
// 		console.log(this.tamName+" is tired! 'yawwwnnnn'");
// 		this.restedness--;
// 		console.log(this.tamName+" has "+this.restedness+" restedness.");
// 	},
// 	//added the timers inside my object
// 	hungerTimer() {
// 		let hungry = setInterval(() => {
// 			this.cry();
// 		}, 6000);
// 	},
// 	sickTimer() {
// 		let healthy = setInterval(() => {
// 			this.puke();
// 		}, 10000);
// 	},
// 	yawnTimer() {
// 		let tired = setInterval(() => {
// 			this.yawn();
// 		}, 25000);
// 	},
// 	//added a start method that runs each of the 3 timers
// 	start() {
// 		this.hungerTimer();
// 		this.sickTimer();
// 		this.yawnTimer();
// 	}
// }


// //COMMIT 12 

// //COMMIT 13

// //COMMIT 14

// //COMMIT 15

// //COMMIT 16

// //COMMIT 17


// // tamagotchi2.cry();

// // tamagotchi2.puke();

// // tamagotchi2.yawn();

// //created player object for interacting with the tamagotchi objects
// const player = {
// 	playerName: 'michael',
// 	//logs player nam
// 	sayName() {
// 		console.log("Hi, my name is "+this.playerName);
// 	},
// 	// increments food in tummy for each tamagotchi
// 	feedTamagotchi() {
// 		tamagotchi.foodInTummy++;
// 		tamagotchi2.foodInTummy++;
// 	},
// 	//takes one parameter, the name of the tamagotchi object that you want to increment the health of 
// 	medicateTamagotchi(tama) {
// 		tama.health++;
// 	},
// 	//accepts parameter of the tamagotchi object you want to increment the restedness of

// 	knockOutTamagotchi(tama) {
// 		tama.restedness++;
// 	}
// }

//created a set of timers 
//hunger timer calls the cry method on tamagotchi 2 every 6 seconds
// const hungerTimer = () => {
// 	let hungry = setInterval(() => {
// 		this.cry();
// 	}, 6000);
// }

// //sick timer calls tamagotchi 2 method every 10 seconds
// const sickTimer = () => {
// 	let healthy = setInterval(() => {
// 		this.puke();
// 	}, 10000);
// }

// //yawn timer runs the tamagotchi 2 method yawn every 25 seconds
// const yawnTimer = () => {
// 	let tired = setInterval(() => {
// 		this.yawn();
// 	}, 25000);
// }


//COMMIT 18

//COMMIT 19

//COMMIT 20

//COMMIT 21

//COMMIT 22

//COMMIT 23


// player.knockOutTamagotchi(tamagotchi2);

// console.log(tamagotchi2.restedness);

// player.medicateTamagotchi(tamagotchi2);

// console.log(tamagotchi2.health);

// player.feedTamagotchi();

// console.log(tamagotchi2.foodInTummy, tamagotchi.foodInTummy);

// player.sayName();




// MADE A COPY OF THE TAMAGOTCHI OBJECT AND PLAYER OBJECT FOR USE IN ITERFACING WITH CSS/HTML


//wrapped all of the objects and methods in one big method that contains the whole game
const tamaGame = () => {

	//PROPERTIES - declared all nodes to variables for access later

	//status alert divs
	let cryAlert = document.getElementById('crying');
	let pukeAlert = document.getElementById('puking');
	let yawnAlert = document.getElementById('yawning');

	//buttons
	let feedButton = document.getElementById('feed');
	let medicateButton = document.getElementById('medicate');
	let sedateButton = document.getElementById('sedate');
	let startButton = document.getElementById('start-button');


	//tamagotchi object
	const tamagotchi = {
		tamName: 'James',
		creatureType: 'blob',
		foodInTummy: 10,
		restedness: 10,
		health: 10,
		//cry method decrements the food in tummy property and logs the new value in the cry div
		cry() {
			this.foodInTummy--;
			cryAlert.innerText = this.tamName+" is hungry! He has "+this.foodInTummy+" food in tummy.";
		},
		//puke method decrements health property and logs new value in the puke div
		puke() {
			this.health--;
			pukeAlert.innerText = this.tamName+" is sick! 'bleeehhhh :0~' He has "+this.health+" health.";
		},
		//yawn method decrements the restedness property and logs new value in the yawn alert div
		yawn() {
			this.restedness--;
			yawnAlert.innerText = this.tamName+" is tired! 'yawwwnnnn' He has "+this.restedness+" restedness.";
		},
		//added the timers inside my object
		hungerTimer() {
			let hungry = setInterval(() => {
				this.cry();
				if (this.foodInTummy == 0) {
					this.tryAgain();
				}
			}, 6000);
		},
		sickTimer() {
			let healthy = setInterval(() => {
				this.puke();
				if (this.health == 0) {
					this.tryAgain();
				}
			}, 10000);
		},
		yawnTimer() {
			let tired = setInterval(() => {
				this.yawn();
				if (this.restedness == 0) {
					this.tryAgain();
				}
			}, 25000);
		},
		//end of game prompt for when your tamagotchi dies. alerts the player of their failures and prompts them to attempt again
		tryAgain() {
			alert('Your Tamagotchi has died! The feds are on their way to arrest you for abuse.');
			let tryAgain = confirm('Try again, murderer?');
			tryAgain ? this.start() : alert('later homeskillet. you can\'t run forever.');
		},
		//clears all alert divs
		clearAlerts() {
			cryAlert.innerText = '';
			pukeAlert.innerText = '';
			yawnAlert.innerText = '';
		},
		//added a start method that runs each of the 3 timers
		start() {
			let petName = prompt('What is your Tamagotchi\'s name?');
			this.tamName = petName;
			this.foodInTummy = 10;
			this.restedness = 10;
			this.health = 10;
			tamagotchi.hungerTimer();
			tamagotchi.sickTimer();
			tamagotchi.yawnTimer();
		}
	}


	//player object
	const player = {
		playerName: 'michael',
		//logs player nam
		sayName() {
			console.log("Hi, my name is "+this.playerName);
		},
		// increments food in tummy for each tamagotchi and logs new value in the cry div
		feedTamagotchi() {
			tamagotchi.foodInTummy++;
			cryAlert.innerText = tamagotchi.tamName+" now has "+tamagotchi.foodInTummy+" food.";
		},
		//increment the health of tamagotchi object and log new value in the puke div
		medicateTamagotchi() {
			tamagotchi.health++;
			pukeAlert.innerText = tamagotchi.tamName+" now has "+tamagotchi.health+" health.";
		},
		//increments the restedness tamagotchi object and logs new value in yawn div
		knockOutTamagotchi() {
			tamagotchi.restedness++;
			yawnAlert.innerText = tamagotchi.tamName+" now has "+tamagotchi.restedness+" restedness.";
		}
	}


	//a function that binds the 'click' even listener to all 3 of the buttons on the page
	const bindClicks = () => {
		feedButton.addEventListener('click', player.feedTamagotchi);
		medicateButton.addEventListener('click', player.medicateTamagotchi);
		sedateButton.addEventListener('click', player.knockOutTamagotchi);
		startButton.addEventListener('click', tamagotchi.start);
	}

	//runs the start method and binds clicks on load so the game functions without having to initiate it
	bindClicks();
	// tamagotchi.start();
}

//starts the game on load
tamaGame();








