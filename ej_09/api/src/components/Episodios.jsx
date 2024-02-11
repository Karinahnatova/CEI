import { useEffect, useState } from "react"
import './Episodios.css'

const PageButtons = (props) => {

    return(
      <header className="header_botones">
        <p className="numeracion_pag">página: <span>{props.pagina}</span></p>
        <button className="boton_atrás" onClick={()=> props.setPagina(props.pagina - 1)}>página {props.pagina - 1}</button>
        <button className="boton_siguiente" onClick={()=> props.setPagina(props.pagina + 1)}>página {props.pagina + 1}</button>
      </header>
    )
  
  }

export const Episodios =  () => {
    const [episodios, setEpisodios] = useState([])
    const [pagina, setPagina] = useState(1)

    useEffect (()=> {
        fetchEpisodios()
    }, [pagina])



    const fetchEpisodios = async () => {
        try {
          const response = await fetch("https://rickandmortyapi.com/api/episode?page=" + pagina)
          const data = await response.json()
          setEpisodios(data.results)
        }catch (e){
            console.log("ERROR", e)
        }
    }
    
    
    return(
        <>
        <PageButtons pagina={pagina} setPagina={setPagina}/>
        <h1 className="titulo_h1">Episodios</h1>
        <div className="episodios_box">
        {episodios.map((episodio)=> {
            return (
                <div key={episodio.id}>
                    <h2>{episodio.name}</h2>
                    <ul>
                        <li><span>Air date:</span> {episodio.air_date}</li>
                        <li><span>Episode:</span> {episodio.episode}</li>
                        {/* <li>Characters: {episodio.characters}</li> */}
                        <li><span>Url:</span> {episodio.url}</li>
                        <li><span>Created:</span> {episodio.created}</li>

                    </ul>

                </div>
            )

        })}
        </div>
        <PageButtons pagina={pagina} setPagina={setPagina}/>

        </>
    )
}
  