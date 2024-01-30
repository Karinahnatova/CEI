console.clear()
console.log("Ejercicio_01")


// let mostrarDatos = (nombre, edad) => {
//     return (`Hola, me llamo ${nombre} y tengo ${edad}`) //return no imprime nada
    
// }

// let nombre = "Maria"
// let edad = 25

//const texto = mostrarDatos(nombre, edad)
//console.log (texto)
// console.log(mostrarDatos(nombre, edad))
// console.log(mostrarDatos("Juan", 25))

//console.log(`Hola, me llamo ${nombre} y tengo ${edad}`)



//construir un array

let dasDeLaSemana = ["Lunes", "Martes", "Miercoles", "..."]

//deconstruir el array

// let dia1 = dasDeLaSemana[0]
// let dia2 = dasDeLaSemana[1]
// let dia3 = dasDeLaSemana[2]

//deconstruir un array manera correcta
let [dia1, dia2, dia3, dia4] = dasDeLaSemana

console.log("Los dias son: ", dia1, dia2, dia3)

let Alumno = {
    nombre: "Juan",
    edad: 19,
    hobbie: ["hobbie1", "hobbie2"]
}

//deconstruir un objeto
let{nombre, edad} = Alumno

console.log("Mi nombre es: ", nombre)
console.log("Tengo", edad, "años")



