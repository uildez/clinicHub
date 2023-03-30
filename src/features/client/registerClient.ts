import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStateClient, Client } from 'types.utils';
import { RootState } from 'redux/root-reducer';

const initialState: AuthStateClient = {
    client: null,
    loading: false,
    error: null,
};

const registerClientSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerClientSuccess: (state, action) => {
            const { client } = action.payload
            state.client = client
            state.loading = false;
            state.error = null;
        },
        registerClientStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        registerClientFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            if (state.error !== null) {
                state.error.error = action.payload;
            }
        }
    },
});

export const {
    registerClientSuccess,
    registerClientStart,
    registerClientFailure
} = registerClientSlice.actions;


export const registerClient = createAsyncThunk('auth/registerClient', async (data: Client, { rejectWithValue, dispatch }) => {
    try {
        dispatch(registerClientStart());
        const response = await axios.post<Client>('https://backend-clinic-hub.vercel.app/authClients/register', data);
        dispatch(registerClientSuccess(response.data));
        return response.data;
    } catch (error: any) {
        dispatch(registerClientFailure(error.response.data));
        console.log(error.message)
        return rejectWithValue(error.response.data);
    }
})

export const selectCurrentClient = (state: RootState) => state

export default registerClientSlice.reducer;
