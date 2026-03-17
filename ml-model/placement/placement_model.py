import pandas as pd
import joblib
from sklearn.ensemble import RandomForestClassifier


DATA_PATH = r"C:\Users\anton\OneDrive\Documents\MultiPredictionProject\ml-model\datasets\placement_big.csv"

MODEL_PATH = r"C:\Users\anton\OneDrive\Documents\MultiPredictionProject\ml-model\saved-models\placement_model.pkl"


data = pd.read_csv(DATA_PATH)


X = data[[
    "gpa",
    "internal",
    "exam",
    "training",
    "arrears",
    "communication",
    "aptitude"
]]

y = data["result"]


model = RandomForestClassifier()

model.fit(X, y)


joblib.dump(model, MODEL_PATH)

print("placement model saved")