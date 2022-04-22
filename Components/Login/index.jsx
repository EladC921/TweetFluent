import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";

import root from "../../styles/root.json";
import logo from "../../assets/logo.png";

import Register from "./Register";

const Login = ({ navigation }) => {
  const [uname, setUname] = useState(null);
  const [pass, setPass] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder={"Email"}
            keyboardType="email-address"
            onChangeText={(username) => setUname(username)}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(pword) => setPass(pword)}
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableOpacity style={[styles.buttonContainer]} onPress={() => {
          navigation.navigate("Main");
        }}>
          <Text
            style={styles.loginText}
          >
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer]}>
          <Register />
        </TouchableOpacity>
        <TouchableOpacity style={styles.restoreButtonContainer}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: root.bg,
  },
  inputContainer: {
    marginTop: 10,
    borderBottomColor: root.light,
    backgroundColor: root.light,
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: root.secondary,
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: root.bg,
  },
  body: {
    backgroundColor: root.secondary,
    flex: 4,
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },

  logo: {
    resizeMode: "contain",
    height: "50%",
  },
  buttonContainer: {

    backgroundColor: root.twitter,
    marginTop: 15,
    height: "10%",

    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: "50%",
    borderRadius: 30,
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  loginText: {
    color: "white",
  },
});
