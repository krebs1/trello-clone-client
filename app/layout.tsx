import './globals.css'

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from 'react'
import {Header} from '@/src/modules/Header'
import {AuthProvider} from '@/src/shared/lib/next-auth/auth-provider'
import {ApolloWrapper} from "@/src/shared/lib/apollo-wrapper";
import InjectTailwind from '@/src/shared/lib/mui/InjectTailwind'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout(props: { auth: React.ReactNode, children: React.ReactNode }) {
  return (
    <InjectTailwind>
      <html lang='ru' className='tw-h-full'>
      <body className={`${inter.className} tw-h-full tw-flex tw-flex-col`}>
      <ApolloWrapper>
        <AuthProvider>
          <Header/>
          <main className='tw-grow'>
            {
              props.children
            }
            {
              props.auth
            }
          </main>
        </AuthProvider>
      </ApolloWrapper>
      </body>
      </html>
    </InjectTailwind>

  )
}
