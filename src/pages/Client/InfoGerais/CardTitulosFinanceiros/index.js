import React from 'react'
import { View } from 'react-native'
import { dataTitulos } from './config'
import { ViewRow, ViewWithNumber } from '../../../../components/TypesViews'
import Text from '../../../../components/Text'

function CardTitulosFinanceiros() {
  const colors = {
    '0': 'red',
    '1': 'orange',
    '2': 'green',
  }

  return (
    <View
      style={{
        height: 180,
        justifyContent: 'space-between',
        marginVertical: 10,
      }}
    >
      {dataTitulos.map((item, index) => (
        <ViewRow key={index.toString()}>
          <ViewWithNumber
            marginRight={'7px'}
            backgroundColor={colors[index.toString()]}
          >
            {item.qnt}
          </ViewWithNumber>
          <View>
            <Text fontWeight={'700'} fontSize={'18px'}>
              {item.qntDinheiro}
            </Text>
            <Text fontSize={'16px'}>{item.title}</Text>
          </View>
        </ViewRow>
      ))}
    </View>
  )
}

export default CardTitulosFinanceiros
