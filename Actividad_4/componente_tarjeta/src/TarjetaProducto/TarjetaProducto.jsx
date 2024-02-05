import "./TarjetaProducto.css";

const TarjetaProducto = ({ nombre, precio, stock, img, children }) => {
  return (
    <div className="box_productos">
      <h1>FRUTAS</h1>
      <img src={img}></img>
      <ul>
        <li><span className="bold">Producto:</span> {nombre}</li>
        <li><span className="bold">Precio:</span> {precio}</li>
        <li><span className="bold">Stock:</span> {stock}</li>
      </ul>
      <span className="children">{children}</span>
      {stock > 0 ? <button className="boton_comprar">Comprar {nombre}</button> : <button className="sin_stock">SIN STOCK</button>}

      
    </div>
  );
};

export default TarjetaProducto;
