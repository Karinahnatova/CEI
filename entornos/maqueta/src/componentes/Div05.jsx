import './Div05.css'
import { datos } from '../db/datos.js'

const {div05} = datos
const {ico, h3, p, img} = div05

const Div05 = () => {

    return (
        <div className='Div05_contenedor'>
            <div className='Div05_section'>
                <Ico/>
                <H3/>
                <P/>
            </div>
            <div className='Div05_hero'>
                <Img/>
            </div>

        </div>
    )
}

export default Div05

const Ico = () => {
    const {src, text} = ico
    return (
        <img className='Div05_ico' src={src} alt={text}/>
    )
}

const H3 = () => {
    const {text} = h3
    return (
        <h3 className='Div05_h3'>{text}</h3>
    )
}

const P = () => {
    const {text} = p
    return (
        <p className='Div05_p'>{text}</p>
    )
}

const Img = () => {
    const {src, text} = img
    return (
        <img className='Div05_img' src={src} alt={text}/>
    )
}