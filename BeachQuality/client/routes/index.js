import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PAGES from "../pages";

const Routes = () => {
  //destructuring
  const { HOME, ABOUT, FAVORITES, SETTINGS, BEACH, SIGNUP } = PAGES;
  const Stack = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SIGNUP.TITLE} component={SIGNUP.COMPONENT} />
        <Stack.Screen name={HOME.TITLE} component={HOME.COMPONENT} />
        <Stack.Screen name={ABOUT.TITLE} component={ABOUT.COMPONENT} />
        <Stack.Screen name={FAVORITES.TITLE} component={FAVORITES.COMPONENT} />
        <Stack.Screen name={SETTINGS.TITLE} component={SETTINGS.COMPONENT} />

        {false ? (
          <Stack.Screen name={BEACH.TITLE} component={BEACH.COMPONENT} />
        ) : null}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
