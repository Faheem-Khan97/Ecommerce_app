export const initialState = {
    cartItems:[],
    user:null
}

export const reducer = (state, action) => {
 
    switch(action.type){
        case 'ADD_TO_CART': console.log(action.item)
        return {
            ...state,
            cartItems: [...state.cartItems, action.item]
        }
        case "REMOVE_CART_ITEM": 
            const index = state.cartItems.findIndex((cartItem) => cartItem.id === action.item.id )
            const tBasket = [...state.cartItems];
            if(index>= 0) tBasket.splice(index,1);
            return {...state, cartItems:tBasket}
        case "SET_USER": return {...state, user:action.user}

        default: return {...state}
    }
}