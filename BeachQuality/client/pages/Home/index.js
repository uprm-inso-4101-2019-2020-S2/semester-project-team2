import React, { useState, useEffect, useCallback, Component } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { beachSelectors } from "../../store/selectors";
import { beachActions } from "../../store/actions";
import { Card, CardItem, Body, Thumbnail, Left, Right, Col, Button, Content, Container } from "native-base";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const beaches = useSelector(beachSelectors.selectBeaches);
  const beachesLoading = useSelector(beachSelectors.selectBeachesLoading);

  //This needs to be called through a ddispatch

  useEffect(() => {
    onEntry();
  }, [dispatch]);

  const onEntry = useCallback(async () => {
    await dispatch(beachActions.getBeaches());
  }, [dispatch]);

  // Eventually move this to its' own component
  //We need to change the image witth the data we find

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.Header}>Beach Quality Report</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {beachesLoading ? (
          <Text>Loading...</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  Header: {
    backgroundColor: "#3498db",
    color: "#fff",
    paddingTop: 50,
    paddingBottom: 25,
    textAlign: "center",
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20
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
    color:"green",
    width: 100,
    textAlign: "center"
  }
});

export default Home;
