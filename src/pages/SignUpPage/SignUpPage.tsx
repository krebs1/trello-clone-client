import React from 'react';
import {Box, Container, CssBaseline, Grid, Link, Typography} from "@mui/material";
import {ApolloWrapper} from "@/src/shared/lib/apollo-wrapper";
import {LoginForm} from "@/src/modules/LoginForm";
import {SignUpForm} from "@/src/pages/SignUpPage/modules/SignUpForm";

const SignUpPage = () => {
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
          Регистрация
        </Typography>
        <ApolloWrapper>
          <SignUpForm/>
        </ApolloWrapper>
        <Grid className='tw-mt-4' container>
          <Grid item xs>
            <Link href='#' variant='body2'>
              Уже есть аккаунт? Войдите!
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SignUpPage;