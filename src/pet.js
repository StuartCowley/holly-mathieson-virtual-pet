const maxFitness = 10;

class Pet {
	constructor(name) {
		this.name = name;
		this.age = 0;
		this.hunger = 0;
		this.fitness = maxFitness;
	}
	growUp() {
		return (this.age += 1);
		return (this.hunger += 5);
		return (this.fitness -= 3);
	}

	walk() {
		if (this.fitness + 4 <= maxFitness) {
			return (this.fitness += 4);
		} else {
			return (this.fitness = maxFitness);
		}
	}

	feed() {
		if (this.hunger >= 3) {
			return (this.hunger -= 3);
		} else {
			return (this.hunger = 0);
		}
	}
}

const pet = new Pet("Fido");

module.exports = { Pet, pet };
