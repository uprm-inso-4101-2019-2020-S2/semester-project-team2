import React from "react";
import { StyleSheet, Platform } from "react-native";
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
import { View, Text, ScrollView } from "react-native";

const Terms = ({ navigation }) => {
  return (
    <React.Fragment>
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
          <Title>Terms</Title>
        </Body>
        <Right />
      </Header>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ScrollView>
          <Card>
            <Text style={styles.terms}>
              Please read these terms of service terms of service carefully
              before using The Beach Quality Report:
            </Text>
            <Text style={styles.sections}> Conditions of Use</Text>
            <Text style={styles.paragraphs}>
              We will provide their services to you, which are subject to the
              conditions stated below in this document. Every time you visit
              this website, use its services or make a purchase, you accept the
              following conditions. This is why we urge you to read them
              carefully.
            </Text>
            <Text style={styles.sections}>Privacy Policy</Text>
            <Text style={styles.paragraphs}>
              Before you continue using our app we advise you to read our
              privacy policy regarding our user data collection. It will help
              you better understand our practices. Copyright Content published
              on this app (digital downloads, images, texts, graphics, logos) is
              the property of The Beach Quality Report and/or its content
              creators and protected by international copyright laws. The entire
              compilation of the content found on this App is the exclusive
              property of The Beach Quality Report, with copyright authorship
              for this compilation by The Beach Quality Report.
            </Text>
            <Text style={styles.sections}>Communications</Text>
            <Text style={styles.paragraphs}>
              The entire communication with us is electronic. Every time you
              send us an email or visit our App, you are going to be
              communicating with us. You hereby consent to receive
              communications from us. If you subscribe to the news on our App,
              you are going to receive regular emails from us. We will continue
              to communicate with you by posting news and notices on our website
              and by sending you emails. You also agree that all notices,
              disclosures, agreements and other communications we provide to you
              electronically meet the legal requirements that such
              communications be in writing.
            </Text>
            <Text style={styles.sections}>Applicable Law </Text>
            <Text style={styles.paragraphs}>
              By visiting this website, you agree that the laws of Puerto Rico,
              without regard to principles of conflict laws, will govern these
              terms of service, or any dispute of any sort that might come
              between The Beach Quality Report and you, or its business partners
              and associates.
            </Text>
            <Text style={styles.ssections}> Disputes</Text>
            <Text>
              Any dispute related in any way to your visit to this website or to
              products you purchase from us shall be arbitrated by state or
              federal court in Puerto Rico and you consent to exclusive
              jurisdiction and venue of such courts.
            </Text>
            <Text style={styles.sections}>Comments, Reviews, and Emails</Text>
            <Text style={styles.paragraphs}>
              Visitors may post content as long as it is not obscene, illegal,
              defamatory, threatening, infringing of intellectual property
              rights, invasive of privacy or injurious in any other way to third
              parties. Content has to be free of software viruses, political
              campaign, and commercial solicitation. We reserve all rights (but
              not the obligation) to remove and/or edit such content. When you
              post your content, you grant The Beach Quality Report
              non-exclusive, royalty-free and irrevocable right to use,
              reproduce, publish, modify such content throughout the world in
              any media.
            </Text>
            <Text style={styles.sections}>License and Site Access</Text>
            <Text style={styles.paragraphs}>
              We grant you a limited license to access and make personal use of
              this app. You are not allowed to download or modify it. This may
              be done only with written consent from us.
            </Text>
            <Text style={styles.sections}>User Account</Text>
            <Text style={styles.paragraphs}>
              If you are an owner of an account on this website, you are solely
              responsible for maintaining the confidentiality of your private
              user details (username and password). You are responsible for all
              activities that occur under your account or password. We reserve
              all rights to terminate accounts, edit or remove content and
              cancel orders in their sole discretion.
            </Text>
          </Card>
        </ScrollView>
      </View>
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  uiIcon: {
    color: Platform.OS === "ios" ? "#000000" : "#ffffff"
  },
  terms: {
    fontWeight: "bold",
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "5%"
  },
  sections: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: "2%",
    marginBottom: "2%",
    marginLeft: "5%"
  },
  paragraphs: { marginLeft: "5%", marginRight: "5%" }
});

export default Terms;
