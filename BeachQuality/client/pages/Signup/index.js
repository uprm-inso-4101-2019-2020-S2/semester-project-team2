import React, { useEffect, useCallback, useState } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { SIGNUP_BACKGROUND } from "../../constants";
import { Container, Content, Item, Input, Form, Button, H1 } from "native-base";
import { COLORS } from "../../constants";
import { useDispatch } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    err: "",
    email: "",
    password: "",
    cPassword: ""
  });
  const handleChange = e => {
    setValues({
      ...values,
      err: false,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = useCallback(() => {
    console.log(values);
    const { email, password, cPassword } = values;
    if (!!email && !!password && !!cPassword) {
      if (password === cPassword) console.log(values, "success");
      else console.log("Passwords don't match!");
    } else {
      console.log("Can't have empty fields!");
    }
  });
  return (
    <View style={styles.container}>
      <ImageBackground source={SIGNUP_BACKGROUND} style={styles.image}>
        <Text style={styles.title}>Signup</Text>
        <Form style={styles.form}>
          <Item style={styles.input}>
            <Input name="email" placeholder="Email" onChange={handleChange} />
          </Item>
          <Item style={styles.input}>
            <Input
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Item>
          <Item style={styles.input}>
            <Input
              name="cPassword"
              placeholder="Confirm password"
              onChange={handleChange}
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
    marginTop: 150,
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
    width: 100,

  },
  buttonText: {
    color: COLORS.WHITE
  },
  margin: {
    marginTop: 10
  }
});

export default Signup;
