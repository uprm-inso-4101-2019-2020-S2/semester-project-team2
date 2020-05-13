import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Card,
  CardItem,
  Body,
  Thumbnail,
  Left,
  Right,
  Col,
  Button,
  Content,
  Container,
  Header,
  Title,
  Drawer,
  Row
} from "native-base";
import { View, Text } from "react-native";

const Beach = ({ navigation }) => {
  return (
    <React.Fragment>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-left" size={32} color="white" />
          </Button>
        </Left>
        <Body>
          <Title></Title>
        </Body>
        <Right />
      </Header>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Beach Screen</Text>
      </View>
    </React.Fragment>
  );
};

export default Beach;
