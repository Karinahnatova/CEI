

//import desde CommonJS
// const cowsay = require("cowsay")
// console.log(cowsay.say({text: "Mooo"}))
// console.log("Hola")


const http = require("http");

const server = http.createServer( (req, res)=> {
    //res.end("Hola desde mi servidor web");
    //res.end(cowsay.say({text:"Hola mundo"}))
    res.statusCode=200;
    //le indico al cliente que voy a responder con HTML
    res.setHeader("Content-Type", "Text/html")

    let isRoute= false

    console.log(req.url)
     
    res.write("<html>")

    if(req.url == "/") {
        isRoute=true
        res.write("<head><title>MI TITULO</title></head>")
        res.write("<body><h1>hola desde mi servidor</h1></body>")
        // res.write("</html>")
        // res.end()
    }

    if(req.url == "/perfil") {
        isRoute=true
        res.write("<head><title>MI TITULO</title></head>")
        res.write("<body><h1>hola desde mi perfil</h1></body>")
        // res.write("</html>")
        // res.end()
    }

    if(!isRoute) {
        res.write("<head><title>pAGINA NO ENCONTRADA</title></head>")
        res.write("<body><h1>Error404</h1></body>")
        // res.write("</html>")
        // res.end()

    }

    

});

server.listen(8080, ()=> {
    console.log("Server corriendo en puerto 8080")
})

//control c: para cerrar el servidot
//node index.js: para iniciar el servidor