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
import { sendPasswordResetEmail } from 'firebase/auth'
import { Auth } from '../auth/AuthContext'
import { Navigate, NavLink } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import lottie from '../assets/lottie/SendingMail.json'

const schema = yup
  .object({
    email: yup.string().required(),
  })
  .required()

export const BusinessDetails = () => {
  const { auth, user } = React.useContext(Auth)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const [showInfo, setShowInfo] = React.useState(false)

  if (!!user) {
    return <Navigate to={'/'} />
  }

  return (
    <PageContainer lottie={lottie}>
      <Grid container direction={'column'} rowGap={1}>
        <Typography variant={'h4'}>Business Details</Typography>
        {/* <Typography variant={'h6'} color={'gray'}>
          We'll send you a link 
        </Typography> */}
      </Grid>

      <form
        onSubmit={handleSubmit(async ({ email }) => {
          if (auth && Object.keys(errors).length === 0) {
            setShowInfo(true)
            await sendPasswordResetEmail(auth, email)
            reset({ email: '' })
          }
        })}>
        <Grid container direction={'column'} rowGap={4}>
          <FormControl error={!!errors['name']} variant="outlined">
            <InputLabel htmlFor={'name'}>Business Owner Name</InputLabel>
            <OutlinedInput
              id={'name'}
              type={'text'}
              endAdornment={
                <InputAdornment position="end">
                  <PersonOutlineOutlined />
                </InputAdornment>
              }
              label="Business Owner Name"
              // {...register('email')}
            />
            {!!errors['name'] && <FormHelperText id="name">{errors['name']?.message}</FormHelperText>}
          </FormControl>

          <FormControl error={!!errors['Owner Pan']} variant="outlined">
            <InputLabel htmlFor={'Owner Pan'}>Business Owner Pan</InputLabel>
            <OutlinedInput
              id={'Owner Pan'}
              type={'file'}
              shrink={true}
              endAdornment={
                <InputAdornment position="end">
                  <PanoramaOutlined />
                </InputAdornment>
              }
              label="Business Owner Pan"
              // {...register('email')}
            />
            {!!errors['Owner Pan'] && <FormHelperText id="Owner Pan">{errors['Owner Pan']?.message}</FormHelperText>}
          </FormControl>

          <FormControl error={!!errors['name']} variant="outlined">
            <InputLabel htmlFor={'name'}>Business Owner Aadhar No.</InputLabel>
            <OutlinedInput
              id={'name'}
              type={'text'}
              endAdornment={
                <InputAdornment position="end">
                  <DraftsOutlined />
                </InputAdornment>
              }
              label="Business Owner Aadhar No."
              // {...register('email')}
            />
            {!!errors['name'] && <FormHelperText id="name">{errors['name']?.message}</FormHelperText>}
          </FormControl>

          <Grid container sx={{ direction: 'row' }}>
            <FormControl error={!!errors['Address']} variant="outlined" sx={{ width: '48%' }}>
              <InputLabel htmlFor={'Address'}>Address</InputLabel>
              <OutlinedInput
                id={'Address'}
                type={'text'}
                endAdornment={
                  <InputAdornment position="end">
                    <HomeOutlined />
                  </InputAdornment>
                }
                label="Address"
                // {...register('email')}
              />
              {!!errors['Address'] && <FormHelperText id="Address">{errors['Address']?.message}</FormHelperText>}
            </FormControl>

            <FormControl error={!!errors['name']} variant="outlined" sx={{ width: '48%', marginLeft: '14px' }}>
              <InputLabel htmlFor={'name'}>Pincode</InputLabel>
              <OutlinedInput
                id={'name'}
                type={'number'}
                endAdornment={
                  <InputAdornment position="end">
                    <FormatListNumberedRtlOutlined />
                  </InputAdornment>
                }
                label="Pincode"
                // {...register('email')}
              />
              {!!errors['name'] && <FormHelperText id="name">{errors['name']?.message}</FormHelperText>}
            </FormControl>
          </Grid>

          <Grid container sx={{ direction: 'row' }}>
            <FormControl error={!!errors['city']} variant="outlined" sx={{ width: '48%' }}>
              <InputLabel htmlFor={'city'}>City</InputLabel>
              <OutlinedInput
                id={'city'}
                type={'text'}
                endAdornment={
                  <InputAdornment position="end">
                    <LocationCityOutlined />
                  </InputAdornment>
                }
                label="City"
                // {...register('email')}
              />
              {!!errors['city'] && <FormHelperText id="city">{errors['name']?.message}</FormHelperText>}
            </FormControl>

            <FormControl error={!!errors['name']} variant="outlined" sx={{ width: '48%', marginLeft: '14px' }}>
              <InputLabel htmlFor={'name'}>State</InputLabel>
              <OutlinedInput
                id={'name'}
                type={'name'}
                endAdornment={
                  <InputAdornment position="end">
                    <FlagOutlined />
                  </InputAdornment>
                }
                label="State"
                // {...register('email')}
              />
              {!!errors['name'] && <FormHelperText id="name">{errors['name']?.message}</FormHelperText>}
            </FormControl>
          </Grid>

          <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px' }}>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/agreement">
              {' '}
              NEXT{' '}
            </NavLink>
          </Button>

          <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px' }}>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/business-registration-types">
              {' '}
              BACK{' '}
            </NavLink>
          </Button>

          {/* <Grid container   justifyContent={'flex-end'} gap={2} width={'100%'}>
            <Link underline={'none'} href={'/business-details'}>
              <Typography sx={{ display:'flex',fontSize:'18px',  alignItems:'flex-end'}}>Next</Typography>
            </Link>
          </Grid> */}
        </Grid>
      </form>
    </PageContainer>
  )
}
