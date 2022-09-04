import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Home,
  FoodDetail,
  MyCart,
  MyCard,
  AddCard,
  Checkout,
  Success,
  DeliveryStatus,
  Map
} from "../screens";
import CustomDrawer from "./CustomDrawer";

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='CustomDrawer'
    >
      <HomeStack.Screen name='CustomDrawer' component={CustomDrawer} />
      <HomeStack.Screen name='Home' component={Home} />
      <HomeStack.Screen name='FoodDetail' component={FoodDetail} />
      <HomeStack.Screen name='MyCart' component={MyCart} />
      <HomeStack.Screen name='MyCard' component={MyCard} />
      <HomeStack.Screen name='AddCard' component={AddCard} />
      <HomeStack.Screen name='Checkout' component={Checkout} />
      <HomeStack.Screen
        name='Success'
        component={Success}
        options={{ gestureEnabled: false }}
      />
      <HomeStack.Screen
        name='DeliveryStatus'
        component={DeliveryStatus}
        options={{ gestureEnabled: false }}
      />
      <HomeStack.Screen name='Map' component={Map} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
