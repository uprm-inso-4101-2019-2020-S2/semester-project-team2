import React from "react";
import { View, Text } from "react-native";

const Terms = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Terms Screen</Text>
      <Text onPress={() => navigation.goBack()}>Go back</Text>
    </View>
  );
};

export default Terms;
