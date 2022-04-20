import { StyleSheet, Text, View, TouchableOpacity,TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert } from "react-native";
import React from "react";


const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <View style={styles.inputContainer}>
   
      <TextInput style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid='transparent'/>
    </View>
    
    <View style={styles.inputContainer}>
      <TextInput style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid='transparent'/>
    </View>
 
    <TouchableOpacity style={styles.restoreButtonContainer}>
        <Text>Forgot Password?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
      <Text  style={styles.loginText}
      onPress={() => {
        navigation.navigate("Main");
      }}
      >Login</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
        <Text  style={styles.loginText}>Register</Text>
    </TouchableOpacity>

  
  </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0E0E6',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:15,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  icon:{
    width:30,
    height:30,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:170,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: '#3498db',
  },
  fabookButton: {
    backgroundColor: "#3b5998",
  },
  googleButton: {
    backgroundColor: "#ff0000",
  },
  loginText: {
    color: 'white',
  },
  restoreButtonContainer:{
    width:250,
    marginBottom:15,
    alignItems: 'center'
  },
  socialButtonContent:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  socialIcon:{
    color: "#FFFFFF",
    marginRight:5
  }
});