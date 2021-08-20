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
    // store all menu items in state
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
        let currCartCustom = state.cart.find((obj) => obj.name === item.name)
        // first item added
        // if(currCart === undefined)
        if(!currCart || currCartCustom){
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

    // C U S T O M (categories)
    // store all toppings in state
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
    const completeCustomPizza = () => {
        dispatchCustom({ type: 'ADD_ORDER' })
        // dispatchCustom({ type: 'ADD_ORDER', payload: item })
    }

        // toggle topping on pizza
    const checkTopping = (item) => {
        let currToppings = stateCustom.toppings.find(obj => obj.id === item.id);
        // if it doesn't already exist, add it
        if(!currToppings){
            dispatchCustom({ type: 'ADD_TOPPING', payload: item })
            return;
        } 
        // if it does already exist, remove it
        dispatchCustom({type: 'REMOVE_TOPPING', payload: item})
    }

        // for RADIO, each click removes all other sauces
    const radioTopping = (item) => {
        let currToppings = stateCustom.toppings.find(obj => obj.id === item.id);
        // if no sauce exists, add
        if(!currToppings){
            dispatchCustom({ type: 'ADD_RADIO_TOPPING', payload: item })
            return;
        }
        // if double clicked, do nothing and persist state
        dispatchCustom({type: 'PERSIST_RADIO_TOPPING', payload: item})
    }
        // get total and amount everytime we update cart
    useEffect(() => {
    dispatchCustom({ type: 'GET_TOTALS' })
    }, [stateCustom.toppings])

    const [isVegetarian, setIsVegetarian] = useState(false)

    const toppingsVegetarian = (items) => {
        // filter new array of toppings that are NOT vegetarian
       let nonVegToppings = items.filter((item) => item.vegetarian === false)
        // if 1 or more exists, that means there is a non veg toppings the whole pizza is considered non veg
        console.log(nonVegToppings)
        if (nonVegToppings.length >  0) {
           return false
        // else all toppings are veg and whole pizza is considered veg   
       } else {
           return true
       }
    }

    const [isSpicy, setIsSpicy] = useState(false)

    const toppingsSpicy = (items) => {
        // filter new array of toppings that ARE spicy
        let spicyToppings = items.filter((item) => item.spicy === true)
        console.log(spicyToppings)
        // if at least 1 exists, whole pizza is spicy
        if (spicyToppings.length > 0) {
            return true
        // else all toppings are not spicy and whole pizza is not spicy
        } else {
            return false
        }
    }

    useEffect(() => {
         if (toppingsVegetarian(stateCustom.toppings)) {
            setIsVegetarian(true)
        } else {
            setIsVegetarian(false)
        }
        if (toppingsSpicy(stateCustom.toppings)) {
            setIsSpicy(true)
        } else {
            setIsSpicy(false)
        }
        if (stateCustom.toppings.length === 0) {
            setIsVegetarian(false)
            setIsSpicy(false)
        }
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
        completeCustomPizza,
        checkTopping,
        radioTopping,
        isSpicy,
        isVegetarian,
        }}>
        {children}
    </AppContext.Provider>
}

// custom hook so we do not need to import useContext and AppContext for every use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

// export the context and the provider
export {AppContext, AppProvider}