import requests

url = "http://127.0.0.1:8080/api/predict"

data = {
    "data": [
        1,   # gender
        5,   # study_hours
        85,  # attendance
        78,  # internal_marks
        80,  # assignment_score
        75,  # exam_score
        7.5, # previous_gpa
        1,   # training
        0,   # arrears
        7,   # sleep_hours
        3,   # mobile_usage
        80   # health_score
    ]
}

response = requests.post(url, json=data)

print(response.json())