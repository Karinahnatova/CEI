import './Randomuser.css'
import { useState, useEffect } from 'react'



const Users =()=> {
    const [users, setUsers] = useState([])
    useEffect(()=> {
        fetchUsers()
    }, [])

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

        fetch('https://randomuser.me/api/?results=20')
            .then(respone => respone.json())
            .then(data => {
                console.log(data)
                setUsers(data.results)
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
        <h1 className='Users_h1'>RANDOMUSER</h1>
        <div className='Users_div'>
            {users.map((user, i)=> {
                return (
                    <Card key={i} user={user}/>
                )
            })}
        </div>
        
        </>
    )

    

}


const Card = ({user})=> {

    return(
        <div className='Users_div_id' key={user.id}>
                        <ul className='Users_ul'>
                            <h3 className='Users_name'>{user.name.title} {user.name.first} {user.name.last}</h3>
                            <img className='Users_img' src={user.picture.large}/>
                            <li className='Users_li'><span>GENDER: </span> {user.gender}</li>
                            <li className='Users_li'><span>LOCATION: </span> {user.location.city}</li>
                            <li className='Users_li'><span>PHONE: </span> {user.phone}</li>
                            <li className='Users_li'><span>E-MAIL: </span> {user.email}</li>
                        </ul>
                    </div>
    )


}

export default Users