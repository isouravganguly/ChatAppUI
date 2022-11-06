import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./Home/Home"
import Settings from "./Settings";

const Drawer = createDrawerNavigator();

const ChatApp = () => {
  return (
    <>
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} options={{title: "GeekChat"}} />
        <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
    </>
  )
}

export default ChatApp

const styles = StyleSheet.create({})