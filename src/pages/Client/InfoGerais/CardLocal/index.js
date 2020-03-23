import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { ViewRow } from '../../../../components/TypesViews'
import { IconFA5 } from '../../../../assets/icon'
import Text from '../../../../components/Text'

function CardLocal() {
  const styles = StyleSheet.create({
    map: {
      height: 250,
      marginVertical: 10,
    },
  })
  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -24.9386005,
          longitude: -53.4682617,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0121,
        }}
        pitchEnabled={false}
        toolbarEnabled={false}
        rotateEnabled={false}
        moveOnMarkerPress={false}
        scrollEnabled={false}
        zoomEnabled={false}
      >
        <Marker
          coordinate={{ latitude: -24.9386005, longitude: -53.4682617 }}
        />
      </MapView>
      <ViewRow marginVertical={'10px'}>
        <IconFA5 marginRight={'7px'} name="map-marker" />
        <View>
          <Text>Rua Sem sentido</Text>
          <Text>Casa</Text>
        </View>
      </ViewRow>
    </>
  )
}

export default CardLocal
