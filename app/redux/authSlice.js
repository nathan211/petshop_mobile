import { createSlice } from '@reduxjs/toolkit';

export const Auth = {
    SIGN_IN: 'SIGN_IN',
    SIGN_OUT: 'SIGN_OUT',
    RESTORE_TOKEN: 'RESTORE_TOKEN',
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isSignOut: false,
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
                state.isSignOut = true;
                state.userToken = null;
                state.currentUser = null;
            },
        }
    }
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;