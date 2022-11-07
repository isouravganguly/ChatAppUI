import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

const Form = ({formLabel}) => {
  const [text, onChangeText] = useState();
  const renderItem = ({item})=>{
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={}
      />
  }
  return (
    <View>
      <FlatList
        data={formLabel}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Form

const styles = StyleSheet.create({})