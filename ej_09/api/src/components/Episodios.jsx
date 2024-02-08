import { useEffect } from "react"

export const Episodios =  () => {

    useEffect (()=> {
        
    })



    const fetchEpisodios = async () => {
        try {
          const response = await fetch("https://rickandmortyapi.com/api/episode")
          const datosJson = await response.json()
    
        }catch (error){
            console.log("ERROR", error)
    
        }
    }
    
    
    return(
     <h1>Episodios</h1>
    
    )
}
  