import React from 'react'
import { View, ScrollView, FlatList } from 'react-native'
import Card from '../../../components/Card'
import { data } from './config'

function InfoGerais() {
  function _renderItem({ item }) {
    return <Card title={item.titulo}>{item.children}</Card>
  }

  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={data}
      renderItem={_renderItem}
      contentContainerStyle={{ margin: 10 }}
    />
  )
}

export default InfoGerais
