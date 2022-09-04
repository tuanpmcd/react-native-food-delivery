import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';
import {
    HeaderDetail,
    IconButton,
    CartQuantityButton,
    IconLabel,
    TextButton,
    LineDivider,
    Rating,
    StepperInput
} from '../../components'

import {
    COLORS,
    SIZES,
    FONTS,
    icons,
    images,
    dummyData
} from '../../constants'
import { useNavigation } from '@react-navigation/native'

const FoodDetail = ({ navigation }) => {
    const [foodItem, setFoodItem] = useState(dummyData.hamburger)
    const [selectedSize, setSelectedSize] = useState('')
    const [qty, setQty] = useState(1)

    function renderHeaderDetail() {
        const navigation = useNavigation()

        return (
            <HeaderDetail
                title='DETAILS'
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 20
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
                        }}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: SIZES.radius,
                            borderWidth: 1,
                            borderColor: COLORS.gray2
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <CartQuantityButton
                        quantity={3}
                    />
                }
            />
        )
    }

    function renderDetails() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                }}
            >
                {/* Food Cart  */}
                <View
                    style={{
                        height: 190,
                        borderRadius: 15,
                        backgroundColor: COLORS.lightGray2
                    }}>
                    {/* Calories & Favourite */}
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: SIZES.base,
                            paddingHorizontal: SIZES.radius
                        }}>
                        {/* Calories */}
                        <View
                            style={{
                                flexDirection: 'row',
                            }}
                        >
                            <Image
                                source={icons.calories}
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />

                            <Text
                                style={{
                                    color: COLORS.darkGray2,
                                    ...FONTS.body4
                                }}
                            >
                                {foodItem?.calories} Calories
                            </Text>
                        </View>

                        {/* Favourite */}
                        <Image
                            source={icons.love}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray
                            }}
                        />
                    </View>

                    {/* Food Image */}
                    <Image
                        source={foodItem?.image}
                        resizeMode='contain'
                        style={{
                            width: '100%',
                            height: 170,
                        }}
                    />
                </View>

                {/* Food Infomation */}
                <View
                    style={{
                        marginTop: SIZES.padding,
                    }}>

                    {/* Name & Description */}
                    <Text
                        style={{
                            ...FONTS.h1
                        }}
                    >
                        {foodItem?.name}
                    </Text>

                    <Text
                        style={{
                            marginTop: SIZES.base,
                            color: COLORS.darkGray,
                            textAlign: 'justify',
                            ...FONTS.body3
                        }}
                    >
                        {foodItem?.description}
                    </Text>

                    {/* Ratings & Duration & Shipping */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding
                        }}
                    >
                        {/* Ratings */}
                        <IconLabel
                            containerStyle={{
                                backgroundColor: COLORS.primary
                            }}
                            icon={icons.star}
                            label='4.5'
                            labelStyle={{
                                color: COLORS.white
                            }}
                        />

                        {/* Duration */}
                        <IconLabel
                            containerStyle={{
                                marginLeft: SIZES.radius,
                                paddingHorizontal: 0
                            }}
                            icon={icons.clock}
                            iconStyle={{
                                tintColor: COLORS.black
                            }}
                            label='30 Mins'
                        />

                        {/* Shipping */}
                        <IconLabel
                            containerStyle={{
                                marginLeft: SIZES.radius,
                                paddingHorizontal: 0
                            }}
                            icon={icons.dollar}
                            iconStyle={{
                                tintColor: COLORS.black
                            }}
                            label='Free Shipping'
                        />

                    </View>

                    {/* Sizes */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding,
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.h3
                            }}
                        >
                            Sizes:
                        </Text>

                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                marginLeft: SIZES.padding,
                            }}
                        >
                            {
                                dummyData.sizes.map((item, index) => {
                                    return (
                                        <TextButton
                                            key={`sizes-${index}`}
                                            buttonContainerStyle={{
                                                width: 55,
                                                height: 55,
                                                margin: SIZES.base,
                                                borderWidth: 1,
                                                borderRadius: SIZES.radius,
                                                borderColor: selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                                                backgroundColor: selectedSize == item.id ? COLORS.primary : null
                                            }}
                                            label={item.label}
                                            labelStyle={{
                                                color: selectedSize == item.id ? COLORS.white : COLORS.gray2,
                                                ...FONTS.body2
                                            }}
                                            onPress={() => setSelectedSize(item.id)}
                                        />
                                    )
                                })
                            }
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    function renderRestaurant() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center'
                }}
            >
                {/* Image */}
                <Image
                    source={images.profile}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: SIZES.radius
                    }}
                />

                {/* Info */}
                <View
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.h3
                        }}
                    >
                        Tuan Pham
                    </Text>
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                    >
                        1.2 KM away from you
                    </Text>
                </View>

                {/* Ratings */}
                <Rating
                    rating={4}
                    iconStyle={{
                        marginLeft: 3
                    }}
                />
            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 120,
                    paddingBottom: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center'
                }}
            >
                {/* StepperInput */}
                <StepperInput
                    value={qty}
                    onAdd={() => setQty(qty + 1)}
                    onMinus={() => {
                        if (qty > 1) {
                            setQty(qty - 1)
                        }
                    }}
                />

                {/* Text Button */}
                <TextButton
                    buttonContainerStyle={{
                        flex: 1,
                        flexDirection: 'row',
                        height: 60,
                        marginLeft: SIZES.radius,
                        paddingHorizontal: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    label='Buy Now'
                    label2='$15.99'
                    onPress={() => navigation.navigate('MyCart')}
                />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/* Header */}
            {renderHeaderDetail()}

            {/* Body */}
            <ScrollView>
                {/* Food Detail */}
                {renderDetails()}
                <LineDivider />

                {/* Restaurant */}
                {renderRestaurant()}
            </ScrollView>

            {/* Footer */}
            <LineDivider />
            {renderFooter()}
        </View>
    )
}

export default FoodDetail;