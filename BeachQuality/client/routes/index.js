import React,{useEffect,useCallback} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PAGES from "../pages";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from '../store/actions';
import { userSelectors } from '../store/selectors';
import * as Permissions from "expo-permissions"
import * as  Location  from 'expo-location';

const Routes = () => {
  const dispatch = useDispatch();
  const location = useSelector(userSelectors.selectUserLocation)
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



  const getLocationAsync =useCallback(async()=>  {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      throw new Error('Location permission not granted');
    }

    const currentLocation = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });

     dispatch(userActions.setLocation(currentLocation))



  },[dispatch,location])

  useEffect(()=>{
    getLocationAsync();
  },[dispatch])



  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">

         {/* <Stack.Screen name={SIGNIN.TITLE} component={SIGNIN.COMPONENT} /> */}

        {/* <Stack.Screen name={SIGNUP.TITLE} component={SIGNUP.COMPONENT} /> */}

        {/* <Stack.Screen name={HOME.TITLE} component={HOME.COMPONENT} /> */}

        {/* <Stack.Screen name={SETTINGS.TITLE} component={SETTINGS.COMPONENT} />*/}

        <Stack.Screen name={ABOUT.TITLE} component={ABOUT.COMPONENT} />

      {/*   <Stack.Screen name={FAVORITES.TITLE} component={FAVORITES.COMPONENT} /> */}

      {/*   <Stack.Screen name={TERMS.TITLE} component={TERMS.COMPONENT} /> */}

      {/*   <Stack.Screen name={BEACH.TITLE} component={BEACH.COMPONENT} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
