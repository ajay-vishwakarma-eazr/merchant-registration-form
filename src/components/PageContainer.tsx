import * as React from 'react'
import { Grid, Theme, useMediaQuery, useTheme } from '@mui/material'
import { css, cx } from '@emotion/css'
import Lottie from 'lottie-react'
import { motion } from 'framer-motion'
import Color from 'color'

export type LottieProps = {
  v: string
  fr: number
  ip: number
  op: number
  w: number
  h: number
  nm: string
  ddd: number
  assets: any
  layers: any
  markers: any
}

type PageContainerProps = {
  children: React.ReactNode
  lottie: LottieProps
}

export const PageContainer = ({ children, lottie }: PageContainerProps) => {
  const theme = useTheme()
  const styles = useStyles(theme)

  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  return !isLoading ? (
    <motion.div
      className={cx(styles.root, { [styles.isTablet]: isTablet, [styles.isMobile]: isMobile })}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}>
      {!isMobile && (
        <div className={styles.left}>
          <Lottie animationData={lottie} loop />
        </div>
      )}
      <Grid
        container
        direction={'column'}
        flexWrap={'nowrap'}
        rowGap={5}
        paddingY={10}
        paddingX={isTablet ? 10 : 15}
        textAlign={'center'}
        className={styles.container}>
        {children}
      </Grid>
    </motion.div>
  ) : null
}

const useStyles = (theme: Theme) => ({
  root: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 700px;
    max-width: 1200px;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.05), 0 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 24px;
  `,
  left: css`
    background-color: ${theme.palette.primary.main};
    border-radius: 24px 0 0 24px;
    display: flex;
    align-items: center;
    overflow: hidden;

    > * {
      transform: scale(1.4);
    }
  `,
  container: css`
    background-color: ${Color(theme.palette.background.default).lighten(1.5).hex()};
    border-radius: 0 24px 24px 0;
  `,
  isTablet: css`
    > div {
      border-radius: unset;
    }
  `,
  isMobile: css`
    grid-template-columns: 1fr;
    width: 100vw;
    height: 100vh;
    max-width: unset;
    max-height: unset;
  `,
})
