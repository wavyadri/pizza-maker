import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '../contexts'

const Custom = () => {
    const {menuItems, filterToppings, toppingItems, toppingCategory, currentToppingCategory, addItem} = useGlobalContext();
    const {id, category, title, price, image, vegetarian, spicy} = toppingItems;

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
                <form className="toppings-items">
                    {toppingItems.map((item) => {
                        const {id, category, title, price, image, vegetarian, spicy} = item;
                        return <>
                            <label className='items-container' key={id} for={title}>
                                <input 
                                    type={category === 'sauce' ? 'radio' : 'checkbox'} 
                                    name={category}
                                    value={`option-${id}`}
                                    // checked={title === 'homestyle tomato sauce' ? 'true' : ''}
                                    className='input' 
                                    // add an onClick event listener
                                />
                                <p className='title'>{title}</p>
                                {/* <span className="checkmark"></span> */}
                            </label>
                        </>
                    })}
                </form>
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
