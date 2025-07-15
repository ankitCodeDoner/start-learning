import { userData } from "@/components/data";
import UserInfo from "@/components/UserInfo";
import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text>User List</Text>
      </View>
      <FlatList
        data={userData}
        renderItem={({ item }) => (
          <UserInfo
            id={item.id}
            name={item.name}
            address={item.address.city}
            phone={item.phone}
            email={item.email}
            company={item.company.name}
          />
        )}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{ gap: 10 }}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
