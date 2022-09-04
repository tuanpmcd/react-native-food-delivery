import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import { FONTS, COLORS, SIZES, icons } from '../constants'

const CartQuantityButton = ({
  iconStyle,
  containerStyle,
  quantity,
  onPress
}) => {

  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.transparentPrimray,
        ...containerStyle
      }}
      onPress={onPress}
    >
      <Image
        source={icons.cart}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.black,
          ...iconStyle
        }}
      />

      <View
        style={{
          position: 'absolute',
          top: 5,
          right: 5,
          width: 15,
          height: 15,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            lineHeight: 0,
            ...FONTS.body5,
            fontSize: 10,
          }}
        >
          {quantity}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CartQuantityButton