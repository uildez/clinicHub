import { ThunkDispatch } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { createSlice } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { authLogin, UserType } from "../fetchActions";
import { RootState } from "../root-reducer";

interface AuthState {
    isAuthenticated: boolean;
    user: UserType | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthentication: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authLogin.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload;
            });
    },
});

export const { setAuthentication } = authSlice.actions;
export const authReducer = authSlice.reducer;

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
