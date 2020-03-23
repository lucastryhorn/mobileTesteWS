import React from 'react'
import { ContainerApp } from './styles'

function Container(props) {
  return <ContainerApp>{props.children}</ContainerApp>
}

export default Container
