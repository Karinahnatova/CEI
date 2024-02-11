import { useEffect, useState } from "react";
import './Personajes.css'


const PageButtons = (props) => {

  return(
    <header className="header_botones">
      <p className="numeracion_pag">página: <span>{props.pagina}</span></p>
      <button className="boton_atrás" onClick={()=> props.setPagina(props.pagina - 1)}>página {props.pagina - 1}</button>
      <button className="boton_siguiente" onClick={()=> props.setPagina(props.pagina + 1)}>página {props.pagina + 1}</button>
    </header>
  )

}

const InputFilter = (personajes)=> {
  const [valorSeleccionado, setValorSeleccionado] = useState('')

  return(
    <div>
      <select name="personajes" id="filter" value={valorSeleccionado}>
        <option value="humanos">Humanos</option>
        <option value="alienigenas">Alienigenas</option>
        <option value="todos">Todos los personajes</option>

      </select>
    </div>
  )
}


export const Personajes = () => {
  const [characters, setCharacters] = useState([]);
  const [pagina, setPagina] = useState(1)

  useEffect(() => {
    fetchCharacters();
  }, [pagina]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character?page=" + pagina); //o también se podría hacer con strings: `phttps://rickandmortyapi.com/api/character?page=${pagina}`
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
    <div><InputFilter/></div>
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
