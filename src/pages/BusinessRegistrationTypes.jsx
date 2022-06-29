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
import { useNavigate } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'
import { useDispatch, useSelector } from 'react-redux'
import { getPartnerTypes } from '../store/partnerTypes/action'
export const BusinessRegistrationTypes = () => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()
  const { partnerTypes, loading } = useSelector(state => state.partnerTypes)
  const history = useNavigate()
  React.useEffect(() => {
    dispatch(getPartnerTypes())
  }, [])

  return (
    <PageContainer lottie={lottie}>
      <Grid container direction={'column'} rowGap={1}>
        <Typography variant={'h4'}>Select Business Types</Typography>
      </Grid>

      <form
        onSubmit={handleSubmit(data => {
          const id = getValues('types')
          if (id === 41) {
            history('/business-details')
          } else {
            history('/legal-information')
          }
        })}>
        <Grid container direction={'column'} rowGap={5}>
          {loading === true ? (
            <ClipLoader color="#bbbbbb" size={60} />
          ) : (
            <FormControl error={!!errors['types']} variant="outlined">
              <InputLabel htmlFor={'types'}>Business Types</InputLabel>
              <Controller
                render={props => (
                  <Select
                    labelId="demo-simple-select-label"
                    id="types"
                    style={{ textAlign: 'left' }}
                    label="Business Types"
                    defaultValue=""
                    {...register('types', { required: 'Please choose one' })}>
                    {partnerTypes.map((items, index) => {
                      return (
                        <MenuItem key={index} value={items.id}>
                          {items.type}
                        </MenuItem>
                      )
                    })}
                  </Select>
                )}
                name="types"
                control={control}
              />
              {!!errors['types'] && <FormHelperText>{errors['types']?.message}</FormHelperText>}
            </FormControl>
          )}
          <Button variant={'contained'} type={'submit'} size={'large'} style={{ height: '56px' }} fullWidth>
            Next
          </Button>
        </Grid>
      </form>
    </PageContainer>
  )
}
