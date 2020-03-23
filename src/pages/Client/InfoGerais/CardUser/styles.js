import styled from 'styled-components'

export const StatusUser = styled.View`
  background-color: ${props => (props.status ? '#b5e7a0' : 'red')};
  align-items: center;
  padding: 3px;
  width: 50%;
  border-radius: 5px;
`
