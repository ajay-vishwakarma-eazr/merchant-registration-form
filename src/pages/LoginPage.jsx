import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
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
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material'
import { LocalPhone } from '@mui/icons-material'
import { PageContainer } from '../components/PageContainer'
import lottie from '../assets/lottie/Login.json'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/authlogin/action'
import { useEffect } from 'react'
import axios from 'axios'
import { ip } from '../config/config'
export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()
  const history = useNavigate()
  const { message } = useSelector(state => state.login)

  const onSubmit = data => {
    const name = getValues('name')
    axios.post(`${ip}/leads-agents`, { name }).then(res => {
      history(`/business-details/${res.data._id}`)
    })
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
            Let's Register Lead!
          </Typography>
        </Box>
      </Grid>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowGap={5}>
          <Grid container direction={'column'} rowGap={2}>
            <FormControl error={!!errors['name']} variant="outlined">
              <InputLabel>Lead Agents</InputLabel>
              <Controller
                render={props => (
                  <Select
                    labelId="demo-simple-select-label"
                    style={{ textAlign: 'left' }}
                    label="Lead Agents"
                    defaultValue=""
                    {...register('name', { required: 'Please choose one' })}>
                    <MenuItem value={'Ankita'}>Ankita</MenuItem>
                    <MenuItem value={'Amreet'}>Amreet</MenuItem>
                    <MenuItem value={'Samreen'}>Samreen</MenuItem>
                  </Select>
                )}
                name="name"
                control={control}
              />
              {!!errors['name'] && <FormHelperText>{errors['name']?.message}</FormHelperText>}
            </FormControl>
          </Grid>

          <Grid container direction={'column'} rowGap={2}>
            <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px' }} fullWidth>
              NEXT
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
