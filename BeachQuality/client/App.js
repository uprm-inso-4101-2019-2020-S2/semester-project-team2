import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Routes from "./routes/";
import { Provider } from "react-redux";
import store from "./services/redux";
import * as Font from "expo-font";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  return (
    <Provider store={store}>
      <React.Fragment>
        <Routes />
      </React.Fragment>
    </Provider>
  );
}
