const reducer = (state, action) => {
    switch (action.type) {
        case 'CONFIRM_ORDER':
            return {...state, isModalOpen: true}
        case 'CLOSE_MODAL':
            return {...state, cart: [], isModalOpen: false}
        case 'ADD_ITEM':
            let item = action.payload
            return {...state, cart: [...state.cart, item]}
        case 'ADD_CUSTOM_ITEM':
            let tempCart = state.cart.map((item) => {
                if(item.id === action.payload){
                   return {...item, price: item.price + action.total}
                }
                return item
            })
            return {...state, cart: tempCart}
        case 'REMOVE_ITEM':
            return {...state, cart: state.cart.filter((item) => item.id !== action.payload)}
        case 'INCREASE':{
            let tempCart = state.cart.map((item) => {
                if(item.id === action.payload){
                   return {...item, amount: item.amount + 1}
                }
                return item
            })
            return {...state, cart: tempCart}
        }
        case 'DECREASE':{
            let tempCart = state.cart
                .map((item) => {
                    if(item.id === action.payload) {
                        return {...item, amount: item.amount - 1}
                    }
                    return item
                })
                // if decreased down to 0, remove
                .filter((item) => item.amount !== 0)
            return {...state, cart: tempCart}
        }
        case 'GET_TOTALS': {
            // destructure right away
            let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
                    // price and amount from state.cart items
                    const {price, amount} = cartItem
                    const itemTotal = price*amount

                    // $ total
                    cartTotal.total += itemTotal
                    // cart # total
                    cartTotal.amount += amount

                    // ALWAYS return accumulator
                    return cartTotal
                }, 
                // inital value, our ouptut will be an obj
                {
                    total: 0,
                    amount: 0
                }
            )
            // parse to int, round $ to 2 decimals
            total = parseFloat(total.toFixed(2))

            return { ...state, total, amount }
        }
    }
    throw new Error('no matching type')
}

export default reducer