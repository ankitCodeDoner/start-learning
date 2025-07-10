import PageTitle from "@/components/PageTitle";
import React from "react";
import { Image, StyleSheet, useColorScheme, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home = () => {
  const colorScheme = useColorScheme();

  const theamStyle =
    colorScheme === "light" ? styles.textLight : styles.textDark;

  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        padding: insets.top,
      }}
    >
      <PageTitle title="Home" />
      <PageTitle title="About" />
      <PageTitle title="Contact" />
      <PageTitle title="Service" />
      <PageTitle title="Privacy policy" />
      <PageTitle title="Term and Condition" />

      <Image
        source={require("../assets/images/images.jpg")}
        style={{ width: "100%" }}
        resizeMode="contain"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  textLight: {
    color: "red",
  },
  textDark: {
    color: "green",
  },
});
