import Organism from './organism';
// const Organism = require('./organism.js');

class Population {
  /**
   * @description Population is a array of Organisms.
   * @param {string} targetPhrase
   * @param {number} mutationRate - Given as a percentage
   * @param {number} populationSize
   * @param {array} currentPopulation - Array of Organisms
   */
  constructor(targetPhrase, mutationRate, populationSize = 200,  currentPopulation = []) {
    this.targetPhrase = targetPhrase;
    this.mutationRate = mutationRate;
    this.populationSize = populationSize;
    this.currentPopulation = currentPopulation;

    // If a population not passed, instantiate one
    if (this.currentPopulation.length === 0) {
      this._createInitialPopulation();
    }
  }

  // avg unit of fitness per organism
  getAveragePopulationFitness() {
    let totalFitness = 0;
    this.currentPopulation.forEach((phrase) => {
      totalFitness += phrase.fitness;
    });

    const total = totalFitness / this.populationSize;
    return total;
  }

  fittestOrganism() {
    let bestOrganism = this.currentPopulation[0];
    this.currentPopulation.forEach((organism) => {
      if (organism.fitness > bestOrganism.fitness) {
        bestOrganism = organism;
      }
    });

    return bestOrganism;
  }

  generateNewGeneration() {
    const potentialParents = [];
    this.currentPopulation.forEach((organism) => {
      let n = Math.floor(organism.fitness);
      if (n < 1) n = 1;
      for (let i = 0; i < n; i += 1) {
        potentialParents.push(organism);
      }
    });

    const nextGeneration = this._naturalSelection(potentialParents);
    return new Population(this.targetPhrase, this.mutationRate, this.populationSize, nextGeneration);
  }

  _createInitialPopulation() {
    for (let i = 0; i < this.populationSize; i += 1) {
      const organism = new Organism(this.targetPhrase, this.mutationRate);
      this.currentPopulation.push(organism);
    }
  }

  _naturalSelection(potentialParents) {
    const newGeneration = [];
    const matingPopulation = potentialParents.length;
    for (let i = 0; i < this.populationSize; i += 1) {
      const parentOneIdx = Math.floor(Math.random() * matingPopulation) + 0;
      const parentTwoIdx = Math.floor(Math.random() * matingPopulation) + 0;
      const offspring = potentialParents[parentOneIdx].recombination(potentialParents[parentTwoIdx]);
      newGeneration.push(offspring);
    }
    return newGeneration;
  }
}

// const pop1 = new Population('hello', 1, 5);
// console.log('pop1:');
// console.log(pop1.currentPopulation);
// const pop2 = pop1.generateNewGeneration();
// console.log('pop2:');
// console.log(pop2.currentPopulation);
// module.exports = Population;
export default Population;
