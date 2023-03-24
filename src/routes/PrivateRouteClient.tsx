import React, { ReactNode } from 'react'
import { Navigate } from 'react-router'

const user = false

interface PrivateRoutesProps {
    children: JSX.Element,
    path?: string
}

export const PrivateRouteClient = ({ children }: PrivateRoutesProps) => {
    return user ? children : <Navigate to='/portaldopaciente/entrar' replace={true} />
}
