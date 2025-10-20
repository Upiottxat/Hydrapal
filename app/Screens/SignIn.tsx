
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, TextInput, View,Button } from 'react-native'
interface Props {
  role: "star" | "guardian"
}
const SignIn = ({ role }: Props) => {
  return (
    <LinearGradient
      colors={['#daf1fd', '#FFFFFF']}
      style={styles.container}
    >

      <Text>A Refreshing Start to better hydration
      </Text>
      <View>
       <Text>Email</Text>
       <View><TextInput placeholder='Enter your email'/> </View>
       <Text>Password</Text>
       <View><TextInput placeholder='Enter your Password'/> </View>
      </View>
      <Text>foget your password</Text>
      <Button title={"Dive In"}></Button>
      
    </LinearGradient>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aliceblue'
  }
})

export default SignIn