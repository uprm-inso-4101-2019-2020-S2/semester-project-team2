import React, { useState } from "react";
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
import { View, Text, Image, StyleSheet, ScrollView, Platform } from "react-native";
import { useSelector } from "react-redux";
import { beachSelectors } from "../../store/selectors";
import { MapView, PROVIDER_GOOGLE} from 'react-native-maps';

const Beach = ({ navigation }) => {
  const currentBeach = useSelector(beachSelectors.selectCurrentBeach);
  const location = useSelector(userSelectors.selectUserLocation);

  const {
    name,
    quality,
    waterTemperature,
    currentWeather,
    waveHeight
  } = currentBeach;

  const calcQuality = rating => {
    if (rating <= 35) {
      return (
        <Text style={{ marginTop: "2%", fontSize: 20, color: "green" }}>
          Good
        </Text>
      );
    } else if (rating >= 36 && rating <= 70) {
      return (
        <Text style={{ marginTop: "2%", fontSize: 20, color: "yellow" }}>
          Medium
        </Text>
      );
    } else {
      return (
        <Text style={{ marginTop: "2%", fontSize: 20, color: "red" }}>Bad</Text>
      );
    }
  };

  return (
    <React.Fragment>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <MaterialIcons style = {styles.uiIcon} name="keyboard-arrow-left" size={32} />
          </Button>
        </Left>
        <Body>
          <Title>{name}</Title>
        </Body>
        <Right />
      </Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Content>
            <MapView
              provider = {PROVIDER_GOOGLE}
              style = {styles.map}
              region = {{
                longitude: 18.341000,
                latitude: 18.341000,
              }}
            />
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.info}>Quality: {calcQuality(quality)}</Text>
            <Text style={styles.info}>Weather: {currentWeather}°F</Text>
            <Text style={styles.info}>
              Water temperature: {waterTemperature}°F
            </Text>
            <Text style={styles.info}>Wave height: {waveHeight}ft.</Text>
            <Button style={styles.button}>
              <Text style={styles.buttonTxt}>Get Directions</Text>
            </Button>
            <Button style={styles.button}>
              <Text style={styles.buttonTxt}>Add To Favorites</Text>
            </Button>
          </Content>
        </View>
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: "10%",
    flex: 1,
    alignItems: "center"
  },

  map: {
    width: 300,
    height: 180
  },

  uiIcon: {
    color: Platform.OS === 'ios' ? "#000000" : "#ffffff"
  }, 

  title: {
    marginTop: "10%",
    maxWidth: 300,
    fontSize: 30,
    fontWeight: "bold"
  },

  green: {
    color: "green"
  },
  yellow: {
    color: "yellow"
  },
  red: { color: "red" },
  info: {
    fontSize: 15,
    marginTop: "2%"
  },
  button: {
    marginTop: "3%",
    justifyContent: "center"
  },
  buttonTxt: {
    color: "white"
  }
});

export default Beach;
