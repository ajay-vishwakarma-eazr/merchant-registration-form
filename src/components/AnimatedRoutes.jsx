import * as React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage } from '../pages'
import { AnimatePresence } from 'framer-motion'
import { OTPpage } from '../pages/OTPpage'
import { LegalInformation } from '../pages/LegalInformation'
import {BusinessRegistrationTypes } from '../pages/BusinessRegistrationTypes'
import { AgreementPage } from '../pages/AgreementPage'
import { BusinessDetails } from '../pages/BusinessDetails'
import { RegisterSuccess } from '../pages/RegisterSuccess'

export const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/otp/:contactNumber'} element={<OTPpage />} />
        <Route path={'/register'} element={<RegisterPage />} />
        <Route path={'/registered-sucessful'} element={<RegisterSuccess />} />
        <Route path={'/business-registration-types'} element={<BusinessRegistrationTypes />} />
        <Route path={'/business-details'} element={<BusinessDetails />} />
        <Route path={'/legal-information'} element={<LegalInformation />} />
        <Route path={'/agreement'} element={<AgreementPage />} />
      </Routes>
    </AnimatePresence>
  )
}
