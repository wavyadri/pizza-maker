import React from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import {RiArrowUpSLine, RiArrowDownSLine} from 'react-icons/ri'
import { useGlobalContext } from '../contexts'
import {BiArrowBack} from 'react-icons/bi'

const url = 'https://images.onlinelabels.com/images/clip-art/toons4biz/Pepperoni%20Pizza-189439.png'

const Checkout = () => {
    const {cart, total, confirmOrder, isModalOpen, removeItem, increase, decrease} = useGlobalContext();
    return <>
        {isModalOpen && <Modal/>}
        <section id='checkout'>
            <div className="checkout-container">
                {cart.length > 0 ? 
                    cart.map((item) => {
                    const {id, title, price, amount, image} = item;
                    return  <div key={id} className="checkout-item">
                        <div className="item-container">
                            <div className="image">
                                <img src={image} alt={title} />
                            </div>
                            <div className="item">
                                <h2 className="title">{title}</h2>
                                <p className="price">${price}</p>
                                <button className="remove" onClick={() => removeItem(id)}>remove</button>
                            </div>
                        </div>
                        <div className="counter">
                            <RiArrowUpSLine className='up' onClick={() => increase(id)}/>
                            <p className="number">{amount}</p>
                            <RiArrowDownSLine className='down' onClick={() => decrease(id)}/>
                        </div>
                    </div>
                })
                :
                <div className="empty">
                    <h1>Your cart is empty!</h1>
                    <Link to='/our-menu' className='btn'>
                        <BiArrowBack className='icon'/>
                        <p>our menu</p>
                    </Link>
                </div>
                }
                <div className="checkout-total">
                    <p>total</p>
                    <p className="price">${total}</p>
                </div>
                <div className="checkout-confirm">
                    {cart.length > 0 &&
                    <button className="confirm" onClick={confirmOrder}>confirm order</button>
                    }
                </div>
            </div>
        </section>
    </>
}

export default Checkout
