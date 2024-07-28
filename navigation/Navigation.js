import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let filledIconName;

            if (route.name === "Home") {
              iconName = "home-outline";
              filledIconName = "home";
            } else if (route.name === "Search") {
              iconName = "search-outline";
              filledIconName = "search";
            } else if (route.name === "Sports") {
              iconName = "trophy-outline";
              filledIconName = "trophy";
            } else if (route.name === "Portfolio") {
              iconName = "bag-handle-outline";
              filledIconName = "bag-handle";
            } else if (route.name === "Wallet") {
              iconName = "wallet-outline";
              filledIconName = "wallet";
            }

            return (
              <Ionicons
                name={focused ? filledIconName : iconName}
                size={size}
                color={focused ? "black" : color}
              />
            );
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Home} />
        <Tab.Screen name="Sports" component={Home} />
        <Tab.Screen name="Portfolio" component={Home} />
        <Tab.Screen name="Wallet" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
