import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import styles from './styles'

const Status = () => {
  return (
    <View style = {styles.container}>
      <Text style={styles.status}>Status</Text>
    </View>
  )
}

export default Status