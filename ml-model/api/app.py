import os
from flask import Flask, request, jsonify
import numpy as np
import joblib

app = Flask(__name__)


MODEL_DIR = r"C:\Users\anton\OneDrive\Documents\MultiPredictionProject\ml-model\saved-models"


student_model = joblib.load(
    os.path.join(MODEL_DIR, "student_model.pkl")
)

placement_model = joblib.load(
    os.path.join(MODEL_DIR, "placement_model.pkl")
)

health_model = joblib.load(
    os.path.join(MODEL_DIR, "health_model.pkl")
)


def fix_features(arr, n=12):

    arr = [float(x) if x != "" else 0 for x in arr]

    while len(arr) < n:
        arr.append(0)

    return np.array(arr).reshape(1, -1)


@app.route("/student", methods=["POST"])
def student():

    data = request.json["data"]

    data = fix_features(data, 12)

    pred = student_model.predict(data)

    return jsonify(int(pred[0]))


@app.route("/placement", methods=["POST"])
def placement():

    data = request.json["data"]

    data = fix_features(data, 7)

    pred = placement_model.predict(data)

    return jsonify(int(pred[0]))


@app.route("/health", methods=["POST"])
def health():

    data = request.json["data"]

    data = fix_features(data, 7)

    pred = health_model.predict(data)

    return jsonify(int(pred[0]))


if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)