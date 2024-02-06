import { useEffect, useState } from 'react'
// import ListaProductos from "./ListaProductos/LsitaProductos.jsx"


function App() {
 //const [count, setCount] = useState(0)
 //mi varibale es la varibale 
 //setMiVariable es una funcion que va a actualizar la variable
  const [miVariable, setMiVariable] = useState(24) //le envio el valor defecto
  const [contador, setContador] = useState(["lechuga", "papa"])

  const usersData = [
    {id:1, nombre: "Julia", isAdmin: true, edad:29, deporte: "tenis"},
    {id:2, nombre: "Julia", isAdmin: false, edad:29},
    {id:3, nombre: "Julia", isAdmin: true, edad:29},
    {id:4, nombre: "Julia", isAdmin: true, edad:29},
    {id:5, nombre: "Julia", isAdmin: true, edad:29}

  ]

  const [usuarios, setUsuarios] = useState(usersData) 
  



  useEffect( () => {
    
    //uso de spread (...)
    const user = {
      nombre: "Laura",
      edad: 25,
      hobbies: ["futbol", "tenis"],
      domicilio: {
        ciudad: "Valencia",
        cp: 26009
      }


    } 

    //me crea una shallow cpy de mi objeto user
    const userCopy = {...user}
    userCopy.edad = 33
    userCopy.hobbies = ["futbol", "programar"]
    userCopy.domicilio.ciudad = "Madrid"

    console.log("user es:", user)
    console.log("user copy es:", userCopy)

    //---------------------------------------------

    const semana = ["lunes", "martes", "miercoles"]
    const semanaCopy = [...semana, "jueves", "viernes"]

    const semanaCopy2 = ["sabado", "domingo", ...semanaCopy]

   
    console.log("semanaCopy es:", semana)
    console.log("semanaCopy es:", semanaCopy)
    console.log("semanaCopy es:", semanaCopy2)

    //de referencias: funciones, objetos, arrays

    function mostrarVerduras (verdura1, verdura2) {
      console.log(verdura1, verdura2) //"lechuga", "zanahoria"
    }

    mostrarVerduras("Lechuga", "zanahorias")

    function mostrarVerdurasSpread (...datos) {
      console.log(datos) //"lechuga", "zanahoria"
    }

    mostrarVerdurasSpread("Lechuga", "zanahorias", "pepino")


  }, [])

  //primitivos: strings, number, boolean, null, undefined
  //de referencias: funciones, objetos, arrays
  //spread: cuando tenemos un objeto, agarra y hace una copia de todas las propiedades



  // const Componente = () => {
  //   return (
  //     <>
  //     <h1>soy un componente</h1>
  //     <ul>
  //       <li>{props.prop1}</li>
  //       <li>{props.prop2}</li>
  //       <li>{props.prop3}</li>
  //       <li>{props.prop4}</li>
        

  //     </ul>
  //     </>
  //   )
  // }
  // const props = {
  //   prop1: "valor1",
  //   prop2: "valor2",
  //   prop3: "valor3",
  //   prop4: "valor4"

  // }



  // return (
  //   <>
  //     <h1>SPREADS</h1>
  //     <Componente {...props}/>
  //   </>
  // )

 //ACTIVIDAD SPPREAD

  // const usuarios = [
  //   {id:1, nombre: "Julia", isAdmin: true, edad:29, deporte: "tenis"},
  //   {id:2, nombre: "Julia", isAdmin: false, edad:29},
  //   {id:3, nombre: "Julia", isAdmin: true, edad:29},
  //   {id:4, nombre: "Julia", isAdmin: true, edad:29},
  //   {id:5, nombre: "Julia", isAdmin: true, edad:29}

  // ]

  // const Usuario = ({nombre, isAdmin, edad, deporte="no tiene"}) => {
  //   return(
  //   <>
  //     <li>
  //     valor de mi variable: {miVariable} <br />
  //     nombre: {nombre} <br />
  //     edad: {edad} <br />
  //     {isAdmin && <strong>SOY ADMIN</strong>} <br />
  //     deporte favorito: {deporte}
  //     </li>
  //   </>
  //   )
  // }
  
  
  // return (
  //   <div>
  //     <button onClick={()=> {  usersData.push({id:6, nombre: "Alina", isAdmin: false, edad:2})
  //       // let miArray = usuarios
  //       // miArray.push({id:6, nombre: "Alina", isAdmin: false, edad:2})
  //       const random = Math.random()
  //       setUsuarios([...usuarios, {id:random, nombre: "Alina", isAdmin: false, edad:2}])

  //     }}>Click me</button>
  //     <ul>
  //     {usuarios.map((user)=> (
  //       <Usuario key= {user.id} {...user}/>

  //     ))}
  //     </ul>
  //   </div>
    
  // )

  const ToDoList = ({deber}) => {
    return (
      <>
      <li><input type="checkbox" name="deber" id="deber" />{deber}</li>
      </>
    )

  } 

  const deberes = [
    {id:1, deber: "Ir al supermercado"},
    {id:2, deber: "Sacar al perro"},
    {id:3, deber: "Estudiar"},
    {id:4, deber: "Hacer la cena"},
    {id:5, deber: "Limpiar la casa"},

  ]

  return (
    <div>
      <ul>
      
      </ul>
    </div>
  )
}

export default App
