import MenuResponsive from "./components/menuresponsive/Menuresponsive"
import Tabs from "./components/menuresponsive/tabs/Tabs"
import Accordion from "./components/menuresponsive/accordion/Accordion"
import Lightbox from "./components/menuresponsive/ligthbox/Lightbox"
import Slider from "./components/slider/Slider"


function App() {
  const items = [
    {id:1, titulo:"Pregunta 1", contenido: "Contenido 1"},
    {id:2, titulo:"Pregunta 2", contenido: "Contenido 2"},
    {id:3, titulo:"Pregunta 3", contenido: "Contenido 3"}
  ]
  
  const slides = ["imagen1.png", "imagen2.png", "imagen3.png"]

  return (
    <>
    <MenuResponsive/>
    <Tabs/>
    <Accordion items={items}/>
    <Lightbox/>
    <Slider items={slides}/>
    </>
  )
}

export default App
