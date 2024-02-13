import {pixar} from "../../db/db.js"

const {hero} = pixar

const Hero = ()=> {
    const {backgroundsrc, src, href, text} = hero
    return (
        <div>
            <a href="">
            <img src={hero.backgroundsrc} alt={hero.text} />
            </a>
    
        </div>
    )
}

export default Hero