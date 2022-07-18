import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { React, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { InfluencerService } from "../../server/InfluencerService";
import { ErrorHandler } from "../../server/ErrorHandler";

//style
import root from "../../styles/root";

const ChooseCategory = (props) => {
  const CategoryType = [
    { label: "Select item", value: "-1" },
    { label: "Whisky", value: "whisky" },
    { label: "Wine", value: "wine" },
    { label: "Makeup", value: "makeup" },
    { label: "Computers", value: "computer" },
    { label: "Cocktails", value: "cocktail" },
    { label: "Cellular", value: "cellular" },
    { label: "Cameras", value: "camera" },
  ];

  const [currentCategoryVal, setCurrentCategoryVal] = useState(
    CategoryType[0].value
  );

  const [isFocusCategory, setIsFocusCategory] = useState(false);

  const searchInfluencers = () => {
    props.setLoading(true);

    // validation
    if (currentCategoryVal === "-1") {
      alert("Please select a category");
      return;
    }

    // Get  Influencers in subCategory
    let influencers = new InfluencerService(`/GetInfluByCategory/`);
    influencers
      .get(currentCategoryVal)
      .then((res) => {
        props.setLoading(false);
        props.setResultData(res);
      })
      .catch((err) => new ErrorHandler(err).log());
  };

  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <Text style={styles.inputLabel}>Choose Category</Text>
        <Dropdown
          style={[
            styles.dropdown,
            isFocusCategory && { borderColor: root.twitter },
          ]}
          inputSearchStyle={styles.inputSearchStyle}
          data={CategoryType}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocusCategory ? currentCategoryVal : "select"}
          value={currentCategoryVal}
          onFocus={() => setIsFocusCategory(true)}
          onBlur={() => setIsFocusCategory(false)}
          onChange={(item) => {
            setCurrentCategoryVal(item.value);
            setIsFocusCategory(false);
          }}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.searchBtn]}
          onPress={() => searchInfluencers()}
        >
          <Text style={styles.btnsText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChooseCategory;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  dropdownContainer: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 15,
  },

  btnContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  inputLabel: {
    color: root.secondary,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 5,
  },

  dropdown: {
    width: "100%",
    height: 45,
    paddingHorizontal: 8,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: root.tertiary,
    backgroundColor: root.bg,
  },

  selectedTextStyle: {
    color: "#676767",
    fontWeight: "600",
  },

  searchBtn: {
    backgroundColor: root.twitter,
    borderRadius: 20,
    width: "80%",
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  btnsText: {
    color: "white",
    fontSize: 17,
  },

  inputSearchStyle: {},
});
