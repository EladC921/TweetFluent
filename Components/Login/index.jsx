import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate("Main");
        }}
      >
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  btn: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
});
