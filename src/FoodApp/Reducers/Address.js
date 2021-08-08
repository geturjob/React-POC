
const initialState ={
    userAddress:[]
}

export default (state = initialState, action)=>{
    switch(action.type)
    {
        case 'SAVE_ADDRESS':
            const updatedAddress = action.payload;
            return{
                userAddress:updatedAddress
            }
        default:
            return {
                ...state
            }
    }
}