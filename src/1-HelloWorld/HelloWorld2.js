import { StyleSheet, SafeAreaView, Text } from 'react-native'
import React from 'react'
import Constants from "expo-constants";

const HelloWorld2 = () => {
  return (
    // https://reactnative.dev/docs/safeareaview
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>
        Hello <Text style={styles.highlightText1}>World</Text>
      </Text>

      <Text style={styles.heading}>
        Hello <Text style={styles.highlightText2}>World</Text>
      </Text>

      <Text style={[styles.heading, { color: "#59595d" }]}>
        Hello <Text style={styles.highlightText3}>World</Text>
      </Text>

      <Text style={[styles.heading, { color: "#000" }]}>
        Hello <Text style={styles.highlightText4}>World</Text>
      </Text>

    </SafeAreaView>
  );
}

export default HelloWorld2

// https://reactnative.dev/docs/stylesheet
const styles = StyleSheet.create({
  container: {
    // SafeAreaView on Android devices
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  highlightText1: {
    color: "#F11A7B",
  },
  highlightText2: {
    fontStyle: "italic",
    textDecorationLine: "underline",
    color: "#9336B4",
  },
  highlightText3: {
    color: "#000",
    backgroundColor: "#A2FF86",
  },
  highlightText4: {
    color: "#E7B10A",
    textDecorationLine: "line-through",
  },
  
});
