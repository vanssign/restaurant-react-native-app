import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {View,Text,Platform,Image,StyleSheet,ScrollView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './HomeComponent';
import {SafeAreaView} from '@react-navigation/native';
import { createDrawerNavigator,DrawerItem,DrawerContentScrollView} from '@react-navigation/drawer';
import {Icon} from 'react-native-elements';
import CustomDrawerContentComponent from './CustomDrawerComponent';
const Drawer = createDrawerNavigator();

const Stack=createStackNavigator();


function MenuNavigator({navigation}) {
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
          headerLeft:()=><Icon name="menu" size={40} onPress={()=>navigation.toggleDrawer()}/>
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
function HomeNavigator({navigation}) {
  return (
    <>
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#000000',
        headerStyle: { backgroundColor: '#ffffff' },
        headerTitleStyle:{color:'#000000'}
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerLeft:()=><Icon name="menu" size={40} onPress={()=>navigation.toggleDrawer()}/>
        }}
      />
    </Stack.Navigator>
    </>
  );
}
function AboutNavigator({navigation}) {
  return (
    <>
    <Stack.Navigator
      initialRouteName="About"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#000000',
        headerStyle: { backgroundColor: '#ffffff' },
        headerTitleStyle:{color:'#000000'}
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: 'About',
          headerLeft:()=><Icon name="menu" size={40} onPress={()=>navigation.toggleDrawer()}/>
        }}
      />
    </Stack.Navigator>
    </>
  );
}
function ContactNavigator({navigation}) {
  return (
    <>
    <Stack.Navigator
      initialRouteName="Contact"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#000000',
        headerStyle: { backgroundColor: '#ffffff' },
        headerTitleStyle:{color:'#000000'}
      }}
    >
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          title: 'Contact',
          headerLeft:()=><Icon name="menu" size={40}  onPress={()=>navigation.toggleDrawer()}/>
        }}
      />
    </Stack.Navigator>
    </>
  );
}



function Main(){
  return(
<Drawer.Navigator  initialRouteName="Home" drawerContent={props=><CustomDrawerContentComponent {...props}/>}>

<Drawer.Screen name="Home"  
options={{drawerIcon:()=><Icon
              name='home'
              type='font-awesome'            
              size={24}
              
/>}}
 component={HomeNavigator} />
            
<Drawer.Screen name="Menu"
options={{drawerIcon:()=><Icon
  name='list'
  type='font-awesome'            
  size={24}
  
/>}}
 component={MenuNavigator}/>
<Drawer.Screen name="Contact" 
options={{drawerIcon:()=><Icon
  name='address-card'
  type='font-awesome'            
  size={24}
  
/>}} 
component={ContactNavigator}/>
<Drawer.Screen name="About"
 options={{drawerIcon:()=><Icon
  name='info-circle'
  type='font-awesome'            
  size={24}
  
/>}}
component={AboutNavigator}/>
</Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

export default Main;