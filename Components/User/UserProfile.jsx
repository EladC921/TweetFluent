import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { tweets } from "../../mockData/tweets";
import InfluencerCard from "../Influencer/InfluencerCard";
import root from "../../styles/root";
import { InfluencerService } from "../../server/InfluencerService";
import { getCurrentUser, removeCurrentUser } from "../../data/CurrentUser";
import { SafeAreaView, TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../server/firebase";
import { useFocusEffect } from "@react-navigation/native";

const UserProfile = (props) => {
  const [influencers, setInfluencers] = useState([]);
  const [user, setUser] = useState({});

  const renderItem = ({ item, index }) => (
    <View style={{ marginRight: 10, marginLeft: 10 }}>
      <InfluencerCard influencer={item} navigation={props.navigation} />
    </View>
  );

  useFocusEffect(
    useCallback(() => {
      getCurrentUser()
        .then(result => {
          setUser(result);
          return result;
        })
        .then(
          u => {
            let i = new InfluencerService(`/SubscribedInfluencersByUser/${u.uid}`);
            i.getAll().then((res) => {
              setInfluencers(res);
            })
              .catch((err) => new ErrorHandler(err).log());
          })
        .catch((err) => new ErrorHandler(err).log());

    }, [])
  );

  const handleLogout = () => {
    let removeUser = removeCurrentUser();

    removeUser.then(() => {
      auth.signOut()
        .then(() => {
          props.navigation.navigate("Login");
        })
        .catch(err => {
          alert(err);
          new ErrorHandler(err).log()
        });
    })
      .catch(err => new ErrorHandler(err).log());
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.name}>{`Hello, ${user.firstName} ${user.lastName}`} </Text>
          <Text style={styles.userInfo}>You subscribe: {influencers.length} Influencers</Text>
          {/** Search Bar */}
        </View>
      </View>
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingsBtn} onPress={handleLogout}><Text style={styles.settingsTxt}>Logout</Text></TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.results}>
          {tweets.length > 0 && (
            <FlatList
              data={influencers}
              keyExtractor={(item) => item.Id}
              renderItem={renderItem}
            ></FlatList>
          )}
        </View>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    backgroundColor: root.bg,
    flex: 1,
  },
  header: {
    backgroundColor: root.bg,
    flex: 2,
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    color: root.main,
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: root.secondary,
    fontWeight: "600",
    paddingTop: 10,
  },
  body: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: root.light,
    flex: 5,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
  },

  results: {
    position: "relative",
    top: -10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    width: "90%",
    height: "100%",
  },
  settingsContainer: {
    position: "absolute",
    top: "5%",
    right: 5,
  },
  settingsBtn: {
    backgroundColor: root.bgp,
    borderWidth: 2,
    borderColor: "#f40000",
    borderRadius: 10,
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  settingsTxt: {
    color: "#f40000",
    fontSize: 14,
    fontWeight: "600",
  }
});
