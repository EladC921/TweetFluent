import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Search = ({navigation}) => {
  return (
    <View style={styles.backBtnContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon
        name="chevron-back-outline"
        type="ionicon"
        color="#F8F8F8"
        iconStyle={{ fontWeight: "1600" }}
        style={styles.backBtn}
      />
    </TouchableOpacity>
  </View>
  )
}

export default Search

const styles = StyleSheet.create({
    backBtnContainer: {
        flex: 1,
        alignItems: "flex-start",
      },
    
      backBtn: {
        width: 16,
      },
})