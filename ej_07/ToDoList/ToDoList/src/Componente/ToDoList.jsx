import "./ToDoList.css"
import { useState } from "react"

export const ToDoList = ({listaTareas}) => {

    // //Lista de tareas
    const [tareas, setTareas] = useState(listaTareas)

    // //texto para el input
    const [textoTarea, setTextoTarea] = useState('')

    //const agregarTarea = () => {

    // }

    // const completarTarea = () => {

    
    return (

        <>
        <h1>MY TO DO LIST</h1>
        <input type="text" placeholder="Nueva Tarea" value={textoTarea} onChange={(e) => {
            setTextoTarea(e.target.value())

        }}/>
        <button onClick={agregarTarea}>Agregar</button>

        <h3>Lista</h3>
        <ul>
            {
                listaTareas.map((tarea)=> {
                    <li key={tarea.id}>{tarea.tarea}</li>

                })
            }

        </ul>
        </>

    )
} 

export default ToDoList