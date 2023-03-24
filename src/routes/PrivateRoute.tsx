import React, { ReactNode } from 'react'
import { Navigate } from 'react-router'

const client = true

interface PrivateRoutesProps {
    children: JSX.Element,
    path?: string
}

export const PrivateRoute = ({ children }: PrivateRoutesProps) => {
    return client ? children : <Navigate to='/portaldocolaborador/login' replace={true} />
}
