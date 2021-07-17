import React from 'react'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id='navbar'>
            <div className="navbar-items">
                <Link className="link" to='/menu'><div className="logo">pizza maker</div></Link>
                <ul className='navbar-list'>
                    <Link className="link" to='/menu'><li><p>our menu</p></li></Link>
                    <Link className="link" to='/make-your-own'><li><p>make your own</p></li></Link>
                </ul>
                <Link className='link' to='/shopping-cart'><HiOutlineShoppingCart className='cart-icon'/></Link>
            </div>
        </nav>
    )
}

export default Navbar
