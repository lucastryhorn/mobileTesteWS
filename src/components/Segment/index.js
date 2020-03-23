import React from 'react'
import { ContainerSegment, ViewSegment } from './styles'
import Text from '../Text'

function Segment(props) {
  return (
    <ViewSegment>
      {props.children.map(child => (
        <ContainerSegment key={child.text} {...props} {...child}>
          <Text color={child.selected ? '#fff' : '#000'}>{child.text}</Text>
        </ContainerSegment>
      ))}
    </ViewSegment>
  )
}

export default Segment
