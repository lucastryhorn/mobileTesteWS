import React from 'react'
import InfoGerais from '../InfoGerais'
import Atividades from '../Atividades'

function Body(props) {
  if (props.selected) return <InfoGerais />

  return <Atividades />
}

export default Body
