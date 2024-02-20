export const timeLog = (req, res, next)=>{
    console.log("guardar timestamp en base de datos")
    console.log("Time:", Date.now())
    next()
}