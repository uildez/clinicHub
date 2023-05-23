import { Navigate } from 'react-router'
import { useAppSelector } from '../features/hooks/hooks'
interface PrivateRoutesProps {
    children: JSX.Element,
    path?: string
}

export const PrivateRouteClient = ({ children }: PrivateRoutesProps) => {
    const client = useAppSelector((state) => state.rootReducer.authClient.client)

    return client ? children : <Navigate to='/' replace={true} />
}
