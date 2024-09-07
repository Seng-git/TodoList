import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Todo from './Todo';

interface Todo{
  id: number,
  name: string,
  isComplete: boolean,
}

export default function App() {

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const [Name, setName] = useState<string>("")

  const addTodo = (name: string)=>{
    let newTodo : Todo;

    newTodo = {
      id : todoList.length+1,
      name : name,
      isComplete : false,
    }

    setTodoList([newTodo, ...todoList]);
  }

  console.log(todoList)

  return (

    <SafeAreaView style={styles.container}>
      <TextInput placeholder='Add Todo'
       style={styles.input}
       onChangeText={(text) => setName(text)}
       />
      <TouchableOpacity style={styles.button} onPress={()=>addTodo(Name)}>
        <Text style={{color: "white"}}
        >Insert</Text>
      </TouchableOpacity>
        {
          todoList.map((item, index)=>
            <Todo
            key={index}
            id={item.id}
            name={item.name}
            isComplete={item.isComplete}>
            </Todo>
          )
        }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 24,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
  },
  button: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: "blue",
    textAlign: "center",
    alignItems: "center",
  },
});
