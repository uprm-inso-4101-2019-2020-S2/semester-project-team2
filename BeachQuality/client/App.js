import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Spinner } from "native-base";
import Routes from "./routes/";
import { Provider } from "react-redux";
import store from "./services/redux";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    }).then(() => {
      setIsLoading(false);
    });
  });

  if (!isLoading) {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Routes />
        </React.Fragment>
      </Provider>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Spinner color="blue" />
      </View>
    );
  }
}
