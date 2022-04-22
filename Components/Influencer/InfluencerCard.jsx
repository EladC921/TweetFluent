import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
// global styles
import global from "../../styles/global";
import root from "../../styles/root";
// icon
import { Icon } from "react-native-elements";
// Serverside
import { TweetsService } from "../../server/TweetsService";
import { ErrorHandler } from "../../server/ErrorHandler";

const InfluencerCard = ({ navigation, influencer }) => {
  const goToInfluencerPage = () => {
    let t = new TweetsService(`/GetInfluencerTweets/${influencer.Id}`);

    // Navigate to Influencer Page with his tweets and details
    t.getAll()
      .then((res) => {
        navigation.navigate("InfluencerProfile", {
          iid: influencer.Id,
          params: { tweet: res, influ: influencer },
        });
      })
      .catch((err) => new ErrorHandler(err).log());
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={global.shadowDark}
      onPress={() => goToInfluencerPage()}
    >
      <View style={styles.wrapper}>
        {/* <View style={styles.categoryContainer}>
          <Text>
            {influencer.Categories[0]}
            {console.log(influencer.Categories)}
          </Text>
        </View> */}
        <View style={styles.leftContainer}>
          <View style={styles.imgContainer}>
            <Image
              style={[styles.img, global.shadowDark]}
              source={{ uri: influencer.ImgUrl }}
            />
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{influencer.Name}</Text>
            {
              /** Credits: <a href="https://www.flaticon.com/free-icons/verified" title="verified icons">Verified icons created by Stockio - Flaticon</a> */
              influencer.IsVerified && (
                <Image
                  source={require("../../assets/verified.png")}
                  style={styles.verified}
                />
              )
            }
          </View>
          <View style={styles.screenameContainer}>
            <Text style={styles.screenName}>@{influencer.ScreenName}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.icon}>
              <Text style={styles.iconTxt}>{influencer.FollowersCount}</Text>
              <Text style={styles.footerTxt}>Followers</Text>
            </View>
            <View style={styles.icon}>
              <Text style={styles.iconTxt}>{influencer.FollowingCount}</Text>
              <Text style={styles.footerTxt}>Following</Text>
            </View>
            <View style={styles.icon}>
              <Text style={styles.iconTxt}>0</Text>
              <Text style={styles.footerTxt}>subscribers</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InfluencerCard;

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    padding: "0.5%",
    marginTop: 5,
    display: "flex",
    backgroundColor: root.bg,
    overflow: "hidden",
    minHeight: 100,
    width: "100%",
    marginBottom: 5,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  rightContainer: {
    width: "85%",
    height: "100%",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },

  categoryContainer: {
    position: "absolute",
    top: 0,
    right: 5,
    height: 50,
    width: 40,
    zIndex: 1,
    backgroundColor: "red",
  },

  nameContainer: {
    flex: 1,
    borderTopRightRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  screenameContainer: {
    flex: 1,
    borderTopRightRadius: 20,
    marginTop: 3,
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    color: root.main,
    fontSize: 14,
    fontWeight: "bold",
  },

  screenName: {
    color: root.tertiary,
    fontSize: 12,
    marginLeft: 2,
  },

  leftContainer: {
    width: "15%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  imgContainer: {
    flex: 1,
  },

  verified: {
    width: 15,
    height: 15,
    marginLeft: 2,
  },

  img: {
    alignSelf: "flex-start",
    borderRadius: 50,
    width: 45,
    height: 45,
    marginTop: 5,
    marginRight: "10%",
    margin: "auto",
  },

  media: {
    height: 80,
    flexBasis: "auto",
    marginBottom: 5,
  },

  mediaImg: {
    width: "90%",
    height: "90%",
    resizeMode: "cover",
    margin: "auto",
    borderRadius: 10,
  },

  borderMain: {
    borderBottomWidth: 1,
    borderColor: root.secondary,
    marginRight: 5,
    marginLeft: 5,
  },

  txtContainer: {
    flex: 1,
    paddingBottom: 5,
  },

  txt: {
    flexWrap: "wrap",
    paddingTop: 5,
    paddingRight: 5,
  },

  date: {
    color: root.secondary,
    fontSize: 12,
  },

  footer: {
    flex: 1,
    padding: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomRightRadius: 15,
    display: "flex",
    flexDirection: "row",
  },

  footerTxt: {
    fontSize: 12,
    color: root.secondary,
    fontWeight: "700",
  },

  icon: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },

  iconTxt: {
    paddingLeft: 7,
    color: root.tertiary,
  },
});
