import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
     <h1>Welcome, I am React App.Enjoy</h1>
     <p>It sems its working fine</p>
     <p>really, I confirm.</p>
     <Person name="Parvind" age="31"/>
     <Person name="Arvind" age="31"/>
     <Person name="Manish" age="35"/>
    </div>
  );
}

export default App;
