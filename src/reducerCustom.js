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
            // this code represents typical radio button behavior so there is only 1 sauce per pizza
            // filter current toppings for any sauces
            let sauceToppings = state.toppings.filter((item) => item.category === 'sauce')
            // if there is any sauce, uncheck it
            if (sauceToppings) {
                sauceToppings.map(item => item.checked = false);
            }
            // remove all sauces from current toppings
            let noSauce = [...state.toppings.filter((item) => item.category !== action.payload.category)]
            // set target sauce to true so radio button is checked
            action.payload.checked = true;
            return {
                ...state,
                // add current sauce to toppings
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
        case 'ADD_ORDER': {
            // first, uncheck all current toppings
            state.toppings.map(item => item.checked = false);
            // return empty array (remove all toppings) and default base price
            return {...state, toppings: [], totalCustom: 9.99}
        }
    }
}

export default reducerCustom