import React from 'react'
import { ContainerCard } from './styles'
import Text from '../Text'

function Card(props) {
  return (
    <ContainerCard>
      <Text fontSize={'16px'} fontWeight={'bold'}>
        {props.title}
      </Text>
      {props.children}
    </ContainerCard>
  )
}

export default Card
