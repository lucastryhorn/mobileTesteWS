import styled from 'styled-components'

export const ContainerText = styled.Text`
  color: ${props => (props.color ? props.color : '#000')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
`
