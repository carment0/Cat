// React
import React from 'react';
import ReactDOM from 'react-dom';

// creates keys for mapping
import uuid from 'uuid/v1';

// GA Algorithm
import Population from '../genetic_algorithm/population';

import Navbar from './nav_bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class Root extends React.Component {
  state = {
    target: 'To meow, or not to meow.',
    popSize: 1000,
    generation: 1,
    mutationRate: 1,
    bestPhrases: [],
    averageFitness: 0
  };

  updatePop = () => {
    this.population = new Population(this.state.target, this.state.mutationRate, this.state.popSize);
  }

  // arrow function doesn't need binding
  start = () => {
    this.updatePop();
    console.log(this.population);
    const generationTime = 100;
    this.intervalID = setInterval(() => {
      this.population = this.population.generateNewGeneration();
      const bestOrganism = this.population.fittestOrganism();
      this.setState({
        generation: this.state.generation + 1,
        bestPhrases: this.state.bestPhrases.concat(bestOrganism.getPhraseFromGene()),
        averageFitness: this.population.getAveragePopulationFitness()
      });

      if (bestOrganism.isPerfect()) {
        clearInterval(this.intervalID);
      }
    }, generationTime);
  };

  // get function is a getter for a property, no  need to invoke this fn
  get phrases() {
    const listItems = this.state.bestPhrases.slice(this.state.bestPhrases.length - 30).map((phrase) => {
      return <li key={uuid()}>{phrase}</li>;
    });

    return <ul>{listItems}</ul>;
  }

  handlePopulation = (pop) => {
    this.setState({ popSize: pop.target.value });
  }

  handleMutation = (mutate) => {
    this.setState({ mutationRate: mutate.target.value });
  }

  handlePhrase = (phrase) => {
    this.setState({ target: phrase.target.value });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
          <div className="main">
            <div className="input">
              <div>
                <h2>Enter your own phrase or use the default:</h2>
                <form>
                  <textarea className="user-phrase" defaultValue="To meow, or not to meow." onChange={(phrase) => this.handlePhrase(phrase)} />
                </form>
              </div>
              <div className="parameters">
                <h3 className="phrase-box">Parameters</h3>
                <h4>Total Population:</h4>
                <input defaultValue="1000" type="text" name="totalPopulation" onChange={(pop) => this.handlePopulation(pop)} />
                <h4>Mutation Rate (%):</h4>
                <input defaultValue="1" type="text" name="mutationRate" onChange={(mutate) => this.handleMutation(mutate)} />
                <h4 id="total-gen">Total Generation:</h4>
                <p id="updated-gen">{this.state.generation}</p>
                <h4 id="avg-fitness">Average Unit of Fitness Per Organism:</h4>
                <p id="updated-fitness">{this.state.averageFitness}</p>
                <button className="start" onClick={this.start}>Start</button>
              </div>
            </div>
            <div className="phrase">
              <h3>Fittest Phrases For Each Generation:</h3>
              <div>{this.phrases}</div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
