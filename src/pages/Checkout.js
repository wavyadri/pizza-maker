import React from 'react'
import Modal from '../components/Modal'
import {RiArrowUpSLine, RiArrowDownSLine} from 'react-icons/ri'
import { useGlobalContext } from '../contexts'

const url = 'https://images.onlinelabels.com/images/clip-art/toons4biz/Pepperoni%20Pizza-189439.png'

const Checkout = () => {
    const {cart, confirmOrder, isModalOpen} = useGlobalContext();
    return <>
        {isModalOpen && <Modal/>}
        <section id='checkout'>
            <div className="checkout-container">
                {cart.length > 0 && cart.map((item) => {
                    const {id, title, price, amount} = item;
                    return  <div key={id} className="checkout-item">
                        <div className="item-container">
                            <div className="image">
                                <img src={url} alt="pizza" />
                            </div>
                            <div className="item">
                                <h2 className="title">{title}</h2>
                                <p className="price">${price}</p>
                                <button className="remove">remove</button>
                            </div>
                        </div>
                        <div className="counter">
                            <RiArrowUpSLine className='up'/>
                            <p className="number">{amount}</p>
                            <RiArrowDownSLine className='down'/>
                        </div>
                    </div>
                })}
                <div className="checkout-total">
                    <p>total</p>
                    <p className="price">$16.99</p>
                </div>
                {/* if cart.length > 1 show button : nothing */}
                <div className="checkout-confirm">
                    {/*  */}
                    <button className="confirm" onClick={confirmOrder}>confirm order</button>
                </div>
            </div>
        </section>
    </>
}

export default Checkout
