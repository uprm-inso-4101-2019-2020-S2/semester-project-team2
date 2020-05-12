import React, { Component, useState } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, List, ListItem, Switch } from 'native-base';
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='ios-arrow-back' />
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
              // onValueChange={toggleSwitch}
              />
            </ListItem>
            <ListItem>
              <Body>
                <Text>Location Services</Text>
              </Body>
              <Switch value={true} />
            </ListItem>
            <ListItem>
              <Body>
                <Text>Dark Mode</Text>
              </Body>
              <Switch value={false} />
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}