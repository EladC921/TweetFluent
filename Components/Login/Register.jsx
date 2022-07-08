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
// styles
import root from "../../styles/root.json";
// firebase
import { auth } from "../../server/firebase";
// server & data
import { UsersService, ErrorHandler } from "../../server/UsersService";

const Register = () => {
  const [signnickname, setSignNickname] = useState();
  const [signfirstname, setSignFirstName] = useState();
  const [signlastname, setSignLastName] = useState();
  const [signmail, setSignupmail] = useState();
  const [csignpass, setcpass] = useState();
  const [signpass, setsignpass] = useState();
  const [signcountry, setSignCountry] = useState();
  const [openModal, setOpenModal] = useState(false);


  const validateSignUp = () => {
    if (signpass !== csignpass) {
      alert("Passwords do not match");
      return;
    }

    if (signnickname === "" || signfirstname === "" || signlastname === "" || signmail === "" || signpass === "" || csignpass === "") {
      alert("Please fill in all fields");
      return;
    }

    if (signpass.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!mailRegex.test(signmail)) {
      alert("Please enter a valid email address");
      return;
    }
  }

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(signmail, signpass)
      .then(userCredentials => {
        const user = userCredentials.user;
        validateSignUp();
      })
      .then(() => {
        createUser();
        setOpenModal(false);
      })
      .catch(error => alert(error.message));
  }

  const createUser = () => {
    us = new UsersService();
    let user = {
      firstName: signfirstname,
      lastName: signlastname,
      twitterScreenName: signnickname,
      email: signmail,
      country: signcountry,
    }
    us.post(user)
      .then(res => {
        alert("User created successfully");
      })
      .catch(err => new ErrorHandler(err).log());
  }

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
              <Text style={styles.closeBtn}>X</Text>
            </TouchableOpacity>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                placeholder="First name"
                placeholderTextColor={root.tertiary}
                underlineColorAndroid='transparent'
                onChangeText={(text) => setSignFirstName(text)} />
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                placeholder="Last name"
                placeholderTextColor={root.tertiary}
                underlineColorAndroid='transparent'
                onChangeText={(text) => setSignLastName(text)} />
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                placeholderTextColor={root.tertiary}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(text) => setSignupmail(text)} />
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                placeholderTextColor={root.tertiary}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(text) => setsignpass(text)} />
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                placeholderTextColor={root.tertiary}
                placeholder="Confirm Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(text) => setcpass(text)} />
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                placeholder="Twitter Nickname"
                placeholderTextColor={root.tertiary}
                underlineColorAndroid='transparent'
                onChangeText={(text) => setSignNickname(text)} />
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                placeholder="Country"
                placeholderTextColor={root.tertiary}
                underlineColorAndroid='transparent'
                onChangeText={(text) => setSignCountry(text)} />
            </View>
            <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={handleSignUp}>
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
    height: "80%",
    padding: 40,
  },
  modalView: {
    height: "100%",
    paddingLeft: 35,
    paddingRight: 35,
    margin: 20,
    flex: 1,
    backgroundColor: root.bg,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  xbut: {
    position: "absolute",
    top: 10,
    right: "5%",
    zIndex: 1,
  },
  closeBtn: {
    color: "red",
    padding: 15,
    fontSize: 16,
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: '100%',
    width: "100%",
    marginLeft: 20,
  },
  loginText: {
    color: 'white',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  signupButton: {
    marginTop: 20,
    backgroundColor: root.twitter,
  },
  signUpText: {
    color: 'white',
  }
});

export default Register