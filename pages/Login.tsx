import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const Login = () => {
  return (
    <View>
        <Text style={styles.txt}>Login</Text>
        <Text>By signing in you are agreeing our<Text style={{color:"blue"}}>Term and privacy policy</Text></Text>
        <View>
            <Fontisto name="email" size={24} color="black" />
            <TextInput placeholder='Email Address'></TextInput>
        </View>
        <View><
            Feather name="lock" size={24} color="black" />
            <TextInput placeholder='Password'></TextInput>
            <TouchableOpacity>
                <FontAwesome name="eye" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.submit}>
            <Text style={{color:"white"}}>Login</Text>
        </TouchableOpacity>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    txt:{
        color: "black",
        justifyContent: "center",
        alignItems:"center",

    },
    submit:{
        color:"blue",
        justifyContent:"center",
        alignItems:"center",
    }
})