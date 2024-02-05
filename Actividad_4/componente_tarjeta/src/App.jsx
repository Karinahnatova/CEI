import TarjetaProducto from "./TarjetaProducto/TarjetaProducto.jsx";

function App() {
  let fruits = [
    {
      id: "fresa",
      nombre: "Fresa Alemana",
      precio: "5€/kg",
      stock: 0,
      img: "https://static.vecteezy.com/system/resources/previews/024/596/055/non_2x/strawberry-strawberry-with-transparent-background-transparent-strawberry-ai-generated-free-png.png",
      info: "Fresa importada de Alemania, muy dulce y sabrosa, por solo 5€ el kg",
    },
    {
      id: "manzana",
      nombre: "Manzana Colombiana",
      precio: "2€/kg",
      stock: 1,
      img: "https://img.freepik.com/vector-gratis/composicion-frutas-realistas-imagenes-manzanas-enteras-rodajas-ilustracion-vector-fondo-blanco_1284-66032.jpg?w=740&t=st=1706885389~exp=1706885989~hmac=d2a93bffa3a5a668e6dcca66bf2062f8fe38ffb90c21a46dde3065c8ef4db16d",
      info: "Manzana importada de Colombia, muy dulce y sabrosa, por solo 2€ el kg",
    },
    {
      id: "banana",
      nombre: "Banana Africana",
      precio: "2,40€/kg",
      stock: 0,
      img: "https://img.freepik.com/vector-gratis/racimo-platano-amarillo-maduro-vector-aislado-sobre-fondo-blanco_1284-45456.jpg?w=826&t=st=1706885427~exp=1706886027~hmac=b4e9f02f44ed97cdb9f72e88d8e986a0f93d1ec69e0d41fcd646a137ca04825d",
      info: "Banana importada de Africa, de la mejor calidad, por solo 2,40€ el kg",
    },
    {
      id: "mora",
      nombre: "Mora",
      precio: "6€/kg",
      stock: 12,
      img: "https://img.freepik.com/foto-gratis/moras-maduras-levitan-sobre-fondo-blanco_485709-77.jpg?w=740&t=st=1706885564~exp=1706886164~hmac=45ecc1f3beb8dd6fd8d7ed8edef701ad02858d0f8a6a059585622361701ae544",
      info: "Moras de la huerta Valenciana, muy sabrosas y deliciosas, por solo 6€ el kg",
    },
    {
      id: "frambuesa",
      nombre: "Frambuesa",
      precio: "5,80€/kg",
      stock: 12,
      img: "https://img.freepik.com/foto-gratis/primer-plano-deliciosas-frambuesas-sobre-fondo-blanco_1149-782.jpg?w=826&t=st=1706885591~exp=1706886191~hmac=0b42f1d69590ca9e61552f59f4a33b31b63c406ec98ecbdc397c98f356964ba9",
      info: "Frambuesas de la huerta Valenciana, muy sabrosas y deliciosas, por solo 5,80€ el kg",
    },
  ];

  return (
    <div className="contenedorFlex">
      {fruits.map((fruit) => (
        <TarjetaProducto
          key={fruit.id}
          nombre={fruit.nombre}
          precio={fruit.precio}
          stock={fruit.stock}
          img={fruit.img}
        >
        {fruit.info}
        </TarjetaProducto>
      ))}
    </div>
  );
}

export default App;
