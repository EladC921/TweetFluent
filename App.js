import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, DrawerLayoutAndroid, SafeAreaView } from 'react-native';
// React Native Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Components
import Login from './Components/Login';
import Tabs from './Components/Tabs';
import ChooseCategory from './Components/Search/ChooseCategory';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={Tabs}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
         <Stack.Screen
          name="Search"
          component={ChooseCategory}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
