import React, { useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PAGES from "../pages";
import Spinner from "react-native-loading-spinner-overlay";
import { useSelector } from "react-redux";
import { beachSelectors, userSelectors } from "../store/selectors";

const Routes = () => {
  //destructuring
  const {
    HOME,
    ABOUT,
    FAVORITES,
    SETTINGS,
    BEACH,
    SIGNUP,
    SIGNIN,
    TERMS
  } = PAGES;
  const Stack = createStackNavigator();

  const beachesLoading = useSelector(beachSelectors.selectBeachesLoading);
  const userLoading = useSelector(userSelectors.selectUserLoading);

  return (
    <React.Fragment>
      <Spinner visible={beachesLoading || userLoading} />
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name={SIGNIN.TITLE} component={SIGNIN.COMPONENT} />

          <Stack.Screen name={SIGNUP.TITLE} component={SIGNUP.COMPONENT} />

          <Stack.Screen name={HOME.TITLE} component={HOME.COMPONENT} />

          <Stack.Screen name={SETTINGS.TITLE} component={SETTINGS.COMPONENT} />

          <Stack.Screen name={ABOUT.TITLE} component={ABOUT.COMPONENT} />

          <Stack.Screen
            name={FAVORITES.TITLE}
            component={FAVORITES.COMPONENT}
          />

          <Stack.Screen name={TERMS.TITLE} component={TERMS.COMPONENT} />

          <Stack.Screen name={BEACH.TITLE} component={BEACH.COMPONENT} />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
};

export default Routes;
