import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PAGES from "../pages";

const Routes = () => {
  //destructuring
  const { HOME, ABOUT, FAVORITES, SETTINGS, BEACH } = PAGES;
  const Stack = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={HOME.TITLE} component={HOME.COMPONENT} />
        <Stack.Screen name={ABOUT.TITLE} component={ABOUT.COMPONENT} />
        <Stack.Screen name={FAVORITES.TITLE} component={FAVORITES.COMPONENT} />
        <Stack.Screen name={SETTINGS.TITLE} component={SETTINGS.COMPONENT} />
        <Stack.Screen name={BEACH.TITLE} component={BEACH.COMPONENT} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
