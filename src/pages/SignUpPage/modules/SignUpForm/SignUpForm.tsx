'use client'

import React from 'react';
import {Box, Button, Grid, Link, TextField, Typography} from "@mui/material";
import {useFormik} from "formik";
import {signUpSchema} from "@/src/pages/SignUpPage/modules/SignUpForm/yup/SignUpSchema";
import NextLink from "next/link";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: signUpSchema,
    onSubmit: async values => {

    }
  })

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
    >
      <Typography component='h1' variant='h5'>
        Регистрация
      </Typography>
      <Box
        component='form'
        sx={{mt: 1}}
        onSubmit={e => {
          e.preventDefault()
          formik.handleSubmit()
        }}
      >
        <TextField
          margin='normal'
          required
          fullWidth
          autoFocus
          id='name'
          name='name'
          label='Имя'
          type='name'
          autoComplete='name'
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          name='email'
          label='E-mail'
          type='email'
          autoComplete='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          id='password'
          name='password'
          label='Пароль'
          type='password'
          autoComplete='current-password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{mt: 3, mb: 2}}
          disabled={!formik.isValid}
        >
          Зарегистрироваться
        </Button>
      </Box>
      <Grid className='tw-mt-4' container>
        <Grid item xs>
          <Link component={NextLink} href='/login' variant='body2'>
            Уже есть аккаунт? Войдите!
          </Link>
        </Grid>
      </Grid>
    </Box>
)
  ;
};

export default SignUpForm;