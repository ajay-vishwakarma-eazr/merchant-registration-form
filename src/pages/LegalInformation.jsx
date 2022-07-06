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
import { PersonOutlineOutlined, PanoramaOutlined, DocumentScannerOutlined } from '@mui/icons-material'
import { NavLink, useNavigate } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import lottie from '../assets/lottie/legalinformation.json'
import { useDispatch, useSelector } from 'react-redux'
export const LegalInformation = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()
  const history = useNavigate()
  const dispatch = useDispatch()
 
  
  return (
    <PageContainer lottie={lottie}>
      <Typography variant={'h4'}>Legal Information</Typography>
      <form
        onSubmit={handleSubmit(data => {
          console.log(data)
          history('/agreement')
        })}>
        <Grid container direction={'column'} rowGap={4}>
          <FormControl error={!!errors['businesName']} variant="outlined">
            <InputLabel htmlFor={'businesName'}>Legal Business Name</InputLabel>
            <OutlinedInput
              id={'businesName'}
              type={'text'}
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
              endAdornment={
                <InputAdornment position="end">
                  <PanoramaOutlined />
                </InputAdornment>
              }
              label="businessOwnerPan"
              {...register('businessOwnerPan', { required: 'Enter buiness owner pan' })}
            />
            {!!errors['businessOwnerPan'] && (
              <FormHelperText id="businessOwnerPan">{errors['businessOwnerPan']?.message}</FormHelperText>
            )}
          </FormControl>

          <Grid container justifyContent={'space-between'}>
            <NavLink  className="button" style={{ textDecoration: 'none', color: 'black' }} to="/business-registration-types">
              <Button
                className="back-button button"
                variant={'contained'}
                type={'submit'}
                size={'large'}
                style={{ height: '56px', width: '160px' }}>
                BACK
              </Button>
            </NavLink>
          
            <Button
              className="button"
              variant={'contained'}
              type={'submit'}
              size={'large'}
              style={{ height: '56px', width: '160px' }}>
              Next
            </Button>
           
          </Grid>
        </Grid>
      </form>
    </PageContainer>
  )
}
