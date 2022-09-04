import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground
} from 'react-native';
import {
    HeaderDetail,
    IconButton,
    TextButton,
    FormInput,
    RadioButton
} from '../../components'
import {
    COLORS,
    SIZES,
    FONTS,
    icons,
    images
} from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { utils } from "../../utils";

const AddCard = ({ navigation, route }) => {
    const [selectedCard, setSelectedCard] = useState(null)
    const [cardNumber, setCardNumber] = useState('')
    const [cardNumberError, setCardNumberError] = useState('')
    const [cardName, setCardName] = useState('')
    const [cardNameError, setCardNameError] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [expiryDateError, setExpiryDateError] = useState('')
    const [cvv, setCvv] = useState('')
    const [cvvError, setCvvError] = useState('')
    const [isRemember, setIsRemember] = useState(false)

    useEffect(() => {
        let { selectedCard } = route.params

        setSelectedCard(selectedCard)
    }, [])

    function isEnableAddCard() {
        return cardNumber != '' && cardName != '' && expiryDate != '' && cvv != '' && cardNumberError == '' && cardNameError == '' && expiryDateError == '' && cvvError == ''
    }

    // Render
    function renderHeaderDetail() {

        return (
            <HeaderDetail
                title='ADD NEW CARD'
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

    function renderCard() {

        return (
            <ImageBackground
                source={images.card}
                style={{
                    height: 200,
                    width: '100%',
                    marginTop: SIZES.radius,
                    borderRadius: SIZES.radius,
                    overflow: 'hidden'
                }}
            >
                {/* Logo */}
                <Image
                    source={selectedCard?.icon}
                    resizeMode='contain'
                    style={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        height: 40,
                        width: 80,
                    }}
                />

                {/* Details */}
                <View
                    style={{
                        position: 'absolute',
                        bottom: 10,
                        right: 0,
                        left: 0,
                        paddingHorizontal: SIZES.padding,
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.h3
                        }}
                    >
                        {cardName}
                    </Text>

                    <View
                        style={{
                            flexDirection: 'row',
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                color: COLORS.white,
                                ...FONTS.body3
                            }}
                        >
                            {cardNumber}
                        </Text>
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.body3
                            }}
                        >
                            {expiryDate}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }

    function renderForm() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 2
                }}
            >
                {/* Form Inputs */}
                {/* Card Number */}
                <FormInput
                    label='Card Number'
                    keyboardType='number-pad'
                    value={cardNumber}
                    maxLength={19}
                    onChange={(value) => {
                        setCardNumber(value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim())
                        utils.validateInput(value, 19, setCardNumberError)
                    }}
                    errorMsg={cardNumberError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={cardNumber == '' || (cardNumber != '' && cardNumberError == '') ? icons.correct : icons.cancel}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: cardNumber == '' ? COLORS.gray :
                                        (cardNumber != '' && cardNumberError == '') ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />

                {/* Cardholder Name */}
                <FormInput
                    label='Cardholder Name'
                    value={cardName}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => {
                        utils.validateInput(value, 1, setCardNameError)
                        setCardName(value)
                    }}
                    errorMsg={cardNameError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={cardName == '' || (cardName != '' && cardNameError == '') ? icons.correct : icons.cancel}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: cardName == '' ? COLORS.gray :
                                        (cardName != '' && cardNameError == '') ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />

                {/* Expiry Date & CVV */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius
                    }}
                >
                    {/* Expiry Date */}
                    <FormInput
                        label='Expiry Date'
                        placeholder='MM/YY'
                        value={expiryDate}
                        maxLength={5}
                        containerStyle={{
                            flex: 1
                        }}
                        onChange={(value) => {
                            utils.validateInput(value, 5, setExpiryDateError)
                            setExpiryDate(value)
                        }}
                        appendComponent={
                            <View
                                style={{
                                    justifyContent: 'center'
                                }}
                            >
                                <Image
                                    source={expiryDate == '' || (expiryDate != '' && expiryDateError == '') ? icons.correct : icons.cancel}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: expiryDate == '' ? COLORS.gray :
                                            (expiryDate != '' && expiryDateError == '') ? COLORS.green : COLORS.red
                                    }}
                                />
                            </View>
                        }
                    />

                    {/* CVV */}
                    <FormInput
                        label='CVV'
                        placeholder='MM/YY'
                        value={cvv}
                        maxLength={3}
                        containerStyle={{
                            flex: 1,
                            marginLeft: SIZES.radius
                        }}
                        onChange={(value) => {
                            utils.validateInput(value, 3, setCvvError)
                            setCvv(value)
                        }}
                        appendComponent={
                            <View
                                style={{
                                    justifyContent: 'center'
                                }}
                            >
                                <Image
                                    source={cvv == '' || (cvv != '' && cvvError == '') ? icons.correct : icons.cancel}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: cvv == '' ? COLORS.gray :
                                            (cvv != '' && cvvError == '') ? COLORS.green : COLORS.red
                                    }}
                                />
                            </View>
                        }
                    />
                </View>

                {/* Remember */}
                <View
                    style={{
                        alignItems: 'flex-start',
                        marginTop: SIZES.padding
                    }}
                >
                    <RadioButton
                        label='Remember this card.'
                        isSelected={isRemember}
                        onPress={() => setIsRemember(!isRemember)}
                    />
                </View>
            </View>
        )
    }

    function renderFooter() {

        return (
            <View
                style={{
                    paddingTop: SIZES.radius,
                    paddingBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}
            >
                <TextButton
                    label='Add Card'
                    disabled={!isEnableAddCard()}
                    buttonContainerStyle={{
                        height: 60,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableAddCard() ? COLORS.primary : COLORS.transparentPrimray,
                    }}
                    onPress={() => navigation.goBack()}
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
                contentContainerStyle={{
                    flex: 1,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* Card */}
                {renderCard()}

                {/* Forms */}
                {renderForm()}
            </KeyboardAwareScrollView>

            {/* Footer */}
            {renderFooter()}
        </View>
    )
}

export default AddCard;