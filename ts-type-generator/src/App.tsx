import React from 'react';
import './App.css';
import Generator from './components/Generator';

const App = () => {
  return (
    <div className="App">
      <h1 className="title">Typescript type generator</h1>
      <Generator />
    </div>
  );
}

export default App;
