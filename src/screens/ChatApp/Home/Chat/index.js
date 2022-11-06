import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import UserChat from "./UserChat"
import ChatList from "./ChatList"
import UserDetails from "./UserDetails"

const ChatStack = createNativeStackNavigator();

const Chat = () => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen name="ChatList" component={ChatList} />
      <ChatStack.Screen name="UserChat" component={UserChat} />
      <ChatStack.Screen name="UserDetails" component={UserDetails} />
    </ChatStack.Navigator>
  )
}

export default Chat

const styles = StyleSheet.create({})