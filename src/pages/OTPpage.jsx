import * as React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
} from '@mui/material'
import { AlternateEmail, LocalPhone, Lock, LockOpen } from '@mui/icons-material'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Auth } from '../auth/AuthContext'
import { Navigate } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import lottie from '../assets/lottie/Login.json'
import OtpInput from 'react-otp-input'

const schema = yup
  .object({
    phone: yup.string().required(),
  })
  .required()

export const OTPpage = () => {
  const { auth, user } = React.useContext(Auth)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const [otp, setOtp] = React.useState('')
  return (
    <PageContainer lottie={lottie}>
      <Grid container direction={'column'} rowGap={1}>
        {/* <Box conatiner style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}> */}
        <Box
          component="img"
          sx={{
            height: 30,
            width: 90,
            marginBottom: '10px',
          }}
          alt="Eazr logo"
          src="https://web.eazr.in/static/media/logo-dark.c55dbf8f.png"
        />
        <Box container style={{ display: 'flex', flexDirection: 'column' }}>
          {/* <Typography variant={'h5'} color={'white'} style={{ textAlign: 'left' }}>
              Welcome to Eazr
            </Typography> */}
          <Typography variant={'h4'} color={'white'} style={{ textAlign: 'left' }}>
            Merchant Sign up
          </Typography>
        </Box>
      </Grid>

      <form onSubmit={handleSubmit(() => {})}>
        <Grid container direction={'column'} rowGap={5}>
          <Grid container direction={'column'} rowGap={2}>
            <Typography variant={'h6'} color={'white'} style={{ textAlign: 'left' }}>
              A 4-digit OTP has been sent to your mobile number.
            </Typography>
            <FormControl>
              <FormLabel style={{ textAlign: 'left', marginBottom: '20px', marginTop: '20px', marginLeft: '12px' }}>
                Enter OTP
              </FormLabel>
              <OtpInput
                value={otp}
                onChange={e => setOtp(e.traget.value)}
                numInputs={4}
                inputStyle={{
                  width: '50px',
                  height: '50px',
                  margin: '0 0.5rem',
                  border: '1px solid gray',
                  background: 'transparent',
                  borderRadius: '5px',
                }}
              />
              <Link href="#" underline="none" style={{ textAlign: 'left', marginTop: '10px', marginLeft: '15px' }}>
                Resend OTP
              </Link>
            </FormControl>
          </Grid>

          <Grid container direction={'column'} rowGap={2}>
            <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px' }}>
              <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/register">
            Submit
              </NavLink>
            </Button>
          </Grid>
        </Grid>
      </form>
    </PageContainer>
  )
}