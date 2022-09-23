import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import { fetchProduct } from '../store/productSlice'

const Product = () => {
    const dispatch = useDispatch()

    const {loading, data:product} = useSelector(state => (state.products))

    useEffect(() => {
        if(product.length) return
        dispatch(fetchProduct())
    }, [])

    const handleAdd = (i) => {
        dispatch(add(i))
    }

    return (
        loading ? <h5>Loading.......</h5> : <>
                <div className='productsWrapper'>
            {product.map(i => (
                    <div  key={i.id}  className='card'>
                        <img src={i.images} alt={i.title} />
                        <h4>{i.title}</h4>
                        <h5>{i.price}</h5>
                        <button className='btn' onClick={() => {handleAdd(i)}}>Add to cart</button>
                    </div>
            ))}
            </div>
        </>
    )
}

export default Product