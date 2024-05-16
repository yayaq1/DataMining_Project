// src/App.js
import React from 'react';
import DatasetSelector from './components/DatasetSelector';
import ModelSelector from './components/ModelSelector';
import ForecastResults from './components/ForecastResults';
import './App.css'; // Import the new CSS file

function App() {
  return (
    <div className="App">
      <h1>Forecasting System</h1>
      <div className="container">
        <DatasetSelector />
      </div>
      <div className="container">
        <ModelSelector />
      </div>
      <div className="container">
        <ForecastResults />
      </div>
    </div>
  );
}

export default App;
