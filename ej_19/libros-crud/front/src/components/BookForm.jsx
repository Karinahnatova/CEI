import { useState, useEffect } from "react"

const BookForm = ({libro})=> {

    const [formData, setFormData] = useState(libro)

    const {titulo, autor, categoria, id} = formData

    useEffect(()=> {
        setFormData(libro)
        // console.log("Libro es: ", libro)
        // console.log("FormData es: ", formData)

    }, [libro])

    const handleInputChange = (e) => { //e de event
        const {name, value} = e.target //obtengo del input el nombre y valor
        //actualizo mi formData con el nuevo valor conservando los valores anteriores
        setFormData({...formData, [name]: value})

    }

    const handleSubmit = async (e) => {
        e.preventDefault() //previene de que no cargue la página, que no se enví el formulario
        console.log("enviando el formulario con react")

        try {
            const url="http://localhost:3000/API/v1/libros/"+id
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if(!response.ok){
                throw new Error ("hubo un error al enviar los datos")
            }
            const responseData = await response.json()
            console.log(responseData)
            
        }catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <form className="main-form" onSubmit={handleSubmit}>
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
        </>
        

    )
}

export default BookForm