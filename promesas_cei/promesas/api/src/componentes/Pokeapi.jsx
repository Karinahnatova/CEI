import './Pokeapi.css'
import { useState, useEffect } from 'react'


const Pokemons = ()=> {

    const [pokemons, setPokemons] = useState([])
    useEffect(()=> {
        fetchPokemons()
    })

    const fetchPokemons = async() => {

        let controller = new AbortController()

        const data = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type':'aplication/json'
            },
            signal: controller.signal
        }

        fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            .then(respone => respone.json())
            .then(data => {
                console.log(data)
                setPokemons(data)
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
        <div>
            <h1>POKEAPI</h1>
            {pokemons.map((pokemon, index) => {
                return (
                    <p>{pokemon.name}</p>
                )
            })}
        </div>
       
    )

}


export default Pokemons