import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'
import { AnimatePresence } from 'framer-motion'
import { OTPpage } from '../pages/OTPpage'
import { LegalInformation } from '../pages/LegalInformation'
import { BusinessRegistrationTypes } from '../pages/BusinessRegistrationTypes'
import { AgreementPage } from '../pages/AgreementPage'
import { BusinessDetails } from '../pages/BusinessDetails'
import { RegisterSuccess } from '../pages/RegisterSuccess'
import { useDispatch, useSelector } from 'react-redux'
import { ProtectedRoutes } from './ProtectedRoutes'

export const AnimatedRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path={'/*'} element={<LoginPage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/otp/:contactNumber'} element={<OTPpage />} />
        <Route path={'/register'} element={<ProtectedRoutes Component={RegisterPage} />} />
        <Route path={'/business-details/:_id'} element={<BusinessDetails/>} />
        <Route path={'/legal-information'} element={<ProtectedRoutes Component={LegalInformation} />} />
        <Route path={'/registered-sucessful'} element={<ProtectedRoutes Component={RegisterSuccess} />} />
        <Route
          path={'/business-registration-types'}
          element={<ProtectedRoutes Component={BusinessRegistrationTypes} />}
        />
        <Route path={'/agreement'} element={<ProtectedRoutes Component={AgreementPage} />} />
      </Routes>
    </AnimatePresence>
  )
}
