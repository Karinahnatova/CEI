import { useEffect, useState } from "react";
import './Personajes.css'


const PageButtons = (props) => {

  return(
    <header className="header_botones">
      <p className="numeracion_pag">página: <span>{props.pagina}</span></p>
      <button className="boton_atrás" onClick={()=> {
        if (props.pagina > 1 ) {
          props.setPagina(props.pagina - 1) 

        }

      }

      }>página {props.pagina - 1}</button>
      <button className="boton_siguiente" onClick={()=> props.setPagina(props.pagina + 1)}>página {props.pagina + 1}</button>
    </header>
  )

}

const FilterButtons = ({setFiltro})=> {

  
  return (
    <div className="botones_filtro">
      <button onClick={() => setFiltro('')}>Todos los personajes</button>
      <button onClick={() => setFiltro('Human')}>Humanos</button>
      <button onClick={() => setFiltro('Alien')}>Aliens</button>
    </div>
  )

 
}


export const Personajes = () => {
  const [characters, setCharacters] = useState([]);
  const [pagina, setPagina] = useState(1)
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    fetchCharacters();
  }, [pagina, filtro])

  const fetchCharacters = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina} ${filtro ? `&species=${filtro}` : ''}`);
      const data = await response.json();
      setCharacters(data.results);
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <>
    <PageButtons pagina={pagina} setPagina={setPagina}/>
    <h1 className="titulo_h1">Personajes</h1>
    <FilterButtons setFiltro={setFiltro}/>
    <div className="personajes_box">

      {characters.map((character) => {
        return (
    
          <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <ul>
            <li><span>Status:</span> {character.status} <div className={`circulo_status ${character.status === 'Alive' ? 'vivo' : 
            character.status === 'Dead' ? 'muerto' :
            'desconocido'}`}></div></li>
            <li><span>Specie:</span> {character.species}</li>
            <li><span>Gender:</span> {character.gender}</li>
            <li><span>Origin:</span> {character.origin.name}</li>

            {/* <li><span>Lugar</span></li> */}

          </ul>
          </div>
        
        );
      })}
    </div>
    <PageButtons pagina={pagina} setPagina={setPagina}/>
    </>
    
  );
};
