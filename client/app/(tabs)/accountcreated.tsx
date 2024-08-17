import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

const EmailVer = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Image
          source={require("@/assets/images/logo_official.png")}
          style={styles.logo}
        ></Image>
        <Text style={styles.headertext}>
          CONGRATS ON CREATING YOUR ACCOUNT!!!
        </Text>
        <Text style={styles.bodytext}>
          This app is meant to help you find the perfect university roommate(s).
        </Text>
        <View style={{ height: 10 }} />
        <Text style={styles.bodytext}>
          It works similar to Tinder, where you swipe right if you like a
          certain roommate, swipe left if you don't, and swipe up if you want to
          message the person.
        </Text>
        <View style={{ height: 10 }} />
        <Text style={styles.bodytext}>
          You can view all the details by simply clicking the current card. We
          will need some basic information before you can start swiping.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>I'm Ready For A Roommate</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EmailVer;

const styles = StyleSheet.create({
  headertext: {
    fontSize: 35,
    fontWeight: "bold",
    margin: 20,
    fontFamily: "RedHatDisplayBold",
  },
  bodytext: {
    fontSize: 18,
    marginHorizontal: 20,
    fontFamily: "RedHatDisplayRegular",
  },
  logo: {
    width: 125,
    height: 125,
    alignSelf: "flex-start",
    marginTop: 20,
    marginLeft: 20,
  },
  button: {
    backgroundColor: "#FFD600",
    borderWidth: 3,
    borderColor: "black",
    marginTop: 20,
    width: 300,
    height: 50,
    alignSelf: "center",
    alignContent: "center",
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
    fontFamily: "RedHatDisplayBold",
  },
});
