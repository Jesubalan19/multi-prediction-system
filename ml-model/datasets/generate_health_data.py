import random
import csv

rows = []

for i in range(1000):

    sleep = random.randint(3, 9)
    mobile = random.randint(1, 8)
    health = random.randint(40, 100)
    exercise = random.choice([0, 1])
    water = random.randint(1, 5)
    stress = random.randint(1, 10)
    food = random.randint(1, 10)

    if sleep >= 6 and mobile <= 5 and exercise == 1 and stress <= 6:
        result = 1
    else:
        result = 0

    rows.append([
        sleep,
        mobile,
        health,
        exercise,
        water,
        stress,
        food,
        result
    ])


with open("health_big.csv", "w", newline="") as f:

    writer = csv.writer(f)

    writer.writerow([
        "sleep",
        "mobile",
        "health",
        "exercise",
        "water",
        "stress",
        "food",
        "result"
    ])

    writer.writerows(rows)

print("health_big.csv created")