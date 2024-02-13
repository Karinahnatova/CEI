import './Footer.css'
import { pixar } from '../../db/db'

const {footer} = pixar
const {div, p, button, h4} = footer


const Footer = ()=> {

    return(
        <footer>
            <Div/>
            <P/>
            <H4/>
            <Button/>
        </footer>
    )
}

const Iconos = (props)=> {
    const {src, href} = props

    return (
        <div>
            <a href={href}><img src={src} alt="" /></a>
        </div>
    )
}

const Div = ()=> {

    return (
        <div>
            {div.map((item)=>{
                return <Iconos key={item.id} {...item}/> 

            })}
        </div>

    )

}

const Links = (props)=> {
    const {text, href} = props
    return (
        <>
        <a href={href}>{text}</a>
        </>
    )
}

const P = ()=> {
    return (
        <div>
            {p.map((item)=> {
               return <Links key={item.id} {...item}/>
            })}

        </div>
        
    )
}

const H4 = ()=> {
    const {text} = h4
    return (
        <>
        <h4>{h4.text}</h4>
        </>
    )
}

const Button =()=> {
    const{text, href} = button
    return (
        <>
        <a href={button.href}><button>{button.text}</button></a>
        </>
    )
}

export default Footer