import React from 'react'
import { useGlobalContext } from '../contexts'
import base from '../images/base.svg'
import {GoFlame} from 'react-icons/go'
import {FaLeaf} from 'react-icons/fa'

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
        isSpicy,
        isVegetarian,
    } = useGlobalContext();

    const addCustomPizza = () => {
        // variable to add new custom pizzas to checkout with different prices and ids
        let finalPizza;

        // search full menu for custom pizza create new pizza with updated price and id
        let newPizza = fullMenu.find((item) => item.category === 'custom');
        if (newPizza) {
            finalPizza = {...newPizza, price: totalCustom, id: Date.now()}
            // newPizza.price = totalCustom
        }
        // add as new item to checkout cart
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
                    <div className="icons">
                        <div className="veg">{isVegetarian && <FaLeaf/>}</div>
                        <div className="spicy">{isSpicy && <GoFlame/>}</div>
                    </div>
                    <img src={base} alt="pizza base" className='base'/>
                    <div className='topping'>
                        {toppings.map((item) => {
                            const {id, image, title, category} = item;
                            return <img key={id} src={image} alt={title} 
                                className={category === 'sauce' ? 'sauce topping'
                                : category === 'cheese' ? 'cheese topping'
                                : category === 'veggies' ? 'veggies topping'
                                : category === 'protein' ? 'protein topping'
                                : 'garnish topping'
                                }
                            />   
                        })}
                    </div>
                </div>
            </div>
            <div className="custom-footer">
                <div className="custom-total">${totalCustom}</div>
                <div className="custom-add">
                    <button className='btn' onClick={() => {addCustomPizza()}}>add</button>
                </div>
            </div>
        </section>
    )
}

export default Custom
