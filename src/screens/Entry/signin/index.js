import { Text, View } from 'react-native'
import React from 'react'
// import Form from "../../../components/Form"

const Login = () => {
  const form = {user:"text", password: "password"}
  return (
    <View>
      <Text>Login</Text>
      {/* <Form data = {form} /> */}
    </View>
  )
}

export default Login
