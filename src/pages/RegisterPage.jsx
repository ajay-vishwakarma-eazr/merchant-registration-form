import * as React from 'react'
import { Controller, useForm } from 'react-hook-form'
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
  TextField,
  Typography,
} from '@mui/material'
import { AlternateEmail, Lock, LockOpen, Language, Person } from '@mui/icons-material'
import DescriptionIcon from '@mui/icons-material/Description'
import { Navigate, NavLink } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { PageContainer } from '../components/PageContainer'
import lottie from '../assets/lottie/brandinformation.json'

export const RegisterPage = props => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

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
        onSubmit={handleSubmit(data => {
          data
        })}>
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
              {...register('email', { required: 'Please enter your email' })}
            />
            {!!errors['email'] && <FormHelperText>{errors['email']?.message}</FormHelperText>}
          </FormControl>
          <FormControl error={!!errors['name']} variant="outlined">
            <InputLabel htmlFor={'name'}>Brand name</InputLabel>
            <OutlinedInput
              id={'name'}
              type={'text'}
              endAdornment={
                <InputAdornment position="end">
                  <Person />
                </InputAdornment>
              }
              label="Brand name"
              {...register('name', { required: 'Please enter your brand name' })}
            />
            {!!errors['name'] && <FormHelperText>{errors['name']?.message}</FormHelperText>}
          </FormControl>

          <FormControl error={!!errors['category']} variant="outlined">
            <InputLabel htmlFor={'category'}>Business Category</InputLabel>
            <Controller
              render={props => (
                <Select
                  labelId="demo-simple-select-label"
                  id="category"
                  style={{ textAlign: 'left' }}
                  value={businessCategory}
                  label="Business Category"
                  onChange={handleChangeBusinessCategory}>
                  <MenuItem defaultValue="" disabled>
                    Choose
                  </MenuItem>
                  <MenuItem value="10"> Pharmaceutical</MenuItem>
                  <MenuItem value="20">Product- Nutrition</MenuItem>
                </Select>
              )}
              name="category"
              control={control}
              rules={{ required: 'Please choose one' }}
            />
            {!!errors['category'] && <FormHelperText>{errors['category']?.message}</FormHelperText>}
          </FormControl>
          <FormControl error={!!errors['website']} variant="outlined">
            <InputLabel htmlFor={'website'}>Business website</InputLabel>
            <OutlinedInput
              id={'website'}
              type={'text'}
              endAdornment={
                <InputAdornment position="end">
                  <Language />
                </InputAdornment>
              }
              label="Business website"
              {...register('website', { required: 'Please enter website link' })}
            />
            {!!errors['website'] && <FormHelperText id="website">{errors['website']?.message}</FormHelperText>}
          </FormControl>

          <FormControl error={!!errors['order']} variant="outlined">
            <InputLabel htmlFor={'order'}>Average Order Value</InputLabel>
            <Controller
              render={props => (
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  style={{ textAlign: 'left' }}
                  value={props.value}
                  label="Average Order Value"
                  onChange={props.onChange}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="a"> ₹1-₹500</MenuItem>
                  <MenuItem value="b">₹501-₹1000</MenuItem>
                  <MenuItem value={30}> ₹1001-₹3000</MenuItem>
                  <MenuItem value={30}> ₹3001-₹5000</MenuItem>
                </Select>
              )}
              name="order"
              control={control}
              rules={{ required: 'Please choose one' }}
            />
            {!!errors['order'] && <FormHelperText id="order">{errors['order']?.message}</FormHelperText>}
          </FormControl>

          <FormControl error={!!errors['checkbox']}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name="checkbox" defaultChecked />}
                label="On website"
                {...register('checkbox', { required: 'please check one' })}
              />
              <FormControlLabel
                control={<Checkbox name="checkbox" />}
                label="Mobile application"
                {...register('checkbox', { required: 'please check one' })}
              />
              <FormControlLabel
                control={<Checkbox name="checkbox" />}
                label="At store location"
                {...register('checkbox', { required: 'please check one' })}
              />
              {!!errors['checkbox'] && <FormHelperText>{errors['checkbox']?.message}</FormHelperText>}
            </FormGroup>
          </FormControl>

          <FormControl error={!!errors['description']} variant="outlined">
            <InputLabel htmlFor={'description'}>Business Description</InputLabel>
            <OutlinedInput
              id="description"
              label="Business Description"
              multiline
              rows={4}
              endAdornment={
                <InputAdornment position="end">
                  <DescriptionIcon />
                </InputAdornment>
              }
              {...register('description', { required: 'Please enter description', maxLength: 50 })}
            />
            {!!errors['description'] && (
              <FormHelperText id="description">{errors['description']?.message}</FormHelperText>
            )}
          </FormControl>
          {/* <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/business-registration-types"> */}
          <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px' }} fullWidth>
            Next
          </Button>
          {/* </NavLink> */}
        </Grid>
      </form>
    </PageContainer>
  )
}
