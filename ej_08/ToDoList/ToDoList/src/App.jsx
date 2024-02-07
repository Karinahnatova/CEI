import { useEffect, useState } from "react"
import ToDoList from "./componente/todolist/ToDoList"





// const misTareas = [
//   {id:1, tarea: "Ir al supermercado", isCompletada: true },
//   {id:2, tarea: "Limpiar la casa", isCompletada: false },
//   {id:3, tarea: "Estudiar", isCompletada: true },

// ]


function App() {
//1.Crear hooks y variables

// const [cont, setCont] = useState(0)

//estamos trayendo info de db
const [isLoading, setIsLoading] = useState(true)

const [data, setData] = useState([])


//Hook useEffect trabaja cn los estados de mi app
//1.cuando se crea el componente
//2.cuando se re-renderiza el componente
const fetchData = async ()=> {
  const response = await fetch("./public/api/datos.json")
  const jsonData = await response.json()

  // console.log(jsonData)
  setData(jsonData)
  setIsLoading(false)


}
//3.cuand se elimina el componente

//componentDidMount()
useEffect(()=> {
  console.log("Cargue mi componente App.jsx")
  // console.log(cont)
  //set timeout es una funcion que demora la ejecucion de tiempo
  //parametro 1; la funcion
  //parametro 2: el teimpo
  //ej: setTimeout (func, tiempo)
  
  setTimeout (()=> {
    fetchData()
    console.log("Retardo")
    setIsLoading(false)
  }, 2000)
  
},  [] )//se ejecutara cuando cargue el componente por primer vez

//ComponentDidUpdate() Cont
// useEffect(()=> {
//   console.log("Cargue mi componente App.jsx")
//   console.log(cont)
// },  [cont] )

  return (
    <>
    <ToDoList listaTareas = {misTareas}/>
    <button onClick={()=> {cont+1}}>ACTUALIZAR</button>
    { isLoading 
    ? <p>Cargando datos...</p>
    : <ToDoList listaTareas={data}/> }
      
    </>

  )
}

export default App