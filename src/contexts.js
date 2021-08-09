import React, {useState, useContext, useEffect, useReducer} from 'react'
import menu from './components/menu'
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
    // useReducer
    const [state, dispatch] = useReducer(reducer, initialState);
        // 'confirm order' button 
    const confirmOrder = (e) => {
        e.preventDefault();
        dispatch({ type: 'CONFIRM_ORDER' })
    }
        // 'close' button in modal
    const closeModal = (e) => {
        e.preventDefault();
        dispatch({type: 'CLOSE_MODAL'})
    }
        // 'add' button in SinglePizza
    const addItem = (item) => {
        let currCart = state.cart.find(obj => obj.id === item.id);
        // first item added
        // if(currCart === undefined){
        if(!currCart){
            dispatch({type: 'ADD_ITEM', payload : item})
            return;
        }   
        // after first item has already been added
        dispatch({type: 'INCREASE', payload: item.id})
    }
        // 'remove' button on each item in checkout
    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id })
    }
        // increase amount by up arrow
    const increase = (id) => {
        dispatch({type: 'INCREASE', payload: id})
    }
        // decrease amount by down arrow
    const decrease = (id) => {
        dispatch({type: 'DECREASE', payload: id})
    }

        // get total and amount everytime we update cart
    useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
    }, [state.cart])

    return <AppContext.Provider value={{
        menuItems,
        categories,
        currentCategory,
        ...state,
        filterMenu,
        confirmOrder,
        closeModal,
        addItem,
        removeItem,
        increase,
        decrease}}>
        {children}
    </AppContext.Provider>
}

// custom hook so we do not need to import useContext and AppContext for every use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

// we want to export the context and the provider
export {AppContext, AppProvider}