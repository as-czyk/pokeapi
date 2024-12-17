import { View, Text, StyleSheet } from "react-native";

interface FavPokemonInterface {
  name: string;
  type: string;
}

export const FavPokemon = (props: FavPokemonInterface) => {
  const { name, type } = props;
  return (
    <View style={styles.pokeItem}>
      <Text style={styles.pokeTitle}>{name}</Text>
      <Text style={styles.pokeType}>{type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pokeItem: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  pokeTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pokeType: {
    fontSize: 14,
    color: "#666",
  },
});
