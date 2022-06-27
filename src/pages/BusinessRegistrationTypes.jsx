import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import '../assets/css/global.css'
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
import { PageContainer } from '../components/PageContainer'
import lottie from '../assets/lottie/businesstype.json'
import { NavLink } from 'react-router-dom'
export const BusinessRegistrationTypes = () => {
  const [businessType, setBuinessTypes] = React.useState('')
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const handleChangeBuinessTypes = event => {
    setBuinessTypes(event.target.value)
  }

  return (
    <PageContainer lottie={lottie}>
      <Grid container direction={'column'} rowGap={1}>
        <Typography variant={'h4'}>Select Business Types</Typography>
      </Grid>

      <form
        onSubmit={handleSubmit(data => {
          console.log(data)
        })}>
        <Grid container direction={'column'} rowGap={5}>
          <FormControl error={!!errors['business-registration-type']}>
            <InputLabel id="demo-simple-select-label">Registered Business</InputLabel>
            <Select
            style={{textAlign:"left"}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              inputProps={{ 'aria-label': 'Without label' }}
              label="Business Registration"
              name="business-registration-type"
              autoFocus
              value={businessType}
              onChange={handleChangeBuinessTypes}>
              <MenuItem defaultValue="" disabled>
              
                Choose
              </MenuItem>
              <MenuItem value={10}> Not Yet Registered</MenuItem>{' '}
              <MenuItem value={20}>Private Limited</MenuItem>
              <MenuItem value={30}>Sole Proprietorship</MenuItem>
            </Select>
            {/* {!!errors['business-registration-type'] && (
              <FormHelperText style={{ color: 'red' }}>{errors['business-registration-type']?.message}</FormHelperText>
            )} */}
          </FormControl>

          {businessType !== 10 ? (
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/legal-information">
              <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px' }} fullWidth>
                Next
              </Button>
            </NavLink>
          ) : (
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/business-details">
              <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px' }} fullWidth>
                Next
              </Button>
            </NavLink>
          )}
        </Grid>
      </form>
    </PageContainer>
  )
}
