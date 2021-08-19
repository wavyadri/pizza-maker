import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '../contexts'

const Custom = () => {
    const {
        fullMenu,
        addItem, 
        toppings, 
        totalCustom, 
        filterToppings, 
        toppingItems, 
        toppingCategory, 
        currentToppingCategory, 
        checkTopping, 
        radioTopping,
        completeCustomPizza,
    } = useGlobalContext();

    const addCustomPizza = () => {
        // variable to add new custom pizzas to checkout with different prices and ids
        let finalPizza;

        // search full menu for custom pizza and update price
        let newPizza = fullMenu.find((item) => item.category === 'custom');
        if (newPizza) {
            finalPizza = {...newPizza, price: totalCustom, id: Date.now()}
            // newPizza.price = totalCustom
        }
        // add as item to checkout cart
        addItem(finalPizza)
        completeCustomPizza(toppings);
    }

    return (
        <section id='custom'>
            <div className="grid">
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
                            const {id, category, title, price, image, vegetarian, spicy, checked} = item;
                            return <>
                                <label className='items-container' key={id} for={title}>
                                    <input
                                        key={id} 
                                        type={category === 'sauce' ? 'radio' : 'checkbox'} 
                                        name={category}
                                        className='radio-checkbox'
                                        value={`option-${id}`}
                                        checked={checked}
                                        onClick={category === 'sauce' ?
                                        () => radioTopping(item)
                                        :
                                        () => checkTopping(item)
                                        }
                                    />
                                    <p className='title'>{title}</p>
                                </label>
                            </>
                        })}
                    </form>
                </div>
                <div className="custom-pizza">
                    <h1>pizza image</h1>
                    <h1>{totalCustom}</h1>
                    {toppings.map((item) => {
                        const {id, title, checked} = item;
                        return <div key={id} className="topping">
                            <h2>{title}</h2>
                            {checked &&
                            <h1>TRUE</h1>
                            }
                            {!checked &&
                            <h1>FALSE</h1>
                            }
                        </div>
                    })}
                </div>
            </div>
            <div className="custom-footer">
                {/* make this span both columns */}
                <div className="custom-total">${totalCustom}</div>
                {/* make this span both columns */}
                <div className="custom-add">
                    <button className='btn' onClick={() => {addCustomPizza()}}>add</button>
                </div>
            </div>
        </section>
    )
}

export default Custom
