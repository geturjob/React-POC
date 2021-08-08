export const SET_THEME = "SET_THEME";
export const GET_THEME = "GET_THEME";

export const SetTheme =(data)=>{
    return{type : SET_THEME, payload:data}
}

export const GetTheme =()=>{
    return {
        type:GET_THEME
    }
}