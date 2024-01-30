//TDZ: Temporal dead zone
//esta activo en tdz
console.log(miVariable)
//esta activo en tdz
let miVariable="tom" //tdz termina y ya funciona correctamente, se recomienda usar let y const para las variables, no var

const miConstante="Juan"
miConstante="Lucas" //una constante nunca cambia

/*
Definición de funciones
*/

//1a forma:
function miFuncion(parametro1, parametro2) {
    return "miResultado"

}

miFuncion("atributo1", "atributo2")

//2a forma:
const miFuncionBiz = function (parametro1, parametro2) {
    return "miResultado"
}

const miFuncionFlecha = parametro  => "miResutado" //si recibe un parametro, se pueden quitar los parentesis
miFuncionFlecha("valor1")

miFuncion(valor1, valor2)


//Función de callback: mandarle una funcion como parametro de otra funcion

function sumar(val1, val2) {
    return val1+val2
}

sumar(25, 3) //NUMBER, es el argumento del parametro de la funcion sumar
sumar("hola","chau") //STRING, es el argumento del parametro de la funcion sumar
sumar(["juan","perez"]) //ARRAY del argumento del parametro de la funcion sumar
sumar({}) //OBJECT es el argumento del parametro de la funcion sumar

const miFuncion2 = () => {
    return "hola"
}
sumar(miFuncion2) //Funcion es el argumento, del parametro de fucnion sumar


const hacerClick = () => {
    alert("hicke click")
}
misNodos.addEventListener("click", hacerClick) //click es una palabra y hacerClick es una funcion ()

misNodos.addEventListener("click", valor => alert("hice click"))


/*
Metodos de un array
*/

{
    nombre: "juan"
    saludar: () => {alert("saludar a juan")}
}

const miLista = ["Pablo", "Fran", "Maria"]

//.forEach(): recorrer la lista de cada uno de los elementos  //no devuelve nada - devuelve UNDEFINED
//.push() 
//.map() //devuelve un array de elementos del return
//.filter() //array
//.some() //boolean
//.find() //elemento
//.findIndex() // indice del elemento que cumple la condicion
//.every() //booleano cuando todos los elementos cumplan la condicion
//.push() //añade 
//.length //

//TEMPLATE STRINGS: se llama asi poque lo podemos usar como plantilla

const nombre = "Leonel"
const apellido = "Messi"
const edad = 36

`Jugador ${nombre} ${apellido} tiene ${edad} años de edad`

//comilla doble ""
//comilla simple ''
//comilla francesa ``


