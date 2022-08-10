import { configureStore, createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'isLogged',
    initialState: { isLogged: false, uid: null, userEmail: null },
    reducers: {
        logged(state, action) {
            
            state.isLogged = true;
            [state.uid, state.userEmail] = action.payload;


        },
        notLogged(state, action) {
            state.isLogged = false
        }
    }
});

const store = configureStore({
    reducer: userSlice.reducer
})

export const actions = userSlice.actions;
export default store;