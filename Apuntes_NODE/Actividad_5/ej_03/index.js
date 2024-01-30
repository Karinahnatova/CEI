console.clear()
console.log("🥰Ejercicio_03") //control command space: emojis mac

// ej03: Crea una función llamada "FelizCumple" que tome un objeto de alumno, deconstruya sus propiedades para obtener nombre y edad, incremente la edad en uno, imprima un mensaje de cumpleaños y devuelva un array con la nueva edad y un mensaje de "datos guardados".

let Alumno = {
    nombre: "Karina",
    edad: 19,
}

let felizCumple = (Alumno) => {
    let {nombre, edad} = Alumno
    let unAnyoMas = edad + 1
    console.log(`Feliz cumple ${nombre} ahora tienes ${unAnyoMas}`)
    return([unAnyoMas, "datos guardados"])
    

}
console.log(felizCumple(Alumno))

let[edad, msg] = felizCumple(Alumno)
console.log(msg, "y la edad es: ", edad)



// ej04: Deconstrucción de Array: Crea una función que tome un objeto de película, deconstruya sus propiedades para obtener titulo y director, y devuelva un array con estos dos valores.

let pelicula = {
    titulo: "Batman",
    director: "Christopher Nolan"

}

let unaPelicula = (pelicula) => {
    let {titulo, director} = pelicula
    let arraryPelicula = [titulo, director]
    return (arraryPelicula)
    
}
console.log(unaPelicula(pelicula))

// ej05: Deconstrucción de Datos del Clima: Crea una función que tome un objeto de datos de clima, deconstruya sus propiedades para obtener temperatura y humedad, y devuelva un array con estos dos valores.

let datosClima = {
    temperatura: "12 grados",
    humedad: "70% humedad"
}

let tiempo = (datosClima) => {
    const {temperatura, humedad} = datosClima
    let arrayTiempo = [temperatura, humedad]
    return(arrayTiempo)

}
console.log(tiempo(datosClima))

// ej06: Deconstrucción de vectores: Crea una función llamada vectorAObjeto que tome un vector como argumento. Este vector contendrá información sobre una persona en el siguiente formato: persona = ["Juan", "Pérez", 30];
// // Debe mostrar { nombre: "Juan", apellido: "Pérez", edad: 30 }

const persona = ["Juan", "Perez", 30]


let vectorAObjeto = (persona) => {
    let [nombre, apellidos, edad] = persona
    objetoPersona = {
        nombre: nombre,
        apellidos: apellidos,
        edad: edad
    }
    return(objetoPersona)
    
}
console.log(vectorAObjeto(persona))