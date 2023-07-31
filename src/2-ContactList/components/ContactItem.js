import { StatusBar } from 'expo-status-bar';
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
import React, { useEffect, useState } from 'react';
import { Button, ThemeProvider, ListItem, Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const CONTACTS = [
  {
    img: '',
    name: 'Mama',
    phone: '09123456789',
    email: 'mg.cavalida74@gmail.com',
  },
  {
    img: '',
    name: 'Kharen',
    phone: '09123456789',
    email: 'kharen@gmail.com',
  },
  {
    img: '',
    name: 'Papa',
    phone: '09123456789',
  },
  {
    img: '',
    name: 'Kuya',
    phone: '09123456789',
    email: 'johnced.cavalida99@gmail.com',
  },
  {
    img: '',
    name: 'Jaja',
    phone: '09123456789',
    email: 'carmela.jane@gmail.com',
  },
  {
    img: '',
    name: 'Jairah',
    phone: '09123456789',
    email: 'jai@gmail.com',
  },
  {
    img: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Uncle Ivy',
    phone: '09123456789',
    email: 'ivy@gmail.com',
  },
  {
    img: '',
    name: 'Auntie Ava',
    phone: '09123456789',
    email: 'ava.p@gmail.com',
  },
  {
    img: '',
    name: 'Uncle Ogie',
    phone: '09123456789',
    email: 'ogieee@gmail.com',
  },
  {
    img: '',
    name: 'Mads Alexa',
    phone: '09123456789',
    email: 'alexa123@gmail.com',
  },
  
];

const ContactItem = ({route}) => {
    //console.log(name + ' ' + mobile);
    const navigation = useNavigation();
    const [img, name, phone, email] = useState('');
    const [contactList, setContactList] = useState([]);

    const sections = React.useMemo(() => {
      const sectionsMap = CONTACTS.reduce((acc, item) => {
        const [lastName] = item.name.split(' ').reverse();
  
        return Object.assign(acc, {
          [lastName[0]]: [...(acc[lastName[0]] || []), item],
        });
      }, {});
  
      return Object.entries(sectionsMap)
        .map(([letter, items]) => ({
          letter,
          items,
        }))
        .sort((a, b) => a.letter.localeCompare(b.letter));
    }, []);
    
  return (
    <View>
            {sections.map(({ letter, items }) => (
            
            //flatlist or touchable opacity
            <View style={styles.section} key={letter}>
              {/* Contact list sorted by the first letter of the last name */}
              <Text style={styles.sectionTitle}>{letter}</Text>


              <View style={styles.sectionItems}>
                {items.map(({ img, name, phone, email }, index) => {
                  return (
                    // the touchableOpacity card of a contact item
                    <View key={index} style={styles.cardWrapper}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Details', {
                            image: img, name:name, phone: phone, email: email
                        })}
                        >
                        
                        {/* Image or avatar */}
                        <View style={styles.card}>
                          {img ? (
                            <Image
                              alt=""
                              resizeMode="cover"
                              source={{ uri: img }}
                              style={styles.cardImg}
                            />
                          ) : (
                            <View style={[styles.cardImg, styles.cardAvatar]}>
                              <Text style={styles.cardAvatarText}>{name[0]}</Text>
                            </View>
                          )}
  
                          <View style={styles.cardBody}>
                            {/* Name and phone number */}
                            <Text style={styles.cardTitle}>{name}</Text>
                            <Text style={styles.cardPhone}>{phone}</Text>
                          </View>
  
                          {/* Chevron icon */}
                          <View style={styles.cardAction}>
                            <FeatherIcon
                              color="#9ca3af"
                              name="chevron-right"
                              size={22}
                            />
                          </View>

                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </View>
          ))}


      <StatusBar style="auto" />
    </View>
  )
}

export default ContactItem

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        backgroundColor:"#f5a64f",
        justifyContent:'space-between',
        padding:10,
        alignItems:'center',
        width:"90%",
        alignSelf:'center',
        borderRadius: 8,
        marginTop: 20,
    
      },
      items:{
        flex:1,
        marginLeft: 10,
        fontSize:18,
        fontWeight:'700'
    
      },
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
})