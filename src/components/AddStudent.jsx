import { useState } from "react"

export default function StudentForm(props)
{

    const setStudents = props.setStudents
    const [img,
        setImg] = useState("")
    const [name, setName] = useState("")
    const [program, setProgram] = useState("")
    const [location, setLocation] = useState("")
    const [email, setEmail] = useState("")

    function addStudent()
    {
        setStudents(function (prevStudents)
        {
            return [
                ...prevStudents,
                {
                    id: prevStudents.length + 1,
                    img: img,
                    name: name,
                    program: program,
                    location: location,
                    email: email,
                }
            ];
        });

        setImg("");
        setName("");
        setProgram("");
        setLocation("");
        setEmail("");

        props.onClickCancelAddStudent();
    }



    function handleLinkChange(event)
    {
        setImg(event.target.value)
    }
    function handleNameChange(event)
    {
        setName(event.target.value)
    }
    function handleProgramChange(event)
    {
        setProgram(event.target.value)
    }
    function handleLocationChange(event)
    {
        setLocation(event.target.value)
    }
    function handleEmailChange(event)
    {
        setEmail(event.target.value)
    }

    return (
        <div className=" bg-[#37373750]  bg-cover inset-0 fixed bg-center backdrop-blur-md min-h-screen justify-center items-center flex">

            <div className="flex flex-col items-center justify-between  gap-4 bg-slate-100 p-3  rounded-md shadow-lg ">

                <h1 className="text-2xl border-b-2 w-full text-center p-2">Add Student</h1>
                <div className="flex flex-col">
                    <label
                        className="flex justify-between pr-1 items-center gap-4 my-1"
                        htmlFor="">Picture Link:
                        <input
                            type="text"
                            onChange={handleLinkChange}
                        />
                    </label>

                    <label
                        className="flex justify-between pr-1 items-center gap-4 my-1"
                        htmlFor="">Name:
                        <input
                            type="text"
                            onChange={handleNameChange}
                        />
                    </label>

                    <label
                        className="flex justify-between pr-1 items-center gap-4 my-1"
                        htmlFor="">Program:
                        <input
                            type="text"
                            onChange={handleProgramChange}
                        />
                    </label>

                    <label
                        className="flex justify-between pr-1 items-center gap-4 my-1"
                        htmlFor="">Address:
                        <input
                            type="text"
                            onChange={handleLocationChange}
                        />
                    </label>

                    <label
                        className="flex justify-between pr-1 items-center gap-4 my-1"
                        htmlFor="">Email:
                        <input
                            type="text"
                            onChange={handleEmailChange}
                        />
                    </label>
                </div>

                <div>
                    <button className="py-2 px-3 bg-sky-600 rounded-lg  mb-4 mx-3 text-white text-lg"
                        onClick={addStudent}
                    >Add</button>
                    <button className="py-2 px-3 bg-rose-600 rounded-lg  mb-4 mx-3 text-white text-lg"
                        onClick={props.onClickCancelAddStudent}
                    >Cancel</button>
                </div>

            </div>

        </div>
    )
}