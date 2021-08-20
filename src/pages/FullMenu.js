import React from 'react'
import { useGlobalContext } from '../contexts'
import { Link } from 'react-router-dom'
import {GoFlame} from 'react-icons/go'
import {FaLeaf} from 'react-icons/fa'

const FullMenu = () => {
    const {menuItems, categories, currentCategory, filterMenu} = useGlobalContext();

    return (
        <section id='menu'>
            <div className="menu-links">
                <ul className="menu-list">
                    {categories.map((item, index) => {
                        return <li key={index} 
                        onClick={() => filterMenu(item)}
                        className={`category ${item === currentCategory && 'active'}`}>{item}</li>
                    })}
                </ul>

            </div>
            <div className="menu-container">
                {menuItems.map((item) => {
                    const {id, category, title, image, price, vegetarian, spicy} = item;
                    return <div key={id} className='menu-card'>
                        <div className="icons">
                            <div className="veg">{vegetarian && <FaLeaf/>}</div>
                            <div className="spicy">{spicy && <GoFlame/>}</div>
                        </div>
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="text">
                            <h2>{title}</h2>
                            {category === 'custom' ?
                                <p>$9.99 + toppings</p>
                            :
                                <p>${price}</p>
                            }
                            {category === 'custom' ?
                            <Link to='/make-your-own'>details</Link>
                            :
                            <Link to={`/menu/${title}`}>details</Link>
                            }
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default FullMenu
