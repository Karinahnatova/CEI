import { useState, useEffect } from "react";
import { easyFetch } from "../../helpers/utils.js"
import './index.css'

function Products() {

    const [products, setProducts] = useState([])

    useEffect(()=> {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
      try {
        const data = await easyFetch({
          url: "http://localhost:8080/API/v1/products",
        });
        setProducts(data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

   

    return (
      <div>
        <h1>Productos</h1>
        <div className="Products">
          {products &&
            products.map((product) => {
              return (
                <div className="Product-card" key={product.id}>
                  <h4>{product.nombre}</h4>
                  <div className="imagen"><img src="" alt="" /></div>
                  <p className="precio">{product.precio}€</p>
                  <button>ADD TO CART</button>
                  <span className="like">
                    <span class="material-symbols-outlined">favorite</span>
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    );

}

export default Products