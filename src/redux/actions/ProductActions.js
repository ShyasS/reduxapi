import fakeStoreApi from "../../components/fakeStoreApi";
import { ActionType } from "../constants/Action-type";

export const fetchProducts = () => async (dispatch) =>{
const response = await fakeStoreApi.get('/products')
dispatch({type:ActionType.FETCH_PRODUCTS, payload:response.data})
}
export const fetchProduct = (id) => async (dispatch) =>{
   const response = await fakeStoreApi.get(`/products/${id}`)
   dispatch({type:ActionType.SELECTED_PRODUCT, payload:response.data})
   }


export const setProducts = (products) =>{
   return{
    type: ActionType.SET_PRODUCTS,
    payload : products,
   }
}

export const selectedProducts = (product) =>{
    return{
     type: ActionType.SELECTED_PRODUCT,
     payload : product,
    }
 }

 export const removeselectedProducts = () =>{
   return{
    type: ActionType.REMOVE_SELECTED_PRODUCT,
   }
}

