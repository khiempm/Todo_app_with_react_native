import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function App() {
  interface ITodo {
    id: number;
    name: string;
  }
  const [todo, setTodo] = useState("");

  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if (!todo) {
      Alert.alert("Loi input todo", "Todo khong duoc de trong", [
        {
          text: "Huy",
          onPress: () => console.log("cancel pressed"),
          style: "cancel",
        },
      ]);
      return;
    }
    setListTodo([...listTodo, { id: randomInteger(2, 20000000), name: todo }]);
    setTodo("");
  };

  const deleteTodo = (id: number) => {
    const newTodos = listTodo.filter((item) => item.id !== id);
    setListTodo(newTodos);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Text style={styles.header}>ToDo List</Text>

        {/* form */}
        <View style={styles.body}>
          <TextInput
            value={todo}
            style={styles.todoInput}
            onChangeText={(value) => setTodo(value)}
          />
          <Button title="Add Todo" onPress={() => handleAddTodo()} />
        </View>

        {/* list todo */}
        <View style={styles.body}>
          <FlatList
            data={listTodo}
            renderItem={({ item }) => {
              return (
                <Pressable
                  style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                  onPress={() => deleteTodo(item.id)}
                >
                  <Text style={styles.todoItem}>{item.name}</Text>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 60,
  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    padding: 5,
    margin: 15,
  },

  body: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  todoItem: {
    fontSize: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: "dotted",
    padding: 20,
  },
});
