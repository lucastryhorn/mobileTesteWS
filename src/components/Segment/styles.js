import styled from 'styled-components'

export const ViewSegment = styled.View`
  flex-direction: row;
  align-self: center;
  margin-horizontal: 10px;
  margin-top: 10px;
`

export const ContainerSegment = styled.TouchableOpacity`
  flex: 0.5;
  background-color: ${props => (props.selected ? '#006bce' : 'transparent')}
  border-width: 1px
  border-color: #FFF
  align-items: center
  padding: 10px
`
