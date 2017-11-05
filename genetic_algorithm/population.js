import Organism from './organism';
import Offspring from './offspring';

class Population {
  constructor(targetPhrase, populationSize = 200, mutationRate, currentPopulation = []) {
    this.targetPhrase = targetPhrase;
    this.populationSize = populationSize;
    this.currentPopulation = currentPopulation;
    this.mutationRate = mutationRate;
    if (this.currentPopulation === undefined || this.currentPopulation.length == 0) {
      this._createInitialPopulation();
    };
  }

  getAveragePopulationFitness() {
    let totalFitness = 0;
    this.currentPopulation.forEach((phrase) => {
      totalFitness += phrase.fitness;
    });

    return total = totalFitness / this.populationSize;
  }

  fittestOrganism() {
    let bestFitness = 0;
    let bestOrganism;
    this.currentPopulation.forEach((organism, idx) => {
      if (organism.fitness > bestfitness) {
        bestOrganism = organism;
      }
    })
    return bestOrganism;
  }

  generateNewGeneration() {
    let potentialParents = [];
    this.currentPopulation.forEach((organism) => {
      let n = Math.floor(organism.fitness);
      if (n < 1) n = 1;
      for (let i = 0; i < n; i++) {
        potentialParents.push(organism);
      }
    })
    let nextGeneration = this._naturalSelection(potentialParents);
    return nextGeneration
  }

  _createInitialPopulation() {
    let currentPopulation = []
    for (let i = 0; i < this.populationSize; i++) {
      let organism = new Organism(this.targetPhrase.length);
      this.currentPopulation.push(organism)
    }
  }

  _naturalSelection(potentialParents) {
    let newGeneration = []
    let matingPopulation = potentialParents.length;
    for (let i = 0; i < this.populationSize; i++) {
      let parentOneIdx = Math.floor(Math.random() * matingPopulation) + 0;
      let parentTwoIdx = Math.floor(Math.random() * matingPopulation) + 0;
      let offspring = new Offspring(potentialParents[parentOneIdx], potentialParents[parentTwoIdx]);
      newGeneration.push(offspring.recombination(ttargetPhrase.length, this.mutationRate));
    }
    return newGeneration
  }
}

export default Population;
