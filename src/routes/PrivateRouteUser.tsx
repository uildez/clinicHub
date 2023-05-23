import { Navigate } from 'react-router'
import { useAppSelector } from '../features/hooks/hooks'
interface PrivateRoutesProps {
    userTypeAllowed?: string[],
    children: JSX.Element,
    path?: string
}

export const PrivateRouteUser = ({ userTypeAllowed, children }: PrivateRoutesProps) => {
    const user = useAppSelector((state) => state.rootReducer.auth.user)

    if (!user) {
        return <Navigate to='/' replace={true} />;
    }

    if (!userTypeAllowed || !userTypeAllowed.includes(user.type)) {
        return <Navigate to='/portaldocolaborador/dashboard' replace={true} />;
    }

    return children;
}
