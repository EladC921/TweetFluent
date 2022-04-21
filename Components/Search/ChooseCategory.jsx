import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { React, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { InfluencerService } from "../../server/InfluencerService";
import { ErrorHandler } from "../../server/ErrorHandler";

//style
import root from "../../styles/root";

const ChooseCategory = (props) => {
  const CategoryType = [
    { label: "Whisky", value: "whisky" },
    { label: "Wine", value: "wine" },
    { label: "Makeup", value: "makeup" },
    { label: "Computers", value: "copmuter" },
    { label: "Cocktails", value: "cocktails" },
    { label: "Cellular", value: "cellular" },
    { label: "Cameras", value: "cameras" },
  ];
  const Country = [{ label: "Any", value: "any" }];

  const [currentCategoryVal, setCurrentCategoryVal] = useState(
    CategoryType[0].value
  );
  const [currentCountryVal, setCurrentCountryVal] = useState(Country[0].val);

  const [isFocusCategory, setIsFocusCategory] = useState(false);
  const [isFocusCountry, setIsFocusCountry] = useState(false);

  const searchInfluencers = () => {
    // Get  Influencers in subCategory
    let influencers = new InfluencerService(`/GetInfluByCategory/`);
    influencers
      .get(currentCategoryVal)
      .then((res) => {
        console.log(res);
        props.setResultData(res);
      })
      .catch((err) => new ErrorHandler(err).log());
  };

  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <Text style={{ fontWeight: "600", paddingTop: 30 }}>
          Choose Category
        </Text>
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
        <Text style={{ fontWeight: "600", paddingTop: 30 }}>
          Choose Country
        </Text>
        <Dropdown
          style={[styles.dropdown, isFocusCountry && { borderColor: "blue" }]}
          inputSearchStyle={styles.inputSearchStyle}
          data={Country}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocusCountry ? currentCountryVal : "select"}
          value={currentCountryVal}
          onFocus={() => setIsFocusCountry(true)}
          onBlur={() => setIsFocusCountry(false)}
          onChange={(item) => {
            setCurrentCountryVal(item.value);
            setIsFocusCountry(false);
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
  },
  dropdownContainer: {
    flex: 2,
    display: "flex",
    justifyContent: "center",
    paddingLeft: 15,
  },
  btnContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  dropdown: {
    width: "100%",
    height: 50,
    paddingHorizontal: 8,
    borderRadius: 20,
    borderWidth: 2,
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
  inputSearchStyle: {
    backgroundColor: "white",
  },
});
