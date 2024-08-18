import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Button from "@/components/ButtonAccountCreated";

export default function TabTwoScreen() {
  const navigation = useNavigation();

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.body}>
        <ThemedView style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/logo_official.png")}
            style={styles.logo}
          />
        </ThemedView>
        <ThemedText style={[styles.textMain, { textAlign: "left" }]}>
          CONGRATS ON CREATING YOUR ACCOUNT!!!
        </ThemedText>

        <ThemedText style={styles.bodytext}>
          This app is meant to help you find the perfect university roommate(s).
          It works similar to Tinder, where you swipe right if you like a
          certian roommate, swipe left if you don't, and swipe up if you want to
          message the person. You can view all the details by simply clicking
          the current card. We will need some basic information before you can
          start swiping.
        </ThemedText>

        <Button
          title="I'm ready for a roommate"
          onPress={() => navigation.navigate("step1")}
          style={styles.button}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  body: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  logoContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  textMain: {
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
    fontSize: 36,
    lineHeight: 48,
    fontWeight: 800,
    fontFamily: "RedHat-Display",
  },
  button: {
    // Add any specific styles for the button here if needed
  },
  groupPicture: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 20,
  },
  bodytext: {
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "RedHat-Display",
  },
});
