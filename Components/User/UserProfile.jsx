import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity,TextInput } from "react-native";
import { tweets } from "../../mockData/tweets";
import InfluencerCard from "../Influencer/InfluencerCard";
import root from "../../styles/root";
import { Icon } from "react-native-elements";
const renderItem = ({ item }) => (
  <View style={{ marginRight: 10, marginLeft: 10 }}>
    <InfluencerCard influencer={item} />
  </View>
);

const UserProfile = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
      <Icon
              name="gear"
              type="evilicon"
              color={root.secondary}
              iconStyle={{ fontWeight: "1600", fontSize: 40 }}
            />  
      </View>
      <View style={styles.header}>
        
        <View style={styles.headerContent}>
  
          <Image
            style={styles.avatar}
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
            }}
          />

          
        <Icon
              style={[styles.plus]}
              name="plus"
              type="evilicon"
              color={root.secondary}
              iconStyle={{ fontWeight: "1600", fontSize: 40 }}
            /> 
          <Text style={styles.name}>John Doe </Text>
          <Text style={styles.userInfo}>Following: </Text>
          <Text style={styles.userInfo}>influencers you follow: </Text>
          {/** Search Bar */}
   
        </View>
      </View>
          <View style={styles.mid}>
          <View style={styles.btnContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.searchBtn]}
         /** onPress={() => searchInfluencers()} */
        >
          <Text style={styles.btnsText}>Search</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        
      />
     
          </View>
      <View style={styles.body}>
      
        <View style={styles.results}>
          {tweets.length > 0 && (
            <FlatList
              data={tweets}
              keyExtractor={(item) => item.Tid}
              renderItem={renderItem}
            ></FlatList>
          )}
        </View>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: root.bg,
    flex: 1,
  },
  header: {
    backgroundColor: root.bg,
    flex: 2,
  },
  headerContent: {
    
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#fff",
    
  },
  top:{
    alignItems:"flex-end",
    padding:15,
    
  },

  name: {
    fontSize: 22,
    color: root.main,
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: root.secondary,
    fontWeight: "600",
  },
  btnsText:{
    
  },

  plus:{
    marginLeft:100,
    justifyContent:"center",
    alignItems:"center",
    
    
  
  },
  btnsText:{
    color:"white"
  },

  searchBtn: {
    backgroundColor: root.twitter,
    borderRadius: 20,
    width: "100%",
    height: 30,
    
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft:30
  },
  body: {
   
    backgroundColor: root.light,
    flex: 3,
    alignItems: "center",
  },
  mid: {
    paddingTop:20,
   width:"100%",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:30,
    flex:0.5,
  },
  item: {
    flexDirection: "row",
  },
  input: {
    height: 40,
    width:"60%",
    borderColor:root.secondary,
    borderWidth: 1,
    padding: 10,
    marginRight:30,
    borderRadius: 20,
  },

  results: {
    position: "relative",
    top: -10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    height: "100%",
  },
});
