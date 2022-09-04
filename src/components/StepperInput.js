import React from 'react'
import { View, Text } from 'react-native'
import { IconButton } from "../components";
import { COLORS, FONTS, SIZES, icons } from '../constants'

const StepperInput = ({
  containerStyle,
  value = 1,
  onAdd,
  onMinus
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 60,
        width: 130,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle
      }}
    >
      <IconButton
        containerStyle={{
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        icon={icons.minus}
        iconStyle={{
          width: 25,
          height: 25,
          tintColor: value > 1 ? COLORS.primary : COLORS.gray
        }}
        onPress={onMinus}
      />

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            ...FONTS.h2
          }}
        >
          {value}
        </Text>
      </View>

      <IconButton
        containerStyle={{
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        icon={icons.plus}
        iconStyle={{
          width: 25,
          height: 25,
          tintColor: COLORS.primary
        }}
        onPress={onAdd}
      />
    </View>
  )
}

export default StepperInput