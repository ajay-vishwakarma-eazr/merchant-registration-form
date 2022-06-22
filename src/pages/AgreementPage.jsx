import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Alert,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
} from '@mui/material'
import { AlternateEmail, EditOutlined, FlagOutlined, FormatListNumberedOutlined, FormatListNumberedRtlOutlined, HomeOutlined, LocationCityOutlined } from '@mui/icons-material'
import { sendPasswordResetEmail } from 'firebase/auth'
import { Auth } from '../auth/AuthContext'
import { Navigate, NavLink } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import lottie from '../assets/lottie/SendingMail.json'

const schema = yup
  .object({
    email: yup.string().required(),
  })
  .required()

export const AgreementPage = () => {
  const { auth, user } = React.useContext(Auth)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const [showInfo, setShowInfo] = React.useState(false)

  if (!!user) {
    return <Navigate to={'/'} />
  }

  return (
    <PageContainer lottie={lottie}>
      <Grid container direction={'column'} rowGap={1}>
        <Typography variant={'h4'} marginTop='20%'>Terms & Conditions </Typography>
      </Grid>

      <Typography  fontSize={'14px'}>This is all related to terms and conditions file so read all the policy carefully</Typography>

      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked /> } label="agree all Terms and conditions"></FormControlLabel>
      </FormGroup>

      <form
        onSubmit={handleSubmit(async ({ email }) => {
          if (auth && Object.keys(errors).length === 0) {
            setShowInfo(true)
            await sendPasswordResetEmail(auth, email)
            reset({ email: '' })
          }
        })}>
        <Grid container direction={'column'} rowGap={5}>

          <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px' }}>
            <NavLink style={{textDecoration:'none', color:'black'}} to="/business-category"> SUBMIT </NavLink>
          </Button>
        </Grid>
      </form>
      
    </PageContainer>
  )
}
