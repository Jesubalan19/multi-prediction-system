import random
import csv

rows = []

for i in range(1000):

    gender = random.choice(["male", "female"])
    study = random.randint(1, 8)
    attendance = random.randint(40, 100)
    internal = random.randint(20, 100)
    assignment = random.randint(20, 100)
    exam = random.randint(20, 100)
    gpa = round(random.uniform(4, 10), 2)
    training = random.choice(["yes", "no"])
    arrears = random.randint(0, 5)
    sleep = random.randint(3, 9)
    mobile = random.randint(1, 8)
    health = random.randint(40, 100)

    # RULE FOR PASS / FAIL

    if exam >= 50 and attendance >= 60 and arrears <= 2:
        result = "Pass"
    else:
        result = "Fail"

    rows.append([
        gender,
        study,
        attendance,
        internal,
        assignment,
        exam,
        gpa,
        training,
        arrears,
        sleep,
        mobile,
        health,
        result
    ])


with open("student_big.csv", "w", newline="") as f:

    writer = csv.writer(f)

    writer.writerow([
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
        "health_score",
        "result"
    ])

    writer.writerows(rows)


print("student_big.csv created")