import { SET_ORDER_F_EDIT, GET_ORDER_F_EDIT } from "../Actions/ManageOrders";

const initialState ={
    firstname:"",
    lastname:"",
    address:""
}

const EditOrder=(state=initialState, action)=>{
    switch(action.type){
        case GET_ORDER_F_EDIT:
            return{
                ...state
            }
        case SET_ORDER_F_EDIT:
            return{
                ...action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default EditOrder;