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
        }}
      >
        <ApolloWrapper>
          <SignUpForm/>
        </ApolloWrapper>
      </Box>
    </Container>
  );
};

export default SignUpPage;