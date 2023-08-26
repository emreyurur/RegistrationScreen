import React from 'react'
import { SafeAreaView,View,Text,StyleSheet } from 'react-native'
import Button from '../components/Button/Button';

const Welcome=({navigation})=>{

    function goToMemberSign(){
        navigation.navigate("MemberSignScreen")
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>EY Fitness</Text>
            <Button text="Create a Member Registration" onPress={goToMemberSign} />
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
    },
    header:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center"
    }
})

export default Welcome;