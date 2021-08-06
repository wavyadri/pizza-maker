import React from 'react'
import {RiArrowUpSLine, RiArrowDownSLine} from 'react-icons/ri'

const url = 'https://images.onlinelabels.com/images/clip-art/toons4biz/Pepperoni%20Pizza-189439.png'

const Checkout = () => {
    return (
        <section id='checkout'>
            <div className="checkout-container">
                {/* to be replaced with MAP of cart items */}
                <div className="checkout-item">
                    <div className="item-container">
                        <div className="image">
                            <img src={url} alt="pizza" />
                        </div>
                        <div className="item">
                            <h2 className="title">Pizza Name</h2>
                            <p className="price">$16.99</p>
                            <button className="remove">remove</button>
                        </div>
                    </div>
                    <div className="counter">
                        <RiArrowUpSLine className='up'/>
                        <p className="number">1</p>
                        <RiArrowDownSLine className='down'/>
                    </div>
                </div>
                <div className="checkout-item">
                    <div className="item-container">
                        <div className="image">
                            <img src={url} alt="pizza" />
                        </div>
                        <div className="item">
                            <h2 className="title">Pizza Name</h2>
                            <p className="price">$16.99</p>
                            <button className="remove">remove</button>
                        </div>
                    </div>
                    <div className="counter">
                        <RiArrowUpSLine className='up'/>
                        <p className="number">1</p>
                        <RiArrowDownSLine className='down'/>
                    </div>
                </div>
                {/*  */}
                <div className="checkout-total">
                    <p>total</p>
                    <p className="price">$16.99</p>
                </div>
                <div className="checkout-confirm">
                    <button className="confirm">confirm order</button>
                </div>
            </div>
        </section>
    )
}

export default Checkout
