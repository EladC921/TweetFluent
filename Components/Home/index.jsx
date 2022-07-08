import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
// logo
import logo from "../../assets/logo.png";
// Global Styles
import global from "../../styles/global";
import root from "../../styles/root.json";
import { Icon } from "react-native-elements";
// navigation
import { useFocusEffect } from "@react-navigation/native";
// Components
import Tweet from "../Tweet";
// Serverside
import { TweetsService } from "../../server/TweetsService";
import { ErrorHandler } from "../../server/ErrorHandler";
import { getCurrentUser } from "../../data/CurrentUser";
// Components
import FilterBar from "./FilterBar";

const Home = ({ navigation }) => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredTweets, setFilteredTweets] = useState([]);

  // Redner Tweets
  const renderItem = ({ item }) => <Tweet key={item.TweetId} tweet={item} />;

  useFocusEffect(
    useCallback(() => {
      // Get Tweets of Influencers that a user follows
      getCurrentUser()
        .then(result => {
          return result;
        }).then(result => {
          let tweetsForUser = new TweetsService(`/TweetsForUser/${result.uid}`);
          tweetsForUser.getAll()
            .then((res) => {
              setTweets(res);
              setFilteredTweets(res);
            })
            .then(() => setLoading(false))
            .catch((err) => new ErrorHandler(err).log())
        })
        .catch(err => new ErrorHandler(err).log())
    }, [])
  );

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
          <FilterBar tweets={tweets} setFilteredTweets={setFilteredTweets} />
        </View>
        <View style={styles.tweetsWrapper}>
          <View style={styles.tweetsContainer}>
            {loading ? (
              <View style={styles.loadingContainer}>
                <Icon
                  name="spinner"
                  type="evilicon"
                  color={root.secondary}
                  iconStyle={{ fontWeight: "1600", fontSize: 40 }}
                />
              </View>
            ) : (
              (tweets || tweets.length > 0) ?
                (<FlatList
                  removeClippedSubviews={false}
                  data={filteredTweets}
                  keyExtractor={(item) => item.TweetId}
                  renderItem={renderItem}
                />)
                :
                (<Text>You haven't subscribed anyone yet!</Text>)
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

  body: {
    flex: 10,
    height: "100%",
  },

  bodyTitleContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
