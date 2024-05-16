// src/components/ForecastResults.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const ForecastResults = () => {
  const [chartData, setChartData] = useState({});
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/forecast');
        setForecastData(response.data);
        setChartData({
          labels: response.data.dates,
          datasets: [
            {
              label: 'Actual Data',
              data: response.data.actual,
              borderColor: 'blue',
              fill: false,
            },
            {
              label: 'Forecast',
              data: response.data.forecast,
              borderColor: 'red',
              fill: false,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching forecast data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Forecast Results</h2>
      {forecastData ? (
        <Line data={chartData} />
      ) : (
        <p>No data available. Please select a dataset and model to view the forecast.</p>
      )}
    </div>
  );
};

export default ForecastResults;
