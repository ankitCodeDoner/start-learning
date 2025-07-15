import PageTitle from "@/components/PageTitle";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
const pageTitles = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "About",
  },
];

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const courseData = pageTitles?.find((item) => Number(item.id) == Number(id));
  console.log(courseData, "courseData");
  return (
    <View style={styles.container}>
      <Text>Details of user {id} </Text>
      {courseData && <PageTitle id={2} title={courseData?.title} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
