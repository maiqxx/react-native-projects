import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { getDatabase, ref, set} from 'firebase/database';
import { db } from '../../../utils/config';

const SimpleCRUD = () => {

  const [username, setName] = useState('');
  const [email, setEmail] = useState('');

  function create(){

    set(ref(db, 'users/' + username),{
        username: username,
        email: email
    }).then(() =>{
        alert('Data submitted!');
    }).catch((error) => {

        alert('Error: ' + error.message);
    })

  }

  return (
    <View style={styles.container}>
    <StatusBar style='auto' />
      <Text>Simple CRUD</Text>

        <TextInput 
        value={username}
        onChangeText={(username) => {setName(username)}}
        placeholder='Username' 
        style={styles.textBoxes}></TextInput>

        <TextInput 
        value={email}
        onChangeText={(email) => {setEmail(email)}}
        placeholder='Email' 
        style={styles.textBoxes}></TextInput>

    <TouchableOpacity onPress={create}>
        <Text>Submit</Text>
    </TouchableOpacity>

    </View>
  )
}

export default SimpleCRUD

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    textBoxes:{
        width:'90%',
        fontSize: 18,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 0.2,
        borderRadius: 10,
        marginBottom: 20,
    }
})