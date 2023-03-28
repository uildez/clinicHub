export interface User {
    _id: string,
    name: string,
    email: string,
    type: string,
    createdAt: string,
    __v: number
}

export interface LoginData {
    email: string;
    password: string;
}

export interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
}
