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
import  MapView  from "react-native-maps";
import { Marker } from 'react-native-maps';

const Beach = ({ navigation }) => {
  const currentBeach = useSelector(beachSelectors.selectCurrentBeach);

  const {
    name,
    quality,
    location,
    latitude, 
    longitude

  } = currentBeach;


  const calcQuality = rating => {
    if (rating == 'green' ) {
      return (
        <Text style={{ marginTop: "2%", fontSize: 20, color: "green" }}>
          Good
        </Text>
      );
    } else if (rating == 'yellow') {
      return (
        <Text style={{ marginTop: "2%", fontSize: 20, color: "#de8209" }}>
          Medium
        </Text>
      );
    } else if (rating == 'red') {
      return (
        <Text style={{ marginTop: "2%", fontSize: 20, color: "red" }}>
          Bad
        </Text>
      );
    } else {
      return (
        <Text style={{ marginTop: "2%", fontSize: 15, color: "gray" }}>Untested</Text>
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
             style = {styles.map}
             region = {{
              latitude: parseFloat(latitude),
              longitude: parseFloat(longitude),
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
             
              }}
            >

              <Marker coordinate={{latitude:parseFloat(latitude),longitude:parseFloat(longitude)}}></Marker>
            </MapView>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.info}>Quality: {calcQuality(quality)}</Text>
            <Text style={styles.info}>Location: {location}</Text>
            
           
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
    height: 180,
  },

  image: {
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
