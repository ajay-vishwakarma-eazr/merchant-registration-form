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
  PanoramaOutlined,
  DocumentScannerOutlined,
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

export const LegalInformation = () => {
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
        <Typography variant={'h4'}>Legal Information</Typography>
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
          <FormControl error={!!errors['Legal Business Name']} variant="outlined">
            <InputLabel htmlFor={'Legal Business Name'}> Legal Business Name</InputLabel>
            <OutlinedInput
              id={'Legal Business Name'}
              type={'text'}
              endAdornment={
                <InputAdornment position="end">
                  <PersonOutlineOutlined />
                </InputAdornment>
              }
              label="Legal Business Name"
              // {...register('email')}
            />
            {!!errors['Legal Business Name'] && (
              <FormHelperText id="Legal Business Name">{errors['Legal Business Name']?.message}</FormHelperText>
            )}
          </FormControl>

          <FormControl error={!!errors['Business Pan']} variant="outlined">
            <InputLabel htmlFor={'Business Pan'}>Business Pan</InputLabel>
            <OutlinedInput
              id={'Business Pan'}
              type={'file'}
              endAdornment={
                <InputAdornment position="end">
                  <PanoramaOutlined />
                </InputAdornment>
              }
              label="Business Pan"
              // {...register('email')}
            />
            {!!errors['Business Pan'] && (
              <FormHelperText id="Business Pan">{errors['Business Pan']?.message}</FormHelperText>
            )}
          </FormControl>

          <FormControl error={!!errors['Business GST No.']} variant="outlined">
            <InputLabel htmlFor={'Business GST No.'}>Business GST No.</InputLabel>
            <OutlinedInput
              id={'Business GST No.'}
              type={'text'}
              endAdornment={
                <InputAdornment position="end">
                  <DocumentScannerOutlined />
                </InputAdornment>
              }
              label="Business GST No."
              // {...register('email')}
            />
            {!!errors['Business GST No.'] && (
              <FormHelperText id="Business GST No.">{errors['Business GST No.']?.message}</FormHelperText>
            )}
          </FormControl>

          <FormControl error={!!errors['Business Owner Name']} variant="outlined">
            <InputLabel htmlFor={'Business Owner Name'}>Business Owner Name</InputLabel>
            <OutlinedInput
              id={'Business Owner Name'}
              type={'text'}
              endAdornment={
                <InputAdornment position="end">
                  <PersonOutlineOutlined />
                </InputAdornment>
              }
              label="Business Owner Name"
              // {...register('email')}
            />
            {!!errors['Business Owner Name'] && (
              <FormHelperText id="Business Owner Name">{errors['Business Owner Name']?.message}</FormHelperText>
            )}
          </FormControl>

          <FormControl error={!!errors['Business Owner Pan']} variant="outlined">
            <InputLabel htmlFor={'Business Owner Pan'}>Business Owner Pan</InputLabel>
            <OutlinedInput
              id={'Business Owner Pan'}
              type={'file'}
              endAdornment={
                <InputAdornment position="end">
                  <PanoramaOutlined />
                </InputAdornment>
              }
              label="Business Owner Pan"
              // {...register('email')}
            />
            {!!errors['Business Owner Pan'] && (
              <FormHelperText id="Business Owner Pan">{errors['Business Owner Pan']?.message}</FormHelperText>
            )}
          </FormControl>

          <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px' }}>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/agreement">
              {' '}
              Next{' '}
            </NavLink>
          </Button>

          <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px' }}>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/business-registration-types">
              {' '}
              BACK{' '}
            </NavLink>
          </Button>
        </Grid>
      </form>
    </PageContainer>
  )
}
