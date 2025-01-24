export default function Card(props)
{
    return (
        <section className="flex flex-col  justify-center h-[35rem] w-[20rem] bg-slate-50 rounded-md shadow-md gap-2">
            <div className="flex flex-col items-center justify-center gap-2 shadow-md p-3">
                <img
                    src={props.img}
                    alt="Profile Picture"
                    className="size-56 object-cover rounded-[30%]"
                />
                <h1 className="text-2xl">{props.name}</h1>
                <p className="text-lg bg-sky-600 text-white py-2 px-3 rounded-lg">{props.program}</p>
            </div>
            <div className="flex flex-col items-start  gap-2 p-3 ">
                <p>{props.location}</p>
                <p>{props.email}</p>
            </div>
            <div>
                <button className="py-2 px-3 bg-sky-600 rounded-lg  mb-4 mx-3 text-white text-lg"
                    onClick={props.onEdit}
                >Edit</button>

                <button className="py-2 px-3 bg-rose-600 rounded-lg  mb-4 mx-3 text-white text-lg"
                    onClick={props.onDelete}
                >Delete</button>
            </div>
        </section>
    )
}