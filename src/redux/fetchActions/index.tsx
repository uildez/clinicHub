import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface UserType {
    user: {
        _id: string,
        name: string,
        email: string,
        type: string,
        createdAt: string,
        __v: number
    },
    token: string
}

export const authLogin = createAsyncThunk(
    'auth/authenticate',
    async (user: UserType) => {
        const response = await axios.post('https://backend-clinic-hub.vercel.app/auth/authenticate', user);
        return response.data;
    }
);

interface AuthState {
    isAuthenticated: boolean;
    user: UserType | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
};