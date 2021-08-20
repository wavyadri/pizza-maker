import React from 'react'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

const Error = () => {
    return (
        <section id='error'>
            <h1>Woops! You went the wrong way.</h1>
            <Link to='/our-menu' className='btn'>
                <BiArrowBack className='icon'/>
                <p>our menu</p>
            </Link>
        </section>
    )
}

export default Error
