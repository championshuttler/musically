import { ADD_TO_CART,REMOVE_ITEM } from './action-types/cart-actions'

//add cart action
export const addToCart= (id, name)=>{
    return{
        type: ADD_TO_CART,
        id,
        name
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}