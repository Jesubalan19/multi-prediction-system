from flask import Flask, request, jsonify
import numpy as np
import joblib
import os

app = Flask(__name__)


BASE_DIR = os.path.dirname(os.path.abspath(__file__))

MODEL_DIR = os.path.join(BASE_DIR, "..", "saved-models")


student_path = os.path.join(MODEL_DIR, "student_model.pkl")
placement_path = os.path.join(MODEL_DIR, "placement_model.pkl")
health_path = os.path.join(MODEL_DIR, "health_model.pkl")


student_model = joblib.load(student_path)
placement_model = joblib.load(placement_path)
health_model = joblib.load(health_path)


@app.route("/student", methods=["POST"])
def student():

    data = request.json["data"]

    data = np.array(data, dtype=float).reshape(1, -1)

    pred = student_model.predict(data)

    return jsonify(int(pred[0]))


@app.route("/placement", methods=["POST"])
def placement():

    data = request.json["data"]

    data = np.array(data, dtype=float).reshape(1, -1)

    pred = placement_model.predict(data)

    return jsonify(int(pred[0]))


@app.route("/health", methods=["POST"])
def health():

    data = request.json["data"]

    data = np.array(data, dtype=float).reshape(1, -1)

    pred = health_model.predict(data)

    return jsonify(int(pred[0]))


if __name__ == "__main__":

    port = int(os.environ.get("PORT", 5000))

    app.run(host="0.0.0.0", port=port)