import { Layout } from 'antd'
import { FC, ReactNode } from 'react';
import { Header } from '../header';
import  { Footer } from '../footer';

const { Content } = Layout
const Template:FC<{children: ReactNode}> = ({children})=> {
  return (
  <Layout>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </Layout>
  )
}

export default Template;