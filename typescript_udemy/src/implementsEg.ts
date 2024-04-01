type AnimalType = {
  name: string;
  voice(): string;
};

function logger(animal: AnimalType) {
  console.log(`Animal ${animal.name} : ${animal.voice()}`);
}

class CatType implements AnimalType {
  constructor(public name: string) {}
  voice(): string {
    return "meow";
  }
}

class DogType implements AnimalType {
  constructor(public name: string) {}
  voice(): string {
    return "woof";
  }
}

logger(new CatType("Salem"));
logger(new DogType("lassie"));
