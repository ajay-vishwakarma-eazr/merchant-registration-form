import * as React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { Box, Button, FormControl, FormHelperText, FormLabel, Grid, Typography } from '@mui/material'
import { PageContainer } from '../components/PageContainer'
import lottie from '../assets/lottie/Otp.json'
import OtpInput from 'react-otp-input'
import styled from '@emotion/styled'
import '../assets/css/global.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearError, login, verify } from '../store/authlogin/action'
import { useEffect } from 'react'
export const OTPpage = () => {
  const { contactNumber } = useParams()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  useEffect(() => {
    return () => dispatch(clearError())
  }, [])
  const { message, error } = useSelector(state => state.login)
  const [otp, setOtp] = React.useState(null)
  const dispatch = useDispatch()
  const history = useNavigate()
  const onSubmit = data => {
    dispatch(verify(contactNumber, otp, history))
  }

  const resendOTP = () => {
    dispatch(login(contactNumber))
  }

  return (
    <PageContainer lottie={lottie}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction={'column'} rowGap={1} id="otp-container">
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
              A 4-digit OTP has been sent to your mobile number.
            </Typography>
          </Box>

          <FormControl>
            <FormLabel style={{ textAlign: 'left', marginBottom: '20px', marginTop: '20px', marginLeft: '10px' }}>
              Enter OTP
            </FormLabel>
            <OtpInput
              className="otp-box"
              value={otp}
              onChange={e => setOtp(e)}
              numInputs={4}
              inputStyle={{
                fontSize: '18px',
                width: '50px',
                height: '50px',
                margin: '0 0.5rem',
                border: '1px solid gray',
                background: 'transparent',
                borderRadius: '5px',
                color: 'white',
              }}
            />
            {error ? (
              <span style={{ textAlign: 'left', marginTop: '10px', marginLeft: '10px', color: 'red' }}>{error}</span>
            ) : null}
            <p
              underline="none"
              style={{ textAlign: 'left', marginTop: '10px', marginLeft: '10px', color: '#90CAF9  ' }}
              onClick={resendOTP}>
              Resend OTP
            </p>
          </FormControl>
          <Button
            variant={'contained'}
            type={'submit'}
            size={'large'}
            style={{ height: '56px', marginTop: '10px' }}
            fullWidth>
            Verify Otp
          </Button>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/login">
            <Button
              variant={'contained'}
              type={'submit'}
              size={'large'}
              style={{ height: '56px', marginTop: '10px' }}
              fullWidth>
              Back
            </Button>
          </NavLink>
        </Grid>
      </form>
    </PageContainer>
  )
}
