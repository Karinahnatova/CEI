import { useState, useEffect } from "react"
import { easyFetch } from "../helpers/utils.js"
import { useNavigate } from 'react-router-dom'


const BookForm = ({libro, setEditarLibro})=> {

    const [formData, setFormData] = useState(libro)

    const {titulo, autor, categoria, id} = formData

    const navigate = useNavigate()

    // useEffect(()=> {
    //     setFormData(libro)
    //     // console.log("Libro es: ", libro)
    //     // console.log("FormData es: ", formData)
    // }, [libro]) : no feu necesario poner el use effectporque hemos puesto a cada libro un id (key) en BookList

    const handleInputChange = (e) => { //e de event
        const {name, value} = e.target //obtengo del input el nombre y valor
        //actualizo mi formData con el nuevo valor conservando los valores anteriores
        setFormData({...formData, [name]: value})

    }

    const handleSubmit = async (e) => {
        e.preventDefault() //previene de que no cargue la página, que no se enví el formulario
        console.log("enviando el formulario con react")

        easyFetch({
            url:"http://localhost:3000/API/v1/libros/"+ id, 
            method: 'PUT',
            body: formData,
            callback: (data) => {
                console.log("EXITO", data)
                setEditarLibro(null)
                //editarlibro = null para que desaparezca el formularo cuando hagamos guardar
            }
        })


        // if(id){
        //     try {
        //         const url="http://localhost:3000/API/v1/libros/"
        //         const response = await fetch(url, {
        //             method: "POST",
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify(formData)
        //         })
    
        //         if(!response.ok){
        //             throw new Error ("hubo un error al enviar los datos")
        //         }
        //         const responseData = await response.json()
        //         console.log(responseData)
                
        //     }catch (error) {
        //         console.log(error)
        //     }

        // }else {
        //     try {
        //         const url="http://localhost:3000/API/v1/libros/"+id
        //         const response = await fetch(url, {
        //             method: "PUT",
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify(formData)
        //         })
    
        //         if(!response.ok){
        //             throw new Error ("hubo un error al enviar los datos")
        //         }
        //         const responseData = await response.json()
        //         console.log(responseData)
                
        //     }catch (error) {
        //         console.log(error)
        //     }

        // }
        // try {
        //     const url="http://localhost:3000/API/v1/libros/"+id
        //     const response = await fetch(url, {
        //         method: "PUT",
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(formData)
        //     })

        //     if(!response.ok){
        //         throw new Error ("hubo un error al enviar los datos")
        //     }
        //     const responseData = await response.json()
        //     console.log(responseData)
            
        // }catch (error) {
        //     console.log(error)
        // }
    }

    const handleCreateBook = ()=> {
        easyFetch({
            url:"http://localhost:3000/API/v1/libros/", 
            method: 'POST',
            body: formData,
            callback: (data) => {
                console.log("EXITO creado", data)
                
                //editarlibro = null para que desaparezca el formularo cuando hagamos guardar

                //ireme a la página de 
                navigate("/lista")
            }
        })

    }

    const handleRemoveBook = ()=> {
        easyFetch({
            url:"http://localhost:3000/API/v1/libros/"+ id, 
            method: 'DELETE',
            callback: (data) => {
                console.log("EXITO eliminado", data)
                setEditarLibro(null)
            }
        })

    }

    const handleUpdateBook = ()=> {
        easyFetch({
            url:"http://localhost:3000/API/v1/libros/"+ id, 
            method: 'PUT',
            body: formData,
            callback: (data) => {
                console.log("EXITO CREADO", data)
                setEditarLibro(null)
                //editarlibro = null para que desaparezca el formularo cuando hagamos guardar
            }
        })

    }

    return(
        <>
        <form className="main-form" >
            <label htmlFor="">Nombre del libro</label>
            <input 
            type="text" 
            className="input-control"
            name="titulo"
            value={titulo}
            placeholder="Ingrese el titulo del libro"
            onChange={handleInputChange}
            /><br/>
            <label htmlFor="">Autor del libro</label>
            <input 
            type="text" 
            className="input-control"
            name="autor"
            value={autor}
            placeholder="Ingrese el autor del libro"
            onChange={handleInputChange}
            /><br/>
            <label htmlFor="">Categoría del libro</label>
            <input 
            type="text" 
            className="input-control"
            name="categoria"
            value={categoria}
            placeholder="Ingrese la categoria del libro"
            onChange={handleInputChange}
            /><br/>
            <button type="submit">GUARDAR CAMBIOS</button>
        </form>
        {
            //EDITANDO O CREANDO
            id ? (
                <>
                <button onClick={handleUpdateBook}>GUARDAR</button>
                <button onClick={handleRemoveBook}>ELIMINAR</button>
                </>
            ):(
                <button onClick={handleCreateBook}>CREAR NUEVO</button>
            )
        }
        </>
        

    )
}

export default BookForm