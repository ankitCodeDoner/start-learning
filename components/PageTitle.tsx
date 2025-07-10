import React from "react";
import { Text, View } from "react-native";

interface props {
  title: string;
}

const PageTitle = (props: props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

export default PageTitle;
