import * as React from 'react'
import { Button, Theme, Typography, useTheme } from '@mui/material'
import { signOut } from 'firebase/auth'
import { Auth } from '../auth/AuthContext'
import { css } from '@emotion/css'
import Color from 'color'

export const HomePage = () => {
  const theme = useTheme()
  const styles = useStyles(theme)
  const { auth, user } = React.useContext(Auth)

  return (
    <div className={styles.root}>
      <Typography variant={'h3'}>Hello again</Typography>
      <Typography variant={'h6'}>{user?.email}</Typography>
      <Typography variant={'h6'}>{`Last seen: ${user?.metadata.lastSignInTime}`}</Typography>

      <Button
        variant={'contained'}
        size={'large'}
        onClick={async () => {
          if (auth) {
            await signOut(auth)
          }
        }}>
        Sign out
      </Button>
    </div>
  )
}

const useStyles = (theme: Theme) => ({
  root: css`
    padding: 64px;
    background-color: ${Color(theme.palette.background.default).lighten(1.5).hex()};
    display: grid;
    align-items: center;
    gap: 24px;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 0 50px 100px rgba(0, 0, 0, 0.25), inset 0 0 0 0.5px rgba(255, 255, 255, 0.2);
  `,
})
