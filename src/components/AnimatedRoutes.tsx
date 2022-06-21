import * as React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage, ResetPasswordPage } from '../pages'
import { ProtectedRoute } from './ProtectedRoute'
import { AnimatePresence } from 'framer-motion'

type AnimatedRoutesProps = {
  isAllowed: boolean
}

export const AnimatedRoutes = ({ isAllowed }: AnimatedRoutesProps) => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/register'} element={<RegisterPage />} />
        <Route path={'/reset-password'} element={<ResetPasswordPage />} />
        <Route path={'/'} element={<ProtectedRoute isAllowed={isAllowed} redirectPath={'/login'} />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
