import './Div04.css'
import { datos } from '../db/datos.js'

const {div04} = datos
const {img, ico, h3, p} = div04

const Div04 = () => {

    return (
        <div className='Div04_contenedor'>
            <div className='Div04_hero'>
                <Img/>
            </div>
            <div className='Div04_section'>
                <Ico/>
                <H3/>
                <P/>
            </div>
        </div>
    )
}

const Img = () => {
    const {src, text} = img
    return (
        <img className='Div04_img' src={src} alt={text}/>
    )
}

const Ico = () => {
    const {src, text} = ico
    return (
        <img className='Div04_ico' src={src} alt={text}/>
    )
}

const H3 = () => {
    const {text} = h3
    return (
        <h3 className='Div04_h3'>{text}</h3>
    )
}

const P =() => {
    const {text} = p
    return (
        <p className='Div04_p'>{text}</p>
    )
}

export default Div04