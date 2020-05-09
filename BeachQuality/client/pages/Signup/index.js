import React, { useEffect, useCallback, useState } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { SIGNUP_BACKGROUND } from "../../constants";
import { Container, Content, Item, Input, Form, Button, H1 } from "native-base";
import { COLORS } from "../../constants";
import { useDispatch } from "react-redux";
import { userSelectors } from "react-redux";
import { userSelctors } from "../../store/selectors";
import { userActions } from "../../store/actions";
const Signup = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const handleSubmit = useCallback(() => {
    console.log(email, password, cPassword);
    if (email && password && cPassword) {
      if (password === cPassword)
        dispatch(userActions.registerUser({ email, password }));
      else console.log("Passwords don't match!");
    } else {
      console.log("Can't have empty fields!");
    }
  }, [dispatch, email, password, cPassword]);
  return (
    <View style={styles.container}>
      <ImageBackground source={SIGNUP_BACKGROUND} style={styles.image}>
        <Text style={styles.title}>Signup</Text>
        <Form style={styles.form}>
          <Item style={styles.input}>
            <Input
              name="email"
              placeholder="Email"
              onChangeText={text => {
                console.log(text);
                setEmail(text);
              }}
            />
          </Item>
          <Item secureTextEntry={true} style={styles.input}>
            <Input
              name="password"
              placeholder="Password"
              onChangeText={text => {
                console.log(text);
                setPassword(text);
              }}
            />
          </Item>
          <Item secureTextEntry={true} style={styles.input}>
            <Input
              name="cPassword"
              placeholder="Confirm password"
              onChangeText={text => {
                console.log(text);
                setCPassword(text);
              }}
            />
          </Item>
          <Text style={[styles.link, styles.margin]}>Terms and service</Text>
          <Text style={styles.text}>
            Already have an account? <Text style={styles.link}>Signin</Text>
          </Text>

          <Button style={styles.button} rounded success onPress={handleSubmit}>
            <Text style={styles.buttonText}>Go</Text>
          </Button>
        </Form>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    width: "100%",
    height: "100%",

    resizeMode: "cover"
  },
  title: {
    marginTop: "20%",
    color: COLORS.WHITE,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  link: {
    color: "orange"
  },

  input: {
    marginTop: 10,
    backgroundColor: COLORS.WHITE,
    minWidth: 300,
    maxWidth: 500,
    borderRadius: 50
  },
  form: {
    alignItems: "center"
  },

  button: {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    width: 100
  },
  buttonText: {
    color: COLORS.WHITE
  },
  margin: {
    marginTop: 10
  }
});

export default Signup;
