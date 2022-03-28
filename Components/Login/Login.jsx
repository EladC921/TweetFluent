import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        Go to Home
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
