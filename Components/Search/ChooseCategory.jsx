import { StyleSheet, Picker, Text, View, Button, FlatList } from "react-native";
import { React, useState } from "react";
import { tweets } from "../../mockData/tweets";
// Components
import Tweet from "../Tweet";
import InfluencerCard from "../Influencer/InfluencerCard";
const renderItem = ({ item }) => (
  <View style={{ marginRight: 10, marginLeft: 10 }}>
    <InfluencerCard influencer={item} />
  </View>
);
const ChooseCategory = () => {
  const [value, setValue] = useState(null);
  const CategoryType = [
    { label: "Whisky", value: "whisky" },
    { label: "Wine", value: "wine" },
    { label: "Makeup", value: "makeup" },
    { label: "Computers", value: "copmuter" },
    { label: "Cocktails", value: "cocktails" },
    { label: "Cellular", value: "cellular" },
    { label: "Cameras", value: "cameras" },
  ];
  const Country = [
    { label: "Israel", value: "isr" },
    { label: "United States", value: "us" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <Text style={{ fontWeight: "600", paddingTop: 30 }}>
          Choose Category
        </Text>
        {/** Dropdown */}
        <Text style={{ fontWeight: "600", paddingTop: 30 }}>
          Choose Country
        </Text>
        {/** Dropdown */}
        <View style={styles.searchBut}>
          <Button
            color="blue"
            title="Search"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
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
  );
};

export default ChooseCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
  results: {
    flex: 3,
    position: "relative",
    top: -10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "90%",
  },
  searchBut: {
    paddingTop: 10,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  dropdown: {
    width: "70%",
    height: 50,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
  selectedTextStyle: {
    color: "#676767",
    fontWeight: "600",
  },
  dropdownContainer: {
    flex: 2,
    position: "relative",
    top: -10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "90%",
  },
});
