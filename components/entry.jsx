// React
import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid/v1';

// GA Algorithm
import Population from '../genetic_algorithm/population';


class Root extends React.Component {
  state = {
    target: 'to meow or not to meow',
    popSize: 1000,
    generation: 1,
    mutationRate: 1,
    bestPhrases: []
  };

  componentWillMount() {
    this.population = new Population(this.state.target, this.state.mutationRate, this.state.popSize);
  }

  start = () => {
    const generationTime = 100;
    this.intervalID = setInterval(() => {
      this.population = this.population.generateNewGeneration();
      const bestOrganism = this.population.fittestOrganism();
      this.setState({
        generation: this.state.generation + 1,
        bestPhrases: this.state.bestPhrases.concat(bestOrganism.getPhraseFromGene())
      });

      if (bestOrganism.isPerfect()) {
        clearInterval(this.intervalID);
      }
    }, generationTime);
  };

  get phrases() {
    const listItems = this.state.bestPhrases.map((phrase) => {
      return <li key={uuid()}>{phrase}</li>;
    });

    return <ul>{listItems}</ul>;
  }

  render() {
    return (
      <div>
        <div>Generation: {this.state.generation}</div>
        <div>{this.phrases}</div>
        <button onClick={this.start}>start</button>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
