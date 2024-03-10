import './Div01.css'
import { datos } from '../db/datos.js'

const {div01} = datos
const {ico, h1, p, button, img} = div01

const Div01 = ()=> {
    
    return (
        <div className='Div01_contenedor'>
            <div className='Div01_section'>
            <Icono/>
            <H1/>
            <P/>
            <Btn/>
            </div>
            <div className='Div01_hero'> 
            <Img/>
            </div>
        </div>
      )
}

const Icono = () => {
    const {src, text} = ico
    return (
        <img className='Div01_ico' src={src} alt={text}/>
    )
}

const H1 = () => {
    const {text} = h1
    return (
        <h1 className='Div01_h1'>{text}</h1>
    )
}

const P = () => {
    const {text} = p
    return (
        <p className='Div01_p'>{text}</p>
    )
}

const Btn = () => {
    const {src, text, url} = button
    return (
        <a href={url}><img className='Div01_btn_img' src={src} alt={text}/></a>
    )
}

const Img = () => {
    const {src, text} = img
    return (
        <img className='Div01_img' src={src} alt={text}/>
    )
}

export default Div01