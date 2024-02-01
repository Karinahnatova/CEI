import "./TarjetaProducto.css"

const TarjetaProducto = ({nombre, imagen, precio, stock}) => {


    return (

        <div className="box_productos">
            <h1>TARJETA DE PRODUCTOS</h1>
            <ul>
                <li>Producto: {nombre}</li>
                <li>{imagen}</li>
                <li>Precio: {precio}</li>
                <li>Stock: {stock}</li>
            </ul>

        </div>
        

    )
}

export default TarjetaProducto