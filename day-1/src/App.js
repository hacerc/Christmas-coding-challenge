import { useState } from "react";
import "./App.scss";

function App() {
  const [studentName, setStudentName] = useState("");
  const [insturactorName, setInsturactorName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [score, setScore] = useState("");
  // const [updatedStudentName, setUpdatedStudentName] = useState("");
  // const [updatedInsturactorName, setUpdatedInsturactorName] = useState("");
  // const [updatedCourseName, setUpdatedCourseName] = useState("");
  // const [updatedScore, setUpdatedScore] = useState("");
  const [student, setStudent] = useState({});
  const [studentNameError, setStudentNameError] = useState(false);
  const [insturactorNameError, setInsturactorNameError] = useState(false);
  const [scoreError, setScoreError] = useState(false);
  const [courseNameError, setCourseNameError] = useState(false);
  const [students, setStudents] = useState([]);
  const addStudent = (event) => {
    event.preventDefault();
    setStudentNameError(false);
    setInsturactorNameError(false);
    setCourseNameError(false);
    setScoreError(false);
    if (studentName && insturactorName && score && courseName) {
      // setUpdatedStudentName(studentName);
      // setUpdatedInsturactorName(insturactorName);
      // setUpdatedCourseName(courseName);
      // setUpdatedScore(score);
      //kisaltilmis yol
      // setStudent({
      //   name: studentName,
      //   insturactorName,
      //   courseName,
      //   score,
      // });
      setStudents([
        ...students,
        {
          name: studentName,
          insturactorName,
          courseName,
          score,
        },
      ]);
      setStudentName("");
      setCourseName("");
      setInsturactorName("");
      setScore("");
    } else {
      // if (!studentName){
      //   setStudentNameError(true)
      // }
      !studentName && setStudentNameError(true);
      !insturactorName && setInsturactorNameError(true);
      !score && setScoreError(true);
      !courseName && setCourseNameError(true);
    }
  };

  return (
    <div className="App">
      <h1>Student Manager</h1>

      <h2>{studentName}</h2>
      <form>
        <div className="input-control">
          <input
            type="text"
            value={studentName}
            placeholder="Student Name"
            name=""
            id=""
            onChange={(event) => setStudentName(event.target.value)}
          />
          {studentNameError && <p>hatasiz kul olmaz</p>}
        </div>
        <div className="input-control">
          <input
            type="text"
            value={courseName}
            placeholder="Course Name"
            onChange={(event) => setCourseName(event.target.value)}
          />
          {courseNameError && <p>hatasiz kul olmaz</p>}
        </div>
        <div className="input-control">
          <input
            type="text"
            value={insturactorName}
            placeholder="Insturactor Name"
            onChange={(event) => setInsturactorName(event.target.value)}
          />
          {insturactorNameError && <p>hatasiz kul olmaz</p>}
        </div>
        <div className="input-control">
          <input
            type="number"
            value={score}
            placeholder="Score"
            onChange={(event) => setScore(event.target.value)}
          />
          {scoreError && <p>hatasiz kul olmaz</p>}
        </div>
        <button onClick={addStudent}>Change Student</button>
      </form>
      {students.map((student) => (
        <div className="student">
          <p>Student Name:{student.name}</p>
          <p>Course:{student.courseName}</p>
          <p>Insturactor Name:{student.insturactorName}</p>
          <p>Score:{student.score}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
