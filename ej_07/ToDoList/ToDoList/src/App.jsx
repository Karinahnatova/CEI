import {ToDoList} from "./Componente/ToDoList.jsx"


const misTareas = [
  {id:1, tarea: "Ir al supermercado", isCompletado: true },
  {id:2, tarea: "Limpiar la casa", isCompletado: false },
  {id:3, tarea: "Estudiar", isCompletado: true },

]


function App() {

  return (
    <>
    <h2>MY TO DO LIST</h2>
    <ToDoList listaTareas = {misTareas}/>
      
    </>
  )
}

export default App
