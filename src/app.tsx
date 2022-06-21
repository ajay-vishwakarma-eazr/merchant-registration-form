import * as React from 'react'
import { AuthContext, Auth } from './auth/AuthContext'
import CssBaseline from '@mui/material/CssBaseline'
import { Button, createTheme, ThemeProvider } from '@mui/material'
import { ThemeMode, useDetectTheme } from './hooks/useDetectTheme'
import { AnimatedRoutes } from './components/AnimatedRoutes'
import { BrowserRouter as Router } from 'react-router-dom'

const App: React.FC = () => {
  const systemTheme = useDetectTheme()
  const [mode, setMode] = React.useState<ThemeMode | undefined>()
  const _theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode ? mode : systemTheme,
        },
      }),
    [systemTheme, mode]
  )

  return (
    <ThemeProvider theme={_theme}>
      <CssBaseline />
      <AuthContext>
        <div
          style={{
            display: 'grid',
            height: '100vh',
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: _theme.palette.background.default,
          }}>
          <Button
            variant={'contained'}
            onClick={() => setMode(last => (last === 'dark' ? 'light' : 'dark'))}
            style={{ position: 'absolute', left: '50%', bottom: '30px', transform: 'translateX(-50%)' }}>
            {_theme.palette.mode === 'dark' ? 'Light mode' : 'Dark mode'}
          </Button>
          <Auth.Consumer>
            {({ user }) => (
              <Router>
                <AnimatedRoutes isAllowed={!!user} />
              </Router>
            )}
          </Auth.Consumer>
        </div>
      </AuthContext>
    </ThemeProvider>
  )
}

export default App
