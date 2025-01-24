export default function StudentForm(props)
{

    const studentData = props.currentStudent


    function handleNameChange(event)
    {
        props.onChangeName(event.target.value)
    }
    function handleCourseChange(event)
    {
        props.onChangeCourse(event.target.value)
    }

    function handleLocationChange(event)
    {
        props.onChangeLocation(event.target.value)
    }

    function handleEmailChange(event)
    {
        props.onChangeEmail(event.target.value)
    }
    return (
        <div className=" bg-[#37373750]  bg-cover inset-0 fixed bg-center backdrop-blur-md min-h-screen justify-center items-center flex">

            <div className="flex flex-col items-center justify-between  gap-4 bg-slate-100 p-3  rounded-md shadow-lg ">

                <h1 className="text-2xl border-b-2 w-full text-center p-2">Edit Student</h1>
                <div className="flex flex-col">
                    <img
                        src={studentData.img}
                        alt="Profile Picture"
                        className="size-32 rounded-full mb-4 object-cover self-center"
                    />


                    <label
                        className="flex justify-between pr-1 items-center gap-4 my-1"
                        htmlFor="">Picture Link:
                        <input
                            type="text"
                            value={studentData.img} />
                    </label>

                    <label
                        className="flex justify-between pr-1 items-center gap-4 my-1"
                        htmlFor="">Name:
                        <input
                            type="text"
                            value={studentData.name}
                            onChange={handleNameChange}
                        />
                    </label>

                    <label
                        className="flex justify-between pr-1 items-center gap-4 my-1"
                        htmlFor="">Program:
                        <input
                            type="text"
                            value={studentData.program}
                            onChange={handleCourseChange}
                        />
                    </label>

                    <label
                        className="flex justify-between pr-1 items-center gap-4 my-1"
                        htmlFor="">Address:
                        <input
                            type="text"
                            value={studentData.location}
                            onChange={handleLocationChange}
                        />
                    </label>

                    <label
                        className="flex justify-between pr-1 items-center gap-4 my-1"
                        htmlFor="">Email:
                        <input
                            type="text"
                            value={studentData.email}
                            onChange={handleEmailChange}
                        />
                    </label>
                </div>

                <div>
                    <button className="py-2 px-3 bg-sky-600 rounded-lg  mb-4 mx-3 text-white text-lg"
                        onClick={props.onSave}

                    >Save</button>
                    <button className="py-2 px-3 bg-rose-600 rounded-lg  mb-4 mx-3 text-white text-lg"
                        onClick={props.onCancel}

                    >Cancel</button>
                </div>

            </div>

        </div>
    )
}