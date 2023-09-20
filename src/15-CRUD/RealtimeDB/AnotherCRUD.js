import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    StatusBar,
    TouchableOpacity,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { db } from "../../../utils/config1";
  import { ref, set, onValue } from "firebase/database";
  
  const AnotherCRUD = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [items, setItems] = useState([]);
  
    // Function to add data to Firebase Realtime Database
    const createData = () => {

      //You can make <set(ref(db, "posts/" + "newPosts/" + title)> for another category
      set(ref(db, "posts/" + title), {
        title: title,
        body: body,
      });
      setTitle("");
      setBody("");
      alert("Data added!");
    };
  
    useEffect(() => {
      const startCountRef = ref(db, "posts/");
      onValue(startCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const newPosts = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setItems(newPosts);
        } else {
          setItems([]);
        }
      });
    }, []); // Add an empty dependency array to run this effect only once
  
    const updateData = () =>{
      set(ref(db, "posts/" + title), {
        title: title,
        body: body,
      });
      setTitle("");
      setBody("");
      alert("Data updated!");
    }

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Another CRUD</Text>
        <Text style={styles.subText}>
          Another simple implementation of CRUD
        </Text>
  
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
          style={styles.input}
        />
  
        <TextInput
          placeholder="Body"
          value={body}
          onChangeText={(text) => setBody(text)}
          style={styles.input}
        />
  
        <Button title="Create Data" onPress={createData} />
  
        <Text style={styles.header}>Fetch Data</Text>
        {items.map((item) => {
          return (
            <View key={item.id}>
              <TouchableOpacity style={styles.itemContainer}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text>{item.body}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  };
  
  export default AnotherCRUD;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      height: "100%",
      marginTop: 60,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 30,
    },
    subText: {
      fontSize: 16,
      marginBottom: 30,
    },
    input: {
      width: "90%",
      fontSize: 15,
      padding: 10,
      borderColor: "gray",
      borderWidth: 0.2,
      borderRadius: 5,
      marginBottom: 20,
    },
    header: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    itemContainer:{
      backgroundColor: '#ccd6eb',
      marginBottom: 10,
      padding: 10,
      borderRadius: 10,
    },
    titleText:{
      fontWeight: 'bold',
      marginBottom: 5,
    }
  });
  