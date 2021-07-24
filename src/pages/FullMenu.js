import React from 'react'
import BestSellers from '../components/Bestsellers'
import { useGlobalContext } from '../contexts'
import menu from '../components/menu'
import { Link } from 'react-router-dom'

const FullMenu = () => {
    const {menuItems, categories, currentCategory, filterMenu} = useGlobalContext();
    // const allCatgeories = [...new Set(menu.map((item) => item.category))];


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
                            {vegetarian && <h1>VEG</h1>}
                            {spicy && <h1>FLAME</h1>}
                        </div>
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="text">
                            <h2>{title}</h2>
                            <p>${price}</p>
                            {category === 'custom' ?
                            <Link to='/make-your-own'>home</Link>
                            :
                            <Link to='/menu'>menu</Link>
                         }
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default FullMenu
