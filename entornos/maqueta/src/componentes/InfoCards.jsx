import './InfoCards.css'
import { datos } from '../db/datos.js'

const [infoCards] = datos
const {id, ico, h4} = infoCards

const InfoCards = () => {

    return (
        <div className='InfoCards_div'>
            <Card/>

        </div>
    )
}

export default InfoCards

const Card = () => {

    return (
        <div>
            {infoCards.map((item) => {
                return <Ico key={item.id} {...item}/>
            })}
        </div>
    )
}

const Ico = (props) => {
    const {src, text} = props
    return (
        <div>
            <img className='InfoCards_ico' src={src} alt={text}/>
            <H4/>

        </div>
        
    )
}

const H4 = (props) => {
    const {text} = props
    return (
        <h4>{text}</h4>
    )
}