import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: null,
};

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loaduser: (state, action) => {
            state.users = action.payload;
        },
    },
});

export default usersSlice.reducer
export const { loaduser } = usersSlice.actions