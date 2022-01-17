import {createSlice} from '@reduxjs/toolkit'
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';


const productSlice = createSlice({
    name:"product",
    initialState:{
        products:[],
        isFetching: false,
        error: false
    },
    reducers:{
        //GET ALL
        getProductStart:(state) =>{
            state.isFetching = true
            state.error = false
        },
        getProductSuccess:(state, action) =>{
            state.isFetching = false
            state.products = action.payload;
        },
        getProductFailure:(state) =>{
            state.isFetching = false
            state.error = true;
        },

        //DELETE PRODUCT
        deleteProductStart:(state) =>{
            state.isFetching = true
            state.error = false
        },
        deleteProductSuccess:(state, action) =>{
            state.isFetching = false
            state.products.splice(
                state.products.findIndex((item)=>item._id === action.payload.id),1
            );
            toast.success('Updated Sucessfully', {
                duration: 4000,
                position: 'top-center',
                // Styling
                style: {},
                className: '',
                // Custom Icon
                icon: '👏',
                // Change colors of success/error/loading icon
                iconTheme: {
                  primary: '#000',
                  secondary: '#fff',
                },
                // Aria
                ariaProps: {
                  role: 'status',
                  'aria-live': 'polite',
                },
              });
        },
        deleteProductFailure:(state) =>{
            state.isFetching = false
            state.error = true;
            toast.error('Product was not deleted', {
                duration: 4000,
                position: 'top-center',
                // Styling
                style: {},
                className: '',
                // Custom Icon
                icon: '👏',
                // Change colors of success/error/loading icon
                iconTheme: {
                  primary: '#000',
                  secondary: '#fff',
                },
                // Aria
                ariaProps: {
                  role: 'status',
                  'aria-live': 'polite',
                },
              });
        },

        //UPDATE PRODUCT
        updateProductStart:(state) =>{
            state.isFetching = true
            state.error = false
        },
        updateProductSuccess:(state, action) =>{
            state.isFetching = false
            state.products[state.products.findIndex((item) => item._id === action.payload)] = action.payload.product;
            toast.success('Updated Sucessfully', {
                duration: 4000,
                position: 'top-center',
                // Styling
                style: {},
                className: '',
                // Custom Icon
                icon: '👏',
                // Change colors of success/error/loading icon
                iconTheme: {
                  primary: '#000',
                  secondary: '#fff',
                },
                // Aria
                ariaProps: {
                  role: 'status',
                  'aria-live': 'polite',
                },
              });
        },
        updateProductFailure:(state) =>{
            state.isFetching = false
            state.error = true;
            setTimeout(() => {
                Swal.fire('Sorry!', 'Meal Not Updated', 'error');
              }, 1000);
        },

        //ADD PRODUCT
        addProductStart:(state) =>{
            state.isFetching = true
            state.error = false
        },
        addProductSuccess:(state, action) =>{
            state.isFetching = false;
            state.products.push(action.payload);
            setTimeout(() => {
                Swal.fire('Good job!', 'Meal Added Successfully', 'success');
              }, 1000);
        },
        addProductFailure:(state) =>{
            state.isFetching = false
            state.error = true;
            setTimeout(() => {
                Swal.fire('Sorry!', 'Meal Not Added', 'error');
              }, 1000);
        },
    }
});

export const {
    getProductStart, 
    getProductSuccess, 
    getProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure,
    updateProductStart,
    updateProductSuccess,
    updateProductFailure,
    addProductStart,
    addProductSuccess,
    addProductFailure,

} = productSlice.actions
export default productSlice.reducer;