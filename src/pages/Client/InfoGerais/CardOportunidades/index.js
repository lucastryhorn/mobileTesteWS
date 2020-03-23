import React from 'react'
import { View, FlatList } from 'react-native'
import { dataOportunidades } from './config'
import { ViewRow, ViewWithNumber } from '../../../../components/TypesViews'
import Text from '../../../../components/Text'

function CardOportunidade() {
  const colors = {
    '0': 'green',
    '1': 'red',
    '2': 'blue',
    '3': 'black',
  }

  function _renderItem({ index, item }) {
    return (
      <ViewRow style={{ flexBasis: 0, flexGrow: 1, padding: 10 }}>
        <ViewWithNumber
          marginRight={'7px'}
          backgroundColor={colors[index.toString()]}
        >
          {item.qnt}
        </ViewWithNumber>
        <View>
          <Text fontWeight={'bold'}>{item.title}</Text>
          <Text>{item.qntDinheiro}</Text>
        </View>
      </ViewRow>
    )
  }

  return (
    <FlatList
      data={dataOportunidades}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      renderItem={_renderItem}
    />
  )
}

export default CardOportunidade
