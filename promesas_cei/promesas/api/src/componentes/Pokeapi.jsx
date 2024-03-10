import './Pokeapi.css'
import { useState, useEffect } from 'react'


const Pokemons = ()=> {

    const [pokemons, setPokemons] = useState([])
    useEffect(()=> {
        fetchPokemons()
    }, [])

    const fetchPokemons = async() => {

        let controller = new AbortController()

        const data = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json'
            },
            signal: controller.signal
        }

        fetch('https://pokeapi.co/api/v2/pokemon/?results=20')
            .then(respone => respone.json())
            .then(data => {
                console.log(data)
                setPokemons(data.results)
            })
            .catch((e)=> {
                console.log(e)
            })
            .finally(()=> {
                console.log("Terminó la promesa")
                controller.abort()
            })
    }

    return (
        <>
        <h1>POKEAPI</h1>
        <div>
            {pokemons.map((pokemon, i) => {
                return (
                    <>
                    <Card key={i} pokemon={pokemon}/>
                    </>
                )
            })}
        </div>
        </>
        
       
    )

}

const Card = ({pokemon})=> {
    return (
        <div>
            <div>
                <h2>{pokemon.name}</h2>
            
            </div>

        </div>
    )
}




export default Pokemons