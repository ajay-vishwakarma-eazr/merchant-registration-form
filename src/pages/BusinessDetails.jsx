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
import DescriptionIcon from '@mui/icons-material/Description'
import { Navigate, NavLink, useNavigate, useParams } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import lottie from '../assets/lottie/businessdetails.json'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { ip } from '../config/config'
export const BusinessDetails = () => {
  const {
    getValues,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const history = useNavigate()
  const dispatch = useDispatch()
  const { name } = useParams()
  const onSubmit = data => {
    const clientname = getValues('clientname')
    const clientemail = getValues('clientemail')
    const companyName = getValues('companyName')
    const source = getValues('source')
    const status = getValues('status')
    const note = getValues('note')

    axios.post(`${ip}/leads`, { clientname, clientemail, companyName, source, status, note }).then(res => {
      console.log(res)
    })
  }
  return (
    <PageContainer lottie={lottie}>
      <Typography variant={'h4'}>Lead Details</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction={'column'} rowGap={3}>
          <FormControl error={!!errors['clientname']} variant="outlined">
            <InputLabel htmlFor={'clientName'}>Client Name</InputLabel>
            <OutlinedInput
              id={'clientName'}
              type={'text'}
              autoComplete="off"
              endAdornment={
                <InputAdornment position="end">
                  <PersonOutlineOutlined />
                </InputAdornment>
              }
              label="Client Name"
              {...register('clientname', { required: 'Please enter client name' })}
            />
            {!!errors['clientname'] && <FormHelperText id="clientname">{errors['clientname']?.message}</FormHelperText>}
          </FormControl>

          <FormControl error={!!errors['clientemail']} variant="outlined">
            <InputLabel htmlFor={'clientemail'}>Client Email</InputLabel>
            <OutlinedInput
              id={'clientemail'}
              type={'email'}
              autoComplete="off"
              endAdornment={
                <InputAdornment position="end">
                  <PanoramaOutlined />
                </InputAdornment>
              }
              label="Client Email"
              {...register('clientemail', { required: 'Please enter client email' })}
            />
            {!!errors['clientemail'] && (
              <FormHelperText id={'clientemail'}>{errors['clientemail']?.message}</FormHelperText>
            )}
          </FormControl>

          <FormControl error={!!errors['companyName']} variant="outlined">
            <InputLabel htmlFor={'companyName'}>Company Name</InputLabel>
            <OutlinedInput
              id={'companyName'}
              type={'text'}
              autoComplete="off"
              endAdornment={
                <InputAdornment position="end">
                  <DraftsOutlined />
                </InputAdornment>
              }
              label="Company Name"
              {...register('companyName', { required: 'Please enter company name' })}
            />
            {!!errors['companyName'] && (
              <FormHelperText id="companyName">{errors['companyName']?.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl error={!!errors['source']} variant="outlined" fullWidth>
            <InputLabel htmlFor={'source'}>Source</InputLabel>
            <OutlinedInput
              id={'source'}
              type={'text'}
              autoComplete="off"
              endAdornment={
                <InputAdornment position="end">
                  <HomeOutlined />
                </InputAdornment>
              }
              label="Source"
              {...register('source', { required: 'Please enter source' })}
            />
            {!!errors['source'] && <FormHelperText id="source">{errors['source']?.message}</FormHelperText>}
          </FormControl>

          <FormControl error={!!errors['status']} variant="outlined">
            <InputLabel htmlFor={'status'}>Status</InputLabel>
            <OutlinedInput
              id={'status'}
              type={'text'}
              autoComplete="off"
              endAdornment={
                <InputAdornment position="end">
                  <FormatListNumberedRtlOutlined />
                </InputAdornment>
              }
              label="Status"
              {...register('status', {
                required: 'Enter status',
              })}
            />
            {!!errors['status'] && <FormHelperText id="status">{errors['status']?.message}</FormHelperText>}
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor={'note'}>Note</InputLabel>
            <OutlinedInput
              id="note"
              label="Note"
              autoComplete="off"
              multiline
              rows={4}
              endAdornment={
                <InputAdornment position="end">
                  <DescriptionIcon />
                </InputAdornment>
              }
              {...register('note', {
                maxLength: { value: 50, message: 'Maximum 50 words are allowed' },
              })}
            />
          </FormControl>

          <Button
            className="button"
            variant={'contained'}
            type={'submit'}
            size={'large'}
            style={{ height: '56px' }}
            fullWidth>
            SUBMIT
          </Button>
        </Grid>
      </form>
    </PageContainer>
  )
}
