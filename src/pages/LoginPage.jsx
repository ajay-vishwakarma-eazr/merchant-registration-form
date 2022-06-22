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
    email: yup.string().required(),
  })
  .required()

export const LoginPage = () => {
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
      <Grid container direction={'column'} rowGap={1} justifyContent={'center'}>
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
          <Typography variant={'h6'} color={'white'} style={{ textAlign: 'left' }}>
              Welcome to Eazr
            </Typography>
          <Typography variant={'h4'} color={'white'} style={{ textAlign: 'left' }}>
            Merchant Sign up
          </Typography>
        </Box>

        {/* </Box> */}
      </Grid>

      <form onSubmit={handleSubmit(() => {})}>
        <Grid container rowGap={5}>
          <Grid container direction={'column'} rowGap={2}>
            <FormControl error={!!errors['phone']} variant="outlined">
              <InputLabel htmlFor={'phone'}>Phone Number </InputLabel>
              <OutlinedInput
                id={'phone'}
                type={'number'}
                endAdornment={
                  <InputAdornment position="end">
                    <LocalPhone />
                  </InputAdornment>
                }
                label="Phone Number"
                {...register('phone')}
              />
              {!!errors['phone'] && <FormHelperText id="phone">{errors['phone']?.message}</FormHelperText>}
            </FormControl>
          </Grid>

          <Grid container direction={'column'} rowGap={2}>
            <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px' }}>
              <NavLink style={{textDecoration:"none",color:"black"}} to="/otp">Login</NavLink>
            </Button>
          </Grid>
        </Grid>
      </form>
    </PageContainer>
  )
}