import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HelloWorld1() {
  return (
    // https://reactnative.dev/docs/view
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3498db",
      }}
    >
      {/* https://reactnative.dev/docs/text */}
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#fff",
          textTransform: "uppercase",
        }}
      >
        Hello world!
      </Text>
    </View>
  );
  
}



