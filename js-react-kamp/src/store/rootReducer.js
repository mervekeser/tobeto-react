//tüm stateleri topladığım yer

import { combineReducers } from "redux";//combineReducers bütün reducerları birleştiren fonksiyon
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    cart : cartReducer
})
export default rootReducer;