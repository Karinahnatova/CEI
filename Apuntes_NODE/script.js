console.log("Bienvenidos a mi primer nodejs")
const nombre = "Karina"
console.log(nombre)

//No tenemos acceso al WebAPI: DOM
//No podemos ejecutar codigo como:
//element.addEventListener("click", ()=>{})

//NPM, PNPM, BUN: para instalar paquetes: ej: npm i (install) bootstrap

//mkdir nombre: crear carpeta
//cd nombrecarpeta - entrar a una carpeta
//cd .. salir de una carpeta

//clear: limpiar
//control c: copiar un proceso
//NPM INIT: crear json

//npm create vite: vite es un paquete ç

//https://tomascei.github.io/manual-md-fullstack/
//https://github.com/tomasCEI/manual-md-fullstack





// Para crear un proyecto de 0, utilizamos los siguientes pasos:

// Iniciar el proyecto con npm init -y
// Instalamos dependencias como por ejemplo nodemon: npm i nodemon -D
// Definir los scripts "build":"node index" y "dev":"nodemon index" en el package.json
// Escribir nuestro código en index.js
// Ejecutar el proyecto en modo desarrollo con npm run dev
// Para de ejecutar el proyecto en modo desarrollo con Ctrl + C




//VITE
//npm create vite@latest, react, javascript



//EXPRESS
//npm init
//npm i
//nom i express
//npm i nodemon
//npm i nodemon -D
//npm I UUID -D
//npm i cors

//EXPRESS es un servidor web que complementa a node



//npm i sqlite3
//npm i sequelize: nos permite escriir más facil las consultas de db


//data base extensions: 
//xampp: extensión para base de datos
//sqlite
//thunderclient

//SQL2
//npm i mysql2

//splash web de fotos gratis
//bing copilot: ai

//app eraser: https://app.eraser.io/workspace/jZz7uowLc4l5fG2f4hsU
//https://app.eraser.io/workspace/Ab057Gr4HTl2lEdwlPLm

//iloveimg
//tinypng

//subir las imagenes a assets, siempre comprimidas, se usa la etiqueta picture, no img

//no subir las variables de entorno de .env en github, subirlo con gitignore e incluilas en un pdf



//mpm init, cambiar tupe, script, npm i cors, express module, npm i nodemon -D


//--------------❤️-----------EXPRESIONES REGUALERS REGEX--------------❤️-----------------------

//En vez de usar "" las regex usan // : /ejemplo/
//const regex1 = /juan/
//const texto = "Mi nombre es Juan"

//Flags: 
//const regex1 = /juan/g   : obtiene todos los resutados (global)
//const regex1 = /juan/i   : no diferencia las mayusculas de minusculas (case intensive)
//const regex1 = /juan/m   : es para buscar multiples lineas (multiline)
//const regex1 = /juan/gim : son combinables
//(se pueden poner en cualquier orden)

//Metacaracteres $, ^, /w, /s
//const regex6  = /^juan/gm       : busca mi string al principio de cada linea 
//const regex7  = /juan$/gm       : busca mi string al final de cada linea
//const regex8  = /ju.an/gm       : ju seguido de cualquier caracter seguido de "n"
//const regex9  = /\w/gm          : devuelve cualquier caracter alfanumerico (letras y numeros)
//const regex10 = /\w{3, 5}/gm    : buscar todas las cadenas alfanumericas de todos los caracteres, si ponemos 3, busca cualquier palabra que tenga 3, si ponemos 3,5 busca entre 3 y 5, si ponemos 3, espacio, buca entre 3 e infinito
//const regex11  = /\s/gm         : busca cualquier caracter de espacios en blanco
//tanto \s como \w tienen sus inversos en mayúsculas 

//Agrupación []
//const regex13 = /[aeiou]rbol/gm  : buscar palabras como arbol, erbol, irbol, orbol, urbol
//const regex14 = /[a-z]rbol/gm    :agrupo rango de letras de la "a" a la "z"
//const regex 14 = /[a-zA-Z0-9]/gm :combino distintos rangos a-z, A-Z, 0-9

//const encontrados = texto.match(regex3)
//console.log(encontrados)
//app.get("/buscandousuario", asycn (req, res, next)=> {
    // const (search) = req.body
    // const regex = /`${search}`/ig
    // const usuarios = await Alumno.find(name: {$regex: regex})
    // res.json( usuarios )

//})











