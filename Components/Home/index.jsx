import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
// Global Styles
import global from "../../styles/global";
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

const Home = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.backBtnContainer}>
          <TouchableOpacity>
            <Icon
              name="chevron-back-outline"
              type="ionicon"
              color="#F8F8F8"
              iconStyle={{ fontWeight: "1600" }}
              style={styles.backBtn}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Hello User</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyTitleContainer}>
          <Text style={styles.bodyTitle}>
            Check out new tweets of your interests!
          </Text>
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
    backgroundColor: "#20232A",
    paddingTop: "10%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "5%",
    paddingLeft: "5%",
    paddingBottom: 10,
  },

  backBtnContainer: {
    flex: 1,
    alignItems: "flex-start",
  },

  backBtn: {
    width: 16,
  },

  titleContainer: {
    flex: 1,
    alignItems: "flex-end",
  },

  title: {
    color: "#F8F8F8",
    fontSize: 16,
    fontWeight: "600",
  },

  body: {
    backgroundColor: "rgba(32, 35, 39, 0.8)",
    flex: 10,
    height: "100%",
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
