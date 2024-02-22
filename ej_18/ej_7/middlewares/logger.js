export const timelog = (req, res, next) => {
    console.log("Guardar timestamp en basde de datos");
    console.log("Time: ", Date.now);
    next();
};