import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
    products: [],
    selectedProduct:{},
    loading:false,
}

const BASE_URL = 'https://fakestoreapi.com'

export const getAllProducts = createAsyncThunk('getAllProducts', async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data
})

export const getProductById = createAsyncThunk('getProductById', async (id) => {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data
})

export const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{

    },

    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state,action) => {
            state.loading = true;
        }),
        builder.addCase(getAllProducts.fulfilled, (state,action) => {
            state.loading = false;
            state.products = action.payload;
        }),
        builder.addCase(getProductById.pending, (state,action) => {
            state.loading = true;
        }),
        builder.addCase(getProductById.fulfilled, (state,action) => {
            state.loading = false;
            state.selectedProduct = action.payload;
        })
    }
})

export const {} = productSlice.actions
export default productSlice.reducer