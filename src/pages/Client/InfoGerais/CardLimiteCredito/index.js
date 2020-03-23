import React from 'react'
import { View } from 'react-native'
import Text from '../../../../components/Text'

function CardLimiteCredito() {
  return (
    <View style={{ flex: 1, height: 120, justifyContent: 'space-around' }}>
      <View>
        <Text color="blue" fontWeight={'700'} fontSize={'18px'}>
          R$ 12.000,20
        </Text>
        <Text fontSize={'16px'}>Concedido</Text>
      </View>
      <View>
        <Text color="green" fontWeight={'700'} fontSize={'18px'}>
          R$ 3.105,00
        </Text>
        <Text fontSize={'16px'}>Disponível</Text>
      </View>
    </View>
  )
}

export default CardLimiteCredito
