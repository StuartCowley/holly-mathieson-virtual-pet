const maxFitness = 10;
function errorMessage(message) {
	throw new Error("Your pet is no longer alive :(");
}

class Pet {
	constructor(name) {
		this.name = name;
		this.age = 0;
		this.hunger = 0;
		this.fitness = maxFitness;
	}
	get isAlive() {
		if (this.age >= 30 || this.hunger >= 10 || this.fitness <= 0) {
			return errorMessage;
		} else {
			return this.age < 30 && this.hunger < 10 && this.fitness > 0;
		}
	}
	growUp() {
		if (!this.isAlive) {
			return errorMessage;
		} else {
			this.age += 1;
			this.hunger += 5;
			this.fitness -= 3;
			return this.age;
		}
	}

	walk() {
		if (!this.isAlive) {
			return errorMessage;
		} else if (this.fitness + 4 <= maxFitness) {
			return (this.fitness += 4);
		} else {
			return (this.fitness = maxFitness);
		}
	}

	feed() {
		if (!this.isAlive) {
			return errorMessage;
		} else if (this.hunger >= 3) {
			return (this.hunger -= 3);
		} else {
			return (this.hunger = 0);
		}
	}

	checkUp() {
		if (!this.isAlive) {
			return errorMessage;
		} else if (this.fitness <= 3 && this.hunger >= 5) {
			return "I am hungry AND I need a walk";
		} else if (this.fitness <= 3) {
			return "I need a walk";
		} else if (this.hunger >= 5) {
			return "I am hungry";
		} else {
			return "I feel great!";
		}
	}
}

const pet = new Pet("Fido");

module.exports = { Pet, pet };
