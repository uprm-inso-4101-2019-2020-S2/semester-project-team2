import React, { Component, useState, useEffect } from "react";
import {useSelector} from 'react-redux';
import{userSelectors} from '../../store/selectors';
import * as Font from 'expo-font';
import{
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
import * as Permissions from "expo-permissions"


const Settings = () => {
  const location = useSelector(userSelectors.selectUserLocation);
  const [locationEnabled, setLocationEnabled] = useState(null)
  const [isEnabled, setIsEnabled] = useState(true);
  const [isEnabled1, setIsEnabled1] = useState(true);
  const [isEnabled2, setIsEnabled2] = useState(true);
  const notificationSwitch = () => setIsEnabled(previousState => !previousState);
  const locationSwitch = () => setIsEnabled1(previousState => !previousState);
  const darkModeSwitch = () => setIsEnabled2(previousState => !previousState);

  const getStatus = async()=>{
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    setLocationEnabled(status)
  }

  useEffect(()=>{
    getStatus()
  },[])

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="ios-arrow-back" />
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
            <Switch
              onValueChange={notificationSwitch}
              value={isEnabled}
            />
          </ListItem>
          <ListItem>
            <Body>
              <Text>Location Services</Text>
            </Body>
            <Switch 
            onValueChange={locationSwitch}
            value={!!location}
            />
          </ListItem>
          <ListItem>
            <Body>
              <Text>Dark Mode</Text>
            </Body>
            <Switch 
            value={!isEnabled2}
            onValueChange={darkModeSwitch}
            />
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
export default Settings;
