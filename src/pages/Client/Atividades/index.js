import React, { useState } from 'react'
import { TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import Card from '../../../components/Card'
import { dataAtividades } from './config'
import { ViewRow, ViewWithNumber } from '../../../components/TypesViews'
import Text from '../../../components/Text'
import Steppers from './Steppers'

function Atividades() {
  const [state, setState] = useState({ selected: 0 })

  const colors = {
    '0': 'gray',
    '1': 'red',
    '2': 'blue',
    '3': 'orange',
    '4': 'green',
  }

  function _renderItem({ index, item }) {
    return (
      <TouchableOpacity>
        <ViewRow
          style={{
            margin: 5,
            backgroundColor:
              state.selected === index ? '#c2c2c2' : 'transparent',
          }}
        >
          <ViewWithNumber
            marginRight={'7px'}
            backgroundColor={colors[index.toString()]}
          >
            {item.qnt}
          </ViewWithNumber>
          <Text style={{ marginRight: 7 }}>{item.title}</Text>
        </ViewRow>
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginTop: 7, marginHorizontal: 7 }}
    >
      <Card title="Atividades">
        <TextInput
          style={{ borderWidth: 0.5, marginVertical: 10 }}
          placeholder="Pesquisar"
        />
        <FlatList
          data={dataAtividades}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          renderItem={_renderItem}
          showsHorizontalScrollIndicator={false}
        />
        <Steppers />
      </Card>
    </ScrollView>
  )
}

export default Atividades
