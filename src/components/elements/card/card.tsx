import { FC } from 'react'
import { Card } from 'antd'

const { Meta } = Card

export interface ICard {}

const CardComp: FC<ICard> = () => {

  return (
    <Card>
      <Meta title={''} description={''} />
    </Card>
  )
}

export default CardComp