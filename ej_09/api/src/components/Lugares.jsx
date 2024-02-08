export const Lugares =  () => {
    const fetchLugares = async () => {
        try {
          const response = await fetch("https://rickandmortyapi.com/api/location")
    
        }catch (error){
            console.log("ERROR", error)
    
        }
    }
    
    
    return(
     <h1>Lugares</h1>
    
    )
}