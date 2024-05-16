// src/components/DatasetSelector.js
import React, { useState } from 'react';
import axios from 'axios';

const DatasetSelector = () => {
  const [selectedDataset, setSelectedDataset] = useState('');
  const [datasetData, setDatasetData] = useState(null);

  const handleChange = async (event) => {
    const selectedValue = event.target.value;
    setSelectedDataset(selectedValue);

    if (selectedValue) {
      try {
        const response = await axios.get(`/api/dataset?name=${selectedValue}`);
        setDatasetData(response.data);
      } catch (error) {
        console.error('Error fetching dataset data:', error);
      }
    } else {
      setDatasetData(null);
    }
  };

  return (
    <div>
      <h2>Select Dataset</h2>
      <select value={selectedDataset} onChange={handleChange}>
        <option value="">--Select a Dataset--</option>
        <option value="finance">Finance (S&P 500)</option>
        <option value="energy">Energy (Hourly Consumption)</option>
        <option value="environment">Environment (CO2 Levels)</option>
      </select>
      {datasetData && (
        <div>
          <h3>Dataset Preview:</h3>
          <pre>{JSON.stringify(datasetData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DatasetSelector;
