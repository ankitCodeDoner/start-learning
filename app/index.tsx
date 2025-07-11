import UserInfo from "@/components/UserInfo";
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text>User Information</Text>
      <UserInfo
        name="Ankit"
        email="abc@gmail.com"
        phone="1234567890"
        age={22}
        role="Admin"
      />
      <UserInfo
        name="Ajay"
        email="ajy@gmail.com"
        phone="12898967890"
        age={20}
        role="employee"
      />
      <UserInfo
        name="Vishwas"
        email="vishu@gmail.com"
        phone="8989898989"
        age={22}
        role="super admin"
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
