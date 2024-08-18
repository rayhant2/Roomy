import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
  Text,
  ScrollView,
} from "react-native";
import React from "react";

const Description = () => {
  const [description, handleDescriptionChange] = React.useState("");

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.container}>
          <Image
            source={require("@/assets/images/logo_official.png")}
            style={styles.roomylogo}
          ></Image>
          <Image
            source={require("@/assets/images/step-7.png")}
            style={styles.step1}
          ></Image>
        </View>

        <Text style={styles.headertext}>Preferences</Text>

        <SafeAreaView style={styles.safeArea}>
          <Text style={styles.question}>
            Please choose your preferred style of residence:
          </Text>
          <View style={styles.container}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.resStyleButton}>
                <Text style={styles.buttonText}>Single Gendered</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.resStyleButton}>
                <Text style={styles.buttonText}>Co-ed</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.fullWidthButtonContainer}>
            <TouchableOpacity style={styles.resStyleButtonWide}>
              <Text style={styles.buttonText}>No Preference</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.question}>
            Write a short description about yourself! This will help potential
            roomates get to know you better.
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={handleDescriptionChange}
            value={description}
            keyboardType="default"
          />
          <Text style={styles.characterLimit}>0/200</Text>
        </SafeAreaView>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Description;

const styles = StyleSheet.create({
  question: {
    fontSize: 15,
    margin: 20,
    marginLeft: 10,
    marginBottom: 1,
    fontFamily: "RedHatDisplayBold",
  },
  input: {
    width: 300,
    height: 70,
    marginHorizontal: 6,
    marginVertical: 6,
    borderWidth: 1,
    padding: 5,
    borderColor: "grey",
    color: "grey",
  },
  safeArea: {
    justifyContent: "center",
    alignContent: "center",
    marginTop: 10,
    marginLeft: 30,
    marginBottom: 10,
    paddingBottom: 10,
    textAlign: "center",
  },

  headertext: {
    fontSize: 40,
    margin: 20,
    marginLeft: 50,
    fontFamily: "RedHatDisplayBold",
  },
  bodytext: {
    fontSize: 18,
    marginHorizontal: 20,
    fontFamily: "RedHatDisplayRegular",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  roomylogo: {
    width: 125,
    height: 125,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 50,
  },
  step1: {
    alignItems: "center",
    justifyContent: "center",
    width: 125,
    height: 125,
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
    fontFamily: "RedHatDisplayBold",
  },
  dateButton: {
    borderWidth: 1,
    borderColor: "#898989",
    marginTop: 20,
    width: 300,
    height: 50,
    alignSelf: "center",
    alignContent: "center",
  },
  dateText: {
    fontSize: 20,
    color: "#898989",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "RedHatDisplayBold",
  },
  resStyleButton: {
    borderWidth: 1,
    borderColor: "black",
    marginTop: 7,
    width: 160,
    height: 50,
    alignSelf: "center",
    alignContent: "center",
  },
  resStyleButtonWide: {
    borderWidth: 1,
    borderColor: "black",
    marginTop: 7,
    width: 340,
    height: 50,
    alignSelf: "center",
    alignContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  fullWidthButtonContainer: {
    width: "100%", // This ensures the button takes the full width
  },
  characterLimit: {
    textAlign: "right",
    marginRight: 30,
    color: "grey",
  },
});
