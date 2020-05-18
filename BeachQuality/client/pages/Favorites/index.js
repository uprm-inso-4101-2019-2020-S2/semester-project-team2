import React, {
  useState,
  useEffect,
  useCallback,
  Component,
  useRef
} from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Platform
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { beachSelectors, userSelectors } from "../../store/selectors";
import { beachActions, userActions } from "../../store/actions";
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
  Row,
  Spinner,
  Input,
  Item,
  Picker
} from "native-base";
import {
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons
} from "@expo/vector-icons";

import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

const Home = ({ navigation }) => {
  const location = useSelector(userSelectors.selectUserLocation);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const beaches = useSelector(beachSelectors.selectBeaches);
  const beachesLoading = useSelector(beachSelectors.selectBeachesLoading);
  const [drawer, setDrawer] = useState(null);
  const isAuthenticated = useSelector(userSelectors.selectIsAuthenticated);
  const account = useSelector(userSelectors.selectUserAccount);
  const favoriteList = account?.favoriteList || [];
  const [del, setDel] = useState(false);

  const filteredList = beaches.filter(beach =>
    favoriteList.includes(beach._id)
  );

  //This needs to be called through a dispatch

  const onDelete = useCallback(
    async id => {
      await dispatch(userActions.removeFavorite(id));
      setDel(true);
    },
    [dispatch, del]
  );

  const onSelect = useCallback(
    async beach => {
      await dispatch(beachActions.setCurrentBeach(beach));
      navigation.navigate("Beach");
    },
    [dispatch]
  );

  const onEntry = useCallback(() => {
    dispatch(userActions.fetchUserAccount());
  }, [dispatch, favoriteList]);

  useEffect(() => {
    onEntry();
  }, [dispatch, del]);

  const calcQuality = rating => {
    if (rating == "green") {
      return (
        <Content
          style={{
            color: "green",
            alignSelf: "flex-end",
            borderColor: "green",
            borderWidth: 1,
            padding: 3
          }}
        >
          <Text style={{ fontSize: 15, color: "green", textAlign: "right" }}>
            Good
          </Text>
        </Content>
      );
    } else if (rating == "yellow") {
      return (
        <Content
          style={{
            color: "#de8209",
            alignSelf: "flex-end",
            borderColor: "#de8209",
            borderWidth: 1,
            padding: 3
          }}
        >
          <Text style={{ fontSize: 15, color: "#de8209", textAlign: "right" }}>
            Medium
          </Text>
        </Content>
      );
    } else if (rating == "red") {
      return (
        <Content
          style={{
            color: "red",
            alignSelf: "flex-end",
            borderColor: "red",
            borderWidth: 1,
            padding: 3
          }}
        >
          <Text style={{ fontSize: 15, color: "red", textAlign: "right" }}>
            Bad
          </Text>
        </Content>
      );
    } else {
      return (
        <Content
          style={{
            color: "gray",
            alignSelf: "flex-end",
            borderColor: "gray",
            borderWidth: 1,
            padding: 3
          }}
        >
          <Text style={{ fontSize: 15, color: "gray", textAlign: "right" }}>
            Untested
          </Text>
        </Content>
      );
    }
  };

  // Eventually move this to its' own component
  //We need to change the image witth the data we find

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
          <Title>Favorites</Title>
        </Body>
        <Right />
      </Header>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {beachesLoading ? (
            <Spinner color="blue" />
          ) : filteredList.length > 0 ? (
            <Col style={{ marginTop: 30, marginBottom: 80 }}>
              {filteredList.map(beach => {
                return (
                  <Card style={styles.beachCard} key={beach._id}>
                    <CardItem style={styles.title}>
                      <Left>
                        <Text>{beach.name}</Text>
                      </Left>
                      <Right>
                        <Button transparent onPress={() => onDelete(beach._id)}>
                          <Text>remove</Text>
                        </Button>
                      </Right>
                    </CardItem>

                    <CardItem button onPress={() => onSelect(beach)}>
                      <Image
                        source={{
                          uri:
                            "http://cdn.c.photoshelter.com/img-get/I0000x8LjeqlKP0o/s/860/860/Playa-Buye-Cabo-Rojo-P-R-DSC0091.jpg"
                        }}
                        style={styles.beachImage}
                      />
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Text>{beach.location}</Text>
                      </Left>
                      <Content>{calcQuality(beach.quality)}</Content>
                    </CardItem>
                  </Card>
                );
              })}
            </Col>
          ) : (
            <Text style={{ fontSize: 20, marginTop: "20%" }}>
              No favorites
              <MaterialCommunityIcons
                name="heart-broken"
                size={24}
                color="black"
              />
            </Text>
          )}
        </ScrollView>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    color: "#fff"
  },
  beachCard: {
    minWidth: 250
  },
  beachImage: {
    height: 120,
    width: 200,
    flex: 1
  },
  title: {
    paddingBottom: 0
  },

  uiIcon: {
    color: Platform.OS === "ios" ? "#000000" : "#ffffff"
  },

  btntxt: {
    color: "green",
    width: 100,
    textAlign: "center"
  },

  navLinks: {
    padding: 60,
    marginRight: "40%",
    marginTop: 20
  }
});

export default Home;
