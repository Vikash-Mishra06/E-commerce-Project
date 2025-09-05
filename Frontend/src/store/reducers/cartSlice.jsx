import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
};

const cartsSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        loadcart: (state, action) => {
            state.carts = action.payload;
        },
    },
});

export default cartsSlice.reducer
export const { loadcart } = cartsSlice.actions