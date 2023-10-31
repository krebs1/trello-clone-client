import React from 'react'
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Link,
  Typography
} from '@mui/material'
import {LoginForm} from '@/src/modules/LoginForm'
import {ApolloWrapper} from '@/src/shared/lib/apollo-wrapper'

const LoginPage = () => {
  return (
    <Container maxWidth='xs'>
      <CssBaseline/>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography component='h1' variant='h5'>
          Вход в личный кабинет
        </Typography>
        <ApolloWrapper>
          <LoginForm/>
        </ApolloWrapper>
        <Grid className='tw-mt-4' container>
          <Grid item xs>
            <Link href='#' variant='body2'>
              Забыли пароль?
            </Link>
          </Grid>
          <Grid item>
            <Link href='#' variant='body2'>
              {'Нет аккаунта? Зарегистрируйте'}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default LoginPage
