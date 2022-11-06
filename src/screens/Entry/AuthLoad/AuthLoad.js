import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import styles from './styles'

const AuthLoad = () => {
  return (
    <View style={styles.screen}>
    <Text style={styles.welcome}>GeekChat</Text>

    <Text style={styles.loading}>loading ...</Text>
    </View>
    )

  }
  
export default AuthLoad
