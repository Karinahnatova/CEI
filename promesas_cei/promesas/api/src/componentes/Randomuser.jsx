import './Randomuser.css'
import { useState, useEffect } from 'react'



const Users =()=> {
    const [users, setUsers] = useState([])
    useEffect(()=> {
        fetchUsers()
    })

    const fetchUsers = async() => {

        let controller = new AbortController()

        const data = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type':'aplication/json'
            },
            signal: controller.signal
        }

        fetch('https://randomuser.me/api/')
            .then(respone => respone.json())
            .then(data => {
                console.log(data)
                setUsers(data)
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
        <div className='Users_div'>
            <h1 className='Users_h1'>RANDOMUSER</h1>
            {users.map((user)=> {
                return (
                    <div className='Users_div_id' key={user.id}>
                        <ul className='Users_ul'>
                            <h3 className='Users_title'>{user.username}</h3>
                            <li className='Users_li'>{user.company}</li>
                            <li className='Users_li'>{user.role}</li>
                            <li className='Users_li'>{user.phone}</li>
                            {/* <li className='Users_li'><img src={user.picture.medium} alt="" /></li> */}
                        </ul>
                    </div>
                )
            })}
        </div>
        
        </>
    )

    

}

export default Users