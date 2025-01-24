
import Card from "./components/Card.jsx"

import studentData from "./components/studentData.js"
import StudentForm from "./components/StudentForm.jsx"
import AddStudent from "./components/AddStudent.jsx"

import { useState } from "react"


export default function App()
{


  const [students, setStudents] = useState(studentData)
  const [currentSelectedStudentObj, setCurrentSelectedStudentObj] = useState(null)
  const [showAddFormPanel, setShowFormPanel] = useState(true)

  function editStudent(id)
  {
    const selectedStudent = students.find(function (emp) { return emp.id === id })

    console.log(selectedStudent)
    setCurrentSelectedStudentObj(selectedStudent)
  }

  function deleteStudent(id)
  {
    setStudents(function (prevStudents)
    {
      return prevStudents.filter(function (student)
      {
        return student.id !== id
      })
    })
  }

  function saveStudent()
  {
    setStudents(function (prevStudents)
    {
      return prevStudents.map(function (student)
      {
        return student.id === currentSelectedStudentObj.id
          ? currentSelectedStudentObj
          : student;
      });
    });
    setCurrentSelectedStudentObj(null);
  }


  function handleNameChange(event)
  {
    setCurrentSelectedStudentObj(function (prevStudents)
    {
      return { ...prevStudents, name: event }
    })
  }
  function handleCourseChange(event)
  {
    setCurrentSelectedStudentObj(function (prevStudents)
    {
      return { ...prevStudents, program: event }
    })
  }
  function handleLocationChange(event)
  {
    setCurrentSelectedStudentObj(function (prevStudents)
    {
      return { ...prevStudents, location: event }
    })
  }

  function onChangeEmail(event)
  {
    setCurrentSelectedStudentObj(function (prevStudents)
    {
      return { ...prevStudents, email: event }
    })
  }

  return (

    <>
      <header className="p-6  flex flex-row items-center justify-between border-b-2 shadow-sm">
        <h1 className="font-bold text-xl">Student Manager</h1>
        <input
          type="text"
          placeholder="Search Student"
          className="bg-white"

        />
      </header>

      <button className="px-3 py-2 bg-green-500 text-white fixed bottom-20 right-20 rounded-lg shadow-lg text-lg"
        onClick={function () { setShowFormPanel(true) }}
      >Add Students</button>

      {currentSelectedStudentObj && <StudentForm
        onCancel={function ()
        {
          setCurrentSelectedStudentObj(null);
        }}
        currentStudent={currentSelectedStudentObj}
        onSave={saveStudent}
        onChangeName={handleNameChange}
        onChangeCourse={handleCourseChange}
        onChangeLocation={handleLocationChange}
        onChangeEmail={onChangeEmail}
      />}

      {showAddFormPanel && <AddStudent
        setStudents={setStudents}
        onClickCancelAddStudent={function () { setShowFormPanel(false) }}


      />}



      <main className="grid grid-cols-3 gap-4 min-h-screen w-[80%] mx-auto auto-rows-fr">


        {students.map(function (data)
        {
          return (
            <Card
              key={data.id}
              img={data.img}
              name={data.name}
              program={data.program}
              location={data.location}
              email={data.email}

              onEdit={function () { editStudent(data.id) }}
              onDelete={function () { deleteStudent(data.id) }}
            />
          )
        })}

      </main>


    </>
  )
}