import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { tweets } from "../../mockData/tweets";
import InfluencerCard from "../Influencer/InfluencerCard";
import root from "../../styles/root";

const renderItem = ({ item }) => (
  <View style={{ marginRight: 10, marginLeft: 10 }}>
    <InfluencerCard influencer={item} />
  </View>
);

const UserProfile = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
            }}
          />

          <Text style={styles.name}>John Doe </Text>
          <Text style={styles.userInfo}>Following: </Text>
          <Text style={styles.userInfo}>influencers you follow: </Text>
          {/** Search Bar */}
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.results}>
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
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
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
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#fff",
    marginBottom: 10,
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
  },
  body: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: root.light,
    flex: 3,
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
});
