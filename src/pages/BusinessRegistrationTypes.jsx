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
  Select,
  MenuItem,
  Box,
  OutlinedInput,
  Typography,
} from '@mui/material'
import { AlternateEmail } from '@mui/icons-material'
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

export const BusinessRegistrationTypes = () => {
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
        <Typography variant={'h4'}>Select Business Types</Typography>
      </Grid>

      <form
        onSubmit={handleSubmit(async ({ email }) => {
          if (auth && Object.keys(errors).length === 0) {
            setShowInfo(true)
            await sendPasswordResetEmail(auth, email)
            reset({ email: '' })
          }
        })}>
        <Grid container direction={'column'} rowGap={5}>
          <Link id="demo-simple-select-label" color={'white'} underline={'none'} href={'/business-details'}>
            <Box
              border={1}
              borderColor="lightgrey"
              height="50px"
              paddingLeft="13px"
              display="flex"
              justifyContent="flex-start"
              alignItems="center">
              Not Yet Registered / Proprietorship
            </Box>
          </Link>

          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Registered Business
            </InputLabel>
            <Select
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              inputProps={{ 'aria-label': 'Without label' }}
              // value={age}
              label="Business Registration"
              // onChange={handleChange}
            >
              <NavLink style={{ textDecoration: 'none', color: '#ffffff' }} to="/legal-information">
                {' '}
                <MenuItem value={10}>Private Limited</MenuItem>{' '}
              </NavLink>
              <NavLink style={{ textDecoration: 'none', color: '#ffffff' }} to="/legal-information">
                {' '}
                <MenuItem value={30}>Sole Proprietorship</MenuItem>
              </NavLink>
              <NavLink style={{ textDecoration: 'none', color: '#ffffff' }} to="/legal-information">
                {' '}
                <MenuItem value={40}>Limited Liability Partnership</MenuItem>
              </NavLink>
              <NavLink style={{ textDecoration: 'none', color: '#ffffff' }} to="/legal-information">
                {' '}
                <MenuItem value={20}>Public Limited</MenuItem>
              </NavLink>
              <NavLink style={{ textDecoration: 'none', color: '#ffffff' }} to="/legal-information">
                {' '}
                <MenuItem value={50}>One-Person Company</MenuItem>
              </NavLink>
              <NavLink style={{ textDecoration: 'none', color: '#ffffff' }} to="/legal-information">
                {' '}
                <MenuItem value={60}>Partnership Firm</MenuItem>
              </NavLink>
            </Select>
          </FormControl>

          <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px' }}>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/register">
              {' '}
              BACK{' '}
            </NavLink>
          </Button>

          {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
        //   value={age}
        //   onChange={handleChange}
        //   displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl> */}

          {/* <Grid container alignItems={'center'} justifyContent={'center'} gap={2}>
            <Typography color={'gray'}>Already have an account?</Typography>
            <Link underline={'none'} href={'/login'}>
              <Typography>Next Page</Typography>
            </Link>
          </Grid> */}
        </Grid>
      </form>
      {/* {showInfo && (
        <Alert severity="info">
          If a matching account was found, an email will be sent to allow you to reset your password.
        </Alert>
      )} */}
    </PageContainer>
  )
}
