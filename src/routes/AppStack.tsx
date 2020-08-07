import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";

import Plantao from "../pages/Plantao";
import Plantoes from "../pages/Plantoes";
import Farmacias from "../pages/Farmacias";

const { Navigator, Screen } = createBottomTabNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: {
            elevation: 0,
            shadowOpacity: 0,
            height: 64,
          },
          tabStyle: {
            alignItems: "center",
            justifyContent: "center",
          },
          iconStyle: {
            flex: 0,
            width: 20,
            height: 20,
          },
          labelStyle: {
            fontFamily: "Archivo_700Bold",
            fontSize: 13,
            marginTop: 5,
          },
          inactiveBackgroundColor: "#fafafc",
          activeBackgroundColor: "#ebebf5",
          inactiveTintColor: "#c1bccc",
          activeTintColor: "#32264d",
        }}
      >
        <Screen
          options={{
            tabBarLabel: "Plantão",
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <MaterialIcons
                  name="notifications-active"
                  size={size}
                  color={focused ? "#8257e5" : color}
                />
              );
            },
          }}
          name="Plantao"
          component={Plantao}
        />

        <Screen
          options={{
            tabBarLabel: "Plantões",
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Entypo
                  name="notification"
                  size={size}
                  color={focused ? "#8257e5" : color}
                />
              );
            },
          }}
          name="Plantoes"
          component={Plantoes}
        />

        <Screen
          options={{
            tabBarLabel: "Farmácias",
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <MaterialCommunityIcons
                  name="pharmacy"
                  size={size}
                  color={focused ? "#8257e5" : color}
                />
              );
            },
          }}
          name="Farmacias"
          component={Farmacias}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
