const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    totalPrice: 0,
    checkOut: false
}

const sumItems = (items) => {
    const itemsCounter = items.reduce((total, product) => total + product * quantity, 0);
    const totalPrice = items.reduce((total, product) => total + product.quantity * product.price, 0);
    return { itemsCounter, totalPrice };
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
                return {
                    ...state,
                    selectedItems: [...state.selectedItems],
                    ...sumItems(state.selectedItems),
                    checkOut: false
                }
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItems(newSelectedItems)
            }
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                totalPrice: 0,
                checkOut: true
            }
        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                totalPrice: 0,
                checkOut: false
            }
        default:
            return state;
    }
}

export default cartReducer;