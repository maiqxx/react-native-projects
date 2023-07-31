import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  BackHandler,
} from "react-native";
import { Text, ListItem } from "react-native-elements";
import Constants from "expo-constants";
import { PROJECT_LIST } from './ProjectList'

export default function App() {
  const [projectIndex, setProjectIndex] = useState(null);

    // Handle when user press Hardware Back Button
    useEffect(() => {
      const backAction = () => {
        // Go back to Example List
        if (projectIndex !== null) {
          setProjectIndex(null);
        } 
        // Exit app if user currently in Example List
        else {
          BackHandler.exitApp();
        }
  
        return true;
      };
  
      // https://reactnative.dev/docs/backhandler
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
  
      return () => backHandler.remove();
    }, [projectIndex]);
  
    if (projectIndex !== null) return PROJECT_LIST[projectIndex].component;


    return (
      <SafeAreaView style={styles.container}>
        <Text h4 style={styles.heading}>
          React Native Projects
        </Text>
  
        <ScrollView>
          {PROJECT_LIST.map((l, i) => (
            <ListItem key={i} bottomDivider onPress={() => setProjectIndex(i)}>
              <View>
                <Text>Project {l.level}</Text>
              </View>
  
              <ListItem.Content>
                <ListItem.Title style={styles.title}>{l.name}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    textAlign: "center",
    padding: 12,
  },
  title: {
    fontWeight: "bold",
  },
});
