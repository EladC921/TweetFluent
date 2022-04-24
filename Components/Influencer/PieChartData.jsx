import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { PieChart, BarChart } from "react-native-gifted-charts";
// styles
import root from "../../styles/root.json";

const PieChartData = (props) => {
  const [data, setData] = useState([
    {
      value: 100,
      color: root.category.other,
      topLabelComponent: () => (
        <Text
          style={{
            color: root.category.other,
            fontSize: 8,
            marginBottom: 6,
            fontWeight: "600",
            position: "absolute",
            zIndex: 1,
            width: "150%",
            textAlign: "center",
          }}
        >
          100%
        </Text>
      ),
    },
  ]);
  useEffect(() => {
    if (props.categories.length > 1) {
      setData([]);
      props.categories.map((c) => {
        setData((prev) => [
          ...prev,
          {
            value: c.percentage,
            color: categoriesColors[c.name],
            frontColor: categoriesColors[c.name],
            topLabelComponent: () => (
              <Text
                style={{
                  color: categoriesColors[c.name],
                  fontSize: 8,
                  marginBottom: 6,
                  fontWeight: "600",
                  position: "absolute",
                  zIndex: 1,
                  width: "150%",
                  textAlign: "center",
                }}
              >
                {c.percentage}%
              </Text>
            ),
          },
        ]);
      });
    }
  }, []);

  const categoriesColors = {
    camera: "#F94144",
    cellular: "#dc87dd",
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
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.pieContainer}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
              marginLeft: 2,
              flexDirection: "row",
            }}
          >
            <PieChart
              labelsPosition="inward"
              textColor={root.main}
              radius={80}
              textBackgroundColor="transparent"
              textSize={18}
              showTextBackground
              textBackgroundRadius={50}
              data={data}
            />
            <View style={styles.pieInfoContainer}>
              <View style={styles.row}>
                {renderColorInfo("camera", categoriesColors["camera"])}
                {renderColorInfo("cellular", categoriesColors["cellular"])}
              </View>
              <View style={styles.row}>
                {renderColorInfo("computer", categoriesColors["computer"])}
                {renderColorInfo("makeup", categoriesColors["makeup"])}
              </View>
              <View style={styles.row}>
                {renderColorInfo("cocktail", categoriesColors["cocktail"])}
                {renderColorInfo("whisky", categoriesColors["whisky"])}
              </View>
              <View style={styles.row}>
                {renderColorInfo("wine", categoriesColors["wine"])}
                {renderColorInfo("other", categoriesColors["other"])}
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
              marginRight: 2,
            }}
          >
            <BarChart
              spacing={10}
              width={300}
              height={150}
              barWidth={22}
              noOfSections={4}
              yAxisThickness={0}
              xAxisThickness={0}
              data={data}
              frontColor={root.category.other}
              maxValue={100}
            />
          </View>
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
    flex: 5,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  pieInfoContainer: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
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
    borderRadius: 5,
    width: "20%",
  },
  catInfoTxt: {
    flex: 1,
    color: root.secondary,
    fontWeight: "500",
  },
});
