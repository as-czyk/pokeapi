import { StyleSheet, View, Text } from "react-native";

export default function ChallengeTwoScreen() {
  return (
    <View style={styles.container}>
      <Text>Challenge Two</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
