import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

const InfluencerProfile = () => {
  return (
    <View style={styles.influencerContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerNav}>
          <TouchableOpacity activeOpacity={0.5} style={styles.goBackBtn}>
            <Icon
              name="chevron-back-outline"
              type="ionicon"
              color="black"
              iconStyle={{ fontWeight: "1600" }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.hederSec1}>
          <View style={styles.hederSec1Child}>
            <Text style={styles.numOfFollow}>2300</Text>
            <Text style={styles.follow}>Followers</Text>
          </View>
          <View style={styles.hederSec1Child}>
            <Image
              style={styles.profileImg}
              source={{
                uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1420692388.1641168000",
              }}
            />
          </View>
          <View style={styles.hederSec1Child}>
            <Text style={styles.numOfFollow}>2300</Text>
            <Text style={styles.follow}>Following</Text>
          </View>
        </View>
        <View style={styles.hederSec2}>
          <Text style={[styles.hederSec2Child, styles.influencerName]}>
            Name
          </Text>
          <Text style={[styles.hederSec2Child, styles.influencerBio]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            modi placeat, fugiat, obcaecati iusto a fugit maiores, ipsa quas
            odit sed quae cumque velit atque! Obcaecati non nesciunt culpa iure!
          </Text>
        </View>
        <View style={styles.hederSec3}>
          <Text style={styles.hederSec3Child}>Twitter</Text>
          <Text style={styles.hederSec3Child}>Subscribe</Text>
        </View>
      </View>
      <View style={styles.contantContainer}>
        <Text>contednt</Text>
      </View>
    </View>
  );
};

export default InfluencerProfile;

const styles = StyleSheet.create({
  influencerContainer: {
    height: "100%",
    display: "flex",
  },
  headerContainer: {
    flex: 1.2,
    display: "flex",
    paddingTop: "10%",
  },
  contantContainer: {
    flex: 1,
    backgroundColor: "green",
  },

  headerNav: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingLeft: "5%",
  },
  goBackBtn: {},
  hederSec1: {
    flex: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  hederSec1Child: {
    flex: 1,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  numOfFollow: {
    textAlign: "center",
    fontSize: 19,
  },
  follow: {
    textAlign: "center",
    fontSize: 16,
  },
  profileImg: {
    // resizeMode: "contain",
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  hederSec2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 3.2,
    backgroundColor: "yellow",
  },
  hederSec2Child: {
    textAlign: "center",
  },
  influencerName: {},
  influencerBio: {},

  hederSec3: {
    flex: 1.5,
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "row",
  },
  hederSec3Child: {
    borderColor: "black",
    borderWidth: 2,
    textAlign: "center",
    flex: 1,
  },
});
