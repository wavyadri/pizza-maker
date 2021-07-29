import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../contexts'

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
            <div className="image">
                <img src="" alt="" srcset="" />
            </div>
            <div className="info">
                <h1>{pizza.title}</h1>
                <h2>{pizza.price}</h2>
                <h2>{pizza.toppings}</h2>
                <h2>{pizza.base}</h2>
            </div>
        </section>
    )
}

export default SinglePizza
