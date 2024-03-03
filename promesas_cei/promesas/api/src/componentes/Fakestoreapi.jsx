import './Fakestoreapi.css'
import { useState, useEffect } from 'react'

const Products =()=> {
    const [products, setProducts] = useState([])
    useEffect(()=> {
        fetchProductos()
    })

    const fetchProductos = async() => {

        let controller = new AbortController()

        const data = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type':'aplication/json'
            },
            signal: controller.signal
        }

        fetch('https://fakestoreapi.com/products')
            .then(respone => respone.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
            .catch((e)=> {
                console.log(e)
            })
            .finally(()=> {
                console.log("Terminó la promesa")
                controller.abort()
            })
    }

    return (
        <>
        <div className='Products_div'>
            <h1 className='Products_h1'>FAKESTOREAPI</h1>
            {products.map((product)=> {
                return (
                    <div className='Products_div_id' key={product.id}>
                        <ul className='Products_ul'>
                            <h3 className='Products_title'>{product.title}</h3>
                            <li className='Products_li'><img className='Products_img' src={product.image} alt="" /></li>
                            <li className='Products_li'><span>PRICE:</span>{product.price}</li>
                            <li className='Products_li'><span>ABOUT THE PRODUCT: </span>{product.description}</li>
                            <li className='Products_li'><span>CATEGORY: </span>{product.category}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
        
        </>
    )

}

export default Products 