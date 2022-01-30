import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import {publicRequest, userRequest} from '../requestMethods'
import { 
    addProductFailure, 
    addProductStart, 
    addProductSuccess, 
    deleteProductFailure, 
    deleteProductStart, 
    deleteProductSuccess, 
    getProductFailure, 
    getProductStart, 
    getProductSuccess, 
    updateProductFailure, 
    updateProductStart, 
    updateProductSuccess } from "./productRedux";
import { 
    addCategoryFailure, 
    addCategoryStart, 
    addCategorySuccess, 
    getCategoryFailure, 
    getCategoryStart, 
    getCategorySuccess, 
    updateCategoryFailure, 
    updateCategoryStart, 
    updateCategorySuccess } from "./categoryRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("auth/login/", user)
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure())
    }
}


//Products

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try{
        const res = await publicRequest.get("/products/")
        dispatch(getProductSuccess(res.data));

    }catch(err){
        dispatch(getProductFailure())
    }
}

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try{
        const res = await publicRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(res.data));

    }catch(err){
        dispatch(deleteProductFailure())
    }
}

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try{
        const res = await publicRequest.put(`/products/${id}/`, product)
        dispatch(updateProductSuccess(res.data));
        // dispatch(updateProductSuccess(id, product));

    }catch(err){
        dispatch(updateProductFailure())
    }
}

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try{
        const res = await publicRequest.post(`/products/`, product);
        dispatch(addProductSuccess(res.data));

    }catch(err){
        dispatch(addProductFailure())
    }
}


//CATEGORIES
export const getCategories = async (dispatch) => {
    dispatch(getCategoryStart());
    try{
        const res = await publicRequest.get("/category/")
        dispatch(getCategorySuccess(res.data));

    }catch(err){
        dispatch(getCategoryFailure())
    }
}

export const addCategory = async (category, dispatch) => {
    dispatch(addCategoryStart());
    try{
        const res = await publicRequest.post(`/category/`, category);
        dispatch(addCategorySuccess(res.data));

    }catch(err){
        dispatch(addCategoryFailure())
    }
}

export const updateCategory= async (id, category, dispatch) => {
    dispatch(updateCategoryStart());
    try{
        const res = await publicRequest.put(`/category/${id}/`, category)
        dispatch(updateCategorySuccess(res.data));

    }catch(err){
        dispatch(updateCategoryFailure())
    }
}