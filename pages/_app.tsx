import '../styles/globals.css'
import 'antd/dist/antd.css';

import { ReactElement, ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <SessionProvider session={pageProps.session} refetchInterval={0}>
  <Component {...pageProps} />
  </SessionProvider>
  )
}

export default MyApp
