import './Categorias.css'
import { imagenesCategorias } from '../assets/data'

const Categorias = () => {

    return(
        <div className='Div-categorias'>
            {imagenesCategorias.map((categoria) => {
                return (
                    <div className='Categorias-container' key={categoria.id}>
                     <img className='Imagen-categorias' src={categoria.imgUrl} alt={categoria.altText} />
                     <p className='Texto-categorias'>{categoria.texto}</p>
                    </div>

                )
                
                
            })}

        </div>

    )

}

export default Categorias