import React from 'react'
import { useGlobalContext } from '../contexts'

const Custom = () => {
    const {filterToppings, toppingItems, toppingCategory, currentToppingCategory, addItem} = useGlobalContext();
    return (
        <section id='custom'>
            <div className="custom-toppings">
                <ul className="toppings-list">
                    {toppingCategory.map((item, index) => {
                        return <li key={index} 
                        onClick={() => filterToppings(item)}
                        className={`category ${item === currentToppingCategory && 'active'}`}>{item}</li>
                    })}
                </ul>
                <ul className="toppings-items">
                    {toppingItems.map((item) => {
                        const {id, catgeory, title, price, image, vegetarian, spicy} = item;
                        return <li key={id}>
                            {title}
                        </li>
                    })}
                </ul>
            </div>
            <div className="custom-pizza">
                <h1>pizza image</h1>
            </div>
            {/* make this span both columns */}
            <div className="custom-total">$</div>
            {/* make this span both columns */}
            <div className="custom-add">
                <button>add</button>
                {/* <button className='btn' onClick={() => {addItem(pizza)}}>add</button> */}
            </div>
        </section>
    )
}

export default Custom
