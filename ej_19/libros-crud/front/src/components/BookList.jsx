import { useState, useEffect } from "react"
import BookForm from "./BookForm"


function BookList() {
  const [bookList, setBookList] = useState([])
  const [editarLibro, setEditarLibro] = useState(null)
  useEffect(()=> {
    fetchLibros()

  }, [])

  const fetchLibros = async() => {
    try {
      const url = "http://localhost:3000/API/v1/libros"
      const response = await fetch(url)
      if(!response.ok){
        throw new Error('Error al obtener los libros')
      }
      const jsonData = await response.json()

      setBookList(jsonData.data)


    }catch (error) {
      console.log("tuviste un error: " + error)
    }
    
  }

  const handleEditarLibro = (libro) => {
    console.log("editar lirbo con id: " + libro.id)
    setEditarLibro(libro)

  }

    return (
      <>
      <h1>Lista de Libros</h1>
      <div className="cardList">
        {
          bookList.map((libro)=> {
            return (
              <div className="card" key={libro.id}>
                <strong>Titulo: </strong>{libro.titulo}
                <strong>Autor: </strong>{libro.autor}
                <strong>Categoria: </strong>{libro.categoria}
                <strong><button onClick={()=> handleEditarLibro(libro)}>EDITAR</button></strong>
              </div>
            )
          })
        }

      </div>
      {editarLibro && <BookForm libro={editarLibro}/>}
      </>
      
    )
}

export default BookList