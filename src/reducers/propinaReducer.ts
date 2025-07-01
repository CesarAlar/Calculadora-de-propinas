// import { menuItems } from "../data/db";
import { MenuItem, OrderItem } from "../types";

export type OrderAction =
    {type:'addItem',payload:{item:MenuItem}} |
    {type:'removeItem',payload:{id:MenuItem['id']}} |
    {type:'addTip',payload:{value:number}} |
    {type:'placeOrder'}

export type orderState = {
    order:OrderItem[],
    tip:number
}

export const initialState : orderState = {
    order: [],
    tip:0
}

export const propinaReducer = (
    state:orderState = initialState,
    action:OrderAction
)=>{
    switch (action.type) {
        case 'addItem':
            // console.log(state.propina)
            const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id)
            let updatedOrder : OrderItem[] = []
            if(itemExist) {
                updatedOrder = state.order.map( orderItem => orderItem.id === action.payload.item.id?
                    {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
            } else {
                const newItem : OrderItem = {...action.payload.item, quantity: 1}
                updatedOrder = [...state.order, newItem]
            }

            return {...state, order:updatedOrder}
        case 'removeItem':
            const removeOrder = state.order.filter( item => item.id !== action.payload.id ) 
            return {...state, order:removeOrder}
            break;
        case 'addTip':
            const tip = action.payload.value
            return {...state, tip}
            break;
        case 'placeOrder':
            return {...state,order:[],tip:0}
            break;
    
        default:
            break;
    }
return(state)
} 