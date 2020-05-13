import React, {
  useState,
  useEffect,
  useCallback,
  Component,
  useRef
} from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { beachSelectors } from "../../store/selectors";
import { beachActions } from "../../store/actions";
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

const Home = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const beaches = useSelector(beachSelectors.selectBeaches);
  const beachesLoading = useSelector(beachSelectors.selectBeachesLoading);
  const [drawer, setDrawer] = useState(null);

  //This needs to be called through a ddispatch

  useEffect(() => {
    onEntry();
  }, [dispatch]);

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
            <MaterialIcons name="menu" size={24} color="white" />
          </Button>

          <Body style={{ alignItems: "center" }}>
            <Title>Home</Title>
          </Body>

          <Button transparent onPress={() => navigation.navigate("Settings")}>
            <MaterialIcons name="settings" size={24} color="white" />
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

                      <CardItem>
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
  beachImage: {
    height: 120,
    width: 200,
    flex: 1
  },
  title: {
    paddingBottom: 0
  },
  btntxt: {
    color: "green",
    width: 100,
    textAlign: "center"
  },
  navLinks: {
    marginRight: "40%",
    marginTop: 20
  }
});

export default Home;
