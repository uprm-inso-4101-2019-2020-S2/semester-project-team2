import React, { Component, useState, useEffect, useCallback } from "react";
import { StyleSheet, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { userSelectors } from "../../store/selectors";
import { userActions } from "../../store/actions";
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
  const dispatch = useDispatch();
  const location = useSelector(userSelectors.selectUserLocation);
  const [locationEnabled, setLocationEnabled] = useState(null);
  const [isEnabled, setIsEnabled] = useState(true);
  const [isEnabled1, setIsEnabled1] = useState(true);
  const [isEnabled2, setIsEnabled2] = useState(true);
  const useLocation = useSelector(userSelectors.selectToggleLocation);

  const notificationSwitch = () =>
    setIsEnabled(previousState => !previousState);

  const locationSwitch = useCallback(async () => {
    await dispatch(userActions.toggleLocation(useLocation * -1));
  });
  const darkModeSwitch = () => setIsEnabled2(previousState => !previousState);

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <MaterialIcons
              style={styles.uiIcon}
              name="keyboard-arrow-left"
              size={32}
            />
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
              <Text>Location Services</Text>
            </Body>

            <Switch onValueChange={locationSwitch} value={useLocation === 1} />
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
    color: Platform.OS === "ios" ? "#000000" : "#ffffff"
  }
});

export default Settings;
