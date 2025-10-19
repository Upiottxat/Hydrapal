import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
interface CardProps{
    title:string,
    icon:string,
    description:string
}
const Card = ({title,icon,description}:CardProps) => {
  return (
    <TouchableOpacity style={Styles.card}>
        <View style={Styles.innerCard}>
            <MaterialIcons name={icon} style={Styles.cardIcon}></MaterialIcons>
            <Text style={Styles.cardText}>{title}</Text>
            <Text style={Styles.cardDescription}>{description}</Text>
        </View>
    </TouchableOpacity>
  )
}
const Styles=StyleSheet.create({
    card:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        bottom:10
    },
    innerCard:{
        width:"75%",
        height:"75%",
        borderRadius:20,
        borderColor:'#36A2B9',
        borderWidth:0,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000000",
        shadowOffset: {
            width: 4,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.45,
        elevation: 10,
    },
    cardText:{
        fontSize:25,
        fontWeight:'700',
        color:'#3c6484',
        fontFamily:'Lato',
        padding:5
    },
    cardIcon:{
        fontSize:40,
        color:'#3c6484',
        padding:5
    },
    cardDescription:{
        fontSize:15,
        fontWeight:'400',
        color:'#555',
        fontFamily:'sans-serif',
        padding:5,
        width:'80%',
        textAlign:'center'
    }
})
export default Card
