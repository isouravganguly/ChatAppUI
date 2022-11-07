//  -- Third Party Components
import { SafeAreaView, FlatList } from 'react-native';
import React from 'react'

// --User defined Components
import Card from '../../../../../components/Card';

DATAs = [
    {
      id: 'c1b1-46c2-aed5',
      name: 'One World',
      text: "Hey!",
      img: "person1"
    },
    {
      id: 'c605-48d3-a4f8',
      name: 'React Native',
      text: "Hey!",
      img: "person2"
    },
    {
      id: '3da1-471f-bd96',
      name: 'Friends',
      text: "Hey!",
      img: "person3"
    },
  ];

const GroupChatList = ({navigation}) => {
    const renderItem = ({ item }) => (
        <Card item={item} navigation = {navigation} compo="Group"/>
      );
  return (
    <SafeAreaView>
      <FlatList
        data={DATAs}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default GroupChatList