import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, FONTS, SIZES, icons } from '../constants'

const VerticalFoodCard = ({ containerStyle, item, onPress }) => {

  return (
    <TouchableOpacity
      style={{
        width: 200,
        padding: SIZES.radius,
        alignItems: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle
      }}
      onPress={onPress}
    >
      {/* Calories and Favourite */}
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        {/* Calories */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row'
          }}
        >
          <Image
            source={icons.calories}
            style={{
              width: 30,
              height: 30
            }}
          />
          <Text
            style={{
              ...FONTS.body5, color: COLORS.darkGray2
            }}
          >
            {item.calories} Calories
          </Text>
        </View>
        {/* Favourite */}
        <Image
          source={icons.love}
          style={{
            width: 20,
            height: 20,
            tintColor: item.isFavourite ? COLORS.primary : COLORS.gray
          }}
        />
      </View>

      {/* Image */}
      <View
        style={{
          width: 150,
          height: 150,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Image
          source={item.image}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </View>

      {/* Info */}
      <View
        style={{
          alignItems: 'center',
          marginTop: -20
        }}
      >
        <Text
          style={{
            ...FONTS.h3
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            ...FONTS.body5, color: COLORS.darkGray2, textAlign: 'center'
          }}
        >
          {item.description}
        </Text>
        <Text
          style={{
            ...FONTS.h2, marginTop: SIZES.radius
          }}
        >
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default VerticalFoodCard