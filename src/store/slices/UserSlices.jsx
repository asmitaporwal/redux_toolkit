import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
            // console.log(action.payload);
        },
        removeUser(state, action) {
            // console.log("hi" + action.payload);
            state.splice(action.payload, 1);
        },
        clearAllUsers(state, action) {
            return [];
        },
    },
    extraReducers(builder) {
        builder.addCase(userSlice.actions.clearAllUsers,
            () => {
                return [];
            })
    }
});

console.log(userSlice.actions.addUser());

export default userSlice.reducer;

export const { addUser, removeUser, clearAllUsers } = userSlice.actions;
