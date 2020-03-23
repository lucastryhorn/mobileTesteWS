import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Client from '../../pages/Client'

const Drawer = createDrawerNavigator()

function SideMenu() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Cliente" component={Client} />
    </Drawer.Navigator>
  )
}

export default SideMenu
