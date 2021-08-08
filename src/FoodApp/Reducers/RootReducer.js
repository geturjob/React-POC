import Address  from "./Address.js";
import Cart from './Cart.js'
import ThemeReducer from './Theme.js'
import Orders from "./Orders.js";
import EditOrder from "./EditOrder.js";

import { combineReducers } from "redux";

export default combineReducers({
    Address,
    Cart,
    ThemeReducer,
    Orders,
    EditOrder
})