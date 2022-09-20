import { FC } from 'react';
import { Button, Layout } from 'antd'

const { Header } = Layout

const Navigation: FC = ()  => {
  return (<Header>
    {/* Logo */}
    {/* Button */}
    <Button type="primary">Collect Wallet</Button>
  </Header>)
}

export default Navigation;