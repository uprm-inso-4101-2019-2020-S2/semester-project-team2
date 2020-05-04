import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { beachSelectors } from "../../store/selectors";
import { beachActions } from "../../store/actions";

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

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.Header}>Beach Quality Report</Text>
      <ScrollView>
        {beachesLoading ? (
          <Text>Loading...</Text>
        ) : beaches ? (
          <React.Fragment>
            {beaches.map(beach => {
              return (
                <View style={styles.beachCard} key={beach._id}>
                  <Text>Playa: {beach.name}</Text>
                  <Text>Location: {beach.location}</Text>
                </View>
              );
            })}
          </React.Fragment>
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
    fontSize: 20,
    marginBottom: 50
  },
  beachCard: {
    width: 200,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});

export default Home;
