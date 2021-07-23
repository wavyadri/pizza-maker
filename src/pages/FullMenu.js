import React from 'react'
import BestSellers from '../components/Bestsellers'
// import { useGlobalContext } from '../contexts'
import menu from '../components/menu'

// new array of only unique categories
const allCatgeories = [...new Set(menu.map((item) => item.category))];

const FullMenu = () => {
    return (
        <section id='menu'>
            <BestSellers/>
            <div className="menu-links">
                <ul className="menu-list">
                    {allCatgeories.map((item, index) => {
                        return <li key={index} className='category'>{item}</li>
                    })}
                </ul>

            </div>
            <div className="menu-container">
                {menu.map((item) => {
                    const {id, title, image, price, vegetarian, spicy} = item;
                    return <div key={id} className='menu-card'>
                        <div className="icons">
                            {/* if veg show leaf 
                            if spicy show flame */}
                        </div>
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="text">
                            <h2>{title}</h2>
                            <p>${price}</p>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default FullMenu
