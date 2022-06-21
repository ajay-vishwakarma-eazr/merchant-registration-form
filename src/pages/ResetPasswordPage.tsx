import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Alert,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
} from '@mui/material'
import { AlternateEmail } from '@mui/icons-material'
import { sendPasswordResetEmail } from 'firebase/auth'
import { Auth } from '../auth/AuthContext'
import { Navigate } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import lottie from '../assets/lottie/SendingMail.json'

const schema = yup
  .object({
    email: yup.string().required(),
  })
  .required()

export const ResetPasswordPage = () => {
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
        <Typography variant={'h3'}>Forgot your password?</Typography>
        <Typography variant={'h6'} color={'gray'}>
          We'll send you a link to reset it
        </Typography>
      </Grid>

      <form
        onSubmit={handleSubmit(async ({ email }) => {
          if (auth && Object.keys(errors).length === 0) {
            setShowInfo(true)
            await sendPasswordResetEmail(auth, email)
            reset({ email: '' })
          }
        })}>
        <Grid container direction={'column'} rowGap={5}>
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

          <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px' }}>
            Reset password
          </Button>

          <Grid container alignItems={'center'} justifyContent={'center'} gap={2}>
            <Typography color={'gray'}>Already have an account?</Typography>
            <Link underline={'none'} href={'/login'}>
              <Typography>Log in</Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
      {showInfo && (
        <Alert severity="info">
          If a matching account was found, an email will be sent to allow you to reset your password.
        </Alert>
      )}
    </PageContainer>
  )
}
