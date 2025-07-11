import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  name: string;
  age: number;
  phone: string;
  email: string;
  role: string;
}

const UserInfo = ({ name, age, phone, email, role }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Email: {email} </Text>
      <Text style={styles.text}>Phone No.: {phone}</Text>
      <Text style={styles.text}>Age: {age}</Text>
      <Text style={styles.text}>Role: {role}</Text>
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
