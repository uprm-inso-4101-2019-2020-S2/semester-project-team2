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
import { FontAwesome } from "@expo/vector-icons";
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
  Item
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
  const [filt, setFilt] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const isAuthenticated = useSelector(userSelectors.selectIsAuthenticated);
  const favoriteList =
    useSelector(userSelectors.selectUserAccount)?.favoriteList || [];

  const list = filteredList.length === 0 ? beaches : filteredList;

  const onSearch = () => {
    if (beaches)
      setFilteredList(
        beaches.filter(beach =>
          beach.name.toLowerCase().includes(filt.toLowerCase())
        )
      );
  };

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
    dispatch(userActions.logoutUser());
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
    if (!isAuthenticated) navigation.goBack();
    onEntry();
    getLocationAsync();
  }, [dispatch, isAuthenticated]);

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
          <Container style={{ flex: 1 }}>
            <Container style={styles.navLinks}>
              <Button
                style={styles.link}
                transparent
                onPress={() => {
                  onClose();
                  navigation.navigate("Favorites");
                }}
              >
                <MaterialIcons name="favorite" size={24} color="black" />
                <Text>Favorites</Text>
              </Button>
              <Button
                style={styles.link}
                transparent
                onPress={() => {
                  onClose();
                  navigation.navigate("About");
                }}
              >
                <MaterialIcons name="info" size={24} color="black" />
                <Text>About</Text>
              </Button>
              <Button
                style={styles.link}
                transparent
                onPress={() => {
                  onClose();
                  navigation.navigate("Terms");
                }}
              >
                <Entypo name="text-document" size={24} color="black" />
                <Text>Terms</Text>
              </Button>
              <Button style={styles.link} transparent onPress={onLogout}>
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

        <Item
          style={{
            alignSelf: "center",
            marginTop: "2%"
          }}
        >
          <Input
            onChangeText={text => {
              setFilt(text);
              onSearch();
            }}
          />

          <MaterialIcons
            name="search"
            size={24}
            color="black"
            style={{ marginRight: "3%" }}
          />
        </Item>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {beachesLoading ? (
              <Spinner color="blue" />
            ) : beaches ? (
              <Col style={{ marginTop: 30, marginBottom: 300 }}>
                {list.map(beach => {
                  return (
                    <Card style={styles.beachCard} key={beach._id}>
                      <CardItem style={styles.title}>
                        <Left>
                          <Text>
                            {beach.name.length > 15
                              ? `${beach.name.substring(0, 15)}...`
                              : beach.name}
                          </Text>
                        </Left>
                        <Right>
                          {favoriteList.includes(beach._id) ? (
                            <MaterialIcons
                              name="favorite"
                              size={24}
                              color="red"
                            />
                          ) : null}
                        </Right>
                      </CardItem>

                      <CardItem button onPress={() => onSelect(beach)}>
                        <Image
                          source={{
                            uri: beach.image
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
    display: "flex",
    padding: 60,
    marginTop: 20
  },
  link: {
    width: 100,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default Home;
