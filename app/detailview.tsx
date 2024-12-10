import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function PokemonDetailsView() {
  const { data } = useLocalSearchParams();
  const pokemon = JSON.parse(data as unknown as string);

  return (
    <SafeAreaView>
      <Text>{pokemon.name}</Text>
    </SafeAreaView>
  );
}
