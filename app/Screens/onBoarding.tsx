import Card from '@/components/onBoarding/Card';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { StyleSheet, Text } from 'react-native';

const OnBoarding = () => {
  return (
      <LinearGradient
        colors={['#daf1fd', '#FFFFFF']}
        style={Styles.mainOnboardingView}
      >
        <Text  style={Styles.startedText} > Let's Get Started </Text>+
    <View style={{flex:1}}>
    <Card title={"I’m a Thirsty Star"} icon={"star-outline"} description={"Track my own water intake and stay hydrated."}/>
    <Card title={"I’m a Guardian"} icon={"shield"} description={"Help someone special meet their hydration goals."}/>
    </View>
    </LinearGradient>
  )
}
const Styles =StyleSheet.create({
  
  mainOnboardingView:{
    flex:1,
  
  },
  startedText:{
    padding:10,
    textAlign:"center",
    fontSize:25,
    fontWeight:'900',
    color:'#3c6484',
    fontFamily:'sans-serif',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 4,

    boxSizing:'border-box'
  }

})

export default OnBoarding