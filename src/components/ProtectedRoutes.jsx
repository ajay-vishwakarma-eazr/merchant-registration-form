import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export function ProtectedRoutes() {
  const { pageCompleted } = useSelector(state => state.partnerRegistrationReducer)
  return pageCompleted !== 'brand-page-completed' ? (
    <Navigate to="/register" />
  ) : (
    <Outlet />
  )
}
