import React, { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Todo from '../components/Todo';

interface Todo {
  id: number,
  name: string,
}

export default function App() {

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const [name, setName] = useState<string>("")

  const addTodo = () => {

    if (name === "") {
      return;
    }

    let newTodo: Todo;

    newTodo = {
      id: todoList.length + 1,
      name: name,
    }

    setTodoList([newTodo, ...todoList]);

    setName("");
  }

  const deleteTodo = (id : number) => {
    const newTodoList = todoList.filter(todo => todo.id!=id)

    setTodoList(newTodoList)
  }

  const editTodo = (id:number, newTodo: string) => {
    const newTodoList = todoList.map((todo)=>{
      if(id===todo.id){
        return {...todo, name : newTodo};
      }
      else{
        return todo;
      }

    }
    )
    setTodoList(newTodoList)
  }

  return (

    <SafeAreaView style={styles.container}>
      <TextInput placeholder='Add Todo'
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TouchableOpacity style={styles.button} onPress={() => addTodo()}>
        <Text style={{ color: "white" }}
        >Insert</Text>
      </TouchableOpacity>
      {/* <ScrollView>
      {
        todoList.map((item, index) =>
          <Todo
            key={item.id}
            id={item.id}
            name={item.name}
            isComplete={item.isComplete}>
          </Todo>
        )
      }
      </ScrollView> */}
      <FlatList
        data={todoList}
        renderItem={({ item }) => <Todo
          key={item.id}
          id={item.id}
          name={item.name}
          deleteTodo={deleteTodo}
          editTodo = {editTodo}
        >
        </Todo>}
        keyExtractor={item => item.id.toString()}
      />
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
    color: "yellow",
    backgroundColor: "black",
  },
  button: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    backgroundColor: "blue",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 90,
  },
});
