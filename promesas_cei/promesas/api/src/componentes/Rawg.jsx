import './Rawg.css'
import { useState, useEffect } from 'react'

const Dragons = ()=> {
    
    const [dragons, setDragons] = useState([])
    useEffect(()=> {
        fetchDragons()
    })

    const fetchDragons = async() => {

        let controller = new AbortController()

        const data = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type':'aplication/json'
            },
            signal: controller.signal
        }

        fetch('https://www.dnd5eapi.co/api/')
            .then(respone => respone.json())
            .then(data => {
                console.log(data)
                setDragons(data)
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
        {dragons.map((dragon, index)=> {
            return (
                <>
                <ul key={dragon.index}>
                    <li>{dragon.name}</li>
                </ul>
                </>
            )
        })}
        </>
    )
}

export default Dragons