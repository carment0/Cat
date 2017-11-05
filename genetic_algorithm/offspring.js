import Organism from './organism';

class Offspring {
  constructor(parent1, parent2) {
    this.parent1 = parent1;
    this.parent2 = parent2;
  }

  recombination(geneLength, mutationRate) {
    let offspringGene = [];
    let splitGene = Math.floor(Math.random() * (geneLength - 0)) + 0;
    for (let i = 0; i < geneLength; i++) {
      if (i < splitGene) {
        offspringGene[i] = this._mutation(this.parent1.genes[i], mutationRate);
      } else {
        offspringGene[i] = this._mutation(this.parent2.genes[i], mutationRate);
      }
    }
    let offspring = new Organism(offspringGene.length, offspringGene);
    return offspring;
  }

  _mutation(oldCharacter, mutationRate) {
    if (Math.random() < mutationRate) {
      let randomChar = Math.floor(Math.random() * 126) + 32;
      let newCharacter = String.fromCharCode(randomChar);
      return newCharacter;
    }
    return oldCharacter;
  }
}

export default Offspring;
