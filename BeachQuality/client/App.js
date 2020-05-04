import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import axios from 'axios';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://10.0.0.27:4000/api/beach')
      .then(response => setData(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  const displayBeaches = () => {
    // const beaches = data;
    if (isLoading) {
      return (<Text>Loading Beaches...</Text>);
    } else {
      // console.log(data)
      return data.map(beach => {
        return (
          <View style={styles.beachCard} key={beach._id}>
            <Text>Playa: {beach.name}</Text>
            <Text>Location: {beach.location}</Text>
          </View>
        )

      });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Header}>Beach Quality Report</Text>
      <ScrollView>
        { displayBeaches() }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Header: {
    backgroundColor: '#3498db',
    color: '#fff',
    paddingTop: 50,
    paddingBottom: 25,
    textAlign: 'center',
    width: '100%',
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20
  },
  beachCard: {
    width: 200,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
