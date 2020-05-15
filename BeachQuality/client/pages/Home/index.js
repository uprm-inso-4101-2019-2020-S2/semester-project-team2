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
//import { MapView, PROVIDER_GOOGLE } from 'react-native-maps';

const dummyData = [
  {
    name: "Balneario/Rincon Town Beach",
    _id: "1",
    quality: 30,
    substance: "Enterococcus",
    longitude: "18.341000",
    latitude: "18.341000",
    waterTemperature: 83,
    currentWeather: 85,
    waveHeight: "0.5-1",
    testedBy: "Harry Rodriguez"
  },
  {
    name: "Steps Beach, Tres Palmas Marine Reserve ",
    _id: "2",
    quality: 10,
    substance: "Enterococcus",
    longitude: "-67.263000",
    latitude: "18.347000",
    waterTemperature: 78,
    currentWeather: "Partly_Cloudy",
    waveHeight: "1-2",
    testedBy: "Harry Rodriguez"
  }
];

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
                {dummyData.map(beach => {
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
                        />
                      </CardItem>
                      <CardItem>
                        <Left>
                          <Text> {beach.location}</Text>
                        </Left>
                        <Button bordered success>
                          <Text style={styles.btntxt}>Quality: Good</Text>
                        </Button>
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
  map: {
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
