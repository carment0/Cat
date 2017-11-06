import Population from './population';
// const Population = require('./population.js');

class Main {
  constructor(target = 'To meow or not to meow, that is the meowtion', popSize = 200, mutationRate = 1) {
    this.target = target;
    this.popSize = popSize;
    this.mutationRate = mutationRate;

    this.population = new Population(this.target, this.mutationRate, this.popSize);
    this.start();
  }

  start() {
    let generation = 0;
    while (!this.population.fittestOrganism().isPerfect()) {
      generation += 1;
      const newPopulation = this.population.generateNewGeneration();

      const bestOrganism = newPopulation.fittestOrganism();

      console.log(`Best organism for generation ${generation}: ${bestOrganism.getPhraseFromGene()}`);
      this.population = newPopulation;
    }
  }
}

export default Main;
