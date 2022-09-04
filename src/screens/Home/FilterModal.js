import React, { useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
  Modal
} from 'react-native'
import { COLORS, FONTS, SIZES, icons, constants } from '../../constants'

import { IconButton, TwoPointSlider, TextButton, TextIconButton } from '../../components'

const Section = ({ containerStyle, title, children }) => {
  return (
    <View
      style={{
        marginTop: SIZES.padding,
        ...containerStyle
      }}
    >
      <Text style={{
        ...FONTS.h3
      }}>
        {title}
      </Text>

      {children}
    </View>
  )
}

const FilterModal = ({ isVisible, onClose }) => {

  const modalAnimatedValue = useRef(new Animated.Value(0)).current

  const [showFilterModal, setShowFilterModal] = useState(isVisible)

  const [deliveryTime, setDeliveryTime] = useState('')
  const [ratings, setRatings] = useState('')
  const [tags, setTags] = useState('')

  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }).start(() => onClose())
    }
  }, [showFilterModal])

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 680]
  })

  // function renderDistance() {
  //   return (
  //     <Section
  //       title='Distance'
  //     >
  //       <View
  //         style={{
  //           alignItems: 'center',
  //         }}
  //       >
  //         <TwoPointSlider
  //           value={[3, 10]}
  //           min={1}
  //           max={20}
  //           postfix='km'
  //           onValuesChange={(values) => console.log(values)}
  //         />
  //       </View>
  //     </Section>
  //   )
  // }

  function renderDeliveryTime() {
    return (
      <Section
        title='Delivery Time'
        containerStyle={{
          marginTop: 40
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: SIZES.radius
          }}
        >
          {
            constants.delivery_time.map((item, index) => {
              return (
                <TextButton
                  key={`delivery_time-${index}`}
                  label={item.label}
                  labelStyle={{
                    color: item.id == deliveryTime ? COLORS.white : COLORS.gray,
                    ...FONTS.body3
                  }}
                  buttonContainerStyle={{
                    width: '30%',
                    height: 50,
                    margin: 5,
                    alignItems: 'center',
                    borderRadius: SIZES.base,
                    backgroundColor: item.id == deliveryTime ? COLORS.primary : COLORS.lightGray2
                  }}
                  onPress={() => setDeliveryTime(item.id)}
                />
              )
            })
          }
        </View>
      </Section>
    )
  }

  // function renderPricingRange(){
  //   return (

  //   )
  // }

  function renderRatings() {
    return (
      <Section
        title='Ratings'
        containerStyle={{
          marginTop: 40
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {
            constants.ratings.map((item, index) => {
              return (
                <TextIconButton
                  key={`ratings-${index}`}
                  containerStyle={{
                    flex: 1,
                    height: 50,
                    margin: 5,
                    alignItems: 'center',
                    borderRadius: SIZES.base,
                    backgroundColor: item.id == ratings ? COLORS.primary : COLORS.lightGray2
                  }}
                  label={item.label}
                  labelStyle={{
                    color: item.id == ratings ? COLORS.white : COLORS.gray
                  }}
                  icon={icons.star}
                  iconStyle={{
                    tintColor: item.id == ratings ? COLORS.white : COLORS.gray
                  }}
                  onPress={() => setRatings(item.id)}
                />
              )
            })
          }
        </View>
      </Section>
    )
  }

  function renderTags() {
    return (
      <Section
        title='Tags'
      >
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {
            constants.tags.map((item, index) => {
              return (
                <TextButton
                  key={`tags-${index}`}
                  buttonContainerStyle={{
                    height: 50,
                    margin: 5,
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center',
                    borderRadius: SIZES.base,
                    backgroundColor: item.id == tags ? COLORS.primary : COLORS.lightGray2
                  }}
                  label={item.label}
                  labelStyle={{
                    color: item.id == tags ? COLORS.white : COLORS.gray,
                    ...FONTS.body3
                  }}
                  onPress={() => setTags(item.id)}
                />
              )
            })
          }
        </View>
      </Section>
    )
  }

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={isVisible}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.transparentBlack7
        }}
      >
        {/* Transparent Background */}
        <TouchableWithoutFeedback
          onPress={() => setShowFilterModal(false)}
        >
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
          />
        </TouchableWithoutFeedback>

        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            top: modalY,
            width: '100%',
            height: '100%',
            padding: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            borderTopLeftRadius: SIZES.padding,
            backgroundColor: COLORS.white
          }}
        >
          {/* Header */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                flex: 1,
                ...FONTS.h3
              }}
            >
              Filter Your Search
            </Text>

            <IconButton
              containerStyle={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: COLORS.gray2
              }}

              icon={icons.cross}
              iconStyle={{
                tintColor: COLORS.gray2
              }}
              onPress={() => setShowFilterModal(false)}
            />
          </View>

          {/* Content */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 250
            }}
          >
            {/* Distance */}
            {/* {renderDistance()} */}

            {/* Delivery Time */}
            {renderDeliveryTime()}

            {/* Pricing Range */}
            {/* {renderPricingRange()} */}

            {/* Pricing Range */}
            {renderRatings()}

            {/* Tags */}
            {renderTags()}

          </ScrollView>

          {/* Apply Button */}
          <View
            style={{
              position: 'absolute',
              bottom: 150,
              left: 0,
              right: 0,
              height: 110,
              paddingHorizontal: SIZES.padding,
              paddingVertical: SIZES.radius,
              backgroundColor: COLORS.white
            }}
          >
            <TextButton
              label='Apply Filters'
              buttonContainerStyle={{
                height: 50,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.primary
              }}
              onPress={() => console.log('Apply Filters')}
            >

            </TextButton>
          </View>

        </Animated.View>
      </View>
    </Modal>
  )
}

export default FilterModal