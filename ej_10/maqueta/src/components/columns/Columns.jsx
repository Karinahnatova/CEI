import { pixar } from "../../db/db";
import './Columns.css'

const {columns} = pixar


const Columns = ()=> {
    return(
        <section>
            <Div/>

        </section>
        
    )
}

const ImgSection = (props)=> {
    const {src, h3, href} = props

    return (
        <div>
            <a href={href}><img src={src} alt=""/></a>
            <h3>{h3}</h3>
        </div>
    ) 
}

const Div = ()=> {
    return (
        <div>
            {columns.map((item)=> {
                return <ImgSection key={item.id} {...item}/>
            })}
        </div>
    )
}

export default Columns