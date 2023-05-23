import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from 'redux/root-reducer';
import { Client } from 'types.utils';

interface ClientsState {
    clients: Client[],
    loading: boolean,
    error: string | null
}

const initialState: ClientsState = {
    clients: [],
    loading: false,
    error: null,
};

export const fetchClients = createAsyncThunk(
    'auth/fetchClients',
    async () => {
        const response = await axios.get<Client[]>('https://backend-clinic-hub.vercel.app/authClients/clients');
        return response.data;
    }
) as any;

export const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchClients.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchClients.fulfilled, (state, action) => {
            state.loading = false;
            state.clients = action.payload;
        });
        builder.addCase(fetchClients.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Algo deu errado';
        });
    },
});

export const selectClients = (state: RootState) => state.clients;

export default clientsSlice.reducer;