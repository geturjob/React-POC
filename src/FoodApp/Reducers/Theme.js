import {SET_THEME, GET_THEME} from '../Actions/ManageTheme.js';

const initialState ={
    Themes:[
        {
            name:'Select Theme (Default Blue)',
            primaryTextColor:'',
            secondaryTextColor:'',
            primaryBgColor:'',
            secondaryBgColor:'',
            primaryColorLight:'#1b4a5c',
            primaryColorDark:'#193742',
            colorOnHover:'#16303a'
        },
        {
            name:'Purple Shade',
            primaryTextColor:'rgb(169,121,214)',
            secondaryTextColor:'rgb(99, 17, 175)',
            primaryBgColor:'',
            secondaryBgColor:'',
            primaryColorLight:'rgb(41, 5, 75)',
            primaryColorDark:'rgb(60, 9, 107)',
            colorOnHover:'rgb(56, 28, 82)'
        },
        {
            name:'Pink Shade',
            primaryTextColor:'rgb(109,25,60)',
            secondaryTextColor:'rgb(153, 36, 85)',
            primaryBgColor:'',
            secondaryBgColor:'',
            primaryColorLight:'rgb(109,25,60)',
            primaryColorDark:'rgb(153, 36, 85)',
            colorOnHover:'rgb(92, 30, 56)'
        },
        {
            name:'Green Shade',
            primaryTextColor:'rgb(122, 153, 36)',
            secondaryTextColor:'rgb(66, 77, 22)',
            primaryBgColor:'',
            secondaryBgColor:'',
            primaryColorLight:'rgb(66, 77, 22)',
            primaryColorDark:'rgb(122, 153, 36)',
            colorOnHover:'rgb(87, 105, 35)'
        }
    ]
}


const ThemeReducer =(state=initialState, action)=>{
    console.log(action.payload)
    switch(action.type){
        case GET_THEME:
            return{
                ...state
            }
        case SET_THEME:
            const previousState = state.Themes.slice();
            const index = previousState.findIndex(item => item.name == action.payload.name);
            if(index != -1)
            {
                previousState[index] = action.payload;
            }
            else{
                previousState.push(action.payload);
            }
            return{
                Themes:previousState
            }
        default:
            return {
                ...state
            }
    }
}

export default ThemeReducer;