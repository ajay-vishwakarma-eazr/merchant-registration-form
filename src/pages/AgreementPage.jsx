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
import {
  AlternateEmail,
  EditOutlined,
  FlagOutlined,
  FormatListNumberedOutlined,
  FormatListNumberedRtlOutlined,
  HomeOutlined,
  LocationCityOutlined,
} from '@mui/icons-material'
import { sendPasswordResetEmail } from 'firebase/auth'
import { Auth } from '../auth/AuthContext'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import lottie from '../assets/lottie/agreement.json'

export const AgreementPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
const history=useNavigate();

  return (
    <PageContainer lottie={lottie}>
      <Grid container direction={'column'} rowGap={1}>
        <Typography variant={'h4'} marginTop="10%">
          Terms & Conditions{' '}
        </Typography>
      </Grid>

      <Typography fontSize={'14px'}>
        Please tick the box below to confirm that you agree to comply with the Terms and Conditons of becoming a
        Merchant in Eazr DigiPayments Pvt. Ltd.
      </Typography>

      <form
        onSubmit={handleSubmit(data => {
          if(data){
history('/registered-sucessful')
          }
        })}>
        <FormControl error={!!errors['checkbox']}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="checkbox" />}
              label={
                <span style={{ fontSize: '13px' }}>
                  I Agree to the
                  <Link href="https://www.itseazr.com/privacy">Terms and Services</Link>
                  <span> and </span>
                  <Link href="https://www.itseazr.com/privacy">Privacy Policy</Link>
                </span>
              }
              {...register('checkbox', { required: 'please aggree terms and condition' })}></FormControlLabel>
            {!!errors['checkbox'] && <FormHelperText>{errors['checkbox']?.message}</FormHelperText>}
          </FormGroup>
        </FormControl>
        <Grid container direction={'column'} rowGap={5}>
            <Button
              variant={'contained'}
              type={'submit'}
              size={'large'}
              style={{ height: '56px', marginTop: '15px' }}
              fullWidth>
              SUBMIT
            </Button>
        </Grid>
      </form>
    </PageContainer>
  )
}
