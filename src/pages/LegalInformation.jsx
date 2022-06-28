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
import { PersonOutlineOutlined, PanoramaOutlined, DocumentScannerOutlined } from '@mui/icons-material'
import { Navigate, NavLink } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import lottie from '../assets/lottie/legalinformation.json'
import styled from '@emotion/styled'


export const LegalInformation = () => {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  return (
    <PageContainer lottie={lottie}>
      
        <Typography variant={'h4'}>Legal Information</Typography>
            <form
        onSubmit={handleSubmit(data => {
          console.log(data)
        })}>
        <Grid container direction={'column'} rowGap={4}>
          <FormControl error={!!errors['businesName']} variant="outlined">
            <InputLabel htmlFor={'businesName'}>Legal Business Name</InputLabel>
            <OutlinedInput
              id={'businesName'}
              type={'text'}
              endAdornment={
                <InputAdornment position="end">
                  <PersonOutlineOutlined />
                </InputAdornment>
              }
              label="Legal Business Name"
              {...register('businesName', { required: 'Enter legal buiness name' })}
            />
            {!!errors['businesName'] && (
              <FormHelperText id="businesName">{errors['businesName']?.message}</FormHelperText>
            )}
          </FormControl>

          <FormControl error={!!errors['businessPan']} variant="outlined">
            <InputLabel htmlFor={'businessPan'}>Business PAN</InputLabel>
            <OutlinedInput
              id={'businessPan'}
              type={'text'}
              endAdornment={
                <InputAdornment position="end">
                  <PanoramaOutlined />
                </InputAdornment>
              }
              label="Business PAN"
              {...register('businessPan', { required: 'Enter Business PAN' })}
            />
            {!!errors['businessPan'] && (
              <FormHelperText id="businessPan">{errors['businessPan']?.message}</FormHelperText>
            )}
          </FormControl>

          <FormControl error={!!errors['Business GST No.']} variant="outlined">
            <InputLabel htmlFor={'businessGST'}>Business GST No.</InputLabel>
            <OutlinedInput
              id={'businessGST'}
              type={'text'}
              endAdornment={
                <InputAdornment position="end">
                  <DocumentScannerOutlined />
                </InputAdornment>
              }
              label="Business GST No."
              {...register('businessGST')}
            />
            {/* {!!errors['Business GST No.'] && (
              <FormHelperText id="Business GST No.">{errors['Business GST No.']?.message}</FormHelperText>
            )} */}
          </FormControl>

          <FormControl error={!!errors['businessOwnerName']} variant="outlined">
            <InputLabel htmlFor={'businessOwnerName'}>Business Owner Name</InputLabel>
            <OutlinedInput
              id={'businessOwnerName'}
              type={'text'}
              endAdornment={
                <InputAdornment position="end">
                  <PersonOutlineOutlined />
                </InputAdornment>
              }
              label="businessOwnerName"
              {...register('businessOwnerName', { required: 'Enter buiness owner name' })}
            />
            {!!errors['businessOwnerName'] && (
              <FormHelperText id="businessOwnerName">{errors['businessOwnerName']?.message}</FormHelperText>
            )}
          </FormControl>

          <FormControl error={!!errors['businessOwnerPan']} variant="outlined">
            <InputLabel htmlFor={'businessOwnerPan'}>Business Owner Pan</InputLabel>
            <OutlinedInput
              id={'businessOwnerPan'}
              type={'text'}
              endAdornment={
                <InputAdornment position="end">
                  <PanoramaOutlined />
                </InputAdornment>
              }
              label="businessOwnerPan"
              {...register('businessOwnerPan',{required:"Enter buiness owner pan"})}
            />
            {!!errors['businessOwnerPan'] && (
              <FormHelperText id="businessOwnerPan">{errors['businessOwnerPan']?.message}</FormHelperText>
            )}
          </FormControl>

          <Grid container justifyContent={'space-between'}>
            <NavLink
              className="back-button"
              style={{ textDecoration: 'none', color: 'black' }}
              to="/business-registration-types">
              <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px', width: '170px' }}>
                BACK
              </Button> 
            </NavLink>
            {/* <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/agreement"> */}
              <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px', width: '170px' }}>
                Next
              </Button>
            {/* </NavLink> */}
          </Grid>
        </Grid>
      </form>
    </PageContainer>
  )
}
