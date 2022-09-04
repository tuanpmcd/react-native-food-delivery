import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import {
    HeaderDetail,
    IconButton,
    FormInput,
    CardItem,
    FooterTotal
} from '../../components'
import {
    COLORS,
    SIZES,
    FONTS,
    icons,
    dummyData
} from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Checkout = ({ navigation, route }) => {
    const [selectedCard, setSelectedCard] = useState(null)

    useEffect(() => {
        let { selectedCard } = route.params

        setSelectedCard(selectedCard)
    }, [])

    // Render
    function renderHeaderDetail() {

        return (
            <HeaderDetail
                title='CHECKOUT'
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
            />
        )
    }

    function renderMyCards() {
        return (
            <View>
                {
                    selectedCard && dummyData.myCards.map((item, index) => {
                        return (
                            <CardItem
                                key={`MyCard-${item.id}`}
                                item={item}
                                isSelected={`${selectedCard?.key}-${selectedCard?.id}` == `MyCard-${item.id}`}
                                onPress={() => setSelectedCard({ ...item, key: 'MyCard' })}
                            />
                        )
                    })
                }
            </View>
        )
    }

    function renderDeliveryAddress() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text
                    style={{
                        ...FONTS.h3
                    }}
                >
                    Delivery Address
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.radius,
                        paddingVertical: SIZES.radius,
                        paddingHorizontal: SIZES.padding,
                        borderWidth: 2,
                        borderRadius: SIZES.radius,
                        borderColor: COLORS.lightGray2
                    }}
                >
                    <Image
                        source={icons.location1}
                        style={{
                            width: 40,
                            height: 40
                        }}
                    />
                    <Text
                        style={{
                            marginLeft: SIZES.radius,
                            width: '85%',
                            ...FONTS.body3
                        }}
                    >
                        300 Post Street San Francisco, CA
                    </Text>
                </View>
            </View>
        )
    }

    function renderCoupon() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text
                    style={{
                        ...FONTS.h3
                    }}
                >
                    Add Coupon
                </Text>

                <FormInput
                    inputContainerStyle={{
                        marginTop: 0,
                        paddingLeft: SIZES.padding,
                        paddingRight: 0,
                        borderWidth: 2,
                        borderColor: COLORS.lightGray2,
                        backgroundColor: COLORS.white,
                        overflow: 'hidden'
                    }}
                    placeholder='Coupon Code'
                    appendComponent={
                        <View
                            style={{
                                width: 60,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.primary
                            }}
                        >
                            <Image
                                source={icons.discount}
                                style={{
                                    width: 40,
                                    height: 40
                                }}
                            />
                        </View>
                    }
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
            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                extraScrollHeight={-200}
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 20
                }}
            >
                {/* My Cards */}
                {renderMyCards()}

                {/* Delivery Address */}
                {renderDeliveryAddress()}

                {/* Coupon */}
                {renderCoupon()}
            </KeyboardAwareScrollView>

            {/* Footer */}
            <FooterTotal
                subTotal={27.97}
                shippingFee={0.00}
                total={27.97}
                onPress={() => navigation.replace('Success')}
            />
        </View>
    )
}

export default Checkout;