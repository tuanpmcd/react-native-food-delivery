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
    TextIconButtonSignIn
} from '../../components'

import { utils } from '../../utils'

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [showPass, setShowPass] = useState(false)
    const [emailError, setEmailError] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    function isEnableSignUp() {
        return email != '' && username != '' && password != '' && emailError == '' && passwordError == '' && usernameError == ''
    }

    return (
        <AuthLayout
            title="Getting Started"
            subtitle="Create an account to continue"
            titleContainerStyle={{
                marginTop: SIZES.radius
            }}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'space-between'
                }}
            >
                {/* Form Inputs & Sign Up */}
                <View
                    style={{
                        marginTop: SIZES.padding,
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
                        label='Username'
                        containerStyle={{
                            marginTop: SIZES.radius
                        }}
                        onChange={(value) => setUsername(value)}
                        errorMsg={usernameError}
                        appendComponent={
                            <View
                                style={{
                                    justifyContent: 'center'
                                }}
                            >
                                <Image
                                    source={username == '' || (username != '' && usernameError == '') ? icons.correct : icons.correct}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: username == '' ? COLORS.gray :
                                            (username != '' && usernameError == '') ? COLORS.green : COLORS.red
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
                        onChange={(value) => {
                            utils.validatePassword(value, setPasswordError)
                            setPassword(value)
                        }}
                        errorMsg={passwordError}
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

                    {/* Sign Up & Already have an account? */}

                    {/* Sign Up */}
                    <TextButton
                        label='Sign Up'
                        disabled={isEnableSignUp() ? false : true}
                        buttonContainerStyle={{
                            backgroundColor: isEnableSignUp() ? COLORS.primary : COLORS.transparentPrimray,
                            height: 55,
                            alignItems: 'center',
                            marginTop: SIZES.padding,
                            borderRadius: SIZES.radius
                        }}

                        onPress={() => navigation.navigate('Otp')}
                    />

                    {/* Already have an account? */}
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
                            Already have an account?
                        </Text>

                        <TextButton
                            label='Sign In'
                            buttonContainerStyle={{
                                marginLeft: 3,
                                backgroundColor: null,
                            }}
                            labelStyle={{
                                color: COLORS.primary,
                                ...FONTS.h3
                            }}

                            onPress={() => navigation.goBack()}
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

export default SignUp;