import { useState, useEffect } from "react"

export const Users = ()=> {
    const [users, setUsers] = useState([])

    useEffect(()=> {
        fetchUsers()
    }, [])

    const fetchUsers = async ()=> {

        let controller = new AbortController()

        const data = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'aplication/json'
            },
            signal: controller.signal
    
        }
    
            
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUsers(data)
            })
            .catch((e)=> {
                console.log(e)
            })
            .finally(() => {
                console.log("Terminó la promesa")
                controller.abort() //cierra el puerto en nuestro backend (se cierra automáticamente a los 30 segundos)
            })
            
    }
        
        
    
    return (
        <div>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <ul>
                            <li>{user.name}</li>
                            <li>{user.username}</li>
                            <li>{user.email}</li>

                        </ul>
                    </div>
                )
            })}

        </div>
    )
    

}