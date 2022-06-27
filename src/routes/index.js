import { BusinessRegistrationTypes, LoginPage, RegisterPage } from "../pages";
import { AgreementPage } from "../pages/AgreementPage";
import { BusinessDetails } from "../pages/BusinessDetails";
import { LegalInformation } from "../pages/LegalInformation";
import { OTPpage } from "../pages/OTPpage";
import { RegisterSuccess } from "../pages/RegisterSuccess";

const authProtectedRoutes = [
  { path: '/otp', component: OTPpage },
  { path: '/register', component: RegisterPage },
  { path: '/business-registration-types', component: BusinessRegistrationTypes },
  { path: '/business-details', component: BusinessDetails },
  { path: '/legal-informatio', component: LegalInformation },
  { path: '/agreement', component: AgreementPage },
  { path: '/registered-successful', component: RegisterSuccess },
]

const publicRoutes=[
    {path:"/",component:LoginPage},
    {path:"/login",component:LoginPage}
]

export {authProtectedRoutes,publicRoutes}