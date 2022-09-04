import React from 'react'
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import { FONTS, COLORS } from '../constants'

const TextIconButton = ({ label, labelStyle, icon, iconStyle, containerStyle, onPress }) => {

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...containerStyle
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...FONTS.body3,
          ...labelStyle
        }}
      >
        {label}
      </Text>
      <Image
        source={icon}
        style={{
          marginLeft: 5,
          width: 15,
          height: 15,
          tintColor: COLORS.black,
          ...iconStyle
        }}
      />
    </TouchableOpacity>
  )
}

export default TextIconButton