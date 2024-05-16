from flask import Flask, request, jsonify, send_from_directory
import pandas as pd
import papermill as pm
import os

app = Flask(__name__)

# Define the directory for the models
MODEL_DIR = os.path.join(os.getcwd(), 'models')

# Load dataset
dataset_path = os.path.join(MODEL_DIR, 'Data.csv')
datasets = {
    'finance': pd.read_csv(dataset_path),  # Assuming Data.csv contains financial data
    # Add paths to other datasets if needed
}

@app.route('/api/dataset', methods=['GET'])
def get_dataset():
    dataset_name = request.args.get('name')
    if dataset_name in datasets:
        data = datasets[dataset_name].to_dict(orient='records')
        return jsonify(data)
    else:
        return jsonify({'error': 'Unknown dataset'}), 400

@app.route('/api/run-model', methods=['POST'])
def run_model():
    data = request.json
    model_name = data.get('model')
    config = data.get('config')

    input_path = os.path.join(MODEL_DIR, f"{model_name}.ipynb")
    output_path = os.path.join(MODEL_DIR, f"{model_name}_output.ipynb")

    if not os.path.exists(input_path):
        return jsonify({'error': 'Model not found'}), 404

    # Run the notebook with the given configuration
    try:
        pm.execute_notebook(
            input_path,
            output_path,
            parameters=config
        )
        # Assuming the output notebook saves the forecast result in a predefined cell
        output_df = pd.read_csv(os.path.join(MODEL_DIR, f"{model_name}_forecast.csv"))
        return jsonify(output_df.to_dict(orient='records'))
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/forecast', methods=['GET'])
def get_forecast():
    # Example data, replace with actual forecasting logic
    data = {
        'dates': ['2023-01-01', '2023-01-02', '2023-01-03'],
        'actual': [100, 101, 102],
        'forecast': [100.5, 101.5, 102.5]
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
