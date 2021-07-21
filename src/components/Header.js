import React from 'react'
import { useLocation } from 'react-router-dom';


const Header = () => {
    // grab url param with pathname
    const pathName = useLocation().pathname;
    // slice starting '/' then remove any '-' and replace with ' '
    const pathHeader = pathName.slice(1).replace(/-/g, ' ');
    return (
        <header>
            <h1>{pathHeader}</h1>
        </header>
    )
}

export default Header
