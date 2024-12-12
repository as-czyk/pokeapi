import { StyleSheet, View, Text } from "react-native";

export default function ChallengeThreeScreen() {
  return (
    <View style={styles.container}>
      <Text>Challenge Three</Text>
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
