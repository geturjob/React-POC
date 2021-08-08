export const GET_ORDERS = "GET_ORDERS";
export const SET_ORDER_F_EDIT = "SET_ORDER_F_EDIT";
export const GET_ORDER_F_EDIT = "GET_ORDER_F_EDIT";
export const UPDATE_ORDER_DETAILS = "UPDATE_ORDER_DETAILS"

export const GetOrders=()=>{
    return{
        type:GET_ORDERS
    }
}

export const UpdateOrderDetails=(data)=>{
    return{
        type:UPDATE_ORDER_DETAILS,
        payload:data
    }
}

export const SetOrderForEdit=(data)=>{
    return{
        type:SET_ORDER_F_EDIT,
        payload:data
    }
}

export const GetOrderForEdit=()=>{
    return{
        type:GET_ORDER_F_EDIT,
    }
}