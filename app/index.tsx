import UserInfo from "@/components/UserInfo";
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const Home = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    age: 30,
    role: "Admin",
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text>User Information</Text>
      <UserInfo user={user} />
      {/* <UserInfo
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
      /> */}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
