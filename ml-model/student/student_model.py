import pandas as pd
import joblib
from sklearn.ensemble import RandomForestClassifier


DATA_PATH = r"C:\Users\anton\OneDrive\Documents\MultiPredictionProject\ml-model\datasets\student_big.csv"

MODEL_PATH = r"C:\Users\anton\OneDrive\Documents\MultiPredictionProject\ml-model\saved-models\student_model.pkl"


print("Loading:", DATA_PATH)


data = pd.read_csv(DATA_PATH)


data["gender"] = data["gender"].map({
    "male": 1,
    "female": 0
})

data["training"] = data["training"].map({
    "yes": 1,
    "no": 0
})

data["result"] = data["result"].map({
    "Pass": 1,
    "Fail": 0
})


X = data[[
    "gender",
    "study_hours",
    "attendance",
    "internal_marks",
    "assignment_score",
    "exam_score",
    "previous_gpa",
    "training",
    "arrears",
    "sleep_hours",
    "mobile_usage",
    "health_score"
]]

y = data["result"]


model = RandomForestClassifier()

model.fit(X, y)


joblib.dump(model, MODEL_PATH)


print("student_model saved")