import ChallengeOneDescription from "@/components/ChallengeOneDescription";
import ChallengeThreeDescription from "@/components/ChallengeThreeDescription";
import ChallengeTwoDescription from "@/components/ChallengeTwoDescription";
import { useSearchParams } from "expo-router/build/hooks";
import { StatusBar } from "expo-status-bar";
import { Platform, Text } from "react-native";

export default function ModalScreen() {
  const params = useSearchParams();

  const renderComponent = () => {
    switch (params.get("component")) {
      case "ChallengeOneDescription":
        return <ChallengeOneDescription />;
      case "ChallengeTwoDescription":
        return <ChallengeTwoDescription />;
      case "ChallengeThreeDescription":
        return <ChallengeThreeDescription />;
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
