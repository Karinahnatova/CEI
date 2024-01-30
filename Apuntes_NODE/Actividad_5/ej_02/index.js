console.clear()
console.log("Ejemplo_02")

let Alumno = {
    nombre: "Dolores",
    edad: 39
}

let mostrarDatos = (Alumno) => {
    let {nombre, edad} = Alumno //deconstruccion del objeto
    return (`Mi nombre es ${nombre} y tengo ${edad} años`)

}

let mostrarDatos2 = ({nombre, edad}) => {
    return (`Mi nombre es ${nombre} y mi edad ${edad}`)
}

console.log(mostrarDatos(Alumno))
console.log(mostrarDatos2(Alumno))






