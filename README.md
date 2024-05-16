Waleed Saeed -- 21i-1672
Yahya Qureshi -- 21i-1682

Data Mining Project:-

----DATA CLEANING----

Removed Null Values
Used Data to make a Date Field


----Models----

ARIMA Configuration and Tuning
Purpose: ARIMA is a method for predicting future points in a time series (like stock prices) by using past values.
Process: Check if the data is stable over time with a test (ADF test). Then, look at special graphs (ACF and PACF) to choose the ARIMA settings: how many past values to use (p), how much to adjust for trends (d), and how many past mistakes to correct (q).
ANN Design and Training
Purpose: Artificial Neural Networks (ANNs) can find complex patterns in data that simpler methods might miss.
Process: Create different ANN designs with various layers and nodes. Train these designs using past data to see which one works best.
SARIMA (Seasonal ARIMA)
Purpose: SARIMA is like ARIMA but better for data with regular seasonal patterns (like monthly sales).
Process: Find the regular ARIMA settings (p, d, q) and also seasonal settings (P, D, Q) by checking the data for patterns and seasonality.
Exponential Smoothing (ETS)
Purpose: Exponential Smoothing forecasts future data points by averaging past observations, giving more weight to recent ones.
Process: Choose the right type of smoothing based on whether the data has trends or seasonal patterns. Fine-tune the model to get the best results.
Prophet
Purpose: Prophet is great for predicting data with strong seasonal patterns and special events (like holidays).
Process: Set up the model with yearly, weekly, and daily patterns and include any holidays. Let Prophet automatically adjust to fit the data.
Support Vector Regression (SVR)
Purpose: SVR uses a method to find the best fit for data, even when the relationship is complex.
Process: Choose the type of SVR (like linear or radial basis) and adjust settings (C and gamma). Test to make sure it works well on new data.
Long Short-Term Memory (LSTM)
Purpose: LSTMs are good at predicting sequences (like text or time series) because they remember patterns over time.
Process: Build an LSTM network with layers and nodes. Train it with sequences of past data and adjust the sequence length.
Hybrid Models Integration
Purpose: Combining ARIMA and ANN makes better predictions by using ARIMA to capture simple patterns and ANN to catch complex ones.
Process: Use ARIMA to make initial forecasts. Then, feed these forecasts into an ANN to correct any errors, improving the overall prediction.




