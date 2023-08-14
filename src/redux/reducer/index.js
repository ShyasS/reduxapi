import { combineReducers } from "redux";
import { ProductReducer,selectedProductReducer } from "./ProductReducer";

const reducer = combineReducers({
    allProducts:ProductReducer,
    product:selectedProductReducer,

})

export default reducer;