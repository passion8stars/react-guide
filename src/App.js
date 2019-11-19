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
    togtext: 'Show'
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
    const persons = this.state.persons;
    this.setState({
      //persons:persons,
      persons: [
        { id:'1', name: 'Parvind', age: 28 },
        { id:'2', name: 'Manu', age: 29 },
        { id:'3', name: 'Stephanie', age: 26 }
      ],
      showPerson: !doesShow,
      togtext: doesShow ? 'Show' : 'Hide'
    });
  }
  deleteHandler = (personindex) => {
    const persons = this.state.persons.slice();
    persons.splice(personindex, 1);
    if (persons.length === 0) {
      this.togglePersonHandler();
    }

    this.setState({
      persons: persons,
    })
  }
  render() {
    const btnStyle = {
      backgroundColor: 'white',
      padding: '10px'
    }
    let persons = null;
    if (this.state.showPerson) {
      persons =
        < div >
          {this.state.persons.map((person, index) => {
            return <Person name={person.name}
              age={person.age}
              changed={this.updateNameHandler}
              click={() => this.deleteHandler(index)}
              key={person.id} />
          })}
        </div >

    }
    return (
      <div className="App" >
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={btnStyle} onClick={this.togglePersonHandler}>{this.state.togtext}</button>
        {persons}
      </div >
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
