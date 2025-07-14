import PageTitle from "@/components/PageTitle";
import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

const pageTitles = [
  {
    title: "Home",
    subTitle: "Welcome to our home page",
    discription:
      "This is our home page, where you can find all the information you need to get started with",
    course: {
      id: 1,
      name: "Course Title",
    },
  },
  {
    title: "Home",
    subTitle: "Welcome to our home page",
    discription:
      "This is our home page, where you can find all the information you need to get started with",
    course: {
      id: 1,
      name: "Course Title",
    },
  },
];

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {pageTitles.map((item, index) => (
          <PageTitle
            title={item.title}
            subtitle={item.subTitle}
            discreption={item.discription}
            course={item.course}
          />
        ))}
      </View>
      <View>
        <Text>FLateList</Text>
      </View>
      <FlatList
        data={pageTitles}
        renderItem={({ item }) => (
          <PageTitle
            title={item.title}
            subtitle={item.subTitle}
            discreption={item.discription}
            course={item.course}
          />
        )}
        numColumns={2}
        keyExtractor={(item) => item.course.id.toString()}
        columnWrapperStyle={{ gap: 10 }}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
