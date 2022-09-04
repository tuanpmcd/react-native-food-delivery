import React from 'react'
import { View, Text } from 'react-native'
import { COLORS, FONTS } from '../constants'

const HeaderDetail = ({
  containerStyle,
  title,
  titleStyle,
  leftComponent,
  rightComponent
}) => {
  return (
    <View
      style={{
        heigth: 60,
        flexDirection: 'row',
        ...containerStyle
      }}
    >
      {/* Left */}
      {leftComponent}

      {/* Title */}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
            ...titleStyle
          }}
        >
          {title}
        </Text>
      </View>

      {/* Right */}
      {rightComponent}

    </View>
  )
}

export default HeaderDetail