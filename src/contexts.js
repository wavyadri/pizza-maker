import React, {useState, useContext, useEffect, useReducer} from 'react'
import menu from './components/menu'
import toppings from './components/toppings'
import reducer from './reducer'
import reducerCustom from './reducerCustom'

const AppContext = React.createContext();

// C H E C K O U T useReducer initial state
const initialState = {
    cart: [],
    total: 0,
    amount: 0,
    isModalOpen: false,
}

// C U S T O M useReducer initial state
const initialStateCustom = {
    toppings: [],
    totalCustom: 9.99,
}

// always access children
const AppProvider = ({children}) => {

    // M E N U (full menu)
    const [fullMenu, setFullMenu] = useState(menu)

    // M E N U (categories)
    const [menuItems, setMenuItems] = useState(menu);
    // new array of only unique categories
    const allCatgeories = [...new Set(menuItems.map((item) => item.category))];
    const [categories, setCategories] = useState(allCatgeories);
    const [currentCategory, setCurrentCategory] = useState('');

    const filterMenu = (category) => {
        // return items matching category param
        const newMenu = menu.filter((item) => item.category === category);
        setMenuItems(newMenu);
        setCurrentCategory(category);
    }

    useEffect(() => {
        filterMenu('classics')
     }, [])
     
    // C A R T (Checkout & Navbar)
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
        // if(currCart === undefined)
        if(!currCart){
            dispatch({type: 'ADD_ITEM', payload : item})
            return;
        }   
        // after first item has already been added
        dispatch({type: 'INCREASE', payload: item.id})
    }

    //     // add custom item
    // const addCustomItem = (item, total) => {
    //     let currCart = state.cart.find(obj => obj.id === item.id);
    //     // if(currCart === undefined)
    //     if(!currCart){
    //         // this way we can update the total of the custom item
    //         dispatch({type: 'ADD_CUSTOM_ITEM', payload: item, total: total})
    //         return;
    //     }   
    //     // after first item has already been added
    //     dispatch({type: 'INCREASE', payload: item.id})
    // }

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

    // C U S T O M (categories)
    const [toppingItems, setToppingItems] = useState(toppings);
    // new array of unique topping categories
    const allToppingCategories = [...new Set(toppingItems.map((item) => item.category))];
    const [toppingCategory, setToppingCategory] = useState(allToppingCategories);
    const [currentToppingCategory, setCurrentToppingCategory] = useState('');

    const filterToppings = (category) => {
        const newTopping = toppings.filter((item) => item.category === category);
        setToppingItems(newTopping);
        setCurrentToppingCategory(category);
    }

    useEffect(() => {
        filterToppings('sauce')
     }, [])


    // C U S T O M (handle states)
    // useReducer
    const [stateCustom, dispatchCustom] = useReducer(reducerCustom, initialStateCustom);
        // 'confirm order' button 
    const addOrder = (e) => {
        e.preventDefault();
        dispatchCustom({ type: 'CONFIRM_ORDER' })
    }

        // toggle topping on pizza
    const checkTopping = (item) => {
        let currToppings = stateCustom.toppings.find(obj => obj.id === item.id);
        // if it doesn't already exist, add it
        if(!currToppings){
            // this way we can update the total of the custom item
            dispatchCustom({ type: 'ADD_TOPPING', payload: item })
            return;
        } 
        // if it does already exist, remove it
        dispatchCustom({type: 'REMOVE_TOPPING', payload: item})
    }

        // for RADIO, each click removes all other sauces
    const radioTopping = (item) => {
        let currToppings = stateCustom.toppings.find(obj => obj.id === item.id);
        // if no sauce exists add
        if(!currToppings){
            // this way we can update the total of the custom item
            dispatchCustom({ type: 'ADD_RADIO_TOPPING', payload: item })
            // dispatchCustom({ type: 'ADD_TOPPING', payload: item })
            return;
        } 

        dispatchCustom({type: 'PERSIST_RADIO_TOPPING', payload: item})
    }

        // get total and amount everytime we update cart
    useEffect(() => {
    dispatchCustom({ type: 'GET_TOTALS' })
    }, [stateCustom.toppings])
  
    return <AppContext.Provider value={{
        fullMenu,
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
        decrease,
        toppingItems,
        toppingCategory,
        currentToppingCategory,
        ...stateCustom,
        filterToppings,
        addOrder,
        checkTopping,
        radioTopping,
        }}>
        {children}
    </AppContext.Provider>
}

// custom hook so we do not need to import useContext and AppContext for every use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

// we want to export the context and the provider
export {AppContext, AppProvider}