import * as React from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import '../assets/css/global.css'
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
import { LocalPhone } from '@mui/icons-material'
import { PageContainer } from '../components/PageContainer'
import lottie from '../assets/lottie/Login.json'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/authlogin/action'
import { useEffect } from 'react'
export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()
  const history = useNavigate()
  const { message } = useSelector(state => state.login)

  const onSubmit = data => {
    const contactNumber = getValues('contactNumber')
    dispatch(login(contactNumber))
    history(`/otp/${contactNumber}`)
  }

  const data = (
    <PageContainer lottie={lottie}>
      <Grid container direction={'column'} rowGap={1} justifyContent={'center'}>
        <Box
          component="img"
          sx={{
            height: 98.25,
            width: 120.45,
            marginBottom: '20px',
          }}
          alt="Eazr logo"
          src="https://partner.eazr.in/static/media/logo-sm-light.aa72e935.png"
        />
        <Box container style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant={'h6'} color={'white'} style={{ textAlign: 'left' }}>
            Let's Register Your Brand!
          </Typography>
        </Box>
      </Grid>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowGap={5}>
          <Grid container direction={'column'} rowGap={2}>
            <FormControl variant="outlined" error={!!errors['contactNumber']}>
              <InputLabel>Phone Number </InputLabel>
              <OutlinedInput
                id={'contactNumber'}
                type={'number'}
                autoFocus
                endAdornment={
                  <InputAdornment position="end">
                    <LocalPhone />
                  </InputAdornment>
                }
                label="Phone Number"
                {...register('contactNumber', {
                  required: 'Please enter your phone number',
                  minLength: {value:10, message: 'Enter 10 digit number' },
                  maxLength: {value:10, message: 'Enter 10 digit number' },
                })}
              />
              {!!errors['contactNumber'] && <FormHelperText>{errors['contactNumber']?.message}</FormHelperText>}
            </FormControl>
          </Grid>

          <Grid container direction={'column'} rowGap={2}>
            <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px' }} fullWidth>
              Proceed
            </Button>
            <Box container style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant={'p'} color={'white'} style={{ textAlign: 'left', fontSize: '12px' }}>
                By signing up you agree to our privacy policy and terms of use. @2022 All Right Reserved
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </form>
    </PageContainer>
  )

  return <>{data}</>
}

