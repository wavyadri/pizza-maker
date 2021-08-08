import React from 'react'
import { useGlobalContext } from '../contexts'

const Modal = () => {
    const {closeModal} = useGlobalContext();

    return (
        <div id='modal'>
            <div className="modal-container">
                <h1>thank you!</h1>
                <p className='modal-text'>Your order has been placed.</p>
                <button className='btn' onClick={closeModal}>
                    <p>close</p>
                </button>
            </div>
        </div>
    )
}

export default Modal
