import React, { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TodoList from './pages/TodoList';
import TodoDetail from './pages/TodoDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <SafeAreaView style={styles.container}>
      {/* <TodoList /> */}
      {/* <TodoDetail /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginPage" component={Login} />
          <Stack.Screen name="TodoListPage" component={TodoList} />
          <Stack.Screen name="TodoDetailPage" component={TodoDetail} />
        </Stack.Navigator>
      </NavigationContainer>
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
});
