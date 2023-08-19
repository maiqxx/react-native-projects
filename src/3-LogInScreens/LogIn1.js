import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function LogIn1() {
  return (
    <SafeAreaView style={styles.container}>
      {/* https://docs.expo.io/versions/latest/sdk/status-bar */}
      <StatusBar style="light" />

      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Text style={styles.hiText}>Welcome!</Text>
          <Text style={styles.userText}>Forda Ferson</Text>
          <Text style={styles.userText}>0123456789</Text>
        </View>

        <View style={styles.form}>
          {/* https://docs.expo.io/guides/icons */}
          <FontAwesome5 name="lock" style={styles.iconLock} />

          {/* https://reactnative.dev/docs/textinput */}
          <TextInput
            style={styles.inputPassword}
            keyboardType="numeric"
            secureTextEntry={true}
            autoFocus={true}
            placeholder="PIN"
            placeholderTextColor="#929292"
          />

          {/* https://reactnative.dev/docs/touchableopacity */}
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonLoginText}>Log In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.action}>
          <TouchableOpacity>
            <Text style={styles.userText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.userText} numberOfLines={1} adjustsFontSizeToFit>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const TEXT = {
  color: "#fff",
  textAlign: "center",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d5c63",
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    paddingHorizontal: 30,
  },
  textWrapper: {
    marginTop: 60,
    marginBottom: 30,
  },
  hiText: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
  },
  userText: {
    ...TEXT,
    fontSize: 15,
    lineHeight: 30,
  },
  form: {
    marginBottom: 30,
  },
  iconLock: {
    color: "#929292",
    position: "absolute",
    fontSize: 16,
    top: 22,
    left: 22,
    zIndex: 10,
  },
  inputPassword: {
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "#929292",
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
  },
  buttonLogin: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#44a1a0",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonLoginText: {
    ...TEXT,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
