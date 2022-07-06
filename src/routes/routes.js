import { BusinessRegistrationTypes, LoginPage, RegisterPage } from "../pages";
import { AgreementPage } from "../pages/AgreementPage";
import { BusinessDetails } from "../pages/BusinessDetails";
import { LegalInformation } from "../pages/LegalInformation";
import { OTPpage } from "../pages/OTPpage";
import { RegisterSuccess } from "../pages/RegisterSuccess";

const authProtectedRoutes = [
  { path: '/register', element: RegisterPage },
  { path: '/business-registration-types', element: BusinessRegistrationTypes },
  { path: '/business-details', element: BusinessDetails },
  { path: '/legal-informatio', element: LegalInformation },
  { path: '/agreement', element: AgreementPage },
  { path: '/registered-successful', element: RegisterSuccess },
]

const publicRoutes = [
  { path: '/', element: LoginPage },
  { path: '/login', element: LoginPage },
  { path: '/otp/:contactNumber', element: OTPpage },
]

export {authProtectedRoutes,publicRoutes}