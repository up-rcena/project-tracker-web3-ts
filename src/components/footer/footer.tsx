import { FC } from 'react';
import { Layout } from 'antd'

const { Footer } = Layout

const FooterPanel: FC = () => {

  return (
    <Footer>
      <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} UP
        </a>
      </Footer>
  )
}

export default FooterPanel