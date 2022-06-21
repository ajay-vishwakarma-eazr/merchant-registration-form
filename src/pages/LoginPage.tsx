import * as React from 'react'
import { useForm } from 'react-hook-form'
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
} from '@mui/material'
import { AlternateEmail, Lock, LockOpen } from '@mui/icons-material'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Auth } from '../auth/AuthContext'
import { Navigate } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import lottie from '../assets/lottie/Login.json'
import { GoogleButton } from '../components/Buttons'

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().min(6).required(),
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

  const [showPassword, setShowPassword] = React.useState(false)

  if (!!user) {
    return <Navigate to={'/'} />
  }

  return (
    <PageContainer lottie={lottie}>
      <Grid container direction={'column'} rowGap={1}>
        <Typography variant={'h3'}>Hello again!</Typography>
        <Typography variant={'h6'} color={'gray'}>
          It's great to have you back
        </Typography>
      </Grid>

      <form
        onSubmit={handleSubmit(async ({ email, password }) => {
          if (auth && Object.keys(errors).length === 0) {
            await signInWithEmailAndPassword(auth, email, password)
            reset({ email: '', password: '' })
          }
        })}>
        <Grid container direction={'column'} rowGap={5}>
          <Grid container direction={'column'} rowGap={2}>
            <FormControl error={!!errors['email']} variant="outlined">
              <InputLabel htmlFor={'email'}>Email address</InputLabel>
              <OutlinedInput
                id={'email'}
                type={'email'}
                endAdornment={
                  <InputAdornment position="end">
                    <AlternateEmail />
                  </InputAdornment>
                }
                label="Email address"
                {...register('email')}
              />
              {!!errors['email'] && <FormHelperText id="email">{errors['email']?.message}</FormHelperText>}
            </FormControl>
            <FormControl error={!!errors['password']} variant="outlined">
              <InputLabel htmlFor={'password'}>Password</InputLabel>
              <OutlinedInput
                id={'password'}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(last => !last)}
                      style={{ marginRight: '-8px' }}
                      edge="end">
                      {showPassword ? <Lock /> : <LockOpen />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                {...register('password')}
              />
              {!!errors['password'] && <FormHelperText id="password">{errors['password']?.message}</FormHelperText>}
            </FormControl>

            <Link align={'right'} underline={'none'} href={'/reset-password'}>
              <Typography>Reset password</Typography>
            </Link>
          </Grid>

          <Grid container direction={'column'} rowGap={2}>
            <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px' }}>
              Login
            </Button>
            <GoogleButton />
          </Grid>

          <Grid container alignItems={'center'} justifyContent={'center'} gap={2}>
            <Typography color={'gray'}>Don't have an account yet?</Typography>
            <Link underline={'none'} href={'/register'}>
              <Typography>Sign up</Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </PageContainer>
  )
}
