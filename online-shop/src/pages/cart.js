import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
    const items = useSelector(state => (state.cart))
    const dispatch = useDispatch()
    const handleRemove = (id) => {
        dispatch(remove(id))
    }
    return (
        <div>
            <h3>Cart</h3>
            <div className='cartWrapper'>
                {
                    items.map(i => (
                        <div key={i.id} className='cartCard'>
                            <img src={i.images} alt={i.title} />
                            <h5>{i.price}</h5>
                            <h4>{i.title}</h4>
                            <button className='btn' onClick={() => { handleRemove(i.id) }}>Remove</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart