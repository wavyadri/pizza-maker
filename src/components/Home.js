import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <section id='home'>
            <div className="home-grids">
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
            <div className="home-center">
                <div className="home-text">
                    <h1>welcome to</h1>
                    <h1 className='home-title'>Pizza Maker</h1>
                </div>            
                <div className="home-buttons">
                    <Link to='/menu'>
                        <button className='menu-btn'>our menu</button>
                    </Link>
                    <Link to='/make-your-own'>
                        <button className='custom-btn'>make your own</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Home
