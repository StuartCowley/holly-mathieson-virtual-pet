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
		expect(george.growUp()).toEqual(1) &&
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
});
