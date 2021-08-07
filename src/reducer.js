const reducer = (state, action) => {
    switch (action.type) {
        case 'CONFIRM_ORDER':
            return {...state, isModalOpen: true}
        case 'CLOSE_MODAL':
            return {...state, cart: [], isModalOpen: false}
        case 'ADD_ITEM': {
            let item = action.payload;
            return {...state, cart: [...state.cart, item]}
        }
        case 'INCREASE':{
            let tempCart = state.cart.map((item) => {
                if(item.id === action.payload){
                   return {...item, amount: item.amount + 1}
                }
                return item
            })
            return {...state, cart: tempCart}
        }
        // default: 
        //     return state
    }
    throw new Error('no matching type')
}

export default reducer