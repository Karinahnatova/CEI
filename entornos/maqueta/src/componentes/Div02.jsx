import './Div02.css'
import { datos } from '../db/datos.js'

const {div02} = datos
const {img, ico, h3, p} = div02

const Div02 = () => {
    
    return (
        <div className='Div02_contenedor'>
            <div className='Div02_hero'>
                <Img/>
            </div>
            <div className='Div02_section'>
                <Ico/>
                <H3/>
                <P/>
            </div>

        </div>
    )
}

export default Div02

const Img = () => {
    const {src, text} = img
    return (
        <img className='Div02_img' src={src} alt={text}/>
    )
}

const Ico = () => {
    const {src, text} = ico
    return (
        <img className='Div02_ico' src={src} alt={text}/>
    )
}

const H3 = () => {
    const {text} = h3
    return (
        <h3 className='Div02_h3'>{text}</h3>
    )
}

const P =() => {
    const {text} = p
    return (
        <p className='Div02_p'>{text}</p>
    )
}