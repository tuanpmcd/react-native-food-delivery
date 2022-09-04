import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SignIn,
  SignUp,
  ForgotPassword,
  Otp,
  OnBoarding
} from "../screens";

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='OnBoarding'
    >
      <AuthStack.Screen name='SignIn' component={SignIn} />
      <AuthStack.Screen name='SignUp' component={SignUp} />
      <AuthStack.Screen name='ForgotPassword' component={ForgotPassword} />
      <AuthStack.Screen name='Otp' component={Otp} />

      <AuthStack.Screen name='OnBoarding' component={OnBoarding} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
