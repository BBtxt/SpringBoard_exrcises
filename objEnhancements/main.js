function createInstructor(firstName, lastName) {
  return { firstName, lastName };
}

let favoriteNumber = 42;
let instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite Number",
};

let instructor2 = {
  firstName: "Colt",
  sayHi() {
    return "Hi";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

const d = createAnimal("dog", "bark", "Woooof!");

d.bark();

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");

s.bleet();

const createAnimal = (species, verb, noise) => {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
};
