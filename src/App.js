import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Parvind', age: '31' },
      { name: 'Arvind', age: '33' },
      { name: 'Manish', age: '35' }
    ]
  }
  btnClickHandler = () => {
    //console.log('Button Clicked');
    this.setState({
      persons: [
        { name: 'Parvind Kumar', age: '31' },
        { name: 'Arvind Kumar', age: '33' },
        { name: 'Manish Parashar', age: '35' }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome, I am React App.Enjoy</h1>
        <p>It sems its working fine</p>
        <p>really, I confirm.</p>
        <button onClick={this.btnClickHandler}>Click Me</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
