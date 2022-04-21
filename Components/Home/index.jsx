import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
// logo
import logo from "../../assets/logo.png";
// Global Styles
import global from "../../styles/global";
import root from "../../styles/root.json";
import { Icon } from "react-native-elements";
// const tweets - mock data
// import { tweets } from "../../mockData/tweets";
// Components
import Tweet from "../Tweet";
// Serverside
import { TweetsService } from "../../server/TweetsService";
import { ErrorHandler } from "../../server/ErrorHandler";

// Redner Tweets
const renderItem = ({ item }) => (
  <View style={{}}>
    <Tweet tweet={item} />
  </View>
);

const Home = ({ navigation }) => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    // Get Tweets of Influencers that a user follows
    let tweetsForUser = new TweetsService(`/TweetsForUser/1`);
    tweetsForUser
      .getAll()
      .then((res) => {
        setTweets(res);
      })
      .catch((err) => new ErrorHandler(err).log());
  }, []);

  return (
    <View style={styles.wrapper}>
      <View style={[styles.header, global.shadowDark]}>
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
    backgroundColor: root.bg,
    display: "flex",
    height: "100%",
    width: "100%",
  },

  header: {
    position: "relative",
    backgroundColor: root.bg,
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
    color: root.secondary,
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
