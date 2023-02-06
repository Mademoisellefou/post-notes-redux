import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    { id: '0', name: 'Charlotte W.' },
    { id: '1', name: 'Sander F.' },
    { id: '2', name: 'Blame the Mono' }
]

const usersSlice = createSlice({
    name:'posts',
    initialState,
    reducers: {
    }
}) 

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;