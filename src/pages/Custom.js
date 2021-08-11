import React from 'react'
import { useGlobalContext } from '../contexts'

const Custom = () => {
    const {filterToppings, toppingItems, toppingCategory, currentToppingCategory} = useGlobalContext();
    return (
        <section id='custom'>
            <ul className="toppings-list">
                {toppingCategory.map((item, index) => {
                    return <li key={index} 
                    onClick={() => filterToppings(item)}
                    className={`category ${item === currentToppingCategory && 'active'}`}>{item}</li>
                })}
            </ul>
        </section>
    )
}

export default Custom
