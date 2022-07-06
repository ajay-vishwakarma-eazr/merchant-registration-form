import * as React from 'react'
import '../assets/css/global.css'
import { Box, Grid, Typography } from '@mui/material'
import { PageContainer } from '../components/PageContainer'
import lottie from '../assets/lottie/successful.json'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { useEffect } from 'react'
export const RegisterSuccess = () => {
  useEffect(() => {
    // const timer = setTimeout(() =>  window.open('https://enroll.eazr.in'), 7000)
    // return () => clearTimeout(timer)
  }, [])
  return (
    <PageContainer lottie={lottie} className="success-container">
      <Player className="success-animation" autoplay src="https://assets8.lottiefiles.com/packages/lf20_u4yrau.json">
        <Grid container direction={'column'} rowGap={1} justifyContent={'center'}>
          <Box
            component="img"
            sx={{
              height: 98.25,
              width: 120.45,
              marginBottom: '20px',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            alt="Eazr logo"
            src="https://partner.eazr.in/static/media/logo-sm-light.aa72e935.png"
          />
          <Box container style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant={'h4'} color={'white'} style={{ textAlign: 'center' }}>
              Congrulations!
            </Typography>
            <Typography variant={'h6'} color={'white'} style={{ textAlign: 'center', marginTop: '15px' }}>
              Thanks for enrolling as Eazr Merchant Partner. Our partners team will contact you within 48 hours.✨🎉
            </Typography>
            <Typography variant={'h6'} color={'white'} style={{ textAlign: 'center', marginTop: '15px' }}>
              Your Sevice Number is <span style={{ color: '#90CAF9' }}>430473</span>
            </Typography>
          </Box>
        </Grid>
      </Player>
    </PageContainer>
  )
}
