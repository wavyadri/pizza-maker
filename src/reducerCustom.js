const reducerCustom = (state, action) => {
    switch(action.type) {
        case 'ADD_TOPPING':
            console.log(action.payload.checked)
            action.payload.checked = true;
            console.log(action.payload.checked)
            return {
                ...state, 
                toppings: [...state.toppings, action.payload], 
                // toppings: [...state.toppings.find((item) => item === action.payload).map((item) => item.checked === true)], 
                total: parseFloat((state.total + action.payload.price).toFixed(2)),
            }
        case 'REMOVE_TOPPING':
            action.payload.checked = false;
            console.log([...state.toppings])
            return {...state, toppings: [...state.toppings.filter((item) => item !== action.payload)], total: parseFloat((state.total - action.payload.price).toFixed(2))}
            // return {...state, toppings: [state.toppings.filter((item) => item.id !== action.payload)], total: parseFloat((state.total - action.payload.price).toFixed(2))}
            // return {...state, cart: state.cart.filter((item) => item.id !== action.payload)}
    
    }
}

export default reducerCustom