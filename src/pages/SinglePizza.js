import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../contexts'
import {BiArrowBack} from 'react-icons/bi'
import {GoFlame} from 'react-icons/go'
import {FaLeaf} from 'react-icons/fa'
import image2 from '../images/temp-pizza.png'

const url = 'https://images.onlinelabels.com/images/clip-art/toons4biz/Pepperoni%20Pizza-189439.png'

const SinglePizza = () => {
    // let item = {id: 1, title: 'haha'};
    const {menuItems, addItem} = useGlobalContext();
    
    const {title} = useParams();
    const [pizza, setPizza] = useState([])

    useEffect(() => {
        // get data from useGlobalContext for the pizza matching our useParams
        const newPizza = menuItems.find((item) => item.title === title);
        setPizza(newPizza);
    }, [title])

    return (
        <section id='single'>
            <div className="back">
                <Link to='/our-menu' className='btn'>
                    <BiArrowBack className='icon'/>
                    <p>our menu</p>
                </Link>
            </div>
            <div className="single-pizza">  
                <div className="image">
                    <img src={image2} alt={pizza.title} />
                </div>
                <div className="info">
                    <h1 className='title'>{pizza.title}</h1>
                    <div className="icons">
                        <div className="veg">{pizza.vegetarian && <FaLeaf/>}</div>
                        <div className="spicy">{pizza.spicy && <GoFlame/>}</div>
                    </div>
                    <h2 className='base'><span className='info-data'>sauce:</span> {pizza.sauce}</h2>
                    <h2 className='toppings'><span className='info-data'>toppings:</span>  {pizza.toppings && pizza.toppings.join(', ')}</h2>
                    <h2 className='price'><span className='info-data'>price:</span> ${pizza.price}</h2>
                    {/* <h2 className='price'><span className='info-data'>price:</span>  ${pizza.price}</h2> */}
                    <button className='btn' onClick={() => {addItem(pizza)}}>add</button>
                </div> 
            </div>
        </section>
    )
}

export default SinglePizza
