import React from 'react'
import { ContainerText } from './styles'

function Text(props) {
  return <ContainerText {...props}>{props.children}</ContainerText>
}

export default Text
