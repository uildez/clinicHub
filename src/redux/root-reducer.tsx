import authSlice from '../features/auth/authSlice';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authSlice,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;