import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
// Components
import ChooseCategory from "./ChooseCategory";
import InfluencerCard from "../Influencer/InfluencerCard";
// styles
import root from "../../styles/root";
import global from "../../styles/global";

const Search = ({ navigation }) => {
  const [resultData, setResultData] = useState([]);
  const [loading, setLoading] = useState(false);

  const renderItem = ({ item, index }) => (
    <View style={{ marginRight: 10, marginLeft: 10 }}>
      <InfluencerCard influencer={item} navigation={navigation} key={index} />
    </View>
  );
  return (
    <View style={styles.wrapper}>
      <View style={styles.backBtnContainer}></View>
      <View style={[styles.searchContainer, global.shadowDark]}>
        <ChooseCategory setResultData={setResultData} setLoading={setLoading} />
      </View>
      <View style={styles.resultContainer}>
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
          <>
            {resultData.length > 0 && (
              <View>
                <Text style={styles.found}>
                  Found {resultData.length} Influencers
                </Text>
              </View>
            )}
            <FlatList
              data={resultData}
              keyExtractor={(item) => item.Id}
              renderItem={renderItem}
            ></FlatList>
          </>
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
    backgroundColor: root.light,
    paddingBottom: 15,
    paddingTop: "5%",
    paddingBottom: "8%",
  },

  resultContainer: {
    flex: 8,
    paddingTop: 15,
  },

  found: {
    color: root.secondary,
    fontSize: 14,
    paddingLeft: 10,
    paddingBottom: 5,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
