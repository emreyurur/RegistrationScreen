import React from 'react'
import { SafeAreaView,View,Text,StyleSheet } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Welcome from './src/pages/Welcome';
import MemberSign from './src/pages/MemberSign';
import MemberResult from './src/pages/MemberResult';

const Stack=createNativeStackNavigator();



const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{
          headerShown:false
        }}/>
        <Stack.Screen
          name='MemberSignScreen'
          component={MemberSign}
        />
        <Stack.Screen
          name="MemberResultScreen"
          component={MemberResult}
        />
        </Stack.Navigator>
      </NavigationContainer>
  )
}



export default App;