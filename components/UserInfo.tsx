import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  company: string;
}

const UserInfo = ({ id, name, address, phone, email, company }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ID: {id}</Text>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Email: {email} </Text>
      <Text style={styles.text}>Phone No.: {phone}</Text>
      <Text style={styles.text}>Address: {address}</Text>
      <Text style={styles.text}>Company: {company}</Text>
      <Link
        href={{
          pathname: "/details/[id]",
          params: { id: id },
        }}
      >
        view Details
      </Link>
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
