import pandas as pd
import joblib
from sklearn.ensemble import RandomForestClassifier


DATA_PATH = r"C:\Users\anton\OneDrive\Documents\MultiPredictionProject\ml-model\datasets\health_big.csv"

MODEL_PATH = r"C:\Users\anton\OneDrive\Documents\MultiPredictionProject\ml-model\saved-models\health_model.pkl"


data = pd.read_csv(DATA_PATH)


X = data[[
    "sleep",
    "mobile",
    "health",
    "exercise",
    "water",
    "stress",
    "food"
]]

y = data["result"]


model = RandomForestClassifier()

model.fit(X, y)


joblib.dump(model, MODEL_PATH)

print("health model saved")