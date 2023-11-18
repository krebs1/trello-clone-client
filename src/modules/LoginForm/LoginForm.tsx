'use client'

import React from 'react'
import {Alert, Box, Button, Divider, TextField} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import {useMutation} from '@apollo/client'
import {useFormik} from 'formik'
import {loginSchema} from '@/src/modules/LoginForm/yup/loginSchema'
import {signIn} from 'next-auth/react'
import {useSearchParams} from 'next/navigation'

const LoginForm = () => {
  const searchParams = useSearchParams()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: async values => {
      await signIn('credentials', {
        email: values.email,
        password: values.password,
        callbackUrl: searchParams?.get('callbackUrl') || '/boards'
      })
    }
  })

  return (
    <Box>
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
          Sign In
        </Button>
      </Box>
      <Box>
        <Divider className='tw-mb-3'>Или</Divider>
        <Button
          variant='contained'
          startIcon={<GoogleIcon/>}
          fullWidth
          onClick={() =>
            signIn('google', {
              callbackUrl: searchParams?.get('callbackUrl') || '/boards'
            })
          }
        >
          Через Google
        </Button>
      </Box>
    </Box>
  )
}

export default LoginForm
