import React from 'react'
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography
} from '@mui/material'

const Page = () => {
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
          Создание учетной записи
        </Typography>
        <Box component='form' sx={{mt: 1}}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='E-mail'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='username'
            label='Имя пользователя'
            type='text'
            id='username'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Пароль'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{mt: 3, mb: 2}}
          >
            Зарегистрироваться
          </Button>
          <Grid container>
            <Grid item>
              <Link href='#' variant='body2'>
                {'Уже есть аккаунт? Войдите'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
