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
    error: { error: string | null };
}
export interface AuthStateClient {
    client: Client | null;
    loading: boolean;
    error: { error: string | null };
}
export interface Client {
    _id: string,
    name: string,
    email: string,
    password: string,
    date: Date,
    phone: string,
    cpf: string,
    createdAt: string,
}
