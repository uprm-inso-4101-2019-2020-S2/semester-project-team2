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
  Spinner
} from "native-base";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

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

  //This needs to be called through a dispatch

  const onEntry = useCallback(async () => {
    await dispatch(beachActions.getBeaches());
  }, [dispatch]);

  const onOpen = () => {
    drawer._root.open();
  };

  const onClose = () => {
    drawer._root.close();
  };

  const onLogout = useCallback(() => {
    //logout function
  }, [dispatch]);

  const onSelect = useCallback(
    async beach => {
      await dispatch(beachActions.setCurrentBeach(beach));
      navigation.navigate("Beach");
    },
    [dispatch]
  );

  //Get Location Info
  const getLocationAsync = useCallback(async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === "granted") {
      dispatch(userActions.toggleLocation(1));
      const currentLocation = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true
      });

      dispatch(userActions.setLocation(currentLocation));
    }
  }, [dispatch, location]);

  useEffect(() => {
    console.log(beaches);
    onEntry();
    getLocationAsync();
  }, [dispatch]);

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

  useEffect(() => {
    onEntry();
    getLocationAsync();
  }, [dispatch]);

  // Eventually move this to its' own component
  //We need to change the image witth the data we find

  return (
    <Container>
      <Drawer
        ref={e => setDrawer(e)}
        side="left"
        panOpenMask={0.25}
        tapToClose={true}
        onClose={onClose}
        content={
          <Container style={{ flex: 1, alignItems: "center" }}>
            <Container style={styles.navLinks}>
              <Button
                transparent
                onPress={() => navigation.navigate("Favorites")}
              >
                <MaterialIcons name="favorite" size={24} color="black" />
                <Text>Favorites</Text>
              </Button>
              <Button transparent onPress={() => navigation.navigate("About")}>
                <MaterialIcons name="info" size={24} color="black" />
                <Text>About</Text>
              </Button>
              <Button transparent onPress={() => navigation.navigate("Terms")}>
                <Entypo name="text-document" size={24} color="black" />
                <Text>Terms</Text>
              </Button>
              <Button transparent onPress={onLogout}>
                <Entypo name="log-out" size={24} color="black" />
                <Text>Logout</Text>
              </Button>
            </Container>
          </Container>
        }
      >
        <Header style={styles.header}>
          <Button transparent onPress={onOpen}>
            <MaterialIcons style={styles.uiIcon} name="menu" size={24} />
          </Button>

          <Body style={{ alignItems: "center" }}>
            <Title>Home</Title>
          </Body>

          <Button transparent onPress={() => navigation.navigate("Settings")}>
            <MaterialIcons style={styles.uiIcon} name="settings" size={24} />
          </Button>
        </Header>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {beachesLoading ? (
              <Spinner color="blue" />
            ) : beaches ? (
              <Col style={{ marginTop: 30 }}>
                {beaches.map(beach => {
                  return (
                    <Card style={styles.beachCard} key={beach._id}>
                      <CardItem style={styles.title}>
                        <Text>{beach.name}</Text>
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
            ) : null}
          </ScrollView>
        </View>
      </Drawer>
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
