import React, { useState, useCallback, useEffect } from "react";
import { Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { userActions } from "../../store/actions";
import { useDispatch } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
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
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
  Linking
} from "react-native";
import { useSelector } from "react-redux";
import { beachSelectors, userSelectors } from "../../store/selectors";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const Beach = ({ navigation }) => {
  const dispatch = useDispatch();
  const currentBeach = useSelector(beachSelectors.selectCurrentBeach);
  const userLocation = useSelector(userSelectors.selectUserLocation);
  const useLocation = useSelector(userSelectors.selectToggleLocation);
  const favoriteList = useSelector(userSelectors.selectUserAccount)
    .favoriteList;

  const [addFave, setAddFave] = useState(false);

  const { _id, name, quality, location, latitude, longitude } = currentBeach;

  const onEntry = useCallback(async () => {
    return await dispatch(userActions.fetchUserAccount());
  }, [dispatch, favoriteList]);

  useEffect(() => {
    console.log("getting called");
    onEntry();
  }, [dispatch, addFave]);

  const onAddFav = useCallback(async () => {
    await dispatch(userActions.addFavorite(_id));
    setAddFave(true);
  }, [dispatch]);
  const calcQuality = rating => {
    if (rating == "green") {
      return (
        <Text style={{ marginTop: "2%", fontSize: 20, color: "green" }}>
          Good
        </Text>
      );
    } else if (rating == "yellow") {
      return (
        <Text style={{ marginTop: "2%", fontSize: 20, color: "#de8209" }}>
          Medium
        </Text>
      );
    } else if (rating == "red") {
      return (
        <Text style={{ marginTop: "2%", fontSize: 20, color: "red" }}>Bad</Text>
      );
    } else {
      return (
        <Text style={{ marginTop: "2%", fontSize: 15, color: "gray" }}>
          Untested
        </Text>
      );
    }
  };

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
          <Title>{name}</Title>
        </Body>
        <Right />
      </Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Content>
            <MapView
              style={styles.map}
              region={{
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude),
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            >
              <Marker
                coordinate={{
                  latitude: parseFloat(latitude),
                  longitude: parseFloat(longitude)
                }}
              ></Marker>
            </MapView>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.info}>Quality: {calcQuality(quality)}</Text>
            <Text style={styles.info}>Location: {location}</Text>

            <Button
              style={styles.button}
              onPress={() => {
                if (useLocation === 1) {
                  Platform.OS === "ios"
                    ? Linking.openURL(
                        `maps://app?saddr=${userLocation.latitude}+${useLocation.longitude}&daddr=${latitude}+${longitude}`
                      )
                    : Linking.openURL(
                        `google.navigation:q=${latitude}+${longitude}`
                      );
                } else {
                  Alert.alert(
                    "Location disable",
                    "your location is disabled. You can turn it back on in the settings."
                  );
                }
              }}
            >
              <Text style={styles.buttonTxt}>Get Directions</Text>
            </Button>
            {!favoriteList.includes(_id) ? (
              <Button style={styles.button} onPress={onAddFav}>
                <Text style={styles.buttonTxt}>Add To Favorites</Text>
              </Button>
            ) : (
              <Card style={{ backgroundColor: "pink", marginTop: "3%" }}>
                <CardItem
                  style={{ alignSelf: "center", backgroundColor: "pink" }}
                >
                  <FontAwesome
                    name="heart"
                    size={24}
                    style={{ marginRight: "2%" }}
                    color="red"
                  />
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Added
                  </Text>
                </CardItem>
              </Card>
            )}
          </Content>
        </View>
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: "10%",
    flex: 1,
    alignItems: "center"
  },

  map: {
    width: 300,
    height: 180
  },

  image: {
    width: 300,
    height: 180
  },

  uiIcon: {
    color: Platform.OS === "ios" ? "#000000" : "#ffffff"
  },

  title: {
    marginTop: "10%",
    maxWidth: 300,
    fontSize: 30,
    fontWeight: "bold"
  },

  green: {
    color: "green"
  },
  yellow: {
    color: "yellow"
  },
  red: { color: "red" },
  info: {
    fontSize: 15,
    marginTop: "2%"
  },
  button: {
    marginTop: "3%",
    justifyContent: "center"
  },
  buttonTxt: {
    color: "white",
    fontWeight: "bold"
  }
});

export default Beach;
