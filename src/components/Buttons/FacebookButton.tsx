import * as React from 'react'
import { Button, Grid } from '@mui/material'
import { css } from '@emotion/css'
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth'
import { Auth } from '../../auth/AuthContext'

export const FacebookButton = () => {
  const { auth } = React.useContext(Auth)
  const provider = new FacebookAuthProvider()
  return (
    <Button
      variant={'outlined'}
      color={'inherit'}
      type={'submit'}
      size={'large'}
      style={{ height: '56px', backgroundColor: '#3b5998', color: 'rgba(255, 255, 255, 0.87)' }}
      onClick={async () => {
        if (auth) {
          await signInWithPopup(auth, provider)
        }
      }}>
      <Grid container direction={'row'} justifyContent={'center'} alignItems={'center'} columnGap={1}>
        <div
          className={css`
            width: 24px;
            height: 24px;
          `}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" version="1">
            <path fill="#FFFFFF" d="M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z" />
            <path fill="#4267b2" d="M22 32V20h4l1-5h-5v-2c0-2 1.002-3 3-3h2V5h-4c-3.675 0-6 2.881-6 7v3h-4v5h4v12h5z" />
          </svg>
        </div>
        Sign in with Facebook
      </Grid>
    </Button>
  )
}
