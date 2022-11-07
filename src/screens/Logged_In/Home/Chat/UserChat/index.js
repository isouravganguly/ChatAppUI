import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import image from '../../../../../../assets/images/index'
import styles from './styles'

const UserChat = ({route}) => {

  const {name, img} = route.params;
  return (
    <View style = {styles.chatHead}>
       <Image style = {styles.profile} source={image[img]} />
       <Text style = {styles.name}>{name}</Text>
    </View>
  )
}

export default UserChat