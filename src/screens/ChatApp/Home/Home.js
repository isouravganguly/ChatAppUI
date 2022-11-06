import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Chat from "./Chat"
import GroupChat from "./Group/Group"
import Status from "./Status"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()
const Home = () => {
  return (
    <>
    <Tab.Navigator screenOptions={{headerShown:false}}> 
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Group Chat" component={GroupChat} />
        <Tab.Screen name="Status" component={Status} />
    </Tab.Navigator>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})