import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    user: null,
    otp: {
        phone: '',
        hash: ''
    }
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            const { user } = action.payload;
            state.user = user;
            if(user === null){
                state.isAuth = false;
            }
            else {
                state.isAuth = true;
            }
        }
    },
});

export const { setAuth, setOtp } = authSlice.actions;

export default authSlice.reducer;