import { useState } from "react";

function App() {

  const API = "https://ml-api-gu6h.onrender.com/predict";
  const APT = "https://backend-api-izbv.onrender.com/predict";


  const [tab, setTab] = useState("student");

  const [values, setValues] = useState({
    gender: "",
    study: "",
    attendance: "",
    internal: "",
    assignment: "",
    exam: "",
    gpa: "",
    training: "",
    arrears: "",
    sleep: "",
    mobile: "",
    health: "",
    communication: "",
    aptitude: "",
    water: "",
    stress: "",
    food: ""
  });

  const [result, setResult] = useState("");



  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };


  const clearValues = () => {
    setValues({
      gender: "",
      study: "",
      attendance: "",
      internal: "",
      assignment: "",
      exam: "",
      gpa: "",
      training: "",
      arrears: "",
      sleep: "",
      mobile: "",
      health: "",
      communication: "",
      aptitude: "",
      water: "",
      stress: "",
      food: ""
    });

    setResult("");
  };


  const callAPI = async (url, arr) => {

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: arr })
    });

    const data = await res.json();

    return data;
  };


  // ================= STUDENT =================

  const predictStudent = async () => {

    const arr = [
      values.gender,
      values.study,
      values.attendance,
      values.internal,
      values.assignment,
      values.exam,
      values.gpa,
      values.training,
      values.arrears,
      values.sleep,
      values.mobile,
      values.health
    ];

    const r = await callAPI(API + "/student", arr);

    setResult(r === 1 ? "PASS" : "FAIL");
  };


  // ================= PLACEMENT =================

  const predictPlacement = async () => {

    const arr = [
      values.gpa,
      values.internal,
      values.exam,
      values.training,
      values.arrears,
      values.communication,
      values.aptitude
    ];

    const r = await callAPI(API + "/placement", arr);

    setResult(r === 1 ? "SELECTED" : "NOT SELECTED");
  };


  // ================= HEALTH =================

  const predictHealth = async () => {

    const arr = [
      values.sleep,
      values.mobile,
      values.health,
      values.training,
      values.water,
      values.stress,
      values.food
    ];

    const r = await callAPI(API + "/health", arr);

    setResult(r === 1 ? "GOOD" : "BAD");
  };


  const inputStyle = {
    width: "100%",
    padding: 10,
    marginTop: 8,
    borderRadius: 6
  };


  const btn = {
    padding: 10,
    marginTop: 10,
    marginRight: 10,
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    color: "white"
  };


  return (

    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>

      <h1>Multi Prediction System</h1>


      <button onClick={() => setTab("student")}>Student</button>
      <button onClick={() => setTab("placement")}>Placement</button>
      <button onClick={() => setTab("health")}>Health</button>


      <div style={{ width: 400, margin: "auto", marginTop: 20 }}>


        {tab === "student" && (
          <div>

            <input name="gender" placeholder="Gender 0/1" style={inputStyle} onChange={handleChange}/>
            <input name="study" placeholder="Study Hours" style={inputStyle} onChange={handleChange}/>
            <input name="attendance" placeholder="Attendance" style={inputStyle} onChange={handleChange}/>
            <input name="internal" placeholder="Internal" style={inputStyle} onChange={handleChange}/>
            <input name="assignment" placeholder="Assignment" style={inputStyle} onChange={handleChange}/>
            <input name="exam" placeholder="Exam" style={inputStyle} onChange={handleChange}/>
            <input name="gpa" placeholder="GPA" style={inputStyle} onChange={handleChange}/>
            <input name="training" placeholder="Training 0/1" style={inputStyle} onChange={handleChange}/>
            <input name="arrears" placeholder="Arrears" style={inputStyle} onChange={handleChange}/>
            <input name="sleep" placeholder="Sleep" style={inputStyle} onChange={handleChange}/>
            <input name="mobile" placeholder="Mobile" style={inputStyle} onChange={handleChange}/>
            <input name="health" placeholder="Health" style={inputStyle} onChange={handleChange}/>

            <button style={{ ...btn, background: "green" }} onClick={predictStudent}>
              Predict
            </button>

            <button style={{ ...btn, background: "red" }} onClick={clearValues}>
              Clear
            </button>

          </div>
        )}



        {tab === "placement" && (
          <div>

            <input name="gpa" placeholder="GPA" style={inputStyle} onChange={handleChange}/>
            <input name="internal" placeholder="Internal" style={inputStyle} onChange={handleChange}/>
            <input name="exam" placeholder="Exam" style={inputStyle} onChange={handleChange}/>
            <input name="training" placeholder="Training 0/1" style={inputStyle} onChange={handleChange}/>
            <input name="arrears" placeholder="Arrears" style={inputStyle} onChange={handleChange}/>
            <input name="communication" placeholder="Communication" style={inputStyle} onChange={handleChange}/>
            <input name="aptitude" placeholder="Aptitude" style={inputStyle} onChange={handleChange}/>

            <button style={{ ...btn, background: "blue" }} onClick={predictPlacement}>
              Predict
            </button>

            <button style={{ ...btn, background: "red" }} onClick={clearValues}>
              Clear
            </button>

          </div>
        )}



        {tab === "health" && (
          <div>

            <input name="sleep" placeholder="Sleep" style={inputStyle} onChange={handleChange}/>
            <input name="mobile" placeholder="Mobile" style={inputStyle} onChange={handleChange}/>
            <input name="health" placeholder="Health Score" style={inputStyle} onChange={handleChange}/>
            <input name="training" placeholder="Exercise 0/1" style={inputStyle} onChange={handleChange}/>
            <input name="water" placeholder="Water" style={inputStyle} onChange={handleChange}/>
            <input name="stress" placeholder="Stress" style={inputStyle} onChange={handleChange}/>
            <input name="food" placeholder="Food" style={inputStyle} onChange={handleChange}/>

            <button style={{ ...btn, background: "purple" }} onClick={predictHealth}>
              Predict
            </button>

            <button style={{ ...btn, background: "red" }} onClick={clearValues}>
              Clear
            </button>

          </div>
        )}


        <h2>{result}</h2>

      </div>

    </div>
  );
}

export default App;