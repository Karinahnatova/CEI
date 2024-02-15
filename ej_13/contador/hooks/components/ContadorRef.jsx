import { useState, useEffect, useRef } from "react"

const ContadorRef =()=> {

    const [inputValue, setInputValue] = useState("")
    const count = useRef(0) //devuelve un bjeto que es current y el valor de ka variable: current: valor

    useEffect (()=> {
        // console.log(count.current)
        count.current = count.current + 1
        // setCount(count + 1)
    }, )

    return (
        <>
        <h1>Contador</h1>
        <input type="text" value={inputValue} onChange={(e) => {
            setInputValue(e.target.value)
            setCount(count + 1)
            }} placeholder="Como te llamas?"/>
        <div>
            Mi nombre es <strong>{inputValue}</strong>
            <h1>Cantidad de renders: {count.current}</h1>

        </div>
        </>
        
    )
}

export default ContadorRef