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

const Budget = () => {
  const [amount, onChangeAmount] = React.useState("");

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.container}>
          <Image
            source={require("@/assets/images/logo_official.png")}
            style={styles.roomylogo}
          ></Image>
          <Image
            source={require("@/assets/images/step-6.png")}
            style={styles.step1}
          ></Image>
        </View>

        <Text style={styles.headertext}>Your Ideal {"\n"}Budget</Text>

        <SafeAreaView style={styles.safeArea}>
          <Text style={styles.question}>
            How much are you looking to pay for residence {"\n"}(per month)?
          </Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeAmount}
              value={amount}
              placeholder="Ex) $500, $600, etc."
              keyboardType="numeric"
              placeholderTextColor="grey"
            />
          </View>
        </SafeAreaView>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Budget;

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
    padding: 10,
    borderColor: "grey",
    color: "grey",
  },
  inputWrapper: {
    marginVertical: 5,
  },
  safeArea: {
    justifyContent: "center",
    alignContent: "center",
    marginTop: 10,
    marginLeft: 50,
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
});
