import { UserActionTypes } from "./action-types"

interface PayloadType {
    email: string
}

export const loginUser = (payload: PayloadType) => (
    {
        type: UserActionTypes.LOGIN,
        payload
    }
)