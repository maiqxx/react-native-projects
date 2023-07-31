import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HelloWorld1 from '././src/1-HelloWorld/HelloWorld1';
import HelloWorld2 from '././src/1-HelloWorld/HelloWorld2';
import ContactList from './src/2-ContactList/ContactList';

export const PROJECT_LIST = [
    {
        name: "Hello World 1",
        level: 1,
        component: <HelloWorld1 />,
      },
      {
        name: "Hello World 2",
        level: 1,
        component: <HelloWorld2 />,
      },
      {
        name: "Contact List",
        level: 2,
        component: <ContactList />,
      },




];

