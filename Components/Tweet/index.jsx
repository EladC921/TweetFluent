import { StyleSheet, Text, View, Image } from "react-native";
import React, { memo, useEffect } from "react";
// global styles
import global from "../../styles/global";
import root from "../../styles/root";
// icon
import { Icon } from "react-native-elements";

/**
 * A Tweet component - looks like a tweet from Twitter, reusable.
 * @param {*} props Tweet object (id, user(screen name, name, profile pic), is verified, text, created at, media?)
 */
const Tweet = (props) => {
  const tweet = props.tweet;

  // format .NET DateTime to JS Date
  const formatToJSDate = (d) => {
    let date = new Date(d).toISOString().split("T")[0];
    let time = new Date(d).toISOString().split("T")[1].split("Z")[0];
    let dateVar = date.split("-");
    let timeVar = time.split(":");

    return new Date(
      dateVar[0],
      dateVar[1] - 1,
      dateVar[2],
      timeVar[0],
      timeVar[1],
      timeVar[2]
    );
  };

  // date formatting method (tweet created at)
  const dateFormat = (date) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const currentDate = new Date();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let day = date.getDate();
    // check if last 24 hours
    if (Math.abs(currentDate - date) < 60 * 60 * 24 * 1000) {
      let hour = date.getHours();
      return ` ‧ ${Math.abs(currentDate.getHours() - hour)}h`;
    }
    // check if last year
    if (currentDate.getFullYear() === year) {
      return ` ‧ ${month} ${day}`;
    }

    // else include the year too
    return ` ‧ ${month} ${day}, ${year}`;
  };

  const createdAtStr = dateFormat(formatToJSDate(tweet.CreatedAt));

  const imgUrl = {
    uri: !!tweet.Influ.ImgUrl
      ? tweet.Influ.ImgUrl
      : `https://img.buzzfeed.com/buzzfeed-static/static/2017-03/31/13/enhanced/buzzfeed-prod-fastlane-02/original-grid-image-14740-1490981786-4.jpg?crop=590:590;5,0`,
  };
  const mediaUrl = {
    uri: tweet.MediaUrl,
  };

  
  return (
    <View style={global.shadowDark}>
      <View style={styles.wrapper}>
        <View style={styles.categoryContainer}></View>
        <View style={styles.leftContainer}>
          <View style={styles.imgContainer}>
            <Image style={[styles.img, global.shadowDark]} source={imgUrl} />
          </View>
          <View style={styles.categorySubContainer}>
            <Text
              style={[
                styles.category,
                { letterSpacing: 5, color: root.category[tweet.SubCategory] },
              ]}
            >
              {tweet.SubCategory}
            </Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{tweet.Influ.Name}</Text>
            {
              /** Credits: <a href="https://www.flaticon.com/free-icons/verified" title="verified icons">Verified icons created by Stockio - Flaticon</a> */
              tweet.Influ.IsVerified && (
                <Image
                  source={require("../../assets/verified.png")}
                  style={styles.verified}
                />
              )
            }
            <Text style={styles.screenName}> @{tweet.Influ.ScreenName}</Text>
            <Text style={styles.date}>{createdAtStr}</Text>
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.txt}>{tweet.Txt}</Text>
          </View>
          {!!tweet.MediaUrl && (
            <View style={styles.media}>
              <Image style={styles.mediaImg} source={mediaUrl} />
            </View>
          )}
          <View style={styles.footer}>
            <View style={styles.icon}>
              <Icon
                name="comment"
                type="evilicon"
                color={root.secondary}
                iconStyle={{ fontWeight: "1600", fontSize: 25 }}
              />
              <Text style={styles.iconTxt}>{tweet.RepliesCount}</Text>
            </View>
            <View style={styles.icon}>
              <Icon
                name="retweet"
                type="evilicon"
                color={root.secondary}
                iconStyle={{ fontWeight: "1600", fontSize: 25 }}
              />
              <Text style={styles.iconTxt}>{tweet.RetweetCount}</Text>
            </View>
            <View style={styles.icon}>
              <Icon
                name="heart"
                type="evilicon"
                color={root.secondary}
                iconStyle={{ fontWeight: "1600", fontSize: 25 }}
              />
              <Text style={styles.iconTxt}>{tweet.LikesCount}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(Tweet);

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    padding: "0.5%",
    display: "flex",
    backgroundColor: root.bg,
    overflow: "hidden",
    minHeight: 150,
    width: "100%",
    marginBottom: 5,
    marginTop: 5,
    // borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  categoryContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "500%",
    zIndex: 1,
    backgroundColor: "transparent",
    flex: 1,
  },

  categorySubContainer: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "500%",
    height: "100%",
  },

  category: {
    position: "relative",
    transform: [{ rotate: "-90deg" }],
    color: "black",
    fontFamily: "HiraginoSans-W3",
    fontSize: 12,
    fontWeight: "600",
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
    position: "relative",
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
    fontFamily: "Helvetica Neue",
    fontSize: 13.5,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
  },

  date: {
    color: root.tertiary,
    fontSize: 12,
  },

  footer: {
    flex: 1,
    paddingRight: 15,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomRightRadius: 15,
  },

  icon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  iconTxt: {
    paddingLeft: 8,
    color: root.tertiary,
  },
});
