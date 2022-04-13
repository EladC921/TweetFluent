import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
// logo
import logo from "../../assets/logo.png";
// Global Styles
import global from "../../styles/global";
import root from "../../styles/root.json";
import { Icon } from "react-native-elements";
// const tweets - mock data
import { tweets } from "../../mockData/tweets";
// Components
import Tweet from "../Tweet";

const renderItem = ({ item }) => (
  <View style={{ marginRight: 10, marginLeft: 10 }}>
    <Tweet tweet={item} />
  </View>
);

const Home = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.searchContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Search");
            }}
          >
            <Icon
              name="search"
              type="evilicon"
              color={root.secondary}
              iconStyle={{ fontWeight: "1600", fontSize: 40 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyTitleContainer}>
          <Text style={styles.bodyTitle}>Check out new tweets!</Text>
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterBtnText}>Filter</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tweetsWrapper}>
          <View style={styles.tweetsContainer}>
            {tweets.length > 0 && (
              <FlatList
                data={tweets}
                keyExtractor={(item) => item.Tid}
                renderItem={renderItem}
              ></FlatList>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    display: "flex",
    height: "100%",
    width: "100%",
  },

  header: {
    position: "relative",
    backgroundColor: "#20232A",
    paddingTop: "10%",
    flex: 1,
    height: "100%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "5%",
    paddingLeft: "5%",
    paddingBottom: 10,
  },

  searchContainer: {
    position: "absolute",
    left: 20,
    bottom: 20,
  },

  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  logo: {
    flex: 1,
    width: "60%",
    height: "100%",
    shadowOffset: { width: 0, height: 0 },
    shadowColor: root.twitter,
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },

  filterBtn: {
    backgroundColor: root.twitter,
    padding: 7,
    borderRadius: 30,
    marginLeft: "auto",
    marginTop: 5,
    width: "auto",
  },

  filterBtnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
  },

  body: {
    backgroundColor: "rgba(32, 35, 39, 0.8)",
    flex: 10,
    height: "100%",
  },

  bodyTitleContainer: {
    paddingTop: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },

  bodyTitle: {
    color: "#F8F8F8",
    fontSize: 16,
    fontWeight: "600",
  },

  tweetsWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  tweetsContainer: {
    marginTop: 15,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflow: "scroll",
  },
});
