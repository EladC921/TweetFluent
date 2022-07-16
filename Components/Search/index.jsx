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
const renderItem = ({ item ,index}) => (
  <View style={{ marginRight: 10, marginLeft: 10 }}>
    <InfluencerCard influencer={item} key={index} />
  </View>
);

const Search = ({ navigation }) => {
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    console.log(resultData);
  }, [resultData]);
  return (
    <View style={styles.wrapper}>
      <View style={[styles.searchContainer, global.shadowDark]}>
        <ChooseCategory setResultData={setResultData} />
      </View>
      <View style={styles.resultContainer}>
        {resultData.length === 0 ? (
          <Text style={styles.noResTxt}>No result</Text>
        ) : (
          <FlatList
            data={resultData}
            keyExtractor={(item) => item.Tid}
            renderItem={renderItem}
          ></FlatList>
        )}
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
    marginTop: 30,
    backgroundColor: root.light,
    paddingBottom: 15,
  },

  resultContainer: {
    flex: 8,
    paddingTop: 15,
  },
  noResTxt: {
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
});
