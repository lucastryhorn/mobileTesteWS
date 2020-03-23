import styled from 'styled-components'

export const ContainerViewRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: ${props =>
    props.marginVertical ? props.marginVertical : '0px'};
`
export const ContainerViewWithNumber = styled.View`
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
  padding: 7px;
  margin-right: ${props => (props.marginRight ? props.marginRight : '0px')};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : '0px')};
  margin-top: ${props => (props.marginTop ? props.marginTop : '0px')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '0px')};
  border-radius: 5px;
`
