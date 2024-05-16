// src/components/ModelSelector.js
import React, { useState } from 'react';
import axios from 'axios';

const ModelSelector = () => {
  const [selectedModel, setSelectedModel] = useState('');
  const [modelConfig, setModelConfig] = useState({});
  const [forecastResults, setForecastResults] = useState(null);

  const handleModelChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedModel(selectedValue);
    setModelConfig({});
    setForecastResults(null);
  };

  const handleConfigChange = (event) => {
    const { name, value } = event.target;
    setModelConfig((prevConfig) => ({
      ...prevConfig,
      [name]: value,
    }));
  };

  const handleRunModel = async () => {
    try {
      const response = await axios.post('/api/run-model', {
        model: selectedModel,
        config: modelConfig,
      });
      setForecastResults(response.data);
    } catch (error) {
      console.error('Error running model:', error);
    }
  };

  return (
    <div>
      <h2>Select Forecasting Model</h2>
      <select value={selectedModel} onChange={handleModelChange}>
        <option value="">--Select a Model--</option>
        <option value="arima">ARIMA</option>
        <option value="ann">Artificial Neural Network (ANN)</option>
        <option value="sarima">SARIMA</option>
        <option value="ets">Exponential Smoothing (ETS)</option>
        <option value="prophet">Prophet</option>
        <option value="svr">Support Vector Regression (SVR)</option>
        <option value="lstm">Long Short-Term Memory (LSTM)</option>
        <option value="hybrid">Hybrid ARIMA-ANN</option>
      </select>

      {selectedModel && (
        <div>
          <h3>Configure {selectedModel.toUpperCase()} Model</h3>
          <input
            type="number"
            name="param1"
            placeholder="Parameter 1"
            value={modelConfig.param1 || ''}
            onChange={handleConfigChange}
          />
          <input
            type="number"
            name="param2"
            placeholder="Parameter 2"
            value={modelConfig.param2 || ''}
            onChange={handleConfigChange}
          />
          <button onClick={handleRunModel}>Run Model</button>
        </div>
      )}

      {forecastResults && (
        <div>
          <h3>Forecast Results</h3>
          <pre>{JSON.stringify(forecastResults, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ModelSelector;
