import React, {useState, useRef, useEffect} from 'react'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    
    return (
        <nav id='navbar'>
            <div className="navbar-items">
                <div className="logo">
                    <Link className="link logo-text" to='/menu'><p>pizza maker</p></Link>
                    <button className='navbar-toggle' onClick={() => setShowLinks(!showLinks)}><FaBars/></button>
                </div>
                <div className={`${showLinks ? 'navbar-links show-links' : 'navbar-links'}`}>
                    <ul className='navbar-list'>
                        <li><Link className="link" to='/menu'><p>our menu</p></Link></li>
                        <li><Link className="link" to='/make-your-own'><p>make your own</p></Link></li>
                        <li><Link className='link shopping-cart' to='/shopping-cart'><HiOutlineShoppingCart className='cart-icon'/></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
