import UseStateHook from "@/components/hooks/UseStateHook";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <UseStateHook />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
