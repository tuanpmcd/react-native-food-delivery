import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import {
    TextButton,
} from '../../components'
import OtpInputs from 'react-native-otp-inputs'

const SignUp = ({ navigation }) => {
    const [timer, setTimer] = useState(60)

    useEffect(() => {
        let interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - 1
                } else {
                    return prevTimer
                }
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <AuthLayout
            title="OTP Authentication"
            subtitle="An authentication code has been sent to your email"
            titleContainerStyle={{
                marginTop: SIZES.padding * 2
            }}
        >
            {/* OTP Input & Countdown Timer*/}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2,
                }}
            >
                {/* OTP */}
                <OtpInputs
                    numberOfInputs={4}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                    }}
                    inputStyles={{
                        width: 65,
                        height: 65,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        marginHorizontal: SIZES.base,
                        paddingLeft: 25,
                        backgroundColor: COLORS.lightGray2,
                        color: COLORS.black,
                        ...FONTS.h2
                    }}

                    handleChange={(code) => console.log(code)}
                />

                {/* Countdown Timer */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding,
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3,
                        }}
                    >
                        Didn't receive code?
                    </Text>

                    <TextButton
                        label={`Resend (${timer}s)`}
                        disabled={timer == 0 ? false : true}
                        buttonContainerStyle={{
                            marginLeft: SIZES.base,
                            backgroundColor: null,
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}

                        onPress={() => setTimer(60)}
                    />
                </View>
            </View>

            {/* Footer */}
            <View>
                {/* Button Continue */}
                <TextButton
                    label='Continue'
                    buttonContainerStyle={{
                        height: 50,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary,
                    }}

                    onPress={() => console.log('Continue, authentication code & handle setIsAuthenticated(true)')}
                />

                {/*  */}
                <View
                    style={{
                        marginTop: SIZES.padding,
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}
                    >
                        By signing up, you agree to our.
                    </Text>

                    <TextButton
                        label='Terms and Conditions'
                        buttonContainerStyle={{
                            backgroundColor: null,
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.body3
                        }}

                        onPress={() => console.log('Terms and Conditions')}
                    />
                </View>
            </View>
        </AuthLayout>
    )
}

export default SignUp;