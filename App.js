import "react-native-gesture-handler"; // Drawer
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { Platform } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { StyleSheet, Text, View } from 'react-native';
import Settings from "./Settings";
import Home from "./Home";
import counter from "./redux/counter";
import Details from "./Details";
import News from "./News";
import { Provider, connect } from "react-redux";
import { createStore, combineReducers } from "redux";

// const { createNavigator } = Platform.select({
//   ios: { createNavigator: createBottomTabNavigator },
//   android: { createNavigator: createDrawerNavigator },
// });

store;
let store = createStore(combineReducers({ count: counter }));
let HomeContainer = connect((state) => ({ count: state.count }))(Home);
let DetailsContainer = connect((state) => ({ count: state.count }))(Details);
const Stack = createNativeStackNavigator();
// const Drawer = createNavigator();
export default App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeContainer}
            options={{
              title: "Welcome",
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen name="Details" component={DetailsContainer} />
        </Stack.Navigator>
        {/* <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list-circle" : "ios-list";
            } else if (route.name === "News") {
              iconName = focused ? "newspaper" : "newspaper-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator> */}
        {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="News" component={News} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator> */}
      </NavigationContainer>
    </Provider>
  );
};
