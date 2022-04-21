import {
  StyleSheet,
  Pressable,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  Modal,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'
import React, { useState } from 'react'
import root from "../../styles/root.json";

const Register = () => {
  const [signnickname, setSignNickname] = useState();
  const [signfirstname, setSignFirstName] = useState();
  const [signlastname, setSignLastName] = useState();
  const [signmail, setSignupmail] = useState();
  const [csignpass, setcpass] = useState();
  const [signpass, setsignpass] = useState();
  const [openModal, setOpenModal] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setOpenModal(true)}>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>

      <Modal visible={openModal} animationType="slide" transparent={true}>
        {/* <KeyboardAvoidingView behavior="position" style={styles.container}> */}
        <View style={styles.container}>
          <View style={styles.modalView}>
          <TouchableOpacity
              style={styles.xbut}
              onPress={() => setOpenModal(false)}
            >
              <Text>X</Text>
            </TouchableOpacity>
        <View style={styles.inputContainer}>
         
          <TextInput style={styles.inputs}
              placeholder="First name"
              placeholderTextColor= {root.tertiary} 
              
              underlineColorAndroid='transparent'
              onChangeText={(text) => setSignFirstName(text)} />
        </View>
        <View style={styles.inputContainer}>
         
          <TextInput style={styles.inputs}
              placeholder="Last name"
              placeholderTextColor= {root.tertiary} 
              
              underlineColorAndroid='transparent'
              onChangeText={(text) => setSignLastName(text)} />
        </View>

        <View style={styles.inputContainer}>
       
          <TextInput style={styles.inputs}
          placeholderTextColor= {root.tertiary} 
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(text) => setSignupmail(text)}/>
        </View>
        
        <View style={styles.inputContainer}>
        
          <TextInput style={styles.inputs}
          placeholderTextColor= {root.tertiary} 
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(text) => setsignpass(text)}/>
        </View>
        <View style={styles.inputContainer}>
        
          <TextInput style={styles.inputs}
          placeholderTextColor= {root.tertiary} 
              placeholder="Confirm Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(text) => setcpass(text)}/>
        </View>
        <View style={styles.inputContainer}>
         
         <TextInput style={styles.inputs}
             placeholder="Twitter Nickname"
             placeholderTextColor= {root.tertiary} 
             
             underlineColorAndroid='transparent'
             onChangeText={(text) => setSignNickname(text)}/>
       </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('sign_up')}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
        </View>
      </View>
      </Modal>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: root.bg,
    height:"80%",
    padding:40,
  },
  modalView: {
    height: "100%",
    padding: 70,
    margin: 20,
    flex: 1,
    backgroundColor: root.secondary,
    borderRadius: 55,
    padding: 35,
    alignItems:'center',
    justifyContent:"center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  xbut:{
    alignItems:"flex-start"
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
  inputs:{
    height: '100%', 
    width:"100%", 
    marginLeft:20, 
  },
  loginText: {
    color: 'white',
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    marginTop:20,
    backgroundColor: root.twitter,
  },
  signUpText: {
    color: 'white',
  }
});

export default Register