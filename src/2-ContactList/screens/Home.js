import { 
    Alert,
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Image,
    ActivityIndicator,
    FlatList,
} from 'react-native'
import {Stack, useRouter} from 'expo-router';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useEffect, useState, Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, ThemeProvider, ListItem, Avatar } from 'react-native-elements';
import React from 'react';
import ContactItem from '../components/ContactItem';


export default function Home() {
    const navigation = useNavigation();

    function handleAlert(){
        Alert.alert('You may want to create another screen for this with your own database.');
    }
  
    return (
      <SafeAreaView style={{ backgroundColor: '#f2f2f2' }}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Contacts</Text>

            {/* Add New contact button */}
            <Button style={styles.addButton}
              onPress={handleAlert}
              buttonStyle={[{ backgroundColor: "#23AAF2", type: "solid"}]}
              title="Add New"
              fontWeight="bold"
              accessibilityLabel="Add new contact"
            />
          </View>

          <ContactItem/>
              
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    header: {
      paddingHorizontal: 24,
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    section: {
      marginTop: 12,
      paddingLeft: 24,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: '#000',
    },
    sectionItems: {
      marginTop: 8,
    },
    container: {
      paddingVertical: 24,
      paddingHorizontal: 0,
    },
    title: {
      fontSize: 32,
      fontWeight: '700',
      color: '#1d1d1d',
      marginBottom: 12,
      alignSelf: 'flex-start',
    },
    addButton: {
      alignSelf: 'flex-end', 
      justifyContent: 'flex-end',
      fontWeight: '500',
    },
    card: {
      paddingVertical: 14,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    cardWrapper: {
      borderBottomWidth: 1,
      borderColor: '#d6d6d6',
    },
    cardImg: {
      width: 42,
      height: 42,
      borderRadius: 12,
    },
    cardAvatar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#9ca1ac',
    },
    cardAvatarText: {
      fontSize: 19,
      fontWeight: 'bold',
      color: '#fff',
    },
    cardBody: {
      marginRight: 'auto',
      marginLeft: 12,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: '#000',
    },
    cardPhone: {
      fontSize: 15,
      lineHeight: 20,
      fontWeight: '500',
      color: '#616d79',
      marginTop: 3,
    },
    cardAction: {
      paddingRight: 16,
    },
    inputStyle:{
        width: '80%',
        height: 44,
        padding: 10,
        marginVertical: '#000000',
    }
  });