import {pixar} from "../../db/db.js"
import './Hero.css'
const {hero} = pixar

const Hero = ()=> {
    const {backgroundsrc, src, href, text} = hero
    return (
        <div className="Hero">
            <img className="Hero-backgroundsrc" src={hero.backgroundsrc} alt={hero.text} />
            <a href={hero.href}>
             <img className="Hero-text" src={hero.src} alt={hero.text}/>
            </a>
        </div>
    )
}

export default Hero