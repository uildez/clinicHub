import { combineReducers } from 'redux';
import authSlice from '../features/auth/authSlice';
import authSliceClient from '../features/client/authSliceClient';
import { clientsSlice } from '../features/client/fecthClients';
import registerClient from '../features/client/registerClient';

const rootReducer = combineReducers({
    auth: authSlice,
    authClient: authSliceClient,
    registerClient: registerClient,
    clients: clientsSlice.reducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;