import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { DrawerItem, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
export default function CustomDrawerContentComponent(props) {
    return (

        <DrawerContentScrollView {...props}>

            <View style={
                styles.drawerHeader
            }>
                <View style={
                    {flex: 1}
                }>
                    <Image source={
                            require('./images/logo.png')
                        }
                        style={
                            styles.drawerImage
                        }/>
                </View>
                <View style={
                    {flex: 2}
                }>
                    <Text style={
                        styles.drawerHeaderText
                    }>Ristorante Con Fusion</Text>
                </View>
            </View>

            <DrawerItemList {...props}/>
            <DrawerItem label="Copyright vanssign"
                onPress={
                    () => Linking.openURL('https://mywebsite.com/help')
                }/>
        </DrawerContentScrollView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1
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
