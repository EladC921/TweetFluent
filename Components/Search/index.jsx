import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import ChooseCategory from "./ChooseCategory";
import { tweets } from "../../mockData/tweets";

// styles
import global from "../../styles/global";
import Tweet from "../Tweet";

import InfluencerCard from "../Influencer/InfluencerCard";
const renderItem = ({ item }) => (
  <View style={{ marginRight: 10, marginLeft: 10 }}>
    <InfluencerCard influencer={item} />
  </View>
);

const Search = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.backBtnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-back-outline"
            type="ionicon"
            color="black"
            iconStyle={{ fontWeight: "1600" }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <ChooseCategory />
      </View>
      <View style={styles.resultContainer}>
        <FlatList
          data={tweets}
          keyExtractor={(item) => item.Tid}
          renderItem={renderItem}
        ></FlatList>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    display: "flex",
  },

  backBtnContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  searchContainer: {
    flex: 3,
  },
  resultContainer: {
    flex: 8,
  },
});
