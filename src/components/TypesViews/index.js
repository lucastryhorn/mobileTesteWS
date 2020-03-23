import React from 'react'
import { ContainerViewRow, ContainerViewWithNumber } from './styles'
import Text from '../Text'

export function ViewRow(props) {
  return <ContainerViewRow {...props}>{props.children}</ContainerViewRow>
}

export function ViewWithNumber(props) {
  return (
    <ContainerViewWithNumber {...props}>
      <Text fontSize={'18px'} fontWeight={'bold'} color={'white'}>
        {props.children}
      </Text>
    </ContainerViewWithNumber>
  )
}
