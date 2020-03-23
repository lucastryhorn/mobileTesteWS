import React from 'react'
import { ContainerHeader } from './styles'
import { IconFA5 } from '../../assets/icon'
import Text from '../Text'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function Header(props) {
  const navigation = useNavigation()
  return (
    <ContainerHeader>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <IconFA5
          color={'white'}
          marginLeft={'10px'}
          marginRight={'20px'}
          fontSize={'28px'}
          name="bars"
        />
      </TouchableOpacity>
      <Text color="white" fontWeight={'bold'} fontSize={'24px'}>
        {props.title}
      </Text>
    </ContainerHeader>
  )
}

export default Header
