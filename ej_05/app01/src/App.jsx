import Componente1 from "./components/componentes/Component1";
import Article from "./components/article/article";
import Menu from "./components/menu/menu";
import Mascota from "./components/Mascotas/mascotas";

function App() {

  
  return (
    <>
      <Menu items={["Inicio", "Contacto", "Productos"]} />

      <Mascota />

      <h1>Hola</h1>
      <Componente1 nombre="Maria"></Componente1>

      <Article title="Titulo de mi articulo">Hola soy children</Article>
    </>
  );
}

export default App;
