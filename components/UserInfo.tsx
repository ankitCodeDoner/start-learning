import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  user: {
    name: string;
    age: number;
    phone: string;
    email: string;
    role: string;
  };
}

const UserInfo = ({ user }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {user.name}</Text>
      <Text style={styles.text}>Email: {user.email} </Text>
      <Text style={styles.text}>Phone No.: {user.phone}</Text>
      <Text style={styles.text}>Age: {user.age}</Text>
      <Text style={styles.text}>Role: {user.role}</Text>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    backgroundColor: "yellowgreen",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: "black",
  },
});
