import React, {useState, useContext, useEffect, useReducer} from 'react'
import menu from './components/menu'
import cart from './components/cart'
import reducer from './reducer'

const AppContext = React.createContext();

// useReducer initial state
const initialState = {
    cart: [],
    total: 0,
    amount: 0,
    isModalOpen: false,
}

// always access children
const AppProvider = ({children}) => {

    // M E N U
    const [menuItems, setMenuItems] = useState(menu);
    // new array of only unique categories
    const allCatgeories = [...new Set(menu.map((item) => item.category))];
    const [categories, setCategories] = useState(allCatgeories)
    const [currentCategory, setCurrentCategory] = useState('')

    const filterMenu = (category) => {
        const newMenu = menu.filter((item) => item.category === category);
        setMenuItems(newMenu);
        setCurrentCategory(category);
    }

    useEffect(() => {
        filterMenu('classics')
     }, [])

    // N A V B A R (for checkout cart)
    const [cartAmount, setCartAmount] = useState('');

    // C A R T
    const [cartItems, setCartItems] = useState(cart);
    // useReducer
    const [state, dispatch] = useReducer(reducer, initialState);


    return <AppContext.Provider value={{
        menuItems,
        cartItems,
        categories,
        currentCategory,
        filterMenu}}>
        {children}
    </AppContext.Provider>
}

// custom hook so we do not need to import useContext and AppContext for every use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

// we want to export the context and the provider
export {AppContext, AppProvider}