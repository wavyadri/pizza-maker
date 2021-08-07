import React from 'react'
import { useGlobalContext } from '../contexts'

const Modal = () => {
    const {closeModal} = useGlobalContext();

    return (
        <div id='modal'>
            <div className="container">
                <h1>thank you!</h1>
                <p>your order has been placed.</p>
                <button onClick={closeModal}>
                    new order
                </button>
            </div>
        </div>
    )
}

export default Modal
