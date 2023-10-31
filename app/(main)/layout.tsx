import React from 'react'
import {Container} from '@mui/material'
import {HomeSidebar} from '@/src/modules/HomeSidebar'

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode
}) {
  return (
    <Container maxWidth='lg' className='tw-flex tw-flex-row'>
      <HomeSidebar/>
      {children}
    </Container>
  )
}
