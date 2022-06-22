import * as React from 'react'
import { useForm } from 'react-hook-form'
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
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
import { AlternateEmail, Lock, LockOpen, Language } from '@mui/icons-material'
import DescriptionIcon from '@mui/icons-material/Description'
import { Navigate, NavLink } from 'react-router-dom'
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const [businessCategory, setBusinessCategory] = React.useState('')
  const [orderValue, setOrderValue] = React.useState('')

  const handleChangeBusinessCategory = event => {
    setBusinessCategory(event.target.value)
  }

  const handleChangeAverageOrderValue = event => {
    setOrderValue(event.target.value)
  }

  return (
    <PageContainer lottie={lottie}>
      <Grid container direction={'column'} rowGap={1}>
        <Typography variant={'h4'}>Brand Information</Typography>
      </Grid>

      <form
        onSubmit={handleSubmit(async () => {
        })}>
        <Grid container direction={'column'} rowGap={5}>
          <Grid container direction={'column'} rowGap={2}>
            <FormControl error={!!errors['email']} variant="outlined">
              <InputLabel htmlFor={'email'}>Work mail</InputLabel>
              <OutlinedInput
                id={'email'}
                type={'email'}
                endAdornment={
                  <InputAdornment position="end">
                    <AlternateEmail />
                  </InputAdornment>
                }
                label="Work mail"
                {...register('email')}
              />
              {!!errors['email'] && <FormHelperText id="email">{errors['email']?.message}</FormHelperText>}
            </FormControl>
            <FormControl error={!!errors['Business Category']} variant="outlined">
              <InputLabel htmlFor={'Business Category'}>Business Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={businessCategory}
                label="Business Category"
                onChange={handleChangeBusinessCategory}>
                <MenuItem value={10}> Pharmaceutical</MenuItem>
                <MenuItem value={20}>Product- Nutrition</MenuItem>
                <MenuItem value={30}> Service- Ed Tech</MenuItem>
                <MenuItem value={30}> Product- Health Aids</MenuItem>
              </Select>
              {!!errors['Business Category'] && (
                <FormHelperText id="password">{errors['Business Category']?.message}</FormHelperText>
              )}
            </FormControl>

            <FormControl error={!!errors['Business website']} variant="outlined">
              <InputLabel htmlFor={'Business website'}>Business website</InputLabel>
              <OutlinedInput
                id={'Business website'}
                type={'text'}
                endAdornment={
                  <InputAdornment position="end">
                    <Language />
                  </InputAdornment>
                }
                label="Business website"
                {...register('Business website')}
              />
              {!!errors['Business website'] && (
                <FormHelperText id="Business website">{errors['Business website']?.message}</FormHelperText>
              )}
            </FormControl>

            <FormControl error={!!errors['Average Order Value']} variant="outlined">
              <InputLabel htmlFor={'Average Order Value'}>Average Order Value</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={orderValue}
                label="Average Order Value"
                onChange={handleChangeAverageOrderValue}>
                <MenuItem value={10}> ₹1-₹500</MenuItem>
                <MenuItem value={20}>₹501-₹1000</MenuItem>
                <MenuItem value={30}> ₹1001-₹3000</MenuItem>
                <MenuItem value={30}> ₹3001-₹5000</MenuItem>
              </Select>
              {!!errors['Average Order Value'] && (
                <FormHelperText id="Average Order Value">{errors['Average Order Value']?.message}</FormHelperText>
              )}
            </FormControl>

            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="On website & mobile application" />
              <FormControlLabel control={<Checkbox />} label="At store loaction" />
            </FormGroup>

            <FormControl error={!!errors['Business website']} variant="outlined">
              <InputLabel htmlFor={'Business website'}>Business Description</InputLabel>
              <OutlinedInput
                id={'Business Description'}
                type={'text'}
                endAdornment={
                  <InputAdornment position="end">
                    <DescriptionIcon />
                  </InputAdornment>
                }
                style={{ paddingBottom: '50px' }}
                label="Business Description"
                {...register('Business Description')}
              />
              {!!errors['Business Description'] && (
                <FormHelperText id="Business Description">{errors['Business Description']?.message}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px' }}>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/business-registration-types">
              {' '}
              Next{' '}
            </NavLink>
          </Button>

          {/* <Grid container alignItems={'center'} justifyContent={'center'} gap={2}>
            <Typography color={'gray'}>Already have an account?</Typography>
            <Link underline={'none'} href={'/login'}>
              <Typography>Log in</Typography>
            </Link>
          </Grid> */}
        </Grid>
      </form>
    </PageContainer>
  )
}