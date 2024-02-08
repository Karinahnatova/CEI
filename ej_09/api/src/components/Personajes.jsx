export const Personajes =  () => { 

    
    const fetchCharacters = async () => {
        try {
          const response = await fetch("https://rickandmortyapi.com/api/character")
    
        }catch (error){
            console.log("ERROR", error)
    
        }
    }
    
    
    return(
     <>
     <h1>Personajes</h1>

     
     

     </>
     
    
    )
}
    

