import * as React from 'react'
import { useForm } from 'react-hook-form'
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
import {
  PersonOutlineOutlined,
  EditOutlined,
  FlagOutlined,
  FormatListNumberedOutlined,
  FormatListNumberedRtlOutlined,
  HomeOutlined,
  LocationCityOutlined,
  PanoramaOutlined,
  DraftsOutlined,
} from '@mui/icons-material'

import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import lottie from '../assets/lottie/businessdetails.json'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export const BusinessDetails = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const history = useNavigate()
  const dispatch = useDispatch()
  
  return (
    <PageContainer lottie={lottie}>
      <Typography variant={'h4'}>Business Details</Typography>

      <form
        onSubmit={handleSubmit(data => {
          history('/agreement')
        })}>
        <Grid container direction={'column'} rowGap={3}>
          <FormControl error={!!errors['name']} variant="outlined">
            <InputLabel htmlFor={'name'}>Business Owner Name</InputLabel>
            <OutlinedInput
              id={'name'}
              type={'text'}
              autoComplete="off"
              endAdornment={
                <InputAdornment position="end">
                  <PersonOutlineOutlined />
                </InputAdornment>
              }
              label="Business Owner Name"
              {...register('name', { required: 'Please enter Business owner name' })}
            />
            {!!errors['name'] && <FormHelperText id="name">{errors['name']?.message}</FormHelperText>}
          </FormControl>

          <FormControl error={!!errors['pan']} variant="outlined">
            <InputLabel htmlFor={'pan'}>Business Owner PAN</InputLabel>
            <OutlinedInput
              id={'pan'}
              type={'text'}
              autoComplete="off"
              endAdornment={
                <InputAdornment position="end">
                  <PanoramaOutlined />
                </InputAdornment>
              }
              label="Business Owner PAN"
              {...register('pan', { required: 'Please enter owner PAN' })}
            />
            {!!errors['pan'] && <FormHelperText id={'pan'}>{errors['pan']?.message}</FormHelperText>}
          </FormControl>

          <FormControl error={!!errors['aadharNo']} variant="outlined">
            <InputLabel htmlFor={'aadharNo'}>Business Owner Aadhar No.</InputLabel>
            <OutlinedInput
              id={'aadharNo'}
              type={'number'}
              autoComplete="off"
              endAdornment={
                <InputAdornment position="end">
                  <DraftsOutlined />
                </InputAdornment>
              }
              label="Business Owner Aadhar No."
              {...register('aadharNo', { required: 'Please enter Addhar No.' })}
            />
            {!!errors['aadharNo'] && <FormHelperText id="aadharNo">{errors['aadharNo']?.message}</FormHelperText>}
          </FormControl>
          <FormControl error={!!errors['address']} variant="outlined" fullWidth>
            <InputLabel htmlFor={'address'}>Address</InputLabel>
            <OutlinedInput
              id={'address'}
              type={'text'}
              autoComplete="off"
              endAdornment={
                <InputAdornment position="end">
                  <HomeOutlined />
                </InputAdornment>
              }
              label="address"
              {...register('address', { required: 'Please enter address' })}
            />
            {!!errors['address'] && <FormHelperText id="address">{errors['address']?.message}</FormHelperText>}
          </FormControl>
          <Grid container sx={{ direction: 'row' }}>
            <FormControl error={!!errors['pincode']} variant="outlined" sx={{ width: '48%' }}>
              <InputLabel htmlFor={'pincode'}>Pincode</InputLabel>
              <OutlinedInput
                id={'pincode'}
                type={'number'}
                autoComplete="off"
                endAdornment={
                  <InputAdornment position="end">
                    <FormatListNumberedRtlOutlined />
                  </InputAdornment>
                }
                label="pincode"
                {...register('pincode', {
                  required: 'Enter Pincode',
                  maxLength: { value: 6, message: 'Enter valid pincode' },
                  minLength: { value: 6, message: 'Enter valid pincode' },
                })}
              />
              {!!errors['pincode'] && <FormHelperText id="pincode">{errors['pincode']?.message}</FormHelperText>}
            </FormControl>
            <FormControl error={!!errors['city']} variant="outlined" sx={{ width: '48%', marginLeft: '12px' }}>
              <InputLabel htmlFor={'city'}>City</InputLabel>
              <OutlinedInput
                id={'city'}
                type={'text'}
                autoComplete="off"
                endAdornment={
                  <InputAdornment position="end">
                    <LocationCityOutlined />
                  </InputAdornment>
                }
                label="City"
                {...register('city', { required: 'Enter city' })}
              />
              {!!errors['city'] && <FormHelperText id="city">{errors['city']?.message}</FormHelperText>}
            </FormControl>
          </Grid>

          <FormControl error={!!errors['state']} variant="outlined" fullWidth>
            <InputLabel htmlFor={'state'}>State</InputLabel>
            <OutlinedInput
              id={'state'}
              type={'text'}
              autoComplete="off"
              endAdornment={
                <InputAdornment position="end">
                  <FlagOutlined />
                </InputAdornment>
              }
              label="State"
              {...register('state', { required: 'Enter state' })}
            />
            {!!errors['state'] && <FormHelperText>{errors['state']?.message}</FormHelperText>}
          </FormControl>

          <Grid container justifyContent={'space-between'}>
            <NavLink
              className="back-button"
              style={{ textDecoration: 'none', color: 'black' }}
              to="/business-registration-types">
              <Button
                variant={'contained'}
                type={'submit'}
                size={'large'}
                style={{ height: '56px', width: '170px' }}
                fullWidth>
                BACK
              </Button>
            </NavLink>

            <Button
              variant={'contained'}
              type={'submit'}
              size={'large'}
              style={{ height: '56px', width: '170px' }}
              fullWidth>
              NEXT
            </Button>
          </Grid>
        </Grid>
      </form>
    </PageContainer>
  )
}
