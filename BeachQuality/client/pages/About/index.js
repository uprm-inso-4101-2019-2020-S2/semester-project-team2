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
import { View, Text, StyleSheet, Platform, ScrollView } from "react-native";

const About = () => {
  return (
    <React.Fragment>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <MaterialIcons style = {styles.uiIcon} name="keyboard-arrow-left" size={32} />
          </Button>
        </Left>
        <Body>
          <Title>About</Title>
        </Body>
        <Right />
      </Header>
    <ScrollView>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

      <Text style={{fontSize: 40, fontWeight: "bold", textDecorationLine: "underline", padding: 10}}>Special Thanks</Text>
      <Text style={{fontSize: 25, fontWeight: "bold", padding: 8}}>Project Description:</Text>
      <Text>As part of the class of INSO4101</Text>
      <Text>("Introduction to Software Engineering")</Text>
      <Text>in UPRM, it is assigned to develop </Text>
      <Text>an application that applies the knowledge</Text>
      <Text>discussed in class. The Beach Quality Report</Text>
      <Text>application has the purpose of exposing the</Text>
      <Text>beach's quality information to users. Puerto </Text> 
      <Text>Rico is an island located in the Caribbean,</Text>
      <Text>therefore, we have beaches surrounding us</Text>
      <Text>everywhere. It is important to notify the</Text>
      <Text>citizens of Puerto Rico or the tourists</Text>
      <Text>visiting from other parts of the world</Text>
      <Text>which beaches are safe to go.</Text>

     {/* List of students that contributed, in alphabetical order */}
        <Text style={{fontSize: 25, fontWeight: "bold", padding: 8}}>Students That Contributed:</Text>
      
        <Text>Alejandro Ruiz</Text>
        <Text>Andrea Miranda</Text>
        <Text>Andrés Perez</Text>
        <Text>Anthony Zapata</Text>
        <Text>Antonio Lugo</Text>
        <Text>Brandon Fung</Text>
        <Text>Carlos Figueroa</Text>
        <Text>Carlos Machín</Text>
        <Text>Carlos M. Martínez</Text>
        <Text>Christian Acevedo</Text>
        <Text>Christian Rosado</Text>
        <Text>Cristian Rivera</Text>
        <Text>Ebdiel Román</Text>
        <Text>Emma Domínguez</Text>
        <Text>Gabriel Pantoja</Text>
        <Text>Guillermo Carrión</Text>
        <Text>Javier Maldonado</Text>
        <Text>Jean P. Lugo</Text>
        <Text>Jerry Bassat</Text>
        <Text>John Robles</Text>
        <Text>José A. Rivera</Text>
        <Text>José David Maldonado</Text>
        <Text>José L. Vera</Text>
        <Text>Joshua Matos</Text>
        <Text>Julian Ramos</Text>
        <Text>Julibert Díaz</Text>
        <Text>Kemuel O. Torres</Text>
        <Text>Kevin Burgos</Text>
        <Text>Luis F. Caro</Text>
        <Text>Marcos A. Camacho</Text>
        <Text>Naomy Morales</Text>
        <Text>Ramphis Lopez</Text>
        <Text>Rey J. Cotto</Text>
        <Text>Sergio Pérez</Text>
        <Text>Songiemar García</Text>

      <Text  style={{fontSize: 25, fontWeight: "bold", padding: 25}}> We hope you enjoy it! </Text>
     </View>
    </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  uiIcon: {
    color: Platform.OS === 'ios' ? "#000000" : "#ffffff"
  }
});

export default About;
