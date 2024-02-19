import { useState, useEffect } from "react"

export const Users = ()=> {
    const [users, setUsers] = useState([])

    useEffect(()=> {
        fetchUsers()
    }, [])

    const fetchUsers = async ()=> {
        try { 
            const response = await fetch (`https://jsonplaceholder.typicode.com/users`)
            const data = await response.json()
            setUsers(data.results)
        }catch (e) {
            console.log("Error", e)
        }
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