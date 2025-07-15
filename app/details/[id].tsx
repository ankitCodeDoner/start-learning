import { userData } from "@/components/data";
import UserInfo from "@/components/UserInfo";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const singleUser = userData.find((user) => user.id === Number(id));
  console.log(singleUser);

  const { name, email, phone, company, address } = singleUser;
  return (
    <View style={styles.container}>
      <Text>Details of user {id} </Text>

      <UserInfo
        id={Number(id)}
        name={name}
        address={address.city}
        phone={phone}
        email={email}
        company={company.name}
      />
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
