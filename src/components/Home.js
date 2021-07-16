import React from 'react'

const Home = () => {
    return (
        <section id='home'>
            <div className="home-text">
                <h1>Welcome to</h1>
                <h1 className='home-title'>Pizza Maker</h1>
            </div>            
            <div className="home-buttons">
                <button>Our Menu</button>
                <button>Make Your Own</button>
            </div>
        </section>
    )
}

export default Home
