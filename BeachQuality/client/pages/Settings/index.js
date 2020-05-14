import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Platform } from 'react-native';
import { useSelector } from "react-redux";
import { userSelectors } from "../../store/selectors";
import * as Font from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  List,
  ListItem,
  Switch
} from "native-base";
import * as Permissions from "expo-permissions";

const Settings = ({ navigation }) => {
  const location = useSelector(userSelectors.selectUserLocation);
  const [locationEnabled, setLocationEnabled] = useState(null);
  const [isEnabled, setIsEnabled] = useState(true);
  const [isEnabled1, setIsEnabled1] = useState(true);
  const [isEnabled2, setIsEnabled2] = useState(true);
  const notificationSwitch = () =>
    setIsEnabled(previousState => !previousState);
  const locationSwitch = () => setIsEnabled1(previousState => !previousState);
  const darkModeSwitch = () => setIsEnabled2(previousState => !previousState);

  const getStatus = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    setLocationEnabled(status);
  };

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <MaterialIcons style = {styles.uiIcon} name="keyboard-arrow-left" size={32} />
          </Button>
        </Left>
        <Body>
          <Title>Settings</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <List>
          <ListItem>
            <Body>
              <Text>Notifications</Text>
            </Body>

            <Switch onValueChange={notificationSwitch} value={isEnabled} />
          </ListItem>
          <ListItem>
            <Body>
              <Text>Location Services</Text>
            </Body>

            <Switch onValueChange={locationSwitch} value={!!location} />
          </ListItem>
          <ListItem>
            <Body>
              <Text>Dark Mode</Text>
            </Body>

            <Switch value={!isEnabled2} onValueChange={darkModeSwitch} />
          </ListItem>
          <ListItem>
            <Body>
              <Text>Version 1.0.0</Text>
            </Body>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  uiIcon: {
    color: Platform.OS === 'ios' ? "#000000" : "#ffffff"
  }
})

export default Settings;
