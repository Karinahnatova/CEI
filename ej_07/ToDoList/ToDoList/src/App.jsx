// import { useState } from 'react'
import ToDoList from "../../../../ej_06/spread/src/ToDoList/ToDoList"

function App() {
  // const [count, setCount] = useState(0)

  const tareas = [
    {id:1, tarea: "Ir al supermercado", isCompletado: true },
    {id:2, tarea: "Limpiar la casa", isCompletado: false },
    {id:3, tarea: "Estudiar", isCompletado: true },

  ]

  return (
    <>
    <h2>Soy ToDoList</h2>
    <input type="text" name="" id="" />
    <ul>
      <ToDoList tareas = {tareas}/>
    </ul>
      
    </>
  )
}

export default App
