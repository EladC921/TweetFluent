import { StyleSheet, Platform } from "react-native";
export default StyleSheet.create({
  droidSafeArea: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },

  shadowLight: {
    shadowColor: "#dbdbdb",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  shadowDark: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
