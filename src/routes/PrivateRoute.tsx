import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { useAppSelector } from '../features/hooks/hooks'
interface PrivateRoutesProps {
    children: JSX.Element,
    path?: string
}

export const PrivateRoute = ({ children }: PrivateRoutesProps) => {
    const user = useAppSelector((state) => state.rootReducer.auth.user)

    return user ? children : <Navigate to='/portaldocolaborador/login' replace={true} />
}
