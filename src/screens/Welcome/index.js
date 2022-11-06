import { Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from "../Entry/signin/index"
import SignUpScreen from "../Entry/signup"
import AuthLoad from '../Entry/AuthLoad/AuthLoad';
import ChatApp from "../ChatApp/ChatApp"

import styles from "./styles"

const Stack = createNativeStackNavigator();

const Welcome = () => {
  const [isSignedIn, changeIsSignedIn] = useState(true)
  const [loading, updateLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      updateLoading(false)
    }, 3000);
  }, [])
  

  const Chats = ()=>{
    return (
      <Stack.Screen name="Chat App" component={ChatApp} />
    )
  }

  const Entry = ()=>{
    return (
      <>
      <Stack.Screen name="Sign In" component={SignInScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      </>
    )
  }

  const signIn = (value) => {
    changeIsSignedIn(value)
  }
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      {loading? <Stack.Screen name="AuthMode" component={AuthLoad} /> : isSignedIn?  Chats() : Entry()}
      </Stack.Navigator>
  )
}

export default Welcome