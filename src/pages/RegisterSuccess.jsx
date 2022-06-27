import * as React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
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
import lottie from '../assets/lottie/congrulationsEffect.json'

export const RegisterSuccess = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [otp, setOtp] = React.useState('')
  const onSubmit = data => {
    console.log(data)
  }
  return (
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
          <Typography variant={'h4'} color={'white'} style={{ textAlign: 'center' }}>
            Congrulations! ✨🎉
          </Typography>
          <Typography variant={'h6'} color={'white'} style={{ textAlign: 'center', marginTop: '15px' }}>
            You are now all set and can start receiving payments from your customers up to INR 15,000.Complete your KYC
            Details to enable benefits like settlements and to extend this limit futher!
          </Typography>
          <Typography variant={'h6'} color={'white'} style={{ textAlign: 'center', marginTop: '15px' }}>
            We have switched you to live mode, go ahead and accept your first payment!
          </Typography>
        </Box>
      </Grid>
    </PageContainer>
  )
}
