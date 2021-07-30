import React from 'react'
import BestSellers from '../components/Bestsellers'
import { useGlobalContext } from '../contexts'
import menu from '../components/menu'
import { Link } from 'react-router-dom'
import {GoFlame} from 'react-icons/go'
import {FaLeaf} from 'react-icons/fa'

const url = 'https://images.onlinelabels.com/images/clip-art/toons4biz/Pepperoni%20Pizza-189439.png'

const FullMenu = () => {
    const {menuItems, categories, currentCategory, filterMenu} = useGlobalContext();

    return (
        <section id='menu'>
            <BestSellers/>
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
                            <img src={url} alt={title} />
                        </div>
                        <div className="text">
                            <h2>{title}</h2>
                            <p>${price}</p>
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
