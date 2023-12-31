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
import Stopwatch from './src/9-Stopwatch/Stopwatch';
import BMICalculator from './src/10-BMICalculator/BMICalculator'; 
import MusicPlayer from './src/11-MusicPlayer/MusicPlayer';
import WorldwideNews from './src/12-News/WorldwideNews';
import Pokedex from './src/13-Pokedex/Pokedex';
import OnboardingScreen from './src/14-OnboardingScreen/OnboardingScreen';
import SimpleCRUD from './src/15-CRUD/RealtimeDB/SimpleCRUD';
import AnotherCRUD from './src/15-CRUD/RealtimeDB/AnotherCRUD';
import ImageUpload from './src/15-CRUD/Storage/ImageUpload';
import DropdownComponent from './src/16-ReactNativeComponents/1-DropdownComponent/DropdownComponent'

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
        level: 8,
        component: <RockPaperScissors />,
      },
      {
        name: "Stopwatch",
        level: 9,
        component: <Stopwatch />,
      },
      {
        name: "BMI Calculator",
        level: 10,
        component: <BMICalculator />,
      },
      {
        name: "Music Player",
        level: 11,
        component: <MusicPlayer />,
      },
      {
        name: "Worldwide News",
        level: 12,
        component: <WorldwideNews />,
      },
      {
        name: "Pokemon",
        level: 13,
        component: <Pokedex />,
      },
      {
        name: "Onboarding Screen",
        level: 14,
        component: <OnboardingScreen />,
      },
      {
        name: "Simple CRUD",
        level: 15,
        component: <SimpleCRUD />,
      },
      {
        name: "Another CRUD",
        level: 15,
        component: <AnotherCRUD />,
      },
      {
        name: "Image Upload",
        level: 15,
        component: <ImageUpload />,
      },
      {
        name: "Dropdown Component",
        level: 16,
        component: <DropdownComponent />,
      },



];

