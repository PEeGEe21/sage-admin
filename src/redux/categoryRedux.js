import {createSlice} from '@reduxjs/toolkit'
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';


const categorySlice = createSlice({
    name:"category",
    initialState:{
        products:[],
        isFetching: false,
        error: false
    },
    reducers:{
        //GET ALL
        getCategoryStart:(state) =>{
            state.isFetching = true
            state.error = false
        },
        getCategorySuccess:(state, action) =>{
            state.isFetching = false
            state.categories = action.payload;
        },
        getCategoryFailure:(state) =>{
            state.isFetching = false
            state.error = true;
        },

        //DELETE PRODUCT
        deleteCategoryStart:(state) =>{
            state.isFetching = true
            state.error = false
        },
        deleteCategorySuccess:(state, action) =>{
            state.isFetching = false
            state.products.splice(
                state.products.findIndex((item)=>item._id === action.payload.id),1
            );
        },
        deleteCategoryFailure:(state) =>{
            state.isFetching = false
            state.error = true;
        },

        //UPDATE PRODUCT
        updateCategoryStart:(state) =>{
            state.isFetching = true
            state.error = false
        },
        updateCategorySuccess:(state, action) =>{
            state.isFetching = false
            state.categories[state.categories.findIndex((item) => item._id === action.payload)] = action.payload.categories;
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
        updateCategoryFailure:(state) =>{
            state.isFetching = false
            state.error = true;
            setTimeout(() => {
                Swal.fire('Sorry!', 'An error occured!', 'error');
              }, 1000);
        },

        //ADD PRODUCT
        addCategoryStart:(state) =>{
            state.isFetching = true
            state.error = false
        },
        addCategorySuccess:(state, action) =>{
            state.isFetching = false;
            state.products.push(action.payload);
            setTimeout(() => {
                Swal.fire('Good job!', 'Category Added Successfully', 'success');
              }, 1000);
        },
        addCategoryFailure:(state) =>{
            state.isFetching = false
            state.error = true;
            setTimeout(() => {
                Swal.fire('Sorry!', 'Category Not Added', 'error');
              }, 1000);
        },
    }
});

export const {
    getCategoryStart, 
    getCategorySuccess, 
    getCategoryFailure,
    deleteCategoryStart,
    deleteCategorySuccess,
    deleteCategoryFailure,
    updateCategoryStart,
    updateCategorySuccess,
    updateCategoryFailure,
    addCategoryStart,
    addCategorySuccess,
    addCategoryFailure,

} = categorySlice.actions
export default categorySlice.reducer;