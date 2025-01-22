
import Card from "./components/Card.jsx"


export default function App()
{
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
      {/*       <main className="grid grid-cols-3 min-h-screen justify-center items-center grid-flow-dense auto-rows-auto m-auto w-[80%]"> */}


      <main className="grid grid-cols-3 gap-4 min-h-screen w-[80%] mx-auto auto-rows-fr">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>


    </>
  )
}