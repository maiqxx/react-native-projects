import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HelloWorld1 from '././src/1-HelloWorld/HelloWorld1';
import HelloWorld2 from '././src/1-HelloWorld/HelloWorld2';
import ContactList from './src/2-ContactList/ContactList';
import LogIn1 from './src/3-LogInScreens/LogIn1';
import FacebookLogIn from './src/3-LogInScreens/FacebookLogIn';
import RegisterForm from './src/4-Forms/RegistrationForm1/RegisterForm';
import Light from './src/5-Lights/Light';
import TrafficLight from './src/5-Lights/TrafficLight';
import ScanQrCode from './src/6-ScanQRCode/ScanQRCode';
import InstagramFeed from './src/7-InstagramFeed/InstagramFeed';
import RockPaperScissors from './src/8-RockPaperScissors/RockPaperScissors';

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
      {
        name: "Log In UI",
        level: 3,
        component: <LogIn1 />,
      },
      {
        name: "Facebook Log In",
        level: 3,
        component: <FacebookLogIn />,
      },
      {
        name: "Forms",
        level: 4,
        component: <RegisterForm />,
      },
      {
        name: "Light",
        level: 5,
        component: <Light />,
      },
      {
        name: "Traffic Light",
        level: 5,
        component: <TrafficLight />,
      },
      {
        name: "QR Code Scanner",
        level: 6,
        component: <ScanQrCode />,
      },
      {
        name: "Instagram Feed",
        level: 7,
        component: <InstagramFeed />,
      },
      {
        name: "Rock, Paper, Scissors Game",
        level: 7,
        component: <RockPaperScissors />,
      },





];

