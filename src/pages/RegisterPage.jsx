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
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import lottie from '../assets/lottie/brandinformation.json'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPartnerCategory } from '../store/partnerCategory/action'
import ClipLoader from 'react-spinners/ClipLoader'
import { checkPage } from '../store/registerPartner/action'
export const RegisterPage = props => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()
  const { partnerCategory, loading } = useSelector(state => state.partnerCategory)
  const history = useNavigate()
  useEffect(() => {
    dispatch(getPartnerCategory())
  }, [])

  const onSubmit = data => {
    console.log(JSON.stringify(data))
    const formCompleted = 'brand-page-completed'
    dispatch(checkPage(formCompleted))
    history('/business-registration-types')
  }
  return (
    <PageContainer lottie={lottie}>
      <Grid container direction={'column'} rowGap={1}>
        <Typography variant={'h4'}>Brand Information</Typography>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction={'column'} rowGap={2}>
          <FormControl error={!!errors['email']} variant="outlined">
            <InputLabel htmlFor={'email'}>Work mail</InputLabel>
            <OutlinedInput
              id={'email'}
              type={'email'}
              autoComplete="off"
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
              autoComplete="off"
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

          {loading === true ? (
            <ClipLoader color="#bbbbbb" size={60} />
          ) : (
            <FormControl error={!!errors['category']} variant="outlined">
              <InputLabel htmlFor={'category'}>Business Category</InputLabel>
              <Controller
                render={props => (
                  <Select
                    labelId="demo-simple-select-label"
                    id="category"
                    style={{ textAlign: 'left' }}
                    label="Business Category"
                    defaultValue=""
                    {...register('category', { required: 'Please choose one' })}>
                    {partnerCategory.map((items, index) => {
                      return (
                        <MenuItem key={index} value={items.id}>
                          {items.name}
                        </MenuItem>
                      )
                    })}
                  </Select>
                )}
                name="category"
                control={control}
              />
              {!!errors['category'] && <FormHelperText>{errors['category']?.message}</FormHelperText>}
            </FormControl>
          )}
          <FormControl error={!!errors['website']} variant="outlined">
            <InputLabel htmlFor={'website'}>Business website url</InputLabel>
            <OutlinedInput
              id={'website'}
              type={'text'}
              autoComplete="off"
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
                  label="Average Order Value"
                  {...register('order', { required: 'Please select one' })}
                  defaultValue="">
                  <MenuItem value={'₹1-₹500'}> ₹1-₹500</MenuItem>
                  <MenuItem value={'₹501-₹1000'}>₹501-₹1000</MenuItem>
                  <MenuItem value={'₹1001-₹3000'}> ₹1001-₹3000</MenuItem>
                  <MenuItem value={'₹3001-₹5000'}> ₹3001-₹5000</MenuItem>
                </Select>
              )}
              name="order"
              control={control}
            />
            {!!errors['order'] && <FormHelperText id="order">{errors['order']?.message}</FormHelperText>}
          </FormControl>

          <FormControl error={!!errors['Mobile application']}>
            <FormControlLabel
              control={<Checkbox name="Mobile application" checked />}
              label="Mobile application"
              {...register('Mobile application', { required: 'please check' })}
            />
            {!!errors['Mobile application'] && <FormHelperText>{errors['Mobile application']?.message}</FormHelperText>}
          </FormControl>
          <FormControl>
            <FormControlLabel control={<Checkbox name="On website" />} label="On website" {...register('On website')} />
          </FormControl>
          <FormControl>
            <FormControlLabel
              control={<Checkbox name="At store location" />}
              label="At store location"
              {...register('At store location')}
            />
          </FormControl>
          <FormControl error={!!errors['description']} variant="outlined">
            <InputLabel htmlFor={'description'}>Business Description</InputLabel>
            <OutlinedInput
              id="description"
              label="Business Description"
              autoComplete="off"
              multiline
              rows={4}
              endAdornment={
                <InputAdornment position="end">
                  <DescriptionIcon />
                </InputAdornment>
              }
              {...register('description', {
                required: 'Please enter description',
                maxLength: { value: 50, message: 'Maximum 50 words are allowed' },
              })}
            />
            {!!errors['description'] && (
              <FormHelperText id="description">{errors['description']?.message}</FormHelperText>
            )}
          </FormControl>
          <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px' }} fullWidth>
            Next
          </Button>
        </Grid>
      </form>
    </PageContainer>
  )
}
