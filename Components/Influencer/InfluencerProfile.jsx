import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Icon } from "react-native-elements";
import PieChartData from "./PieChartData";
import Tweet from "../Tweet";
import { useNavigation } from "@react-navigation/native";

// Serverside
import { TweetsService } from "../../server/TweetsService";
import { ErrorHandler } from "../../server/ErrorHandler";

// global styles
import global from "../../styles/global";
import root from "../../styles/root";

const InfluencerProfile = ({ route }) => {
  const navigation = useNavigation();
  const [influencerData, setInfluencerData] = useState(route.params.res);
  const [tweets, setTweets] = useState([]);
  const [categories, setCategories] = useState(
    influencerData.Categories.map((c) => {
      return { name: c.SubCategoryName, percentage: c.Percentage };
    })
  );
  const [isCategories, setIsCategories] = useState(true);

  useEffect(() => {
    // Get Tweets of Influencer
    let tweetsForUser = new TweetsService(
      `/GetInfluencerTweets/${influencerData.Id}`
    );
    tweetsForUser
      .getAll()
      .then((res) => {
        setTweets((prev) => res);
      })
      .catch((err) => new ErrorHandler(err).log());
  }, []);

  const renderPieData = () => {
    return <PieChartData categories={categories} />;
  };
  const renderTweetsData = () => {
    return (
      <View>
        {/* <TouchableOpacity activeOpacity={0.5} style={styles.goBackBtn}>
          <Text>filter</Text>
        </TouchableOpacity> */}
        <FlatList
          data={tweets}
          renderItem={renderTweets}
          keyExtractor={(item) => item.TweetId}
        />
      </View>
    );
  };

  const renderTweets = ({ item }) => {
    return <Tweet key={item.TweetId} tweet={item} />;
  };

  const goToTwitter = () => {
    Linking.canOpenURL(influencerData.ProfileUrl);
  };

  return (
    <View style={styles.influencerContainer}>
      <View style={[styles.headerContainer, global.shadowDark]}>
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
            <Text style={styles.numOfFollow}>
              {influencerData.FollowersCount}
            </Text>
            <Text style={styles.follow}>Followers</Text>
          </View>
          <View style={styles.hederSec1Child}>
            <Image
              style={[styles.profileImg, global.shadowDark]}
              source={{
                uri: influencerData.ImgUrl,
              }}
            />
          </View>
          <View style={styles.hederSec1Child}>
            <Text style={styles.numOfFollow}>
              {influencerData.FollowingCount}
            </Text>
            <Text style={styles.follow}>Following</Text>
          </View>
        </View>

        <View style={styles.hederSec2}>
          <Text style={[styles.hederSec2Child, styles.influencerName]}>
            {influencerData.Name}
          </Text>
          <Text style={[styles.hederSec2Child, styles.influencerBio]}>
            {influencerData.Bio}
          </Text>
        </View>
        <View style={styles.hederSec3}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.hederSec3Child]}
            onPress={() => goToTwitter()}
          >
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
            onPress={() => setIsCategories(true)}
            style={isCategories ? styles.nonActiveStyle : styles.activeStlye}
          >
            <Text
              style={isCategories ? styles.contentBtn : styles.activeContentBtn}
            >
              Categories
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setIsCategories(false)}
            style={isCategories ? styles.activeStlye : styles.nonActiveStyle}
          >
            <Text
              style={isCategories ? styles.activeContentBtn : styles.contentBtn}
            >
              Tweets
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          {isCategories ? renderPieData() : renderTweetsData()}
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
  },
  headerContainer: {
    flex: 1,
    display: "flex",
    paddingTop: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: root.twitter,
  },
  contentContainer: {
    flex: 1.5,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
  contentNav: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  content: {
    flex: 11,
  },
  nonActiveStyle: {
    flex: 1,
    borderTopColor: "transparent",
    backgroundColor: root.twitter,
  },
  activeStlye: {
    flex: 1,
    borderColor: root.twitter,
    borderBottomWidth: 2,
    backgroundColor: "white",
  },
  contentBtn: {
    padding: 5,
    fontSize: 17,
    textAlign: "center",
    color: "white",
  },
  activeContentBtn: {
    padding: 5,
    fontSize: 17,
    textAlign: "center",
    color: root.twitter,
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
    color: root.light,
    fontFamily: "Helvetica-Oblique",
  },
  follow: {
    textAlign: "center",
    fontSize: 17,
    fontFamily: "Helvetica-LightOblique",
    color: root.light,
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
    fontSize: 20,
    color: "white",
    fontFamily: "Helvetica-BoldOblique",
    fontWeight: "700",
  },
  influencerBio: {
    fontSize: 14,
    color: root.light,
    padding: 10,
    fontWeight: "500",
    fontFamily: "Helvetica Neue",
  },

  hederSec3: {
    flex: 1.5,
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  hederSec3Child: {
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 50,
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnsText: {
    color: root.buttonDark,
    fontSize: 15,
    textAlign: "center",
    margin: 3,
  },
});
