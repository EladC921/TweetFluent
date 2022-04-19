import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import PieChartData from "./PieChartData";
import Tweet from "../Tweet";
import { tweets } from "../../mockData/tweets";
import { useNavigation } from "@react-navigation/native";

const InfluencerProfile = (props) => {
  const navigation = useNavigation();

  const [isData, setIsData] = useState(true);
  const tweetsData = [];
  const renderPieData = () => {
    return (
      <PieChartData
        categories={[
          { name: "wine", percentage: 33.2 },
          { name: "camera", percentage: 33.2 },
          { name: "makeup", percentage: 33.6 },
        ]}
      />
    );
  };
  const renderTweetsData = () => {
    return (
      <View>
        <TouchableOpacity activeOpacity={0.5} style={styles.goBackBtn}>
          <Text>filter</Text>
        </TouchableOpacity>
        <FlatList
          data={tweets}
          renderItem={renderTweets}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };

  const renderTweets = ({ item }) => {
    return <Tweet tweet={item} />;
  };


  return (
    <View style={styles.influencerContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerNav}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.goBackBtn}
            onPress={() => {
              if (navigation.canGoBack()) {
                navigation.goBack();
              }
            }}
          >
            <Icon
              name="chevron-back-outline"
              type="ionicon"
              color="white"
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
          <TouchableOpacity activeOpacity={0.5} style={[styles.hederSec3Child]}>
            <Text style={styles.btnsText}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.hederSec3Child}>
            <Text style={styles.btnsText}>Subscribe</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.contentNav}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.showPieBtn}
            onPress={() => setIsData(true)}
          >
            <Text style={styles.contentBtn}>Data</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.showTweetsBtn}
            onPress={() => setIsData(false)}
          >
            <Text style={styles.contentBtn}>Tweets</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          {isData ? renderPieData() : renderTweetsData()}
        </View>
      </View>
    </View>
  );
};

export default InfluencerProfile;

const styles = StyleSheet.create({
  influencerContainer: {
    height: "100%",
    display: "flex",
    backgroundColor: "#1D9BF0",
  },
  headerContainer: {
    flex: 1,
    display: "flex",
    paddingTop: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1.3,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
  contentNav: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#EFF3F4",
  },
  content: {
    flex: 11,
  },
  showPieBtn: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
  },
  showTweetsBtn: { flex: 1, borderColor: "gray", borderWidth: 1 },
  contentBtn: {
    fontSize: 17,
    textAlign: "center",
  },
  headerNav: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
    fontSize: 20,
    color: "white",
  },
  follow: {
    textAlign: "center",
    fontSize: 17,
    color: "white",
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
  },
  hederSec2Child: {
    textAlign: "center",
  },
  influencerName: {
    color: "white",
    fontSize: 20,
  },
  influencerBio: {
    color: "white",
    fontSize: 16,
  },

  hederSec3: {
    flex: 1.5,
    display: "flex",
    flexDirection: "row",
    width: "70%",
  },
  hederSec3Child: {
    textAlign: "center",

    flex: 1,
  },
  btnsText: {
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    fontSize: 16,
    textAlign: "center",
    margin: 3,
  },
});
