import { Text, View } from 'react-native'
import React from 'react'

import styles from './styles'

const AuthLoading = () => {
  return (
    <View style = {styles.container}>
      <Text style={styles.text}>AuthLoading...</Text>
    </View>
  )
}

export default AuthLoading