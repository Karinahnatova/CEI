import "./ToDoList.css"
import { useState } from "react"
import Confetti from 'react-confetti'

export const ToDoList = ({listaTareas}) => {


    // 1.USO DE HOOKS Y DECLARACION DE VARIABLES

//Lista de tareas
const [tareas, setTareas] = useState(listaTareas)

//texto para el input
const [textoTarea, setTextoTarea] = useState('')


    // 2.CREACION DE FUNCIONES

    const agregarTarea = () => {
        console.log("Agregando tarea")
        const nuevaTarea = textoTarea.trim() //quita espacios delante y detras del texto
        if(nuevaTarea) {
            //valor random entre 0 y 1000
            const random =  Math.floor(Math.random()*1000)
            const tareasModificable = [...tareas, {
                id: random,
                tarea: nuevaTarea,
                isCompletada: false
            }]
            setTareas(tareasModificable) //guardar datos
            setTextoTarea("") //reset del input

        }

    }

    const completarTarea = (id) => {
        console.log("Agregando tarea")
        //crear una copia de mis tareas porque la variable useState no de debe modificar directamente
        const tareasModificables = [...tareas]

        //obtener la tarea
        // const tarea = tareas.find((t)=> t.id == id)
        // console.log("tarea")

        //obtenemos el indice de la tarea
        const indice = tareasModificables.findIndex((t)=>t.id == id)
        console.log("indice es:", index)

        //hacer modificaciones
        //al agregar un ! al frente, invierte el valor del booleano
        tareasModificables[index].isCompletada = !tareasModificables[index].isCompletada
        setTareas(tareasModificables)

    }

    const quitarTarea = (id) => {
        console.log("Quitar tarea")
        const tareasModificables = tareas.filter(()=> t.id == id)
    }

    const Tarea = ({id, tarea, isCompletada}) =>(
            <li className="item">
                 <span onClick={()=>completarTarea(id)}>{id}. {tarea}</span>
                 <button onClick={()=>quitarTarea(id)}>X</button>
            </li>


        )

    //3. CREACION DE VISTAS

    
    return (

        <>
        <h1>MY TO DO LIST</h1>
        <input type="text" placeholder="Nueva Tarea" value={textoTarea} onChange={(e) => {
            setTextoTarea(e.target.value)
            //e: event

        }}/>
        <button onClick={agregarTarea}>Agregar</button>

        <h3>Lista tareas pendientes</h3>
        <ul>

            {
                //si no hay tareas pendientes, mostrar mensaje
                tareas.filter((t)=> t.isCompletada == false).length == 0 && (
                    
                    <>
                    NO HAY TAREAS PENDIENTES
                    <Confetti
                    numberOfPieces="1000"
                    recycle= {false}
                    
                    />

                    </>
                )
            }
            {
                tareas.map((tarea)=> {
                    if(!tarea.isCompleted)
                    return <Tarea key={tarea.id} {...tarea}/>

                })

            }
                    
            

        </ul>

        <h3>Lista tareas terminadas</h3>
        <ul>
            {
                tareas.map((tarea)=> (
                    
                    <Tarea key={tarea.id} {...tarea}/>

                ))
            }

        </ul>
        </>

    )
} 

export default ToDoList