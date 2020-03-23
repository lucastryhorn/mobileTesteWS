import React, { useState } from 'react'
import { View } from 'react-native'
import Text from '../../../../components/Text'
import { IconFA5 } from '../../../../assets/icon'
import { ContainerSelector } from './styles'
import { dataSteppers } from './config'
import { ViewRow } from '../../../../components/TypesViews'

function Steppers() {
  const [state, setState] = useState({})

  const colors = {
    ATRASADO: 'red',
    ATPREVISTA: 'orange',
    ATCONCLUIDA: 'green',
  }

  return (
    <>
      {dataSteppers.map((item, index) => (
        <>
          <ContainerSelector
            onPress={() => setState({ ...state, [index]: !state[index] })}
            key={index.toString()}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <IconFA5
                color={colors[item.type]}
                solid
                marginRight="7px"
                name="circle"
              />
              <Text>{item.title}</Text>
            </View>

            <IconFA5
              color="#c2c2c2"
              name={state[index] ? 'chevron-up' : 'chevron-down'}
            />
          </ContainerSelector>
          {state[index] &&
            item.res.map((subItem, index) => (
              <View
                style={{
                  padding: 10,
                  borderBottomWidth: 0.5,
                  borderLeftWidth: 0.5,
                  borderRightWidth: 0.5,
                }}
                key={index.toString()}
              >
                <ViewRow>
                  <IconFA5
                    color={colors[item.type]}
                    marginRight={'7px'}
                    name={subItem.typeIcon}
                  />
                  <View>
                    <Text fontWeight="bold">{subItem.titleItem}</Text>
                    <Text>{subItem.subTitle}</Text>
                    <Text>{subItem.hora}</Text>
                  </View>
                </ViewRow>
              </View>
            ))}
        </>
      ))}
    </>
  )
}

export default Steppers
