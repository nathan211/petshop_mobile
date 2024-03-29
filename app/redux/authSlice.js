import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userToken: null,
        currentUser: null,
    },
    reducers: {
        signIn: {
            reducer(state, action){
                const { token, currentUser } = action.payload;
                state.userToken = token;
                state.currentUser = currentUser;
            },
            prepare(token, currentUser){
                return { payload: { token, currentUser } };
            }
        },
        signOut: {
            reducer(state, action){
                state.userToken = null;
                state.currentUser = null;
            },
        }
    }
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;