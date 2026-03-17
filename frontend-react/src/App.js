import { useState } from "react";

function App() {

  const [tab, setTab] = useState("student");
  const [result, setResult] = useState("");

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
    health: ""
  });


  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };


  const clearForm = () => {

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
      health: ""
    });

    setResult("");
  };



  const callAPI = async (url, arr) => {

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data: arr })
    });

    const data = await res.json();

    return data;
  };


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

    const r = await callAPI(
      "http://localhost:8080/predict/student",
      arr
    );

    setResult(r === 1 ? "PASS" : "FAIL");
  };


  const predictPlacement = async () => {

    const arr = [
      values.gpa,
      values.internal,
      values.exam,
      values.training,
      values.arrears
    ];

    const r = await callAPI(
      "http://localhost:8080/predict/placement",
      arr
    );

    setResult(r === 1 ? "SELECTED" : "NOT SELECTED");
  };


  const predictHealth = async () => {

    const arr = [
      values.sleep,
      values.mobile,
      values.health,
      values.training
    ];

    const r = await callAPI(
      "http://localhost:8080/predict/health",
      arr
    );

    setResult(r === 1 ? "GOOD" : "BAD");
  };



  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginTop: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  };


  const buttonStyle = {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    width: "48%"
  };


  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        fontFamily: "Arial",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >

      {/* HEADER */}

      <div
        style={{
          width: "100%",
          background: "#2563eb",
          color: "white",
          padding: "15px",
          fontSize: "24px",
          textAlign: "center",
          fontWeight: "bold"
        }}
      >
        Multi Prediction System
      </div>



      {/* TABS */}

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px"
        }}
      >

        <button onClick={() => setTab("student")}>
          Student
        </button>

        <button onClick={() => setTab("placement")}>
          Placement
        </button>

        <button onClick={() => setTab("health")}>
          Health
        </button>

      </div>



      {/* CARD */}

      <div
        style={{
          width: "420px",
          background: "white",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 10px #ccc"
        }}
      >



        {tab === "student" && (
          <div>

            <h2>Student Prediction</h2>

            <input name="gender" value={values.gender} placeholder="Gender 0/1" style={inputStyle} onChange={handleChange}/>
            <input name="study" value={values.study} placeholder="Study Hours" style={inputStyle} onChange={handleChange}/>
            <input name="attendance" value={values.attendance} placeholder="Attendance %" style={inputStyle} onChange={handleChange}/>
            <input name="internal" value={values.internal} placeholder="Internal Marks" style={inputStyle} onChange={handleChange}/>
            <input name="assignment" value={values.assignment} placeholder="Assignment" style={inputStyle} onChange={handleChange}/>
            <input name="exam" value={values.exam} placeholder="Exam" style={inputStyle} onChange={handleChange}/>
            <input name="gpa" value={values.gpa} placeholder="GPA" style={inputStyle} onChange={handleChange}/>
            <input name="training" value={values.training} placeholder="Training 0/1" style={inputStyle} onChange={handleChange}/>
            <input name="arrears" value={values.arrears} placeholder="Arrears" style={inputStyle} onChange={handleChange}/>
            <input name="sleep" value={values.sleep} placeholder="Sleep Hours" style={inputStyle} onChange={handleChange}/>
            <input name="mobile" value={values.mobile} placeholder="Mobile Usage" style={inputStyle} onChange={handleChange}/>
            <input name="health" value={values.health} placeholder="Health Score" style={inputStyle} onChange={handleChange}/>

            <div style={{ display: "flex", gap: "4%", marginTop: "10px" }}>

              <button
                style={{ ...buttonStyle, background: "#16a34a", color: "white" }}
                onClick={predictStudent}
              >
                Predict
              </button>

              <button
                style={{ ...buttonStyle, background: "#dc2626", color: "white" }}
                onClick={clearForm}
              >
                Clear
              </button>

            </div>

          </div>
        )}



        {tab === "placement" && (
          <div>

            <h2>Placement Prediction</h2>

            <input name="gpa" value={values.gpa} placeholder="GPA" style={inputStyle} onChange={handleChange}/>
            <input name="internal" value={values.internal} placeholder="Internal" style={inputStyle} onChange={handleChange}/>
            <input name="exam" value={values.exam} placeholder="Exam" style={inputStyle} onChange={handleChange}/>
            <input name="training" value={values.training} placeholder="Training" style={inputStyle} onChange={handleChange}/>
            <input name="arrears" value={values.arrears} placeholder="Arrears" style={inputStyle} onChange={handleChange}/>

            <div style={{ display: "flex", gap: "4%", marginTop: "10px" }}>

              <button
                style={{ ...buttonStyle, background: "#2563eb", color: "white" }}
                onClick={predictPlacement}
              >
                Predict
              </button>

              <button
                style={{ ...buttonStyle, background: "#dc2626", color: "white" }}
                onClick={clearForm}
              >
                Clear
              </button>

            </div>

          </div>
        )}



        {tab === "health" && (
          <div>

            <h2>Health Prediction</h2>

            <input name="sleep" value={values.sleep} placeholder="Sleep Hours" style={inputStyle} onChange={handleChange}/>
            <input name="mobile" value={values.mobile} placeholder="Mobile Usage" style={inputStyle} onChange={handleChange}/>
            <input name="health" value={values.health} placeholder="Health Score" style={inputStyle} onChange={handleChange}/>
            <input name="training" value={values.training} placeholder="Exercise 0/1" style={inputStyle} onChange={handleChange}/>

            <div style={{ display: "flex", gap: "4%", marginTop: "10px" }}>

              <button
                style={{ ...buttonStyle, background: "#7c3aed", color: "white" }}
                onClick={predictHealth}
              >
                Predict
              </button>

              <button
                style={{ ...buttonStyle, background: "#dc2626", color: "white" }}
                onClick={clearForm}
              >
                Clear
              </button>

            </div>

          </div>
        )}



        <h2 style={{ marginTop: "15px" }}>
          Result: {result}
        </h2>

      </div>

    </div>
  );
}

export default App;