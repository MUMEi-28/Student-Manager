export default function Card(props)
{
    return (
        <section className="flex flex-col  justify-center h-auto w-[20rem] bg-slate-50 rounded-md shadow-md gap-2">
            <div className="flex flex-col items-center justify-center gap-2 shadow-md p-3">
                <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Profile Picture"
                    className="size-56 object-cover rounded-[30%]"
                />
                <h1 className="text-2xl">Name</h1>
                <p className="text-lg bg-sky-600 text-white py-2 px-3 rounded-lg">Program and Year Level</p>
            </div>
            <div className="flex flex-col items-start  gap-2 p-3 ">
                <p className="text-lg">Student Number</p>
                <p>Location</p>
                <p>Email</p>
            </div>
            <div>
                <button className="py-2 px-3 bg-sky-600 rounded-lg  mb-4 mx-3 text-white text-lg">Edit</button>

                <button className="py-2 px-3 bg-rose-600 rounded-lg  mb-4 mx-3 text-white text-lg">Delete</button>
            </div>
        </section>
    )
}