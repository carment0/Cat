class Organism {
  /**
   * @description Organism is an object that represents a text phrase.
   * @param {string} targetPhrase
   * @param {number} mutationRate - Given as a percentage
   * @param {array} genes - Array of characters
   */
  constructor(target, mutationRate, genes = []) {
    this.mutationRate = mutationRate;
    this.targetPhrase = target;
    this.genes = genes;

    // If gene is not passed, instantiate one
    if (this.genes.length === 0) {
      this._createGene();
    }

    this._mutate();
    this._calculateOrganismFitness();
  }

  getPhraseFromGene() {
    return this.genes.join('');
  }

  isPerfect() {
    return this.targetPhrase === this.getPhraseFromGene();
  }

  recombination(otherOrganism) {
    const splitIndex = Math.floor(Math.random() * this.genes.length);

    const offspringGene = [];
    for (let i = 0; i < this.genes.length; i += 1) {
      if (i < splitIndex) {
        offspringGene.push(this.genes[i]);
      } else {
        offspringGene.push(otherOrganism.genes[i]);
      }
    }

    const offspring = new Organism(this.targetPhrase, this.mutationRate, offspringGene);

    return offspring;
  }

  _mutate() {
    for (let i = 0; i < this.genes.length; i += 1) {
      if (Math.random() < this.mutationRate / 100) {
        const randomChar = Math.floor(Math.random() * 126) + 32;
        this.genes[i] = String.fromCharCode(randomChar);
      }
    }
  }

  _createGene() {
    for (let i = 0; i < this.targetPhrase.length; i += 1) {
      const randomChar = Math.floor(Math.random() * 126) + 32;
      this.genes[i] = String.fromCharCode(randomChar);
    }
  }

  _calculateOrganismFitness() {
    let fitnessScore = 0;
    for (let i = 0; i < this.genes.length; i += 1) {
      if (this.genes[i] === this.targetPhrase[i]) {
        fitnessScore += 1;
      }
    }

    this.fitness = (fitnessScore / this.targetPhrase.length) * 100;
  }
}

// module.exports = Organism;
export default Organism;
