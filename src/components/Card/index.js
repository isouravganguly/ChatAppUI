import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = (item) => {
  return (
    <View style= {styles.container}>
      <Text style = {styles.name}>{item.name}</Text>
      <Text style = {styles.text}>{item.text}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
    },
    
    name:{
        fontSize: 30,
    },
    text:{
        fontSize: 20,
    }
})