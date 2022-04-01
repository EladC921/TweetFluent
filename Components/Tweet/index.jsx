import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
// global styles
import global from "../../styles/global";
import root from "../../styles/root";
// icon
import { Icon } from "react-native-elements";

const Tweet = (props) => {
  const tweet = props.tweet;

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

  const createdAtStr = dateFormat(tweet.CreatedAt);
  const imgUrl = {
    uri: `https://img.buzzfeed.com/buzzfeed-static/static/2017-03/31/13/enhanced/buzzfeed-prod-fastlane-02/original-grid-image-14740-1490981786-4.jpg?crop=590:590;5,0`,
  };
  const mediaUrl = {
    uri: tweet.Media,
  };
  return (
    <View style={[styles.wrapper, global.shadowLight]}>
      <View style={styles.leftContainer}>
        <View style={styles.imgContainer}>
          <Image style={[styles.img, global.shadowDark]} source={imgUrl} />
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{tweet.User.Name}</Text>
          {
            /** Credits: <a href="https://www.flaticon.com/free-icons/verified" title="verified icons">Verified icons created by Stockio - Flaticon</a> */
            tweet.User.IsVerified && (
              <Image
                source={require("../../assets/verified.png")}
                style={styles.verified}
              />
            )
          }
          <Text style={styles.screenName}> @{tweet.User.ScreenName}</Text>
          <Text style={styles.date}>{createdAtStr}</Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>{tweet.Txt}</Text>
        </View>
        {!!tweet.Media && (
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
            <Text style={styles.iconTxt}>{tweet.RetweetsCount}</Text>
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
          <Text style={styles.icon}>
            <Icon
              name="external-link"
              type="evilicon"
              color={root.secondary}
              iconStyle={{ fontWeight: "1600", fontSize: 25 }}
            />
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Tweet;

const styles = StyleSheet.create({
  wrapper: {
    padding: "0.5%",
    display: "flex",
    backgroundColor: "#f2efe3",
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

  name: {
    color: root.main,
    fontSize: 14,
    fontWeight: "bold",
  },

  screenName: {
    color: root.secondary,
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
    color: root.secondary,
  },
});
