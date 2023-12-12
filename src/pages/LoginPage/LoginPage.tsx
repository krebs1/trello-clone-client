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
        }}
      >
        <ApolloWrapper>
          <LoginForm/>
        </ApolloWrapper>
      </Box>
    </Container>
  )
}

export default LoginPage
