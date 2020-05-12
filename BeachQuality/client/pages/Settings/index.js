import React, { useState } from "react";
import { View, Text, Button, Switch, StyleSheet } from "react-native";

export default function App() {

const [isEnabled, setIsEnabled] = useState(false);
const [isEnabled1, setIsEnabled1] = useState(false);
const [isEnabled2, setIsEnabled2] = useState(false);
const notifSwitch = () => setIsEnabled(previousState => !previousState);
const darkModeSwitch = () => setIsEnabled1(previousState => !previousState);
const locationSwitch = () => setIsEnabled2(previousState => !previousState);

  return (
      <View style = {styles.page}>
        <View style = {styles.navBar}>
          <Button 
          title = "backwards facing arrow" 
          icon = ""
          onPress = {() => { navigation.navigate("SOMEONE PLZX MAKE THIS WORK") }}
          />
          <Text style={styles.titleText}>Settings</Text>
        </View>
        
        
        <View style={styles.container}>
          <View style = {styles.item}>
            <Text>Notifications:</Text>
            <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={notifSwitch}
            value={isEnabled}
            />
          </View>
          <View style = {styles.item}>
            <Text>Dark Mode:</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={darkModeSwitch}
              value={isEnabled1}
              />
          </View>
          <View style = {styles.item}>
            <Text>Loctaion Services:</Text>
            <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={locationSwitch}
            value={isEnabled2}
            />
          </View>
       </View>
      </View>
  );
};

const styles = StyleSheet.create({
  page : {
    flex: 1,
  },
  navBar: {
    flex : 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-around',
    backgroundColor: "#3498DB",
    paddingTop: 15,
  },

  titleText: {
    color: 'white',fontWeight: 'bold',fontSize: 30
  },
  container: {
    flex: 7,
    paddingHorizontal: 30,
  },
  item: {
    // flex : 3,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent:'space-between',
    padding: 15,
  }
});


// export default Settings;
