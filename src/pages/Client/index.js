import React, { useState } from 'react'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Segment from '../../components/Segment'
import Body from './Body'
import { IconFA5 } from '../../assets/icon'
import { FloatingBottom } from './styles'

function Client({ route }) {
  const [state, setState] = useState({ selected: true })

  const segment = [
    { text: 'Info.Gerais', selected: state.selected },
    { text: 'Atividades', selected: !state.selected },
  ]

  function changeSegment() {
    setState({ ...state, selected: !state.selected })
  }

  return (
    <Container>
      <Header title={route.name} />
      <Segment onPress={changeSegment}>{segment}</Segment>
      <Body selected={state.selected} />
      <FloatingBottom>
        <IconFA5 color="white" solid name="clipboard" />
      </FloatingBottom>
    </Container>
  )
}

export default Client
