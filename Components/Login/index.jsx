
import {
  StyleSheet, Text, View, TouchableOpacity, TextInput,
  Button,
  Image,
  Alert
} from "react-native";
import React,{useState} from "react";
import root from "../../styles/root.json";
import logo from "../../assets/logo.png";
import Register from "./Register";
=======
import { StyleSheet, Text, View, TouchableOpacity,TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert } from "react-native";
import React from "react";



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

          <TextInput style={styles.inputs}
            placeholder={"Email"}
            keyboardType="email-address"         
            onChangeText={username=>setUname(username)}
            underlineColorAndroid='transparent' />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={pword=>setPass(pword)}
            underlineColorAndroid='transparent' />
        </View>

      

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
          <Text style={styles.loginText}
            onPress={() => {
              navigation.navigate("Main");
            }}
          >Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
          <Register/>
         
        </TouchableOpacity>
        <TouchableOpacity style={styles.restoreButtonContainer}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>




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

    backgroundColor: root.bg,
  },
  inputContainer: {
    marginTop:10,
    borderBottomColor: root.light,
    backgroundColor: root.light,
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },

  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: root.secondary,
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent:'center',
    backgroundColor:root.bg
  },
  body: {
    backgroundColor:root.tertiary,
    flex: 4,
    width:'100%',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    alignItems: "center",
    justifyContent:'center',
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom:20,
  },

  logo: {   
    resizeMode:'contain',
    height:'50%',
  },
  buttonContainer: {
    marginTop:15,
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '50%',
    borderRadius: 30,
  },

  loginButton: {
    backgroundColor: root.twitter,
  },

  loginText: {
    color: 'white',
  },
  restoreButtonContainer: {
    width: 250,
    marginBottom: 15,
    alignItems: 'center'
  },
  socialButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    color: "#FFFFFF",
    marginRight: 5

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