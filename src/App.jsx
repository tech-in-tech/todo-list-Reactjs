import Navbar from "./Components/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <div className="container mx-auto my-5 bg-violet-100 rounded-xl min-h-[80vh] p-5">
      <div className="addTodo">
        <h2 className="text-lg font-bold">Add a Todo</h2>
        <input type="text" name="" id="" />
        <button className="bg-violet-800 hover:bg-violet-950 text-white font-bold py-2 px-4  border rounded-xl mx-3 cursor-pointer transition-all">Save</button>
      </div>
      <h2 className="text-lg font-bold">Your Todos</h2>
      <div className="todos">
        <div className="todo flex">
          <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          <div className="buttons">
            <button className="bg-violet-800 hover:bg-violet-950 text-white font-bold py-2 px-4  border rounded-xl mx-1 cursor-pointer transition-all">Edit</button>
            <button className="bg-violet-800 hover:bg-violet-950 text-white font-bold py-2 px-4  border rounded-xl mx-1 cursor-pointer transition-all">Delete</button>
          </div>
        </div>
      </div>
      </div>
      
    </>
    
  )
}

export default App
