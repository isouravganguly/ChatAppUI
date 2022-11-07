import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import image from '../../../../../../assets/images/index'
import styles from './styles'

const UserDetails = ({route}) => {
  const {name, img, compo} = route.params;
  return (
    <View style = {styles.container}>
      <Image style = {styles.image} source={image[img]} />
      <Text style = {styles.name}>{compo} : {name}</Text>

    </View>
  )
}

export default UserDetails

