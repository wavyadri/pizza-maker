const reducer = (state, action) => {
    switch (action.type) {
        case 'CONFIRM_ORDER':
            return {...state, cart: [], isModalOpen: true}
        case 'CLOSE_MODAL':
            return {...state, isModalOpen: false}
    }
}

export default reducer