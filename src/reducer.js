const reducer = (state, action) => {
    switch (action.type) {
        case 'CONFIRM_ORDER':
            return {...state, isModalOpen: true}
        case 'CLOSE_MODAL':
            return {...state, cart: [], isModalOpen: false}
        case 'ADD_ITEM':
            return {...state, cart: [...state.cart, action.payload]}
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
        // default: 
        //     return state
    }
    throw new Error('no matching type')
}

export default reducer