import React from 'react'
import { useLocation } from 'react-router-dom';

const Header = () => {
    // grab url param with pathname
    const pathName = useLocation().pathname;
    // slice starting '/' then remove any '-' and replace with ' '
    const pathHeader = pathName.slice(1).replace(/-/g, ' ');
    
    return (
        <header id='header'>
            <div className="header-grids">
                <div className="grid-left">
                    <div className="square s1"></div>
                    <div className="square s2"></div>
                    <div className="square s3"></div>
                    <div className="square s4"></div>
                    <div className="square s5"></div>
                    <div className="square s6"></div>
                    <div className="square s7"></div>
                    <div className="square s8"></div>
                    <div className="square s9"></div>
                    <div className="square s10"></div>
                    <div className="square s11"></div>
                    <div className="square s12"></div>
                    <div className="square s13"></div>
                    <div className="square s14"></div>
                    <div className="square s15"></div>
                    <div className="square s16"></div>
                </div>
                 <div className="grid-right">
                    <div className="square s1"></div>
                    <div className="square s2"></div>
                    <div className="square s3"></div>
                    <div className="square s4"></div>
                    <div className="square s5"></div>
                    <div className="square s6"></div>
                    <div className="square s7"></div>
                    <div className="square s8"></div>
                    <div className="square s9"></div>
                    <div className="square s10"></div>
                    <div className="square s11"></div>
                    <div className="square s12"></div>
                    <div className="square s13"></div>
                    <div className="square s14"></div>
                    <div className="square s15"></div>
                    <div className="square s16"></div>
                </div>
            </div>
            <div className="header-container">
                <h1 className='header-text'>{pathHeader}</h1>
            </div>
        </header>
    )
}

export default Header
