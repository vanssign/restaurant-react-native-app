import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import {View,Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './HomeComponent';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Stack=createStackNavigator();


function MenuNavigator() {
  return (
    <>
    <Stack.Navigator
      initialRouteName="Menu"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#000000',
        headerStyle: { backgroundColor: '#ffffff' },
        headerTitleStyle:{color:'#000000'}
      }}
    >
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          title: 'Menu',
        }}
      />
      <Stack.Screen
        name="Dishdetail"
        component={Dishdetail}
        options={{
          title: 'Dish Details',
        }}
      />
    </Stack.Navigator>
    </>
  );
}

function Main(){
  return(
<Drawer.Navigator initialRouteName="Home">
<Drawer.Screen name="Home" component={Home} />
<Drawer.Screen name="Menu" component={MenuNavigator}/>
</Drawer.Navigator>
  )
}


export default Main;