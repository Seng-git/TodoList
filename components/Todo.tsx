import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';


export interface Props{
    id : number,
    name : string,
    deleteTodo : (id : number) => void,
    editTodo : (id:number, newTodo: string) => void,
}



const Todo : React.FC<Props> = ({id, name, deleteTodo, editTodo}) => {
const [checkDone, setcheckDone] = useState(false);
const [isEdit, setisEdit] = useState(false);
const [newTodoText, setnewTodoText] = useState("");

const handelEdit=() =>{
  if(isEdit){
    editTodo(id, newTodoText);
    setisEdit(false);
  }
  else{
    setisEdit(true);
  }
}

const navigation = useNavigation()

const openDetail  = () => {
  navigation.navigate("TodoDetailPage")
}

  return (
      

    <TouchableOpacity style={styles.todo} onPress={openDetail}>
        {
          isEdit ? <TextInput defaultValue={name} onChangeText={setnewTodoText}/> : <Text style={styles.txt}>{id}-{name}-{checkDone ? "Already" : "Not yet"}</Text>
        }
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => setcheckDone(true)}>
            {
              !checkDone && <MaterialIcons name="done" size={24} color="black" />
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> deleteTodo(id)}>
            <AntDesign name="delete" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handelEdit()}>
            <Feather name="edit" size={24} color={isEdit ? "#779fe0" : "blue"} />
          </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default Todo

const styles = StyleSheet.create({
    todo:{
        padding : 10,
        margin : 10,
        justifyContent:"space-between",
        flexDirection:"row",
        borderWidth: 2,
        backgroundColor: "red",
        color: "green",
        borderRadius: 10,
    },
    txt:{
      color: "green",
    },
    icon:{
      gap:1,
      flexDirection: "row",
    }
})