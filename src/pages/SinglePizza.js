import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../contexts'
import {BiArrowBack} from 'react-icons/bi'
import {GoFlame} from 'react-icons/go'
import {FaLeaf} from 'react-icons/fa'

const url = 'https://images.onlinelabels.com/images/clip-art/toons4biz/Pepperoni%20Pizza-189439.png'

const SinglePizza = () => {
    const {menuItems} = useGlobalContext();
    
    const {title} = useParams();
    const [pizza, setPizza] = useState([])

    useEffect(() => {
        // get data from useGlobalContext for the pizza matching our useParams
        const newPizza = menuItems.find((item) => item.title === title);
        setPizza(newPizza);
    }, [title])

    return (
        <section id='single'>
            <div className="single-grids">
                <div className="grid-left">
                    <div className="square s1"></div>
                    <div className="square s2"></div>
                    <div className="square s3"></div>
                    <div className="square s4"></div>
                    <div className="square s5"></div>
                    <div className="square s6"></div>
                    <div className="square s7"></div>
                    <div className="square s8"></div>
                    <div className="square s9"></div>
                    <div className="square s10"></div>
                    <div className="square s11"></div>
                    <div className="square s12"></div>
                    <div className="square s13"></div>
                    <div className="square s14"></div>
                    <div className="square s15"></div>
                    <div className="square s16"></div>
                </div>
                 <div className="grid-right">
                    <div className="square s1"></div>
                    <div className="square s2"></div>
                    <div className="square s3"></div>
                    <div className="square s4"></div>
                    <div className="square s5"></div>
                    <div className="square s6"></div>
                    <div className="square s7"></div>
                    <div className="square s8"></div>
                    <div className="square s9"></div>
                    <div className="square s10"></div>
                    <div className="square s11"></div>
                    <div className="square s12"></div>
                    <div className="square s13"></div>
                    <div className="square s14"></div>
                    <div className="square s15"></div>
                    <div className="square s16"></div>
                </div>
            </div>
            <div className="back">
                <Link to='/our-menu' className='btn'>
                    <BiArrowBack className='icon'/>
                    <p>our menu</p>
                </Link>
            </div>
            <div className="single-pizza">  
                <div className="image">
                    <img src={url} alt={pizza.title} />
                </div>
                <div className="info">
                    <h1 className='title'>{pizza.title}</h1>
                    <div className="icons">
                        <div className="veg">{pizza.vegetarian && <FaLeaf/>}</div>
                        <div className="spicy">{pizza.spicy && <GoFlame/>}</div>
                    </div>
                    <h2 className='base'>base: {pizza.base}</h2>
                    <h2 className='toppings'>toppings: {pizza.toppings && pizza.toppings.join(', ')}</h2>
                    <h2 className='price'>price: ${pizza.price}</h2>
                </div>
            </div>
        </section>
    )
}

export default SinglePizza
