import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import ChooseCategory from "./ChooseCategory";
// styles
import global from "../../styles/global";

const Search = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.backBtnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-back-outline"
            type="ionicon"
            color="#000"
            iconStyle={{ fontWeight: "1600", fontSize: 40 }}
            style={styles.backBtn}
          />
        </TouchableOpacity>
      </View>
      <View style={{ height: "100%", width: "100%" }}>
        <ChooseCategory />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
  },

  backBtnContainer: {
    position: "absolute",
    top: "5%",
    left: "5%",
    zIndex: 1,
    borderRadius: 50,
  },

  backBtn: {
    width: "100%",
  },
});
