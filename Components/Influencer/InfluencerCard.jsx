import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
// global styles
import global from "../../styles/global";
import root from "../../styles/root";
// icon
import { Icon } from "react-native-elements";

const InfluencerCard = (props) => {
  const influencer = props.influencer;

  const imgUrl = {
    uri: `https://img.buzzfeed.com/buzzfeed-static/static/2017-03/31/13/enhanced/buzzfeed-prod-fastlane-02/original-grid-image-14740-1490981786-4.jpg?crop=590:590;5,0`,
  };

  return (
    <View style={global.shadowDark}>
      <View style={styles.wrapper}>
        <View style={styles.leftContainer}>
          <View style={styles.imgContainer}>
            <Image style={[styles.img, global.shadowDark]} source={imgUrl} />
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{influencer.User.Name}</Text>
            {
              /** Credits: <a href="https://www.flaticon.com/free-icons/verified" title="verified icons">Verified icons created by Stockio - Flaticon</a> */
              influencer.User.IsVerified && (
                <Image
                  source={require("../../assets/verified.png")}
                  style={styles.verified}
                />
              )
            }
          </View>
          <View style={styles.screenameContainer}>
            <Text style={styles.screenName}>
              {" "}
              @{influencer.User.ScreenName}
            </Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.icon}>
              <Text style={styles.footerTxt}>Followers</Text>
              <Text style={styles.iconTxt}>{influencer.RepliesCount}</Text>
            </View>
            <View style={styles.icon}>
              <Text style={styles.footerTxt}>Following</Text>
              <Text style={styles.iconTxt}>{influencer.RepliesCount}</Text>
            </View>
            <View style={styles.icon}>
              <Text style={styles.footerTxt}>Subs</Text>
              <Text style={styles.iconTxt}>{influencer.LikesCount}</Text>
            </View>
            <Text style={styles.icon}></Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InfluencerCard;

const styles = StyleSheet.create({
  wrapper: {
    padding: "0.5%",
    display: "flex",
    backgroundColor: root.bg,
    overflow: "hidden",
    minHeight: 100,
    width: "100%",
    marginBottom: 10,
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
    paddingTop: 40,
    paddingRight: 15,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomRightRadius: 15,
  },

  footerTxt: {
    fontSize: 12,
    color: root.secondary,
    fontWeight: "700",
  },

  icon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  iconTxt: {
    paddingLeft: 7,
    color: root.tertiary,
  },
});
