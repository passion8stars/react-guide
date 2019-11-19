import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { whileStatement } from '@babel/types';

class App extends Component {
  state = {
    persons: [
      { name: 'Parvind', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    showPerson: false,
    togtext:'Show'
  };

  switchNameHandler = (newval) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newval, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };
  updateNameHandler = (event) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: event.target.value, age: 31 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson:!doesShow,
      togtext:doesShow?'Show':'Hide'
    });
  }

  render() {
    const btnStyle = {
      backgroundColor: 'white',
      padding: '10px'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={btnStyle} onClick={this.togglePersonHandler}>{this.state.togtext}</button>
        {this.state.showPerson === true ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              changed={this.updateNameHandler}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Parvind')}
            >
              My Hobbies: Racing
        </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
          : null}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
