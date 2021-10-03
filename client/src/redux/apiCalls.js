import { publickRequest, userRequest } from "../requestMethods";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async(dispatch, user)=>{
    dispatch(loginStart());
    try {
        const res = await publickRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure());
    }
}

export const getProducts = async(dispatch)=>{
    dispatch(getProductStart());
    try {
        const res = await publickRequest.get("/products")
        dispatch(getProductSuccess(res.data))
    } catch (error) {
        dispatch(getProductFailure());
    }
}

export const deleteProduct = async(id, dispatch)=>{
    dispatch(deleteProductStart());
    try {
        const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
    } catch (error) {
        dispatch(deleteProductFailure());
    }
}

export const updateProduct = async(id, product, dispatch)=>{
    dispatch(updateProductStart());
    try {
        const res = await userRequest.put(`/products/${id}`)
        dispatch(updateProductSuccess({id, product}))
    } catch (error) {
        dispatch(updateProductFailure());
    }
}

export const addProduct = async(product, dispatch)=>{
    dispatch(addProductStart());
    try {
        const res = await userRequest.post(`/products`, {product})
        dispatch(addProductSuccess(res.data))
    } catch (error) {
        dispatch(addProductFailure());
    }
}