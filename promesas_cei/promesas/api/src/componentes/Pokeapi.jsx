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

        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
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
        <>
        <div>
            <h1>POKEAPI</h1>
            
            {ability.map((item) => {
                return <Ability key={item.id} {...item}/>
            })}
        </div>
        </>
        
       
    )

}

const Ability = (props) => {
    const {name, url} = props
    return(
        <>
        <ul>
            <li>{name}</li>
            <li><img src={url} alt="" /></li>
        </ul>
        </>
    )

}


export default Pokemons