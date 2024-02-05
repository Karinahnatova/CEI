import "./ListaProductos.css";

const ListaProductos = ({
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
}) => {
  return (
    <div className="lista_productos">
      <h1>MI LISTA DE PRODUCTOS</h1>
      <ul>
        <li><span>Producto:</span> {producto1}</li>
        <li><span>Producto:</span> {producto2}</li>
        <li><span>Producto:</span> {producto3}</li>
        <li><span>Producto:</span> {producto4}</li>
        <li><span>Producto:</span> {producto5}</li>
      </ul>
    </div>
  );
};

export default ListaProductos;
