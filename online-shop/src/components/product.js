import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const getProducts = async () => {
        try {
            const res = await axios.get(`https://api.escuelajs.co/api/v1/products`)
            setProduct(res.data.slice(0, 20))
        } catch (err) {

        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        loading ? <h5>Loading.......</h5> : <>
                <div className='productsWrapper'>
            {product.map(i => (
                    <div  key={i.id}  className='card'>
                        <img src={i.images} alt={i.title} />
                        <h4>{i.title}</h4>
                        <h5>{i.price}</h5>
                        <button className='btn'>Add to cart</button>
                    </div>
            ))}
            </div>
        </>
    )
}

export default Product