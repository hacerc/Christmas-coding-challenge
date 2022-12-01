import React, { useState } from "react";
import StudentCard from "../student-card/StudentCard";

const StudentList = ({ studentList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudentList, setFilteredStudentList] = useState([]);
  const search = (event) => {
    if (event.target.value) {
      setSearchTerm(event.target.value);
      const students = studentList.filter((student) =>
        Object.values(student).some((val) =>
          val.toLowerCase().includes(searchTerm.trim().toLowerCase())
        )
      );
      setFilteredStudentList(students);
    } else {
      setSearchTerm("");
    }
  };
  return (
    <div>
      <div className="searching">
        <input type={"search"} onChange={search} />
      </div>
      <div className="student-container">
        {searchTerm
          ? filteredStudentList.map((student, index) => (
              <StudentCard student={student} key={index} />
            ))
          : studentList.map((student, index) => (
              <StudentCard student={student} key={index} />
            ))}
      </div>
    </div>
  );
};

export default StudentList;
