import {ADD_DATA, PLACE_ORDER, REMOVE_DATA} from '../Actions/ManageCart.js'

const initialState={
    cartItems:[]
}
const cart = (state = initialState, action)=>{
    switch(action.type){
        case ADD_DATA:
            let tempData = action.payload;
            let updatedData;
            const itemIndex = state.cartItems.findIndex(x => x.Id === tempData.Id);
            if(itemIndex > -1)
            {
                let selectedData = state.cartItems[itemIndex];        
                selectedData.Qnt = selectedData.Qnt + tempData.Qnt;
                updatedData = [...state.cartItems];
                updatedData[itemIndex] = selectedData;
            }
            else
            {
                updatedData = state.cartItems.concat(action.payload);
            }
            console.log(state);
            return{
                cartItems:updatedData,
            };
        case REMOVE_DATA:
            let updatedDataAfterRemove;
            let selectedData = state.cartItems.filter(x => x.Id == action.payload);
            let selectedIndex = state.cartItems.findIndex(x => x.Id == action.payload);
            if(selectedData[0].Qnt > 1)
            {
                selectedData[0].Qnt = selectedData[0].Qnt -1;
                updatedDataAfterRemove= [...state.cartItems];
                updatedDataAfterRemove[selectedIndex]=selectedData[0];
            }
            else{
                updatedDataAfterRemove = state.cartItems.filter(x => x.Id != action.payload);
            }
            return{
                cartItems:updatedDataAfterRemove
            }
        case PLACE_ORDER:
            return initialState;
        default:
            return{
                ...state
            }
    }
}

export default cart;