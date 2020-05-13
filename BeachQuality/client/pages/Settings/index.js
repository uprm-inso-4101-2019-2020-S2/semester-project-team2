import React, { Component, useState, useEffect } from "react";
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


const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const notificationSwitch = () => setIsEnabled(previousState => !previousState);
  const locationSwitch = () => setIsEnabled(previousState => !previousState);
  const darkModeSwitch = () => setIsEnabled(previousState => !previousState);


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
              value={true}
              onValueChange={notificationSwitch}
            />
          </ListItem>
          <ListItem>
            <Body>
              <Text>Location Services</Text>
            </Body>
            <Switch value={true}
            onValueChange={locationSwitch}
            />
          </ListItem>
          <ListItem>
            <Body>
              <Text>Dark Mode</Text>
            </Body>
            <Switch value={false}
            onValueChange={darkModeSwitch}
            />
          </ListItem>
        </List>
      </Content>
    </Container>
  );
  
};
export default Settings;
