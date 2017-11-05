class Organism {
  constructor(geneLength = 0, genes = []) {
    this.genes = genes;
    this.fitness = 0;
    if (this.name === undefined || this.name.length == 0) {
      this._createGene(geneLength)
    };
    this._calculateGeneFitness(targetPhrase);
  }

  getPhraseFromGene() {
    return this.genes.join("");
  }

  _createGene(geneLength) {
    for (let i = 0; i < geneLength; i++) {
      let randomChar = Math.floor(Math.random() * 126) + 32;
      this.genes[i] = String.fromCharCode(randomChar);
    }
  }

  // set fitness score (%)
  _calculateOrganismFitness(targetPhrase) {
    let fitnessScore = 0;
    for (let i = 0; i < this.genes.length; i++) {
      if (this.genes[i] === targetPhrase.charAt(i)) {
        score++;
      }
    }
    this.fitness = ( score / targetPhrase.length ) * 100;
  }
}

export default Organism;
