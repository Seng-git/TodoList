import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export interface Props{
    id : number,
    name : string,
    isComplete : boolean,
}

const Todo : React.FC<Props> = ({id, name , isComplete}) => {
  return (
    <SafeAreaView style={styles.Todo}>
        <Text>{id}-{name}-{isComplete ? "Already" : "Not yet"}</Text>
    </SafeAreaView>
  )
}

export default Todo

const styles = StyleSheet.create({
    Todo:{
        padding : 10,
        margin : 10,
        width: "100%",
        
    }
})