import { StyleSheet, FlatList, View, Text } from 'react-native'
import React from 'react'
import Card from '../../../../../components/Card'

const ChatList = () => {
    const nameList = [{id:1, name:"Sourav", text:"hey"}, {id:2, name:"Joy", text:"Any Plans"}, {id:3, name:"Boss", text:"Looking forward!"}, ]
  return (
    <View style = {styles.container}>
    <FlatList
    data = {nameList}
    renderItems = {()=><Text>Hello!</Text>}
    />
    </View>
  )
}

export default ChatList

const styles = StyleSheet.create({
    container:{
        marginTop: 100,
    }
})