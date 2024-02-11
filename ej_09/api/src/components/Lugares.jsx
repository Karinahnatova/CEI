import { useEffect, useState } from "react"
import './Lugares.css'

const PageButtons = (props) => {

    return(
      <header className="header_botones">
        <p className="numeracion_pag">página: <span>{props.pagina}</span></p>
        <button className="boton_atrás" onClick={()=> props.setPagina(props.pagina - 1)}>página {props.pagina - 1}</button>
        <button className="boton_siguiente" onClick={()=> props.setPagina(props.pagina + 1)}>página {props.pagina + 1}</button>
      </header>
    )
  
  }

export const Lugares =  () => {
    const [lugares, setLugares] = useState([])
    const [pagina, setPagina] = useState(1)

    useEffect(()=> {
        fetchLugares()
    }, [pagina])




    const fetchLugares = async () => {
        try {
          const response = await fetch("https://rickandmortyapi.com/api/location?page=" + pagina)
          const data = await response.json()
          setLugares(data.results)
        }catch (e){
            console.log("ERROR", e)
        }
    }
    
    
    return(
        <>
        <PageButtons pagina={pagina} setPagina={setPagina}/>
        <h1 className="titulo_h1">Lugares</h1>
        <div className="lugares_box">
        {lugares.map((lugar)=>{
            return(
            <div key={lugar.id}>
                <h2>{lugar.name}</h2>
                <ul>
                    <li><span>Type:</span> {lugar.type}</li>
                    <li><span>Dimension:</span> {lugar.dimension}</li>
                    {/* <li>Residents: {lugar.residents}</li> */}
                    <li><span>Url:</span> {lugar.url}</li>
                    <li><span>Created:</span> {lugar.created}</li>
                </ul>
            </div>
            )
           

        })}
        </div>
        <PageButtons pagina={pagina} setPagina={setPagina}/>
        </>
     
    
    )
}