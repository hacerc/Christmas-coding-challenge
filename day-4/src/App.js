import { useState } from 'react';
import './App.scss';
import StudentList from './components/app/student/student-list/StudentList';
import Header from "./components/shared/header/Header"

function App() {

  //object state
  const [student, setStudent] = useState({ studentName: "", course: "", instructor: "", score: "" });
  const [isStudentValid, setIsStudentValid] = useState({ studentName: true, course: true, instructor: true, score: true });

  const [studentList, setStudentList] = useState([]);
  const [serchStudentName, setSerchStudentName] =useState("");
  const addStudent = (event) => {
    event.preventDefault();
    setIsStudentValid({ ...student });
    if (Object.values(student).every(value => value)) {
      setStudentList(prevStudentList => [...prevStudentList, student]);
      setStudent({ studentName: "", course: "", instructor: "", score: "" })
    }
  }
const handleStudentNameSearch=(value)=>{
  setSerchStudentName(value)
}

  const func1 = () => console.log("I am a function")

  const func2 = somethingToLog => console.log("I am logging this: " + somethingToLog)

  return (
    <div className="app">
      <Header title={"Student Portal"} propFunction={func1} logFunction={func2} prop3={"Lorem"} />
      <form action="">
        <div className="input-control">
          <input
            type="text"
            onChange={event => setStudent(prevStudent => ({ ...prevStudent, studentName: event.target.value }))}
            value={student.studentName}
            placeholder="Enter student name..."
          />
          {!isStudentValid.studentName && <p className="input-error">Name cannot be empty</p>}
        </div>
        <div className="input-control">
          <input
            type="text"
            onChange={event => setStudent(prevStudent => ({ ...prevStudent, course: event.target.value }))}
            value={student.course}
            placeholder="Enter course..."
          />
          {!isStudentValid.course && <p className="input-error">Course cannot be empty</p>}
        </div>
        <div className="input-control">
          <input
            type="text"
            onChange={event => setStudent(prevStudent => ({ ...prevStudent, instructor: event.target.value }))}
            value={student.instructor}
            placeholder="Enter instructor name..."
          />
          {!isStudentValid.instructor && <p className="input-error">Instructor cannot be empty</p>}
        </div>
        <div className="input-control">
          <input
            type="text"
            onChange={event => setStudent(prevStudent => ({ ...prevStudent, score: event.target.value }))}
            value={student.score}
            placeholder="Enter score..."
          />
          {!isStudentValid.score && <p className="input-error">Score cannot be empty</p>}
        </div>

        <button
          className="btn btn-primary"
          onClick={addStudent}>
          Add Student
        </button>
      </form>
      <StudentList studentList={studentList} />

    </div>
  );
}

export default App;
