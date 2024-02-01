import "./Componente1.css"


export const Componente1 = (props) => {

    console.log(props)
    // const nombre = "Maria"
    
    const{nombre} = props

    return (
        <div className="componente1">
        <h2>Soy un Componente</h2>
        <p>Hola, me llamo {nombre}</p>
        </div>
    )

}

export default Componente1