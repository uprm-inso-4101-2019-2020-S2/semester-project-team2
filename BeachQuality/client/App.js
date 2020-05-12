import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Routes from "./routes/";
import { Provider } from "react-redux";
import store from "./services/redux";
import * as Font from "expo-font";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect( async() => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    }).then(() => {setIsLoading(false);});
  });
  
  return (
    <Provider store={store}>
      <React.Fragment>
        <Routes />
      </React.Fragment>
    </Provider>
  );
}
