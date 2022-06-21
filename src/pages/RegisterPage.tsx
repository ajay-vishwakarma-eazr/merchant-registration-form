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
import { Navigate } from 'react-router-dom'
import { Auth } from '../auth/AuthContext'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { PageContainer } from '../components/PageContainer'
import lottie from '../assets/lottie/SignUp.json'

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().min(6).required(),
    repeatPassword: yup.string().test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value
    }),
  })
  .required()

export const RegisterPage = () => {
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
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false)

  if (!!user) {
    return <Navigate to={'/'} />
  }

  return (
    <PageContainer lottie={lottie}>
      <Grid container direction={'column'} rowGap={1}>
        <Typography variant={'h3'}>Join us</Typography>
        <Typography variant={'h5'} color={'gray'}>
          and start coding now
        </Typography>
      </Grid>

      <form
        onSubmit={handleSubmit(async ({ email, password }) => {
          if (auth && Object.keys(errors).length === 0) {
            await createUserWithEmailAndPassword(auth, email, password)
            reset({ email: '', password: '', repeatPassword: '' })
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
            <FormControl error={!!errors['repeatPassword']} variant="outlined">
              <InputLabel htmlFor={'repeatPassword'}>Repeat Password</InputLabel>
              <OutlinedInput
                id={'repeatPassword'}
                type={showPasswordConfirm ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPasswordConfirm(last => !last)}
                      style={{ marginRight: '-8px' }}
                      edge="end">
                      {showPasswordConfirm ? <Lock /> : <LockOpen />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Repeat Password"
                {...register('repeatPassword')}
              />
              {!!errors['repeatPassword'] && (
                <FormHelperText id="repeatPassword">{errors['repeatPassword']?.message}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px' }}>
            Create account
          </Button>

          <Grid container alignItems={'center'} justifyContent={'center'} gap={2}>
            <Typography color={'gray'}>Already have an account?</Typography>
            <Link underline={'none'} href={'/login'}>
              <Typography>Log in</Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </PageContainer>
  )
}
