import Loader from "@/components/Loader";
import { PokemonCard } from "@/components/PokemonCard";
import { ServerApi } from "@/server/ServerApi";
import { Pokemon, PokemonListResponse } from "@/types";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";

export default function TabOneScreen() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const get = async () => {
      try {
        const response =
          (await ServerApi.getPokemonList()) as unknown as PokemonListResponse;
        setPokemonList(response?.results);
      } catch (e) {
        console.error(e);
      }
    };

    get();
  }, []);

  if (pokemonList.length === 0)
    return (
      <View style={styles.container}>
        <Loader />
      </View>
    );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={pokemonList}
        renderItem={({ item }) => <PokemonCard name={item.name} />}
        keyExtractor={(item) => item.name}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    alignItems: "center",
  },
});
