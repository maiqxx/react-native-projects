import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { getDatabase, ref, set, update, onValue, remove} from 'firebase/database';
import { db } from '../../../utils/config';

const SimpleCRUD = () => {

  const [username, setName] = useState('');
  const [email, setEmail] = useState('');

  //This function creates data and store in Firebase Realtime database
  function createData(){
    set(ref(db, 'users/' + username),{
        username: username,
        email: email
    }).then(() =>{
        alert('Data submitted!');

    }).catch((error) => {  
        alert('Error: ' + error.message);

    })
  }

  //Reads data: Enter the username, click the 'Read' button, then it will show the email of that user
  function readData(){

    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      setEmail(data.email);
    });
  }

  //Updates the data in database
  function updateData(){
    update(ref(db, 'users/' + username),{
        email: email
    }).then(() =>{
        alert('Data updated!');

    }).catch((error) => {  
        alert('Error: ' + error.message);

    })
  }

  //Deletes data from the realtime database
  function deleteData(){
    remove(ref(db, 'users/' + username));
    alert("User deleted!");
  }


  return (
    <View style={styles.container}>
    <StatusBar style='auto' />
      <Text style={styles.title}>Simple CRUD</Text>
      <Text style={styles.subText}>A simple implementation of CRUD</Text>

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

    <TouchableOpacity onPress={createData} style={styles.buttonCreate}>
        <Text>Create</Text>
    </TouchableOpacity> 

    <TouchableOpacity onPress={readData} style={styles.buttonRead}>
        <Text>Read</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={updateData} style={styles.buttonUpdate}>
        <Text>Update</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={deleteData} style={styles.buttonDelete}>
        <Text>Delete</Text>
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
    title:{
        fontSize:20,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    subText:{
        fontSize: 16,
        marginBottom: 30,
    },
    textBoxes:{
        width:'90%',
        fontSize: 18,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 0.2,
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonCreate:{
        backgroundColor: '#1FDF64',
        width: '90%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
    },
    buttonRead:{
        backgroundColor: '#026EC1',
        width: '90%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
    },
    buttonUpdate:{
        backgroundColor: '#EE6C00',
        width: '90%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
    },
    buttonDelete:{
        backgroundColor: '#FF0000',
        width: '90%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
    },

})