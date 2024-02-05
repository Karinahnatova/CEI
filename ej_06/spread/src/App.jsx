import { useEffect, useState } from 'react'


function App() {

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



  const Componente = () => {
    return (
      <>
      <h1>soy un componente</h1>
      <ul>
        <li>{props.prop1}</li>
        <li>{props.prop2}</li>
        <li>{props.prop3}</li>
        <li>{props.prop4}</li>
        

      </ul>
      </>
    )
  }
  const props = {
    prop1: "valor1",
    prop2: "valor2",
    prop3: "valor3",
    prop4: "valor4"

  }



  return (
    <>
      <h1>SPREADS</h1>
      <Componente {...props}/>
    </>
  )



  const productos = [
    {
     

    }
  ]
  return (
    <div>
      
      
    </div>
    
  )
}

export default App
