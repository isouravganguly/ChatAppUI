import React, {useState, useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Feather'

import Auth_Loading from '../screens/AuthLoading';
import Login from '../screens/Not_Logged_in/Login';
import ResetPassword from '../screens/Not_Logged_in/ResetPassword';
import SignUp from '../screens/Not_Logged_in/SignUp';

import ChatList from "../screens/Logged_In/Home//Chat/ChatList"
import UserChat from "../screens/Logged_In/Home//Chat/UserChat"
import UserDetails from "../screens/Logged_In/Home//Chat/UserDetails"

import GroupChat from '../screens/Logged_In/Home/Group/GroupChat'
import GroupChatList from '../screens/Logged_In/Home/Group/GroupChatList'
import GroupDetails from '../screens/Logged_In/Home/Group/GroupDetails'

import Setting from "../screens/Logged_In/Setting"
import Status from "../screens/Logged_In/Home/Status"

const Stack = createNativeStackNavigator();

const Navigation = () => {

    const [isSignedIn, updateIsSignedIn] = useState(true)
    const [loading, updateLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
          updateLoading(false)
        }, 3000);
      }, [])
    
    
  return (
    <>
    <Stack.Navigator screenOptions={{headerShown: false}}>
       {loading ?  <Stack.Screen name = "Auth_Loading" component={Auth_Loading} /> : isSignedIn ? <Stack.Screen name="Logged_In" component={Logged_In} /> : <Stack.Screen name="Not_Logged_In" component={Not_Logged_In} />}
    </Stack.Navigator>
    </>
  )
}
const notLogStack = createNativeStackNavigator();
const Not_Logged_In = ()=>{
    return(
        <notLogStack.Navigator screenOptions={{headerShown: false}}>
            <notLogStack.Screen name="Login" component={Login} />
            <notLogStack.Screen name = "SignUp" component={SignUp} />
            <notLogStack.Screen name='Reset Password' component={ResetPassword} />
        </notLogStack.Navigator>
    )
}

const Drawer = createDrawerNavigator()
const Logged_In = ()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen  name = "Home" component={Home} option={{title: "GeekChat"}} />
            <Drawer.Screen name = "Setting" component={Setting} />
        </Drawer.Navigator>
    )
}

const Tab = createBottomTabNavigator()
const Home = ()=>{
    return(
        <Tab.Navigator screenOptions={({route})=>({
            headerShown: false,
            tabBarIcon: ({color, size}) =>{
                let iconName;

                if(route.name === "Chat"){
                    iconName = "message-square"
                }
                else if(route.name === "Group"){
                    iconName = "users"
                }
                else if(route.name === "Status"){
                    iconName = "film"
                }

                return <Icon name={iconName} size={size} color={color} />;
            }
        })}>
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name = "Group" component = {Group} />
            <Tab.Screen name = "Status" component = {Status} />

        </Tab.Navigator>
    )
}

const chatStack = createNativeStackNavigator()
const Chat = ()=>{
    return (
        <chatStack.Navigator screenOptions={{headerShown: false}}>
            <chatStack.Screen name = "ChatList" component={ChatList} />
            <chatStack.Screen name = "UserChat" component={UserChat} />
            <chatStack.Screen name = "UserDetails" component={UserDetails} />
        </chatStack.Navigator>
    )
}

const GroupStack = createNativeStackNavigator()
const Group = ()=>{
    return (
        <GroupStack.Navigator screenOptions={{headerShown: false}}>
            <GroupStack.Screen name = "GroupChatList" component={GroupChatList} />
            <GroupStack.Screen name = "GroupChat" component={GroupChat} />
            <GroupStack.Screen name = "GroupDetails" component={GroupDetails} />
            
        </GroupStack.Navigator>
    )
}
export default Navigation