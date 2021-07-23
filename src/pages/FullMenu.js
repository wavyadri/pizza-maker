import React from 'react'
import { useGlobalContext } from '../contexts'

const FullMenu = () => {
    const {menuItems} = useGlobalContext();
    return (
        <section id='menu'>
            <div className="menu-links">
                <ul className="menu-list">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
            <div className="menu-container">
                {menuItems.map((item) => {
                    const {id, title, image, price, vegetarian, spicy} = item;
                    return <div key={id} className='menu-card'>
                        <div className="icons">
                            {/* if veg show leaf 
                            if spicy show flame */}
                        </div>
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default FullMenu
