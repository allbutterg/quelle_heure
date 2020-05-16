import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Minutes from './Minutes'

function App() {


state = { time: [ ]};

  return (
    <div className="App">
      <h1> Quelle Heure</h1>
      <Form />
    </div>
  );
}

export default App;
