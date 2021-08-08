export const ADD_DATA ="ADD_DATA";
export const REMOVE_DATA ="REMOVE_DATA";
export const PLACE_ORDER = "PLACE_ORDER";
export const SAVE_ADDRESS ='SAVE_ADDRESS';

export const AddDataToCart =(data)=>{
    return {type:ADD_DATA, payload:data}
}

export const RemoveDataFromCart =(id)=>{
    return {type:REMOVE_DATA, payload:id}
}

export const PlaceOrder =()=>({type:PLACE_ORDER});

export const SaveUserAddress =(data)=>({type:SAVE_ADDRESS, payload:data});