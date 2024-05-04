import { useState } from "react"
import Navbar from "./Components/Navbar"
import { v4 as uuidv4 } from "uuid"


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])



  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo);
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)

  }

  const handleDelete = (e, id) => {

    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
  }


  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    console.log(todos)
  }


  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
  }




  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 bg-violet-100 rounded-xl min-h-[80vh] p-5">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className="w-80" />
          <button onClick={handleAdd} className="bg-violet-800 hover:bg-violet-950 text-white font-bold py-2 px-4  border rounded-xl mx-3 cursor-pointer transition-all">Save</button>
        </div>
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div>No todos to display</div>}
          {todos.map(item => {

            return <div key={item.id} my-3 className="todo flex w-1/2 justify-between" >
              <div className="flex gap-5">
                <input name={item.id} onChange={handleCheckbox} type="checkbox" value={todo.isCompleted} />
                <div className={item.isCompleted ? "line-through" : ""} >{item.todo}</div>
              </div>
              <div className="buttons">
                <button onClick={(e) => handleEdit(e, item.id)} className="bg-violet-800 hover:bg-violet-950 text-white font-bold py-2 px-4  border rounded-xl mx-1 cursor-pointer transition-all">Edit</button>
                <button onClick={(e) => handleDelete(e, item.id)} className="bg-violet-800 hover:bg-violet-950 text-white font-bold py-2 px-4  border rounded-xl mx-1 cursor-pointer transition-all">Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>

    </>

  )
}

export default App
