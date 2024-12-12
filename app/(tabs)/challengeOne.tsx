import { StyleSheet, Text, View } from "react-native";

export default function ChallengeOneScreen() {
  return (
    <View style={styles.container}>
      <Text>Happy Coding ... 🤖</Text>
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
