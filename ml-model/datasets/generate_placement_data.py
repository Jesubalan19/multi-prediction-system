import random
import csv

rows = []

for i in range(1000):

    gpa = round(random.uniform(4, 10), 2)
    internal = random.randint(20, 100)
    exam = random.randint(20, 100)
    training = random.choice([0, 1])
    arrears = random.randint(0, 5)
    communication = random.randint(20, 100)
    aptitude = random.randint(20, 100)

    # RULE

    if gpa >= 7 and exam >= 60 and arrears <= 2 and training == 1:
        result = 1
    else:
        result = 0

    rows.append([
        gpa,
        internal,
        exam,
        training,
        arrears,
        communication,
        aptitude,
        result
    ])


with open("placement_big.csv", "w", newline="") as f:

    writer = csv.writer(f)

    writer.writerow([
        "gpa",
        "internal",
        "exam",
        "training",
        "arrears",
        "communication",
        "aptitude",
        "result"
    ])

    writer.writerows(rows)

print("placement_big.csv created")