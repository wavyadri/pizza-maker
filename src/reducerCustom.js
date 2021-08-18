const reducerCustom = (state, action) => {
    switch(action.type) {
        case 'ADD_TOPPING':
            action.payload.checked = true;
            return {
                ...state, 
                toppings: [...state.toppings, action.payload], 
            }
        case 'REMOVE_TOPPING':
            action.payload.checked = false;
            return {
                ...state, 
                toppings: [...state.toppings.filter((item) => item !== action.payload)], 
            }
        case 'ADD_RADIO_TOPPING':
            action.payload.checked = true;
            // remove all sauces from toppings, only 1 sauce per pizza
            let noSauce = [...state.toppings.filter((item) => item.category !== action.payload.category)]
            return {
                ...state,
                // add current sauce
                toppings: [...noSauce, action.payload],
            }
        case 'PERSIST_RADIO_TOPPING':
            return {
                ...state, 
                toppings: [...state.toppings], 
            }

        case 'GET_TOTALS': {
            let totalFinal = state.toppings.reduce((tot, arr) => {
                //return the sum with previous value
                return parseFloat((tot + arr.price).toFixed(2))
            // starting value is 9.99, the custom pizza base price
            }, 9.99);
            return {...state, totalCustom: totalFinal}
        }
    }
}

export default reducerCustom