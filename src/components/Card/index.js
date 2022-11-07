import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import image from '../../../assets/images'
import styles from './styles'

const Card = ({item, navigation, compo}) => {
  return (
    <View style={[styles.card, styles.shadow]}>
      
      <TouchableOpacity onPress={()=>navigation.navigate(compo+"Details", {
        name: item.name,
        img: item.img,
        compo: compo
      })}>
        <Image style = {styles.profile} source={image[item.img]} />
        </TouchableOpacity>
        
      <TouchableOpacity style={styles.info} 
      onPress={()=>navigation.navigate(compo+"Chat", {
        name: item.name,
        img: item.img,
        compo: compo
      })}
      >
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </TouchableOpacity>
    
    </View>
  )
}

export default Card