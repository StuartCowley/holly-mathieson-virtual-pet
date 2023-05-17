const { Pet, pet } = require("../src/pet.js");

describe("constructor", () => {
	test("return a pet called Fido when I call new Pet with name 'Fido'", () => {
		expect(new Pet("Fido")).toEqual(pet);
	});

	test("pets are 0 when they're born", () => {
		const bruno = new Pet("Bruno");
		expect(bruno.age).toEqual(0) &&
			expect(bruno.hunger).toEqual(0) &&
			expect(bruno.fitness).toEqual(10);
	});

	test("pets get older and hungrier when they grow up", () => {
		const george = new Pet("George");
		george.growUp();
		expect(george.age).toEqual(1) &&
			expect(george.hunger).toEqual(5) &&
			expect(george.fitness).toEqual(7);
	});

	test("pets get fitter when they walk", () => {
		const cleo = new Pet("Cleo");
		expect(cleo.walk()).toEqual(10);
	});

	test("older pets don't get as much fitness from exercise", () => {
		const elvis = new Pet("Elvis");
		elvis.fitness = 4;
		expect(elvis.walk()).toEqual(8);
	});

	test("eating decreases hunger", () => {
		const jeanie = new Pet("Jeanie");
		jeanie.hunger = 5;
		expect(jeanie.feed()).toEqual(2);
	});

	test("pets can let us know how they are", () => {
		const madge = new Pet("Madge");
		madge.fitness = 3;
		madge.hunger = 5;

		const jojo = new Pet("Jojo");
		jojo.fitness = 1;
		jojo.hunger = 2;

		const bilbo = new Pet("Bilbo");
		bilbo.fitness = 7;
		bilbo.hunger = 8;

		const bob = new Pet("Bob");
		bob.fitness = 9;
		bob.hunger = 3;

		expect(madge.checkUp()).toEqual("I am hungry AND I need a walk");
		expect(jojo.checkUp()).toEqual("I need a walk");
		expect(bilbo.checkUp()).toEqual("I am hungry");
		expect(bob.checkUp()).toEqual("I feel great!");
	});

	it("throws an error if the pet is not alive", () => {
		const pet = new Pet("Fido");
		pet.age = 30;

		expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
	});

	test("check whether pet is alive", () => {
		const margot = new Pet("Margot");
		const rudolf = new Pet("Rudolf");
		rudolf.age = 31;

		const anna = new Pet("Anna");
		anna.hunger = 11;

		const mikhail = new Pet("Mikhail");
		mikhail.fitness = 0;

		expect(margot.isAlive).toBe(true);
		expect(anna.isAlive).toBe(false);
		expect(rudolf.isAlive).toBe(false);
		expect(mikhail.isAlive).toBe(false);
	});

	test("dead pets throw error messages", () => {
		const bandit = new Pet("Bandit");
		bandit.hunger = 11;

		const mabel = new Pet("Mabel");
		mabel.age = 45;

		const copper = new Pet("Copper");
		copper.fitness = 0;
		function deadPet() {
			isAlive(false);
			expect(bandit.isAlive).toThrow("Your pet is no longer alive :(");
			expect(bandit.isAlive).toThrow(errorMessage);
			expect(mabel.isAlive).toThrow("Your pet is no longer alive :(");
			expect(mabel.isAlive).toThrow(errorMessage);
			expect(copper.isAlive).toThrow("Your pet is no longer alive :(");
			expect(copper.isAlive).toThrow(errorMessage);
		}
	});
});
