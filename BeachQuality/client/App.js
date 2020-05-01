import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    callBackendAPI()
      .then(res => {
        setData(res);
      })
      .catch(err => console.log(err));
  }, [data]);

  const callBackendAPI = async () => {
    const response = await fetch("/express_backend");

    const body = await response.json();

    if (response.status === 200) {
      return body;
    }

    throw Error(body.message);
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{data?.express}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
