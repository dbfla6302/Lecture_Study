import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    productList: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getAllProduct(state, action){
            state.productList = action.payload.data;
        }
    }
});

export const productActions = productSlice.actions;
export default productSlice.reducer;