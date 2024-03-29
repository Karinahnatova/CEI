import {pixar} from "../../db/db.js"
import './Header.css'

//deconstruimos
const {header} = pixar
const {h1, nav} = header



const Header = ()=> {
    return(
        <header className="Header">
            <Logo/>
            <Nav/>
    
        </header>
    )
}

const Logo = ()=> {
    const {href, src, title} = h1
    return (
        <h1 className="Header-h1">
                <a className="Header-a" href={h1.href}>
                    <img className="Header-img" src={h1.src} alt={h1.title} />
                </a>
        </h1>
    )
}

const Nav = ()=> {
    return (
        <nav className="Header-nav">
            <ul className="Header-ul">
                {   //recorremos el array
                    nav.map((item)=> {
                        return <Li key={item.id} {...item}/>
                    })
                }
            </ul>
            </nav>
        
    )
}

const Li = (props)=> {
    const {text, href} = props
    return (
        <li className="Header-li">
            <a className="Header-a" href={href}>{text}</a>
        </li>

    )

}
export default Header