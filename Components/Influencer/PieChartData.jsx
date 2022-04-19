import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { PieChart } from "react-native-gifted-charts";

const PieChartData = (props) => {
  const [pieData, setPieData] = useState([
    {
      value: 100,
      color: "#F94144",
      text: "other 100%",
    },
  ]);
  useEffect(() => {
    setPieData((prev) => []);
    props.categories.map((c) =>
      setPieData((prev) => [
        ...prev,
        {
          value: c.percentage,
          color: categoriesColors[c.name],
          text: c.percentage + "%",
        },
      ])
    );
  }, []);

  const categoriesColors = {
    camera: "#F94144",
    cellular: "#F3722C",
    cocktail: "#90BE6D",
    computer: "#F8961E",
    makeup: "#277DA1",
    other: "#F9C74F",
    whisky: "#43AA8B",
    wine: "#4D908E",
  };

  const renderColorInfo = (catName, color) => {
    return (
      <View style={styles.categoryContainer}>
        <View style={[styles.colorBox, { backgroundColor: color }]}></View>
        <Text style={styles.catInfoTxt}>{catName}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.pieContainer}>
        <PieChart
          showText
          textColor="black"
          innerRadius={60}
          showTextBackground
          textBackgroundColor="transparent"
          textBackgroundRadius={22}
          data={pieData}
        />
      </View>

      <View style={styles.pieInfoContainer}>
        <View style={styles.row}>
          {renderColorInfo("camera", categoriesColors["camera"])}
          {renderColorInfo("cellular", categoriesColors["cellular"])}
          {renderColorInfo("computer", categoriesColors["computer"])}
          {renderColorInfo("makeup", categoriesColors["makeup"])}
        </View>
        <View style={styles.row}>
          {renderColorInfo("cocktail", categoriesColors["cocktail"])}
          {renderColorInfo("whisky", categoriesColors["whisky"])}
          {renderColorInfo("wine", categoriesColors["wine"])}
          {renderColorInfo("other", categoriesColors["other"])}
        </View>
      </View>
    </View>
  );
};

export default PieChartData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pieContainer: {
    flex: 3,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pieInfoContainer: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  categoryContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  colorBox: {
    flex: 1,
    width: "20%",
  },
  catInfoTxt: {
    flex: 1,
  },
});
