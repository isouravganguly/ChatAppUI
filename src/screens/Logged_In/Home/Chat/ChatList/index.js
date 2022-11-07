import { SafeAreaView, FlatList } from 'react-native';
import React from 'react'
import Card from '../../../../../components/Card';

DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Sneha',
      text: "Hey!",
      img: "person1"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Sourav',
      text: "Hey!",
      img: "person2"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Nitish',
      text: "Hey!",
      img: "person3"
    },
  ];

const ChatList = ({navigation}) => {
    const renderItem = ({ item }) => (
        <Card item={item} navigation = {navigation} compo="User"/>
      );
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default ChatList