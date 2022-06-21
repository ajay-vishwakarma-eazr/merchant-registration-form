import * as React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

type ProtectedRouteProps = {
  isAllowed: boolean
  redirectPath: string
}

export const ProtectedRoute = ({ isAllowed, redirectPath }: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }
  return <Outlet />
}
