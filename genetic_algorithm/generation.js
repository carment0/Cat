class Main {
  constructor(target = "To meow, or not to meow",
            population = 200, mutation = 1) {
    this.target = target;
    this.population = population;
    this.mutation = mutation;
    this.isPhraseFound = false;

    let create = new Population(this.target, this.population, this.mutation);
    this.draw(create);
  }

  draw(population) {
    while (!population.isPhraseFound()) {
    }
  }

  isPhraseFound() {

  }
}

export default Main;
