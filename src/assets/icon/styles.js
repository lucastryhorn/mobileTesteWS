import styled from 'styled-components'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export const ContainerIconFA5 = styled(IconFontAwesome5)`
  font-size: ${props => (props.fontSize ? props.fontSize : '24px')};
  margin-right: ${props => (props.marginRight ? props.marginRight : '0px')};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : '0px')};
  margin-top: ${props => (props.marginTop ? props.marginTop : '0px')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '0px')};
`
