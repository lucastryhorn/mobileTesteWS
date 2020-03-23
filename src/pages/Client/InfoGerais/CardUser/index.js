import React from 'react'
import { View } from 'react-native'
import { IconFA5 } from '../../../../assets/icon'
import { ViewRow } from '../../../../components/TypesViews'
import Text from '../../../../components/Text'
import { StatusUser } from './styles'

function CardUser() {
  return (
    <View>
      <ViewRow marginVertical={'10px'}>
        <IconFA5 marginRight={'10px'} fontSize={'60px'} name="user" />
        <View>
          <Text>Justine Robison</Text>
          <Text>Acme inc</Text>
          <StatusUser status={true}>
            <Text>Ativo</Text>
          </StatusUser>
        </View>
      </ViewRow>
      <ViewRow marginVertical={'5px'}>
        <IconFA5 marginRight={'7px'} name="phone" />
        <View>
          <Text>Justine Robison</Text>
          <Text>Acme inc</Text>
        </View>
      </ViewRow>
      <ViewRow marginVertical={'5px'}>
        <IconFA5 marginRight={'7px'} name="envelope" />
        <View>
          <Text>Justine Robison</Text>
          <Text>Acme inc</Text>
        </View>
      </ViewRow>
      <ViewRow style={{ justifyContent: 'flex-end' }}>
        <IconFA5 marginRight={'7px'} name="instagram" />
        <IconFA5 marginRight={'7px'} name="facebook-square" />
        <IconFA5 marginRight={'7px'} name="linkedin" />
        <IconFA5 marginRight={'7px'} name="twitter-square" />
        <IconFA5 marginRight={'7px'} name="whatsapp-square" />
      </ViewRow>
    </View>
  )
}

export default CardUser
