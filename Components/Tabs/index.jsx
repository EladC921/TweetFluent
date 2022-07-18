import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
// React Native Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Components
import Home from "../Home";
import Search from "../Search";
import Profile from "../User/UserProfile";
// External
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

function Tabs({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Search"
        children={() => <Search navigation={navigation} />}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon
                name="search"
                type="ionicon"
                iconStyle={styles.iconsStyle}
              />
            ) : (
              <Icon
                name="search-outline"
                type="ionicon"
                iconStyle={styles.iconsStyle}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Home"
        children={() => <Home navigation={navigation} />}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon
                name="home"
                type="ionicon"
                iconStyle={styles.homeIconStyle}
              />
            ) : (
              <Icon
                name="home-outline"
                type="ionicon"
                iconStyle={styles.homeIconStyle}
              />
            ),
          // tabBarButton: (props) => <CoustomTabBTN {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        children={() => <Profile navigation={navigation} />}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon
                name="person"
                type="ionicon"
                iconStyle={styles.iconsStyle}
              />
            ) : (
              <Icon
                name="person-outline"
                type="ionicon"
                iconStyle={styles.iconsStyle}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;

const styles = StyleSheet.create({});
