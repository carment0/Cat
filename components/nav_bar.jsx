import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

export default class Navbar extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const action = [
      <RaisedButton
        label="Exit"
        primary={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div className="nav-bar">
        <h1 className="title">Genetic Algorithm</h1>
        <RaisedButton backgroundColor="#ff3300"
                      label="About"
                      labelStyle={{ color: 'white' }}
                      onClick={this.handleOpen} />
        <Dialog
          title="About Genetic Algorithm"
          actions={action}
          modal={false}
          open={this.state.open}
          autoScrollBodyContent={true}
          onRequestClose={this.handleClose}>
            <p>One of the most powerful algorithmic process is found in nature itself. Genetic Algorithms are search based algorithms based on the concepts of natural selection and genetics. It is frequently used to find optimal or near-optimal solutions to difficult problems which otherwise would take a lifetime to solve. By evaluating how fit a guess is, the program can evolve the answer accordingly.</p>
        </Dialog>
      </div>
    );
  }
}
