import Loader from "@/components/Loader";
import { PokemonCard } from "@/components/PokemonCard";
import { ServerApi } from "@/server/ServerApi";
import { Pokemon, PokemonListResponse } from "@/types";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View, Text } from "react-native";

export default function TabOneScreen() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);

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

  const addPokemon = async () => {
    if (pokemonList.length >= 151) return;
    setLoading(true);
    try {
      const response = (await ServerApi.getPokemonList(
        pokemonList.length
      )) as unknown as PokemonListResponse;
      setPokemonList([...pokemonList, ...response.results]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

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
        onEndReachedThreshold={0.1}
        onEndReached={() => addPokemon()}
        ListFooterComponent={loading ? <Text>Loading ...</Text> : null}
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
