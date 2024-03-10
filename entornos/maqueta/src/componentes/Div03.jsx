import './Div03.css'
import { datos } from '../db/datos.js'

const {div03} = datos
const {ico, h3, p, img} = div03

const Div03 = () => {

    return (
        <div className='Div03_contenedor'>
            <div className='Div03_section'>
                <Ico/>
                <H3/>
                <P/>
            </div>
            <div className='Div03_hero'>
                <Img/>
            </div>

        </div>

    )
}

export default Div03

const Ico = () => {
    const {src, text} = ico
    return (
        <img className='Div03_ico' src={src} alt={text}/>
    )
}

const H3 = () => {
    const {text} = h3
    return (
        <h3 className='Div03_h3'>{text}</h3>
    )
}

const P = () => {
    const {text} = p
    return (
        <p className='Div03_p'>{text}</p>
    )
}

const Img = () => {
    const {src, text} = img
    return (
        <img className='Div03_img' src={src} alt={text}/>
    )
}