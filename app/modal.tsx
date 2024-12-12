import ChallengeOneDescription from "@/components/ChallengeOneDescription";
import { useSearchParams } from "expo-router/build/hooks";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text } from "react-native";

export default function ModalScreen() {
  const params = useSearchParams();

  const renderComponent = () => {
    switch (params.get("component")) {
      case "ChallengeOneDescription":
        return <ChallengeOneDescription />;
      default:
        return <Text>No Modal Provided</Text>;
    }
  };

  return (
    <>
      {renderComponent()}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
