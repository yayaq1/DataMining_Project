# Data Mining Project

## Team Members
- **Waleed Saeed** (21i-1672)
- **Yahya Qureshi** (21i-1682)

## Project Overview
This project focuses on predicting future data points using various time series and machine learning models. The process involves data cleaning, model configuration, training, and evaluation to find the best fit for the dataset.

## Data Cleaning
- **Removed Null Values:** Ensured data integrity by eliminating missing entries.
- **Created Date Field:** Processed raw data to generate a structured date field.

## Models Implemented

### 1. ARIMA (AutoRegressive Integrated Moving Average)
- **Purpose:** Predicts future points in a time series using past values.
- **Process:** 
  - **ADF Test:** Checks data stability over time.
  - **ACF & PACF Plots:** Determine ARIMA settings: (p), (d), and (q).

### 2. ANN (Artificial Neural Networks)
- **Purpose:** Detects complex patterns in data.
- **Process:** 
  - Design various ANN architectures.
  - Train models to identify the best-performing structure.

### 3. SARIMA (Seasonal ARIMA)
- **Purpose:** Extends ARIMA for data with seasonal patterns.
- **Process:** 
  - Identify regular (p, d, q) and seasonal (P, D, Q) settings.
  - Adjust based on seasonal patterns.

### 4. Exponential Smoothing (ETS)
- **Purpose:** Forecasts future points by averaging past observations, emphasizing recent ones.
- **Process:** 
  - Select smoothing type based on trends and seasonality.
  - Fine-tune model for optimal results.

### 5. Prophet
- **Purpose:** Predicts data with strong seasonal patterns and special events.
- **Process:** 
  - Configure model with yearly, weekly, and daily patterns.
  - Incorporate holidays and allow automatic adjustments.

### 6. Support Vector Regression (SVR)
- **Purpose:** Fits complex relationships in data.
- **Process:** 
  - Choose SVR type (e.g., linear, radial basis).
  - Adjust settings (C and gamma) for performance validation.

### 7. Long Short-Term Memory (LSTM)
- **Purpose:** Predicts sequences by remembering patterns over time.
- **Process:** 
  - Build LSTM network with multiple layers and nodes.
  - Train using sequences of past data.

### 8. Hybrid Models Integration
- **Purpose:** Enhance predictions by combining ARIMA and ANN.
- **Process:** 
  - Use ARIMA for initial forecasts.
  - Feed forecasts into ANN to correct errors.

## Conclusion
This project demonstrates a comprehensive approach to time series forecasting and data pattern detection using a variety of models. By leveraging both simple and complex models, we aim to achieve high accuracy in predictions.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
