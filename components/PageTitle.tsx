import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  id: string | number;
  title: string;
  subtitle?: string;
  discreption?: string;
  course?: {
    id: number;
    name: string;
  };
}

const PageTitle = ({ id, title, subtitle, discreption, course }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>{title}</Text>
        {/* <Text>{subtitle}</Text>
        <Text>{discreption}</Text>
        <View style={{ backgroundColor: "red", padding: 10, borderRadius: 10 }}>
          <Text>
            {course?.id} {course?.name}
          </Text>
        </View> */}

        <Link
          href={{
            pathname: `/details/[id]`,
            params: { id: id },
          }}
        >
          {" "}
          View
        </Link>
      </View>
    </View>
  );
};

export default PageTitle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 10,
    borderColor: "black",
    elevation: 1,
    borderWidth: 1,
    marginTop: 10,
  },
});
