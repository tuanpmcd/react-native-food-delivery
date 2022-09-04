import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import {
    FormInput,
    TextButton,
} from '../../components'

import { utils } from '../../utils'

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    function isEnableSendEmail() {
        return email != '' && emailError == ''
    }

    return (
        <AuthLayout
            title="Password Recovery"
            subtitle="Please enter your email address to recover your password"
            titleContainerStyle={{
                marginTop: SIZES.padding * 2
            }}
        >
            {/* Form Inputs */}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}
            >
                {/* Form Inputs */}
                <FormInput
                    label='Email'
                    keyboardType='email-address'
                    autoCompleteType='email'
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={email == '' || (email != '' && emailError == '') ? icons.correct : icons.correct}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: email == '' ? COLORS.gray :
                                        (email != '' && emailError == '') ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />
            </View>

            {/* Button */}
            <TextButton
                disabled={isEnableSendEmail() ? false : true}
                buttonContainerStyle={{
                    height: 55,
                    alignItems: 'center',
                    borderRadius: SIZES.radius,
                    marginTop: SIZES.padding,
                    backgroundColor: isEnableSendEmail() ? COLORS.primary : COLORS.transparentPrimray
                }}
                label='Send Email'

                onPress={() => navigation.goBack()}
            />
        </AuthLayout>
    )
}

export default ForgotPassword;