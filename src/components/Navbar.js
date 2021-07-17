import React from 'react'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id='navbar'>
            <div className="navbar-items">
                <div className="logo">
                    <Link className="link" to='/menu'><p>pizza maker</p></Link>
                    <button className='navbar-toggle'><FaBars/></button>
                </div>
                <div className="navbar-links">
                    <ul className='navbar-list'>
                        <Link className="link" to='/menu'><li><p>our menu</p></li></Link>
                        <Link className="link" to='/make-your-own'><li><p>make your own</p></li></Link>
                    </ul>
                    <Link className='link shopping-cart' to='/shopping-cart'><HiOutlineShoppingCart className='cart-icon'/></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
