import React from 'react'
import { View } from 'react-native'
import { LineChart, Grid } from 'react-native-svg-charts'

function CardVendas() {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
  return (
    <View>
      <LineChart
        style={{ height: 200 }}
        data={data}
        svg={{ stroke: 'rgb(134, 65, 244)' }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid />
      </LineChart>
    </View>
  )
}

export default CardVendas
