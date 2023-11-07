import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from './src/screens/Products';
import Details from './src/screens/Details';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={TabNavigator}  />
            <Stack.Screen name='Products' component={Products} />
            <Stack.Screen name='Details' component={Details} /> 
        </Stack.Navigator>
    )
}
const TabNavigator = () =>{
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="HomePage" component={Products}   />
        <Tab.Screen name="Details" component={Details}   />
      </Tab.Navigator>
    )
}

const Router = () => {
  return (
    <NavigationContainer >
    <StackNavigator/>
  </NavigationContainer>
  )
}

export default Router