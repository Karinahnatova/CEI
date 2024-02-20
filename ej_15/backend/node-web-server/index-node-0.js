

//import desde CommonJS
// const cowsay = require("cowsay")
// console.log(cowsay.say({text: "Mooo"}))
// console.log("Hola")


const http = require("http");

const server = http.createServer( (req, res)=> {
    //res.end("Hola desde mi servidor web");
    //res.end(cowsay.say({text:"Hola mundo"}))

    res.write("<html>")
    res.write("<head><title>MI TITULO</title></head>")
    res.write("<body><h1>hola desde mi servidor</h1></body>")
    res.write("</html>")
    res.end()

});

server.listen(8080, ()=> {
    console.log("Server corriendo en puerto 8080")
})

//control c: para cerrar el servidot
//node index.js: para iniciar el servidor
