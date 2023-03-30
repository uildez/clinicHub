import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, LoginData, User } from 'types.utils';
import { RootState } from 'redux/root-reducer';

const user = JSON.parse(localStorage.getItem('user') ?? 'null');

const initialState: AuthState = {
    user: user,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            const { user } = action.payload
            localStorage.setItem('user', JSON.stringify(user));
            state.user = user
            state.loading = false;
            state.error = null;
        },
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            if (state.error !== null) {
                state.error.error = action.payload;
            }
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export const login = createAsyncThunk('auth/login', async (data: LoginData, { rejectWithValue, dispatch }) => {
    try {
        dispatch(loginStart());
        const response = await axios.post<User>('https://backend-clinic-hub.vercel.app/auth/authenticate', data);
        dispatch(loginSuccess(response.data));
        return response.data;
    } catch (error: any) {
        dispatch(loginFailure(error.response.data));
        console.log(error.message)
        return rejectWithValue(error.response.data);
    }
})

export const logoutAction = () => async (dispatch: any) => {
    dispatch(logout());
    localStorage.removeItem('user');
};

export const selectCurrentUser = (state: RootState) => state

export default authSlice.reducer;
