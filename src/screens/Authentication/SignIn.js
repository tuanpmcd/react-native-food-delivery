import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import { AuthLayout } from '../'
import { COLORS, FONTS, SIZES, icons } from '../../constants'
import {
    FormInput,
    CustomSwitch,
    TextButton,
    TextIconButtonSignIn
} from '../../components'
import { utils } from '../../utils'

const SignIn = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [showPass, setShowPass] = useState(false)

    const [saveMe, setSaveMe] = useState(false)

    function isEnableSignIn() {
        return email != '' && password != '' && emailError == ''
    }

    return (
        <AuthLayout
            title="Let's Sign Your In"
            subtitle="Welcome back, you've been missed"
        >
            {/* Main & Footer */}
            <View
                style={{
                    flex: 1,
                    justifyContent: 'space-between'
                }}
            >
                {/* Main */}
                <View
                    style={{
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
                    <FormInput
                        label='Password'
                        secureTextEntry={!showPass}
                        autoCompleteType='password'
                        containerStyle={{
                            marginTop: SIZES.radius
                        }}
                        onChange={(value) => setPassword(value)}
                        appendComponent={
                            <TouchableOpacity
                                style={{
                                    width: 40,
                                    alignItems: 'flex-end',
                                    justifyContent: 'center'
                                }}
                                onPress={() => setShowPass(!showPass)}
                            >
                                <Image
                                    source={showPass ? icons.eye_close : icons.eye}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.gray
                                    }}
                                />
                            </TouchableOpacity>
                        }
                    />

                    {/* Save me & Forgot Password */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.radius,
                            justifyContent: 'space-between'
                        }}
                    >
                        <CustomSwitch
                            value={saveMe}
                            onChange={value => setSaveMe(value)}
                        />
                        <TextButton
                            label='Forgot Password?'
                            buttonContainerStyle={{
                                backgroundColor: null
                            }}
                            labelStyle={{
                                color: COLORS.gray,
                                ...FONTS.body4
                            }}

                            onPress={() => navigation.navigate('ForgotPassword')}
                        />
                    </View>

                    {/* Sign In */}
                    <TextButton
                        label='Sign In'
                        disabled={isEnableSignIn() ? false : true}
                        buttonContainerStyle={{
                            backgroundColor: isEnableSignIn() ? COLORS.primary : COLORS.transparentPrimray,
                            height: 55,
                            alignItems: 'center',
                            marginTop: SIZES.padding,
                            borderRadius: SIZES.radius
                        }}

                        onPress={() => navigation.navigate('ForgotPassword')}
                    />

                    {/* Sign Up */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.radius,
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.darkGray,
                                ...FONTS.body3,
                            }}
                        >
                            Don't have an account?
                        </Text>

                        <TextButton
                            label='Sign Up'
                            buttonContainerStyle={{
                                marginLeft: 3,
                                backgroundColor: null,
                            }}
                            labelStyle={{
                                color: COLORS.primary,
                                ...FONTS.h3
                            }}

                            onPress={() => navigation.navigate('SignUp')}
                        />
                    </View>
                </View>

                {/* Footer */}
                <View>
                    {/* Facebook */}
                    <TextIconButtonSignIn
                        containerStyle={{
                            height: 50,
                            alignItems: 'center',
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.blue
                        }}
                        icon={icons.fb}
                        iconPosition='LEFT'
                        iconStyle={{
                            tintColor: COLORS.white
                        }}
                        label='Continue With Facebook'
                        labelStyle={{
                            marginLeft: SIZES.radius,
                            color: COLORS.white
                        }}

                        onPress={() => console.log('FB')}
                    />

                    {/* Google */}
                    <TextIconButtonSignIn
                        containerStyle={{
                            height: 50,
                            alignItems: 'center',
                            marginTop: SIZES.radius,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray2
                        }}
                        icon={icons.google}
                        iconPosition='LEFT'
                        iconStyle={{
                            tintColor: null
                        }}
                        label='Continue With Google'
                        labelStyle={{
                            marginLeft: SIZES.radius,
                        }}

                        onPress={() => console.log('GG')}
                    />

                </View>
            </View>

        </AuthLayout>
    )
}

export default SignIn;