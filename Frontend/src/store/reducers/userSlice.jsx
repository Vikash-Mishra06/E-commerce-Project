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
        logout: (state) => {
      state.users = null; // clear user when logging out
      localStorage.removeItem("user"); // optional: clear from localStorage
    },
    },
});

export default usersSlice.reducer
export const { loaduser, logout  } = usersSlice.actions