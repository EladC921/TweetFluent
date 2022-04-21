import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Icon } from "react-native-elements";
import ChooseCategory from "./ChooseCategory";

// styles
import root from "../../styles/root";
import global from "../../styles/global";

import InfluencerCard from "../Influencer/InfluencerCard";
const renderItem = ({ item }) => (
  <View style={{ marginRight: 10, marginLeft: 10 }}>
    {console.log(item)}
    <InfluencerCard influencer={item} />
  </View>
);

const Search = ({ navigation }) => {
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    console.log(resultData);
  }, [resultData]);
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
      <View style={[styles.searchContainer, global.shadowDark]}>
        <ChooseCategory setResultData={setResultData} />
      </View>
      <View style={styles.resultContainer}>
        <FlatList
          data={resultData}
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
    backgroundColor: root.twitter,
  },
  searchContainer: {
    flex: 3,
    backgroundColor: root.light,
    paddingBottom: 15,
  },

  resultContainer: {
    flex: 8,
    paddingTop: 15,
  },
});
