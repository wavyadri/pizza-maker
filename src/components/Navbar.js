import React, {useState, useRef, useEffect} from 'react'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    // ref for div navbar-links
    const navbarLinksRef = useRef(null); 
    // ref for ul navbar-list
    const navbarListRef = useRef(null);

    // run on every change in showLinks (aka every click of button)
    useEffect(() => {
        // check height of navbar-list
        const linksHeight = navbarListRef.current.getBoundingClientRect().height;
        // use links height to set height of navbar-links
        if(showLinks) {
            navbarLinksRef.current.style.height = `${linksHeight}px`
        } else {
            navbarLinksRef.current.style.height = '0px'
        }
    }, [showLinks])
    
    return (
        <nav id='navbar'>
            <div className="navbar-items">
                <div className="logo">
                    <Link className="link logo-text" to='/menu'><p>pizza maker</p></Link>
                    <button className='navbar-toggle' onClick={() => setShowLinks(!showLinks)}><FaBars/></button>
                </div>
                <div className='navbar-links' ref={navbarLinksRef}>
                    <ul className='navbar-list' ref={navbarListRef}>
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
