import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStateClient, LoginData, Client } from 'types.utils';
import { RootState } from 'redux/root-reducer';

const client = JSON.parse(localStorage.getItem('client') ?? 'null');

const initialState: AuthStateClient = {
    client: client,
    loading: false,
    error: null,
};

const authSliceClient = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginClientSuccess: (state, action) => {
            const { client } = action.payload
            localStorage.setItem('client', JSON.stringify(client));
            state.client = client
            state.loading = false;
            state.error = null;
            if (client) {

            }
        },
        loginClientStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginClientFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        logoutClient: (state) => {
            state.client = null;
        },
    },
});

export const { loginClientStart, loginClientSuccess, loginClientFailure, logoutClient } = authSliceClient.actions;

export const loginClient = createAsyncThunk('auth/loginClient', async (data: LoginData, { rejectWithValue, dispatch }) => {
    try {
        dispatch(loginClientStart());
        const response = await axios.post<Client>('https://backend-clinic-hub.vercel.app/authClients/authenticate', data);
        dispatch(loginClientSuccess(response.data));
        return response.data;
    } catch (error: any) {
        dispatch(loginClientFailure(error.response.data));
        console.log(error.message)
        return rejectWithValue(error.response.data);
    }
})

export const logoutActionClient = () => async (dispatch: any) => {
    dispatch(logoutClient());
    localStorage.removeItem('client');
};

export const selectCurrentClient = (state: RootState) => state

export default authSliceClient.reducer;
