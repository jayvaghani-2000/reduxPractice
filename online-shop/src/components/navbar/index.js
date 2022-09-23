import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    //subscribe
    const items = useSelector(state => (state.cart))
    return (
        <div style={{ display: 'flex', justifyContent: "space-between" }}>
            <span className='logo'>Redux Store</span>
            <div>
                <Link to="/" className='navLink'>Home</Link>
                <Link to="/cart" className='navLink'>Cart</Link>
                <span className='cartCount'>Cart Item : {items.length}</span>
            </div>
        </div>
    )
}

export default Navbar