import { useState, useEffect } from "react"
import BookForm from "../../components/BookForm"
import { easyFetch } from "../../helpers/utils"
import { AuthContext } from "../Login/Layout"
import { useNavigate } from "react-router-dom"


function BookList() {

  const [bookList, setBookList] = useState([])
  const [editarLibro, setEditarLibro] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext)


  useEffect(()=> {
    fetchLibros()

  }, [editarLibro])

  const fetchLibros = async() => {

    const navigate = useNavigate()

    if(!isLoggedIn){
      navigate("./login") 
    }
    
    
    easyFetch({
      url:"http://localhost:3000/API/v1/libros/",
      callback: (jsonData) =>  {
        setBookList(jsonData.data)
      }
    })
    
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
      {editarLibro && <BookForm libro={editarLibro} setEditarLibro={setEditarLibro}/>}
      </>
      
    )
}

export default BookList